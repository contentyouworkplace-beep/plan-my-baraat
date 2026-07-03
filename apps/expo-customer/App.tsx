import React, { useState, useEffect } from "react";
import { 
  StyleSheet, 
  Text, 
  View, 
  ScrollView, 
  TouchableOpacity, 
  TextInput, 
  SafeAreaView, 
  StatusBar,
  Alert,
  ActivityIndicator
} from "react-native";
import { 
  Clock, 
  Shirt, 
  Music, 
  MapPin, 
  Sparkles, 
  Trash2,
  AlertCircle
} from "lucide-react-native";

// Supabase Setup
import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://pldkbuwpdqbfrmkxlcqm.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBsZGtidXdwZHFiZnJta3hsY3FtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODI1MDQyMjUsImV4cCI6MjA5ODA4MDIyNX0.FUP6F0F3kdCXDb5EQEW2oKWP1ohtArVC-OAPKJSWi0M";

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

interface TimelineEvent {
  id: string;
  time: string;
  name: string;
  desc: string;
  department?: string;
}

export default function App() {
  const [activeTab, setActiveTab] = useState<"timeline" | "safa" | "song" | "route">("timeline");
  const [loading, setLoading] = useState(false);

  // Timeline States
  const [events, setEvents] = useState<TimelineEvent[]>([
    { id: "evt-1", time: "16:30", name: "Safa / Pagdi Draping", desc: "Traditional turbans draped for groom's family", department: "Groom Royal Styling" },
    { id: "evt-2", time: "17:15", name: "Groom Mounting (Ghodi)", desc: "Groom boards the royal white horse", department: "Entry & Procession" },
    { id: "evt-3", time: "17:30", name: "Procession Begins", desc: "Brass band and dhol players kick off the tunes", department: "Music & Entertainment" }
  ]);
  const [newTime, setNewTime] = useState("18:00");
  const [newName, setNewName] = useState("");
  const [newDesc, setNewDesc] = useState("");
  const [newGroup, setNewGroup] = useState("Music & Entertainment");

  // Safa Styling Selector States
  const [selectedStyle, setSelectedStyle] = useState("Mewari Silk Turban");
  const [turbanPrice, setTurbanPrice] = useState(350);
  const [guestCount, setGuestCount] = useState(150);

  // Live Song Voting Poll States
  const [songVotes, setSongVotes] = useState<Record<string, number>>({
    "song-1": 124,
    "song-2": 88,
    "song-3": 42,
    "song-4": 28
  });

  // GPS Route tracking simulator
  const [routeProgress, setRouteProgress] = useState(0);
  const [routeSimulating, setRouteSimulating] = useState(false);
  const [routeMessage, setRouteMessage] = useState("Start the simulation to track client progression.");

  // Fetch from Supabase
  const loadData = async () => {
    setLoading(true);
    try {
      // 1. Fetch Timeline Events
      const { data: dbTimeline, error: timeErr } = await supabase
        .from("timeline_events")
        .select("*")
        .order("time", { ascending: true });

      if (timeErr) throw timeErr;
      if (dbTimeline && dbTimeline.length > 0) {
        setEvents(dbTimeline.map(t => ({
          id: t.id,
          time: t.time,
          name: t.name,
          desc: t.description || "",
          department: t.department || "Entry & Procession"
        })));
      }

      // 2. Fetch Song Votes
      const { data: dbSongs, error: songErr } = await supabase
        .from("song_votes")
        .select("*");

      if (songErr) throw songErr;
      if (dbSongs && dbSongs.length > 0) {
        const votesMap: Record<string, number> = {};
        dbSongs.forEach((s: any) => {
          votesMap[s.id] = s.votes_count || 0;
        });
        setSongVotes(votesMap);
      }
    } catch (e) {
      console.warn("Offline Fallback Mode active:", e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();

    // Set up real-time subscriptions
    const timelineSub = supabase
      .channel("timeline-channel")
      .on("postgres_changes", { event: "*", schema: "public", table: "timeline_events" }, () => {
        loadData();
      })
      .subscribe();

    const songsSub = supabase
      .channel("songs-channel")
      .on("postgres_changes", { event: "*", schema: "public", table: "song_votes" }, () => {
        loadData();
      })
      .subscribe();

    return () => {
      supabase.removeChannel(timelineSub);
      supabase.removeChannel(songsSub);
    };
  }, []);

  // Add timeline event
  const handleAddEvent = async () => {
    if (!newName.trim()) return;
    try {
      const { error } = await supabase
        .from("timeline_events")
        .insert([{
          time: newTime,
          name: newName,
          description: newDesc || "Custom scheduled procession task.",
          department: newGroup
        }]);

      if (error) throw error;
      setNewName("");
      setNewDesc("");
      loadData();
      Alert.alert("Success", "Procession event scheduled.");
    } catch (err: any) {
      // Local fallback
      const localEvent = {
        id: `evt-${Date.now()}`,
        time: newTime,
        name: newName,
        desc: newDesc || "Custom scheduled procession task.",
        department: newGroup
      };
      setEvents(prev => [...prev, localEvent].sort((a,b) => a.time.localeCompare(b.time)));
      setNewName("");
      setNewDesc("");
      Alert.alert("Local Success", "Scheduled locally (Offline).");
    }
  };

  // Delete event
  const handleDeleteEvent = async (id: string) => {
    try {
      const { error } = await supabase
        .from("timeline_events")
        .delete()
        .eq("id", id);
      if (error) throw error;
      loadData();
    } catch (err) {
      setEvents(prev => prev.filter(e => e.id !== id));
    }
  };

  // Vote song
  const handleVote = async (songId: string) => {
    const currentCount = songVotes[songId] || 0;
    try {
      const { error } = await supabase
        .from("song_votes")
        .update({ votes_count: currentCount + 1 })
        .eq("id", songId);
      if (error) throw error;
      loadData();
    } catch (err) {
      setSongVotes(prev => ({ ...prev, [songId]: currentCount + 1 }));
    }
  };

  // GPS progress tracker timer simulation
  useEffect(() => {
    let timer: any;
    if (routeSimulating) {
      timer = setInterval(() => {
        setRouteProgress(prev => {
          const next = prev + 5;
          if (next >= 100) {
            setRouteSimulating(false);
            setRouteMessage("Baraat arrived at Palace! Pyro triggers fired.");
            Alert.alert("Arrival!", "Procession reached Palace gates successfully.");
            return 100;
          }
          if (next === 25) setRouteMessage("Procession underway. Band party playing tunes.");
          if (next === 50) setRouteMessage("Narrow street caution. Speed reduced for safety.");
          if (next === 75) setRouteMessage("Approaching palace gates. Pyro team alert!");
          return next;
        });
      }, 900);
    }
    return () => clearInterval(timer);
  }, [routeSimulating]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLogo}>
          <Sparkles color="#B8860B" size={20} fill="#B8860B" />
          <Text style={styles.headerTitle}>PLAN MY BARAAT</Text>
        </View>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>CLIENT APP</Text>
        </View>
      </View>

      {/* Screen view content */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {loading && <ActivityIndicator size="small" color="#7C1C2B" style={{ marginBottom: 12 }} />}
        
        {/* TIMELINE SCREEN */}
        {activeTab === "timeline" && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Timeline Designer</Text>
            <Text style={styles.subtitle}>Build step-by-step scripts for the wedding day procession.</Text>
            
            {/* Events vertical stack list */}
            <View style={styles.timelineList}>
              {events.map((evt) => (
                <View key={evt.id} style={styles.timelineCard}>
                  <View style={styles.timelineMarker}></View>
                  <View style={styles.timelineDetails}>
                    <View style={styles.timelineHeaderRow}>
                      <Text style={styles.eventTime}>{evt.time}</Text>
                      <TouchableOpacity onPress={() => handleDeleteEvent(evt.id)}>
                        <Trash2 color="#A8A29E" size={14} />
                      </TouchableOpacity>
                    </View>
                    <Text style={styles.eventName}>{evt.name}</Text>
                    <Text style={styles.eventDesc}>{evt.desc}</Text>
                  </View>
                </View>
              ))}
            </View>

            {/* Input fields to add event */}
            <View style={styles.formCard}>
              <Text style={styles.formLabel}>Schedule New Event</Text>
              <View style={styles.inputRow}>
                <TextInput
                  style={[styles.input, { flex: 1 }]}
                  value={newTime}
                  onChangeText={setNewTime}
                  placeholder="18:00"
                />
                <TextInput
                  style={[styles.input, { flex: 2 }]}
                  value={newName}
                  onChangeText={setNewName}
                  placeholder="e.g. Vintage Car Entry"
                />
              </View>
              <TextInput
                style={styles.input}
                value={newDesc}
                onChangeText={setNewDesc}
                placeholder="Description of activities..."
              />
              <TouchableOpacity 
                style={styles.btnPrimary} 
                onPress={handleAddEvent}
              >
                <Text style={styles.btnPrimaryText}>Add event to timeline</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}

        {/* SAFA PICKER SCREEN */}
        {activeTab === "safa" && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Safa Style Picker</Text>
            <Text style={styles.subtitle}>Select traditional styling fabrics and size specifications.</Text>

            <View style={styles.safaGrid}>
              {[
                { name: "Mewari Silk Turban", price: 350, desc: "Fine silk fabrics." },
                { name: "Rajasthani Floral Safa", price: 300, desc: "Tie-dye cotton print style." },
                { name: "Punjabi Brocade Pagdi", price: 400, desc: "Traditional gold threads design." },
                { name: "Chanderi Cotton Turban", price: 250, desc: "Soft breathable classic cotton." }
              ].map((style) => (
                <TouchableOpacity
                  key={style.name}
                  onPress={() => {
                    setSelectedStyle(style.name);
                    setTurbanPrice(style.price);
                  }}
                  style={[
                    styles.safaBox,
                    selectedStyle === style.name ? styles.safaBoxSelected : null
                  ]}
                >
                  <Text style={[styles.safaName, selectedStyle === style.name ? styles.textCrimson : null]}>{style.name}</Text>
                  <Text style={styles.safaPrice}>₹{style.price}</Text>
                  <Text style={styles.safaDesc}>{style.desc}</Text>
                </TouchableOpacity>
              ))}
            </View>

            <View style={styles.formCard}>
              <View style={styles.qtyRow}>
                <Text style={styles.formLabel}>Total Guest Count</Text>
                <View style={styles.qtyControls}>
                  <TouchableOpacity onPress={() => setGuestCount(prev => Math.max(10, prev - 10))} style={styles.qtyBtn}>
                    <Text style={styles.qtyBtnText}>-</Text>
                  </TouchableOpacity>
                  <Text style={styles.qtyVal}>{guestCount}</Text>
                  <TouchableOpacity onPress={() => setGuestCount(prev => prev + 10)} style={styles.qtyBtn}>
                    <Text style={styles.qtyBtnText}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.divider} />
              <View style={styles.costTotalRow}>
                <Text style={styles.costTotalLabel}>Estimated Cost:</Text>
                <Text style={styles.costTotalVal}>₹{(guestCount * turbanPrice).toLocaleString("en-IN")}</Text>
              </View>
            </View>

            <TouchableOpacity 
              style={styles.btnPrimary}
              onPress={() => Alert.alert("Selection Saved!", `Configured ${guestCount} x ${selectedStyle} turbans (₹${(guestCount * turbanPrice).toLocaleString("en-IN")}).`)}
            >
              <Text style={styles.btnPrimaryText}>Lock turban selection</Text>
            </TouchableOpacity>
          </View>
        )}

        {/* SONG VOTING POLL SCREEN */}
        {activeTab === "song" && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Song Poll Queue</Text>
            <Text style={styles.subtitle}>Let guests vote on tracks for the mobile DJ truck queue.</Text>

            <View style={styles.songList}>
              {[
                { id: "song-1", title: "Kala Chashma (Hip Hop Mix)" },
                { id: "song-2", title: "Sajan Ji Ghar Aaye (Brass Mix)" },
                { id: "song-3", title: "Ajj Din چڑھya (Melodic Wind)" },
                { id: "song-4", title: "Aankh Marey (High tempo Dhol)" }
              ].map((song, idx) => {
                const votesCount = songVotes[song.id] || 0;
                const total = Object.values(songVotes).reduce((s, v) => s + v, 0);
                const percent = total > 0 ? Math.round((votesCount / total) * 100) : 0;
                return (
                  <View key={song.id} style={styles.songCard}>
                    <View style={styles.songDetails}>
                      <Text style={styles.songTitle}>{idx + 1}. {song.title}</Text>
                      <Text style={styles.songVotes}>{votesCount} votes ({percent}%)</Text>
                    </View>
                    <View style={styles.songPollRow}>
                      <View style={styles.progressBack}>
                        <View style={[styles.progressFront, { width: `${percent}%` }]}></View>
                      </View>
                      <TouchableOpacity 
                        style={styles.btnVote}
                        onPress={() => handleVote(song.id)}
                      >
                        <Text style={styles.btnVoteText}>Vote</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                );
              })}
            </View>
          </View>
        )}

        {/* GPS MAP SCREEN */}
        {activeTab === "route" && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Procession GPS Track</Text>
            <Text style={styles.subtitle}>Track simulated location progress along the route.</Text>

            <View style={styles.mapGraphic}>
              <View style={styles.progressBar}>
                <View style={[styles.progressFill, { width: `${routeProgress}%` }]}></View>
              </View>
              <View style={styles.logCard}>
                <AlertCircle color="#B8860B" size={16} />
                <Text style={styles.logText}>{routeMessage}</Text>
              </View>
            </View>

            <View style={styles.btnRow}>
              <TouchableOpacity 
                style={[styles.btnPrimary, { flex: 2 }]} 
                onPress={() => {
                  setRouteSimulating(prev => !prev);
                  if (!routeSimulating && routeProgress >= 100) {
                    setRouteProgress(0);
                    setRouteMessage("Baraat reset. Ready to start.");
                  }
                }}
              >
                <Text style={styles.btnPrimaryText}>{routeSimulating ? "Pause route tracker" : routeProgress >= 100 ? "Restart route" : "Track progression"}</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={styles.btnSecondary} 
                onPress={() => {
                  setRouteProgress(0);
                  setRouteSimulating(false);
                  setRouteMessage("Baraat route reset to start.");
                }}
              >
                <Text style={styles.btnSecondaryText}>Reset</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}

      </ScrollView>

      {/* Navigation tabs at bottom */}
      <View style={styles.navBar}>
        {[
          { id: "timeline", label: "Timeline", icon: Clock },
          { id: "safa", label: "Safas", icon: Shirt },
          { id: "song", label: "Songs", icon: Music },
          { id: "route", label: "Map GPS", icon: MapPin }
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <TouchableOpacity 
              key={tab.id} 
              onPress={() => setActiveTab(tab.id as any)} 
              style={styles.navItem}
            >
              <Icon color={isActive ? "#7C1C2B" : "#A8A29E"} size={20} />
              <Text style={[styles.navText, isActive ? styles.navTextActive : null]}>{tab.label}</Text>
            </TouchableOpacity>
          );
        })}
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FCFBF9"
  },
  header: {
    height: 56,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E1DA",
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16
  },
  headerLogo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8
  },
  headerTitle: {
    fontWeight: "900",
    fontSize: 14,
    letterSpacing: 1,
    color: "#1C1917"
  },
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    backgroundColor: "#F5EBE0",
    borderRadius: 9999
  },
  badgeText: {
    fontSize: 9,
    fontWeight: "900",
    color: "#7C1C2B",
    letterSpacing: 0.5
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 40
  },
  section: {
    gap: 12
  },
  sectionTitle: {
    fontWeight: "800",
    fontSize: 20,
    color: "#7C1C2B"
  },
  subtitle: {
    fontSize: 11,
    color: "#78716C",
    lineHeight: 14
  },
  timelineList: {
    borderLeftWidth: 1,
    borderLeftColor: "#B8860B",
    marginLeft: 8,
    paddingLeft: 16,
    marginVertical: 12,
    gap: 16
  },
  timelineCard: {
    position: "relative"
  },
  timelineMarker: {
    position: "absolute",
    left: -21.5,
    top: 3,
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: "#B8860B",
    borderWidth: 1.5,
    borderColor: "#FCFBF9"
  },
  timelineDetails: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E5E1DA",
    borderRadius: 12,
    padding: 12,
    gap: 4
  },
  timelineHeaderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  eventTime: {
    fontSize: 10,
    fontWeight: "800",
    color: "#B8860B",
    backgroundColor: "#F4ECE1",
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4
  },
  eventName: {
    fontWeight: "bold",
    fontSize: 12,
    color: "#1C1917"
  },
  eventDesc: {
    fontSize: 9.5,
    color: "#78716C",
    lineHeight: 12
  },
  formCard: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E5E1DA",
    borderRadius: 16,
    padding: 16,
    gap: 8,
    marginTop: 8
  },
  formLabel: {
    fontSize: 9,
    fontWeight: "800",
    color: "#78716C",
    textTransform: "uppercase"
  },
  inputRow: {
    flexDirection: "row",
    gap: 8
  },
  input: {
    backgroundColor: "#F5F5F4",
    borderWidth: 1,
    borderColor: "#E7E5E4",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    fontSize: 11,
    color: "#1C1917"
  },
  btnPrimary: {
    backgroundColor: "#7C1C2B",
    borderRadius: 8,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  btnPrimaryText: {
    color: "#FFFFFF",
    fontSize: 10.5,
    fontWeight: "900",
    textTransform: "uppercase",
    letterSpacing: 0.5
  },
  safaGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginVertical: 8
  },
  safaBox: {
    width: "48%",
    backgroundColor: "#F5F5F4",
    borderWidth: 1,
    borderColor: "#E5E1DA",
    borderRadius: 12,
    padding: 10,
    gap: 4
  },
  safaBoxSelected: {
    borderColor: "#B8860B",
    backgroundColor: "#FFFFFF",
    borderWidth: 2
  },
  safaName: {
    fontWeight: "bold",
    fontSize: 11,
    color: "#1C1917"
  },
  safaPrice: {
    fontSize: 11,
    fontWeight: "bold",
    color: "#7C1C2B"
  },
  safaDesc: {
    fontSize: 8.5,
    color: "#78716C",
    lineHeight: 11
  },
  textCrimson: {
    color: "#7C1C2B"
  },
  qtyRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  qtyControls: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12
  },
  qtyBtn: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: "#F5F5F4",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#E5E1DA"
  },
  qtyBtnText: {
    fontWeight: "bold",
    fontSize: 14,
    color: "#1C1917"
  },
  qtyVal: {
    fontWeight: "black",
    fontSize: 13,
    color: "#1C1917",
    width: 32,
    textAlign: "center"
  },
  divider: {
    height: 1,
    backgroundColor: "#E5E1DA",
    marginVertical: 4
  },
  costTotalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  costTotalLabel: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#78716C",
    textTransform: "uppercase"
  },
  costTotalVal: {
    fontSize: 14,
    fontWeight: "900",
    color: "#7C1C2B"
  },
  songList: {
    gap: 8,
    marginVertical: 8
  },
  songCard: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E5E1DA",
    borderRadius: 12,
    padding: 12,
    gap: 8
  },
  songDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  songTitle: {
    fontWeight: "bold",
    fontSize: 11.5,
    color: "#1C1917"
  },
  songVotes: {
    fontSize: 10,
    fontWeight: "900",
    color: "#B8860B"
  },
  songPollRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12
  },
  progressBack: {
    flex: 1,
    height: 8,
    backgroundColor: "#F5F5F4",
    borderRadius: 4,
    overflow: "hidden"
  },
  progressFront: {
    height: "100%",
    backgroundColor: "#B8860B",
    borderRadius: 4
  },
  btnVote: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: "#B8860B",
    borderRadius: 6
  },
  btnVoteText: {
    color: "#1C1917",
    fontSize: 8.5,
    fontWeight: "bold",
    textTransform: "uppercase"
  },
  mapGraphic: {
    height: 200,
    backgroundColor: "#F5F5F4",
    borderWidth: 1,
    borderColor: "#E5E1DA",
    borderRadius: 16,
    padding: 16,
    justifyContent: "space-between",
    overflow: "hidden"
  },
  progressBar: {
    height: 6,
    backgroundColor: "#E5E1DA",
    borderRadius: 3,
    width: "100%",
    marginTop: 40
  },
  progressFill: {
    height: "100%",
    backgroundColor: "#B8860B",
    borderRadius: 3
  },
  logCard: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E5E1DA",
    borderRadius: 12,
    padding: 12,
    flexDirection: "row",
    gap: 8,
    alignItems: "center"
  },
  logText: {
    fontSize: 9.5,
    color: "#1C1917",
    fontWeight: "600",
    flex: 1
  },
  btnRow: {
    flexDirection: "row",
    gap: 8,
    marginTop: 8
  },
  btnSecondary: {
    backgroundColor: "#E5E5E0",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 16,
    alignItems: "center",
    justifyContent: "center"
  },
  btnSecondaryText: {
    color: "#1C1917",
    fontSize: 10.5,
    fontWeight: "bold",
    textTransform: "uppercase"
  },
  navBar: {
    height: 56,
    borderTopWidth: 1,
    borderTopColor: "#E5E1DA",
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    justifyContent: "space-around"
  },
  navItem: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    gap: 2
  },
  navText: {
    fontSize: 8,
    fontWeight: "600",
    color: "#A8A29E"
  },
  navTextActive: {
    color: "#7C1C2B",
    fontWeight: "900"
  }
});
