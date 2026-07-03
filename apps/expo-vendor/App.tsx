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
  FileText, 
  Phone, 
  Calendar, 
  Check, 
  Clock, 
  Building, 
  Star, 
  Sparkles, 
  Sliders
} from "lucide-react-native";

// Supabase Setup
import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://pldkbuwpdqbfrmkxlcqm.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBsZGtidXdwZHFiZnJta3hsY3FtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODI1MDQyMjUsImV4cCI6MjA5ODA4MDIyNX0.FUP6F0F3kdCXDb5EQEW2oKWP1ohtArVC-OAPKJSWi0M";

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

interface Inquiry {
  id: string;
  customerName: string;
  customerPhone: string;
  cityName: string;
  weddingDate: string;
  status: "new" | "negotiation" | "booked" | "lost";
  notes: string;
  budget: number;
}

export default function App() {
  const [activeTab, setActiveTab] = useState<"dashboard" | "leads" | "billing">("dashboard");
  const [loading, setLoading] = useState(false);

  // Selection state to simulate mock vendor credentials
  const [selectedVendorId, setSelectedVendorId] = useState("gen-ahmedabad-bandparty-0");
  const [activeVendor, setActiveVendor] = useState({
    id: "gen-ahmedabad-bandparty-0",
    name: "Ahmedabad Elite Band Party",
    category: "Band Party",
    city: "Ahmedabad",
    rating: "4.8",
    price: 45000
  });

  const [customPrice, setCustomPrice] = useState("45000");
  const [availability, setAvailability] = useState<"active" | "fully_booked" | "inactive">("active");

  // Inquiries matched to active vendor
  const [leads, setLeads] = useState<Inquiry[]>([
    {
      id: "lead-1",
      customerName: "Rohan Patel",
      customerPhone: "+91 91234 56789",
      cityName: "Ahmedabad",
      weddingDate: "2026-11-20",
      status: "new",
      notes: "Requires brass band and royal chariot for the groom entry.",
      budget: 45000
    }
  ]);

  const [activeLeadId, setActiveLeadId] = useState<string>("lead-1");
  const selectedLead = leads.find(l => l.id === activeLeadId) || leads[0];

  // Fetch Vendor Info & Inquiries from Supabase
  const loadData = async () => {
    setLoading(true);
    try {
      // 1. Fetch Vendor Details
      const { data: dbVendor, error: vendorErr } = await supabase
        .from("vendors")
        .select("*")
        .eq("id", selectedVendorId)
        .single();

      if (vendorErr) throw vendorErr;
      if (dbVendor) {
        setActiveVendor({
          id: dbVendor.id,
          name: dbVendor.name,
          category: dbVendor.category,
          city: dbVendor.city,
          rating: String(dbVendor.rating || "5.0"),
          price: dbVendor.price || 45000
        });
        setCustomPrice(String(dbVendor.price));
      }

      // 2. Fetch Matched Inquiries
      const { data: dbInquiries, error: inquiryErr } = await supabase
        .from("inquiries")
        .select("*")
        .eq("vendor_id", selectedVendorId)
        .order("created_at", { ascending: false });

      if (inquiryErr) throw inquiryErr;
      if (dbInquiries) {
        setLeads(dbInquiries.map((l: any) => ({
          id: l.id,
          customerName: l.customer_name,
          customerPhone: l.customer_phone,
          cityName: l.city_name,
          weddingDate: l.wedding_date,
          status: l.status || "new",
          notes: l.notes || "",
          budget: l.total_budget || 0
        })));
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
    const inquiriesSub = supabase
      .channel("vendor-inquiries-channel")
      .on("postgres_changes", { event: "*", schema: "public", table: "inquiries" }, () => {
        loadData();
      })
      .subscribe();

    const vendorsSub = supabase
      .channel("vendor-details-channel")
      .on("postgres_changes", { event: "*", schema: "public", table: "vendors", filter: `id=eq.${selectedVendorId}` }, () => {
        loadData();
      })
      .subscribe();

    return () => {
      supabase.removeChannel(inquiriesSub);
      supabase.removeChannel(vendorsSub);
    };
  }, [selectedVendorId]);

  // Update lead status in database
  const updateLeadStatus = async (leadId: string, newStatus: "new" | "negotiation" | "booked") => {
    try {
      const { error } = await supabase
        .from("inquiries")
        .update({ status: newStatus })
        .eq("id", leadId);
      if (error) throw error;
      loadData();
      Alert.alert("Status Updated!", `Inquiry status set to ${newStatus}.`);
    } catch (err) {
      setLeads(prev => prev.map(l => l.id === leadId ? { ...l, status: newStatus } : l));
      Alert.alert("Local Update", `Status updated locally (Offline).`);
    }
  };

  // Update package price in database
  const handleUpdatePrice = async () => {
    const numericPrice = Number(customPrice);
    if (isNaN(numericPrice) || numericPrice <= 0) return;

    try {
      const { error } = await supabase
        .from("vendors")
        .update({ price: numericPrice })
        .eq("id", selectedVendorId);
      if (error) throw error;
      loadData();
      Alert.alert("Success", `Package rates updated to ₹${numericPrice.toLocaleString("en-IN")}.`);
    } catch (err) {
      setActiveVendor(prev => ({ ...prev, price: numericPrice }));
      Alert.alert("Local Price Saved", "Updated rates locally (Offline).");
    }
  };

  const formatPrice = (value: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0
    }).format(value);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      {/* App Header */}
      <View style={styles.header}>
        <View style={styles.headerLogo}>
          <Sparkles color="#7C1C2B" size={20} fill="#7C1C2B" />
          <Text style={styles.headerTitle}>PLAN MY BARAAT</Text>
        </View>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>VENDOR PARTNER</Text>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {loading && <ActivityIndicator size="small" color="#7C1C2B" style={{ marginBottom: 12 }} />}
        
        {/* DASHBOARD TAB */}
        {activeTab === "dashboard" && (
          <View style={styles.section}>
            
            {/* Simulation Credentials Switcher */}
            <View style={styles.card}>
              <Text style={styles.cardLabel}>Login Simulator</Text>
              <TextInput
                style={styles.input}
                value={selectedVendorId}
                onChangeText={setSelectedVendorId}
                placeholder="Enter Vendor ID (e.g. gen-ahmedabad-bandparty-0)"
                autoCapitalize="none"
              />
              <TouchableOpacity style={styles.btnSecondary} onPress={loadData}>
                <Text style={styles.btnSecondaryText}>Switch Profile Credentials</Text>
              </TouchableOpacity>
            </View>

            {/* Vendor Profile Card */}
            <View style={styles.profileCard}>
              <Text style={styles.profileTag}>{activeVendor.category}</Text>
              <Text style={styles.profileName}>{activeVendor.name}</Text>
              <View style={styles.profileMeta}>
                <Text style={styles.metaText}><Building size={12} color="#F5EBE0" /> {activeVendor.city}</Text>
                <Text style={[styles.metaText, { color: "#F5EBE0" }]}><Star size={12} fill="#B8860B" color="#B8860B" /> {activeVendor.rating} Rating</Text>
              </View>
            </View>

            {/* Status active/inactive toggles */}
            <View style={styles.card}>
              <Text style={styles.cardLabel}>Business Availability</Text>
              <View style={styles.statusRow}>
                {[
                  { id: "active", label: "Active", bg: "#D1FAE5", border: "#A7F3D0", text: "#065F46" },
                  { id: "fully_booked", label: "Fully Booked", bg: "#FEF3C7", border: "#FDE68A", text: "#92400E" },
                  { id: "inactive", label: "Inactive", bg: "#FEE2E2", border: "#FCA5A5", text: "#991B1B" }
                ].map((status) => (
                  <TouchableOpacity
                    key={status.id}
                    onPress={() => {
                      setAvailability(status.id as any);
                      Alert.alert("Status Updated!", `Availability set to ${status.label}.`);
                    }}
                    style={[
                      styles.statusBtn,
                      { backgroundColor: status.bg, borderColor: status.border },
                      availability === status.id ? { borderWidth: 2, transform: [{ scale: 1.03 }] } : null
                    ]}
                  >
                    <Text style={[styles.statusBtnText, { color: status.text }]}>{status.label}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            {/* Pricing Manager Card */}
            <View style={styles.card}>
              <Text style={styles.cardLabel}>Package Pricing (INR)</Text>
              <View style={styles.priceRow}>
                <TextInput
                  style={styles.priceInput}
                  value={customPrice}
                  onChangeText={setCustomPrice}
                  keyboardType="numeric"
                  placeholder="45000"
                />
                <View style={styles.priceUnitBox}>
                  <Text style={styles.priceUnitText}>Per Event</Text>
                </View>
              </View>
              <TouchableOpacity 
                style={styles.btnPrimary}
                onPress={handleUpdatePrice}
              >
                <Text style={styles.btnPrimaryText}>Update Rates in Search Index</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}

        {/* INCOMING LEADS MATCH LIST TAB */}
        {activeTab === "leads" && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Client Match Leads</Text>
            <Text style={styles.subtitle}>Inquiries submitted from planmybaraat.com matching your region.</Text>

            {leads.length === 0 ? (
              <View style={styles.emptyCard}>
                <Text style={styles.emptyText}>No matched inquiries found for this credentials login.</Text>
              </View>
            ) : (
              <View style={styles.leadsStack}>
                {leads.map((lead) => (
                  <TouchableOpacity
                    key={lead.id}
                    onPress={() => setActiveLeadId(lead.id)}
                    style={[
                      styles.leadCard,
                      activeLeadId === lead.id ? styles.leadCardActive : null
                    ]}
                  >
                    <View style={styles.leadHeaderRow}>
                      <Text style={styles.leadName}>{lead.customerName}</Text>
                      <Text style={styles.leadStatusTag}>{lead.status}</Text>
                    </View>
                    <View style={styles.leadSubMeta}>
                      <Text style={styles.leadMetaText}><Phone size={10} color="#78716C" /> {lead.customerPhone}</Text>
                      <Text style={styles.leadMetaText}><Calendar size={10} color="#78716C" /> Date: {lead.weddingDate}</Text>
                    </View>
                    <Text style={styles.leadNotes}>&ldquo;{lead.notes}&rdquo;</Text>

                    {/* Accept / Invoice Buttons */}
                    <View style={styles.actionRow}>
                      {lead.status === "new" && (
                        <TouchableOpacity 
                          style={styles.btnAccept}
                          onPress={() => updateLeadStatus(lead.id, "negotiation")}
                        >
                          <Text style={styles.btnAcceptText}>Accept Inquiry</Text>
                        </TouchableOpacity>
                      )}
                      {(lead.status === "new" || lead.status === "negotiation") && (
                        <TouchableOpacity 
                          style={styles.btnBill}
                          onPress={() => {
                            updateLeadStatus(lead.id, "booked");
                            setActiveTab("billing");
                          }}
                        >
                          <Text style={styles.btnBillText}>Generate Receipt</Text>
                        </TouchableOpacity>
                      )}
                    </View>
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>
        )}

        {/* BILLING / INVOICE TAB */}
        {activeTab === "billing" && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Booking Confirmations</Text>
            <Text style={styles.subtitle}>Manage receipts and digital tax bills generated for booked leads.</Text>

            {!selectedLead ? (
              <View style={styles.emptyCard}>
                <Text style={styles.emptyText}>No booked invoice available.</Text>
              </View>
            ) : (
              <View style={styles.invoiceWrap}>
                <View style={styles.receiptCard}>
                  <Text style={styles.receiptHeader}>PLAN MY BARAAT - TAX INVOICE</Text>
                  
                  <View style={styles.receiptRow}>
                    <Text style={styles.receiptLabel}>Client:</Text>
                    <Text style={styles.receiptValue}>{selectedLead.customerName}</Text>
                  </View>
                  <View style={styles.receiptRow}>
                    <Text style={styles.receiptLabel}>Event Date:</Text>
                    <Text style={styles.receiptValue}>{selectedLead.weddingDate}</Text>
                  </View>
                  <View style={styles.receiptRow}>
                    <Text style={styles.receiptLabel}>Vendor Service:</Text>
                    <Text style={styles.receiptValue}>{activeVendor.name}</Text>
                  </View>
                  
                  <View style={styles.divider}></View>
                  
                  <View style={styles.receiptRow}>
                    <Text style={styles.receiptLabel}>Subtotal Package:</Text>
                    <Text style={styles.receiptValue}>{formatPrice(activeVendor.price)}</Text>
                  </View>
                  <View style={styles.receiptRow}>
                    <Text style={styles.receiptLabel}>GST @ 18%:</Text>
                    <Text style={styles.receiptValue}>{formatPrice(activeVendor.price * 0.18)}</Text>
                  </View>
                  
                  <View style={[styles.receiptRow, { marginTop: 8 }]}>
                    <Text style={[styles.receiptLabel, { fontWeight: "bold", fontSize: 13, color: "#1C1917" }]}>Grand Total:</Text>
                    <Text style={[styles.receiptValue, { fontWeight: "900", fontSize: 14, color: "#7C1C2B" }]}>{formatPrice(activeVendor.price * 1.18)}</Text>
                  </View>
                  
                  <View style={styles.stampBox}>
                    <Text style={styles.stampText}>PAID RECEIPT</Text>
                  </View>
                </View>

                <TouchableOpacity 
                  style={styles.btnPrimary}
                  onPress={() => Alert.alert("Exporting!", "Billing PDF receipt shared to client dashboard.")}
                >
                  <Text style={styles.btnPrimaryText}>Share PDF to Client App</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        )}

      </ScrollView>

      {/* Navigation tabs at bottom */}
      <View style={styles.navBar}>
        {[
          { id: "dashboard", label: "Dashboard", icon: Sliders },
          { id: "leads", label: "Leads", icon: Clock },
          { id: "billing", label: "Billing", icon: FileText }
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
    backgroundColor: "#F9EBEB",
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
  profileCard: {
    backgroundColor: "#7C1C2B",
    borderRadius: 16,
    padding: 18,
    gap: 4
  },
  profileTag: {
    alignSelf: "flex-start",
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    color: "#FFFFFF",
    fontSize: 9,
    fontWeight: "bold",
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 4
  },
  profileName: {
    fontSize: 18,
    color: "#FFFFFF",
    fontWeight: "bold"
  },
  profileMeta: {
    flexDirection: "row",
    gap: 16,
    marginTop: 4
  },
  metaText: {
    fontSize: 10,
    color: "#F5EBE0",
    fontWeight: "600"
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E5E1DA",
    borderRadius: 16,
    padding: 16,
    gap: 8
  },
  cardLabel: {
    fontSize: 9,
    fontWeight: "800",
    color: "#78716C",
    textTransform: "uppercase"
  },
  statusRow: {
    flexDirection: "row",
    gap: 8
  },
  statusBtn: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 8,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  statusBtnText: {
    fontSize: 10,
    fontWeight: "900",
    textTransform: "uppercase"
  },
  priceRow: {
    flexDirection: "row",
    gap: 8
  },
  priceInput: {
    flex: 1,
    backgroundColor: "#F5F5F4",
    borderWidth: 1,
    borderColor: "#E7E5E4",
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 13,
    fontWeight: "bold",
    color: "#1C1917"
  },
  priceUnitBox: {
    backgroundColor: "#F5F5F4",
    borderWidth: 1,
    borderColor: "#E5E1DA",
    borderRadius: 8,
    paddingHorizontal: 12,
    justifyContent: "center"
  },
  priceUnitText: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#78716C",
    textTransform: "uppercase"
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
  leadsStack: {
    gap: 12
  },
  leadCard: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E5E1DA",
    borderRadius: 16,
    padding: 16,
    gap: 6
  },
  leadCardActive: {
    borderColor: "#B8860B",
    borderWidth: 1.5
  },
  leadHeaderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  leadName: {
    fontWeight: "bold",
    fontSize: 13,
    color: "#1C1917"
  },
  leadStatusTag: {
    fontSize: 9,
    fontWeight: "800",
    color: "#B8860B",
    textTransform: "uppercase",
    backgroundColor: "#FAF3E5",
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 9999
  },
  leadSubMeta: {
    flexDirection: "row",
    gap: 12,
    marginVertical: 2
  },
  leadMetaText: {
    fontSize: 9.5,
    color: "#78716C",
    fontWeight: "600"
  },
  leadNotes: {
    fontSize: 11,
    color: "#44403C",
    lineHeight: 14,
    backgroundColor: "#F5F5F4",
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E7E5E4",
    fontStyle: "italic",
    marginVertical: 4
  },
  actionRow: {
    flexDirection: "row",
    gap: 8,
    marginTop: 4
  },
  btnAccept: {
    flex: 1,
    paddingVertical: 8,
    backgroundColor: "#B8860B",
    borderRadius: 8,
    alignItems: "center"
  },
  btnAcceptText: {
    color: "#1C1917",
    fontWeight: "900",
    fontSize: 10,
    textTransform: "uppercase"
  },
  btnBill: {
    flex: 1,
    paddingVertical: 8,
    backgroundColor: "#7C1C2B",
    borderRadius: 8,
    alignItems: "center"
  },
  btnBillText: {
    color: "#FFFFFF",
    fontWeight: "900",
    fontSize: 10,
    textTransform: "uppercase"
  },
  emptyCard: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E5E1DA",
    borderRadius: 16,
    padding: 24,
    alignItems: "center",
    justifyContent: "center"
  },
  emptyText: {
    fontSize: 11,
    color: "#78716C",
    textAlign: "center"
  },
  invoiceWrap: {
    gap: 12
  },
  receiptCard: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E5E1DA",
    borderRadius: 16,
    padding: 18,
    gap: 10,
    position: "relative"
  },
  divider: {
    height: 1,
    backgroundColor: "#E5E1DA",
    marginVertical: 4
  },
  receiptHeader: {
    fontWeight: "900",
    fontSize: 10,
    color: "#78716C",
    letterSpacing: 1,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E1DA",
    paddingBottom: 6,
    textAlign: "center"
  },
  receiptRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  receiptLabel: {
    fontSize: 10.5,
    color: "#78716C",
    fontWeight: "600"
  },
  receiptValue: {
    fontSize: 11,
    color: "#1C1917",
    fontWeight: "bold"
  },
  stampBox: {
    alignSelf: "center",
    borderWidth: 2,
    borderColor: "#059669",
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 4,
    marginTop: 8,
    transform: [{ rotate: "-4deg" }]
  },
  stampText: {
    color: "#059669",
    fontWeight: "900",
    fontSize: 10,
    letterSpacing: 0.5
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
  },
  input: {
    backgroundColor: "#F5F5F4",
    borderWidth: 1,
    borderColor: "#E7E5E4",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    fontSize: 11,
    color: "#1C1917"
  },
  btnSecondary: {
    backgroundColor: "#E5E5E0",
    borderRadius: 8,
    paddingVertical: 8,
    alignItems: "center"
  },
  btnSecondaryText: {
    color: "#1C1917",
    fontSize: 10,
    fontWeight: "bold",
    textTransform: "uppercase"
  }
});
