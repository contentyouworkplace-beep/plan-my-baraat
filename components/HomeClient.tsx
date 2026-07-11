"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  animate,
  motion,
  useAnimationFrame,
  useInView,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  type MotionValue,
} from "framer-motion";
import {
  Award,
  Check,
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Palette,
  PartyPopper,
  PhoneCall,
  Play,
  Search,
  Star,
} from "lucide-react";

import confetti from "canvas-confetti";

import HomePackagesSection from "@/components/HomePackagesSection";
import { DjTruckArt, VintageCarArt } from "@/components/VehicleArt";
import {
  ABOUT_POINTS,
  CONTACT_DETAILS,
  GALLERY_IMAGES,
  GALLERY_VIDEOS,
  TESTIMONIALS,
} from "@/lib/siteContent";
import { SITE_IMAGES } from "@/lib/siteImages";

const CONTACT_ICONS = { PhoneCall, Mail, MapPin, Clock };

const STATS = [
  { icon: PartyPopper, value: 500, suffix: "+", label: "Baraats Organized" },
  { icon: MapPin, value: 6, suffix: "", label: "Cities Covered" },
  { icon: Star, value: 4.9, suffix: "/5", label: "Average Rating" },
  { icon: Award, value: 5, suffix: " Yrs", label: "In Business" },
];

const STEPS = [
  {
    icon: Search,
    title: "Pick a Package",
    text: "Browse Raj Tilak, Rajwada, Maharaja or Signature and shortlist what fits your celebration.",
  },
  {
    icon: PhoneCall,
    title: "Share Your Details",
    text: "Send your name, event, and number - our team calls you back within hours.",
  },
  {
    icon: Palette,
    title: "Customize & Confirm",
    text: "We tailor the truck branding, dhol count, lights and effects to your baraat, then lock the date.",
  },
];

const STATEMENT_WORDS =
  "One truck. Forty dhol beats. A thousand lights. Your entry becomes the story every guest tells for years.".split(
    " "
  );

const ENQUIRY_TOASTS = [
  { name: "Priya", city: "Ahmedabad", ago: "2 hrs ago", interest: "Rajwada Package" },
  { name: "Kunal", city: "Vadodara", ago: "37 mins ago", interest: "DJ Truck + Dhol" },
  { name: "Neha", city: "Surat", ago: "1 hr ago", interest: "Vintage Car Entry" },
  { name: "Arjun", city: "Anand", ago: "3 hrs ago", interest: "Maharaja Package" },
];

const BLUEPRINT_LABELS = [
  { title: "DJ Truck", note: "double decker sound stage", className: "left-[55%] top-[10%] md:left-[62%]" },
  { title: "Dhol", note: "live rhythm line", className: "left-[12%] top-[48%] md:left-[18%]" },
  { title: "Safa Team", note: "groom styling station", className: "left-[18%] top-[18%] md:left-[22%]" },
  { title: "Vintage Car", note: "royal arrival vehicle", className: "left-[4%] top-[70%] md:left-[10%]" },
  { title: "Cold Pyro", note: "entry highlight effect", className: "left-[72%] top-[62%] md:left-[78%]" },
];

const PETALS = [
  { left: "8%", top: "18%", size: 12, duration: 12, delay: 0 },
  { left: "24%", top: "10%", size: 14, duration: 14, delay: 1.3 },
  { left: "40%", top: "20%", size: 10, duration: 11, delay: 0.8 },
  { left: "62%", top: "12%", size: 16, duration: 15, delay: 2.2 },
  { left: "78%", top: "16%", size: 11, duration: 13, delay: 0.5 },
  { left: "90%", top: "8%", size: 13, duration: 12.5, delay: 1.8 },
];

function CountUp({
  value,
  suffix,
  decimals = 0,
}: {
  value: number;
  suffix: string;
  decimals?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  useEffect(() => {
    if (!inView || !ref.current) return;
    const node = ref.current;
    const controls = animate(0, value, {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => {
        node.textContent = latest.toFixed(decimals) + suffix;
      },
    });
    return () => controls.stop();
  }, [inView, value, suffix, decimals]);

  return <span ref={ref}>0{suffix}</span>;
}

function fireCelebration() {
  confetti({
    particleCount: 90,
    spread: 80,
    origin: { y: 0.75 },
    colors: ["#E70D1D", "#C9A24B", "#F8F4EE", "#E86A8A"],
  });
}

function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30 });
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-[#E70D1D]"
    />
  );
}

function WhatsAppFloat() {
  const [showPreview, setShowPreview] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setShowPreview(true), 10000);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end gap-3">
      <AnimatePresence>
        {showPreview ? (
          <motion.a
            href="https://wa.me/918830612287"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: 24, scale: 0.94 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.96 }}
            transition={{ duration: 0.45, ease: easeReveal }}
            className="hidden max-w-[220px] rounded-[20px] border border-white/35 bg-white/55 px-4 py-3 text-xs font-medium leading-relaxed text-black/70 shadow-[0_20px_45px_rgba(0,0,0,0.14)] backdrop-blur-xl md:block"
          >
            Planning a baraat? Ask us anything 👋
          </motion.a>
        ) : null}
      </AnimatePresence>

      <a
        href="https://wa.me/918830612287"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-transform duration-300 hover:scale-110"
      >
        <motion.span
          animate={{ scale: [1, 1.7], opacity: [0.45, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeOut" }}
          className="absolute inset-0 rounded-full bg-[#25D366]"
        />
        <MessageCircle className="relative h-6 w-6 fill-white text-white" />
      </a>
    </div>
  );
}

function RecentlyEnquiredToast() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setIndex((value) => (value + 1) % ENQUIRY_TOASTS.length);
    }, 20000);
    return () => window.clearInterval(interval);
  }, []);

  const item = ENQUIRY_TOASTS[index];

  return (
    <div className="fixed bottom-6 left-6 z-40 hidden md:block">
      <AnimatePresence mode="wait">
        <motion.div
          key={`${item.name}-${item.city}-${item.ago}`}
          initial={{ opacity: 0, x: -28, y: 14 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, x: -18, y: 10 }}
          transition={{ duration: 0.45, ease: easeReveal }}
          className="w-[280px] rounded-[24px] border border-white/35 bg-white/45 p-4 text-black shadow-[0_22px_50px_rgba(0,0,0,0.14)] backdrop-blur-xl"
        >
          <span className="text-[9px] font-bold uppercase tracking-[0.24em] text-[#E70D1D]">
            Recently Enquired
          </span>
          <p className="mt-2 text-sm font-semibold text-black/80">
            {item.name} from {item.city} enquired {item.ago}
          </p>
          <p className="mt-1 text-xs text-black/55">{item.interest}</p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function HeroPetals({ opacity }: { opacity: MotionValue<number> }) {
  return (
    <motion.div style={{ opacity }} className="pointer-events-none absolute inset-0">
      {PETALS.map((petal, index) => (
        <motion.span
          key={index}
          className="absolute block rounded-[70%_30%_65%_35%/55%_38%_62%_45%] bg-gradient-to-br from-[#F4B566] via-[#E86A8A] to-[#E70D1D] shadow-[0_6px_14px_rgba(231,13,29,0.18)]"
          style={{
            left: petal.left,
            top: petal.top,
            width: petal.size,
            height: petal.size * 1.4,
          }}
          animate={{ y: [0, 180, 360], x: [0, 18, -12], rotate: [0, 90, 220], opacity: [0, 0.9, 0] }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            repeat: Infinity,
            repeatDelay: 1.5,
            ease: "easeInOut",
          }}
        />
      ))}
    </motion.div>
  );
}

function BlueprintHero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const blueprintOpacity = useTransform(scrollYProgress, [0, 0.58, 0.78], [1, 1, 0.08]);
  const festiveOpacity = useTransform(scrollYProgress, [0.38, 0.62, 0.88], [0, 0.45, 1]);
  const titleY = useTransform(scrollYProgress, [0, 0.22, 0.9], [0, -24, -44]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.62, 0.92], [1, 1, 0.84]);
  const routePath = useTransform(scrollYProgress, [0.02, 0.34], [0, 1]);
  const sketchOpacity = useTransform(scrollYProgress, [0.12, 0.72], [0.28, 1]);
  const labelOpacity = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);
  const labelY = useTransform(scrollYProgress, [0.2, 0.4], [18, 0]);
  const carX = useTransform(scrollYProgress, [0.14, 0.62], ["-22%", "0%"]);
  const truckX = useTransform(scrollYProgress, [0.18, 0.72], ["18%", "0%"]);
  const glowOpacity = useTransform(scrollYProgress, [0.5, 0.86], [0, 1]);
  const glassOpacity = useTransform(scrollYProgress, [0.58, 0.84], [0, 1]);
  const hintOpacity = useTransform(scrollYProgress, [0, 0.16], [1, 0]);
  const stageOneOpacity = useTransform(scrollYProgress, [0, 0.08, 0.3], [1, 1, 0]);
  const stageTwoOpacity = useTransform(scrollYProgress, [0.18, 0.34, 0.52], [0, 1, 0]);
  const stageThreeOpacity = useTransform(scrollYProgress, [0.5, 0.68, 0.9], [0, 1, 1]);
  const festiveScale = useTransform(scrollYProgress, [0.48, 0.88], [0.96, 1.03]);

  return (
    <section id="home" ref={ref} className="relative h-[340vh]">
      <div className="sticky top-0 h-screen overflow-hidden bg-[#08111C]">
        <motion.div
          style={{ opacity: blueprintOpacity }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(68,118,173,0.28),transparent_42%),linear-gradient(180deg,#07111c_0%,#0b1b2a_100%)]"
        >
          <div className="absolute inset-0 bg-[linear-gradient(rgba(112,167,227,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(112,167,227,0.12)_1px,transparent_1px)] bg-[size:42px_42px]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,transparent_62%,rgba(7,17,28,0.66)_100%)]" />
        </motion.div>

        <motion.div
          style={{ opacity: festiveOpacity, scale: festiveScale }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.7),transparent_35%),linear-gradient(180deg,#f8f4ee_0%,#f5ecdf_55%,#f8f4ee_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(201,162,75,0.18),transparent_20%),radial-gradient(circle_at_82%_30%,rgba(231,13,29,0.14),transparent_24%),radial-gradient(circle_at_50%_76%,rgba(232,106,138,0.16),transparent_18%)]" />
        </motion.div>

        <HeroPetals opacity={glowOpacity} />

        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col px-4 pt-10 sm:px-6 lg:px-8">
          <motion.div
            style={{ y: titleY, opacity: titleOpacity }}
            className="mx-auto flex max-w-4xl flex-col items-center text-center"
          >
            <div className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.28em] text-[#C9E7FF] shadow-[inset_0_1px_0_rgba(255,255,255,0.15)] backdrop-blur-xl md:text-[11px]">
              Baraat Blueprint to Celebration
            </div>
            <h1 className="mt-6 font-serif text-4xl font-black leading-[1.02] tracking-wide text-white sm:text-5xl md:text-7xl">
              Plan the procession.
              <br />
              <span className="text-[#F6D38E]">Then watch it come alive.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-sm leading-relaxed text-white/68 md:text-base">
              A technical sketch of your baraat builds on scroll, every service gets labeled
              like a planner&apos;s board, then the scene blooms into lights, motion, glassy
              detail, and full celebration energy.
            </p>
          </motion.div>

          <div className="relative mt-8 flex-1">
            <motion.div
              style={{ opacity: glassOpacity }}
              className="absolute left-0 top-0 hidden w-[280px] rounded-[28px] border border-white/35 bg-white/14 p-5 text-left text-white shadow-[0_25px_60px_rgba(0,0,0,0.22)] backdrop-blur-2xl lg:block"
            >
              <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-[0.24em] text-white/70">
                <span>Planner View</span>
                <span>Live Build</span>
              </div>
              <div className="mt-4 space-y-3 text-sm text-white/80">
                <p>DJ Truck route locked</p>
                <p>Dhol rhythm line positioned</p>
                <p>Safa team and groom arrival staged</p>
                <p>Cold pyro and light cues activated</p>
              </div>
            </motion.div>

            <motion.div
              style={{ opacity: glowOpacity }}
              className="absolute right-0 top-6 hidden w-[260px] rounded-[28px] border border-white/40 bg-white/55 p-5 text-left text-black shadow-[0_25px_60px_rgba(0,0,0,0.14)] backdrop-blur-2xl lg:block"
            >
              <div className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#E70D1D]">
                Celebration Mode
              </div>
              <p className="mt-3 font-serif text-2xl font-black text-black">
                DJ Truck, Dhol, Safa Team, Vintage Car, Cold Pyro
              </p>
              <p className="mt-3 text-sm leading-relaxed text-black/60">
                Every element arrives in sequence so the scroll feels like a royal event
                getting approved, built, and unleashed.
              </p>
            </motion.div>

            <div className="absolute inset-x-0 bottom-[11vh] top-[8vh]">
              <motion.svg
                viewBox="0 0 1200 640"
                preserveAspectRatio="xMidYMid meet"
                className="absolute inset-0 h-full w-full"
                style={{ opacity: blueprintOpacity }}
              >
                <motion.path
                  d="M 76 480 C 240 458 370 470 468 446 C 590 416 648 356 760 324 C 852 296 942 314 1112 278"
                  fill="none"
                  stroke="#86C8FF"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeDasharray="10 14"
                  style={{ pathLength: routePath }}
                />
                <motion.path
                  d="M 866 326 C 906 228 986 168 1098 152"
                  fill="none"
                  stroke="#86C8FF"
                  strokeWidth="3"
                  strokeLinecap="round"
                  style={{ pathLength: routePath }}
                />
                <motion.path
                  d="M 236 304 C 288 250 350 224 430 214 C 488 208 566 214 610 234"
                  fill="none"
                  stroke="#86C8FF"
                  strokeWidth="3"
                  strokeLinecap="round"
                  style={{ pathLength: routePath }}
                />
              </motion.svg>

              <motion.div
                style={{ x: carX, opacity: sketchOpacity }}
                className="absolute bottom-[10%] left-[2%] w-[38%] md:left-[4%] md:w-[30%]"
              >
                <div className="rounded-[28px] border border-white/10 bg-white/5 p-4 backdrop-blur-md">
                  <VintageCarArt className="w-full opacity-90" />
                </div>
              </motion.div>

              <motion.div
                style={{ x: truckX, opacity: sketchOpacity }}
                className="absolute bottom-0 right-[-8%] w-[76%] md:right-[0] md:w-[54%]"
              >
                <div className="relative rounded-[30px] border border-white/10 bg-white/5 p-4 backdrop-blur-md">
                  <DjTruckArt className="w-full opacity-95" />
                  <motion.div
                    style={{ opacity: glowOpacity }}
                    className="pointer-events-none absolute inset-x-[16%] top-[14%] h-24 rounded-full bg-[radial-gradient(circle,rgba(231,13,29,0.22)_0%,rgba(231,13,29,0)_72%)] blur-2xl"
                  />
                  <motion.div
                    style={{ opacity: glowOpacity }}
                    animate={{ scale: [1, 1.04, 1], opacity: [0.45, 0.85, 0.45] }}
                    transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
                    className="pointer-events-none absolute left-[58%] top-[44%] h-24 w-24 rounded-full border border-[#E70D1D]/25"
                  />
                </div>
              </motion.div>

              <motion.div
                style={{ opacity: labelOpacity, y: labelY }}
                className="absolute inset-0"
              >
                {BLUEPRINT_LABELS.map((label) => (
                  <div
                    key={label.title}
                    className={`absolute ${label.className} hidden rounded-[20px] border border-white/20 bg-white/10 px-4 py-3 text-left text-white shadow-[0_14px_30px_rgba(0,0,0,0.18)] backdrop-blur-xl md:block`}
                  >
                    <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#C9E7FF]">
                      {label.title}
                    </p>
                    <p className="mt-1 text-xs text-white/60">{label.note}</p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          <div className="pointer-events-none absolute inset-x-0 bottom-24 z-20 px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <motion.div style={{ opacity: stageOneOpacity }} className="text-center">
                <span className="rounded-full border border-white/18 bg-white/8 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.26em] text-[#C9E7FF] backdrop-blur-lg">
                  Step 1: drafting the route and structure
                </span>
              </motion.div>
              <motion.div style={{ opacity: stageTwoOpacity }} className="text-center">
                <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.26em] text-[#F6D38E] backdrop-blur-lg">
                  Step 2: every service gets mapped and labeled
                </span>
              </motion.div>
              <motion.div style={{ opacity: stageThreeOpacity }} className="text-center">
                <div className="inline-flex flex-col items-center rounded-[28px] border border-white/40 bg-white/55 px-6 py-5 text-black shadow-[0_25px_60px_rgba(0,0,0,0.14)] backdrop-blur-2xl">
                  <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#E70D1D]">
                    Step 3: celebration takes over
                  </span>
                  <p className="mt-2 max-w-xl font-serif text-2xl font-black leading-tight md:text-3xl">
                    The sketch becomes a full festive world with lights, motion, petals, and
                    a headline-worthy entry.
                  </p>
                  <a
                    href="#packages"
                    onClick={fireCelebration}
                    className="pointer-events-auto mt-4 inline-flex h-12 items-center gap-2.5 rounded-full bg-[#E70D1D] px-8 text-xs font-extrabold uppercase tracking-widest text-white transition-all duration-300 hover:bg-[#c40d1a]"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Explore Packages
                  </a>
                </div>
              </motion.div>
            </div>
          </div>

          <motion.div
            style={{ opacity: hintOpacity }}
            className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-center"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
              className="mx-auto h-9 w-5 rounded-full border border-white/30"
            >
              <div className="mx-auto mt-1.5 h-2 w-0.5 rounded bg-white/40" />
            </motion.div>
            <p className="mt-2 text-[9px] font-bold uppercase tracking-widest text-white/40">
              Scroll the build
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function StatementSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "end 0.35"],
  });

  return (
    <section ref={ref} className="relative h-[180vh] bg-black">
      <div className="sticky top-0 flex h-screen items-center justify-center px-6">
        <p className="mx-auto max-w-4xl text-center font-serif text-3xl font-black leading-snug tracking-wide sm:text-4xl md:text-6xl">
          {STATEMENT_WORDS.map((word, i) => (
            <Word
              key={i}
              progress={scrollYProgress}
              range={[i / STATEMENT_WORDS.length, (i + 1) / STATEMENT_WORDS.length]}
            >
              {word}
            </Word>
          ))}
        </p>
      </div>
    </section>
  );
}

function Word({
  children,
  progress,
  range,
}: {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.12, 1]);
  const highlight = children === "story" || children === "entry";
  return (
    <motion.span
      style={{ opacity }}
      className={`mr-[0.28em] inline-block ${highlight ? "text-[#E70D1D]" : "text-[#F8F4EE]"}`}
    >
      {children}
    </motion.span>
  );
}

function ParallaxImage({
  src,
  alt,
  speed = 0.15,
  className = "",
}: {
  src: string;
  alt: string;
  speed?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [`${speed * 100}%`, `${-speed * 100}%`]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div style={{ y }} className="absolute inset-[-18%]">
        <Image src={src} alt={alt} fill className="object-cover" />
      </motion.div>
    </div>
  );
}

const easeReveal = [0.16, 1, 0.3, 1] as const;

function CharReveal({
  text,
  className = "",
  as: Tag = "h2",
}: {
  text: string;
  className?: string;
  as?: "h2" | "p";
}) {
  const MotionTag = Tag === "h2" ? motion.h2 : motion.p;
  return (
    <MotionTag
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={{ visible: { transition: { staggerChildren: 0.028 } } }}
      aria-label={text}
      className={className}
    >
      {Array.from(text).map((char, i) => (
        <motion.span
          key={i}
          aria-hidden
          variants={{
            hidden: { opacity: 0, y: "0.7em", rotate: 4 },
            visible: {
              opacity: 1,
              y: 0,
              rotate: 0,
              transition: { duration: 0.55, ease: easeReveal },
            },
          }}
          className="inline-block whitespace-pre"
        >
          {char}
        </motion.span>
      ))}
    </MotionTag>
  );
}

const wrap = (min: number, max: number, v: number) => {
  const range = max - min;
  return ((((v - min) % range) + range) % range) + min;
};

function MarqueeBand() {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
  const velocityFactor = useTransform(smoothVelocity, [0, 1200], [0, 4], { clamp: false });
  const directionFactor = useRef(1);
  const x = useTransform(baseX, (v) => `${wrap(-25, 0, v)}%`);

  useAnimationFrame((_, delta) => {
    let moveBy = directionFactor.current * -2.2 * (delta / 1000);
    const vf = velocityFactor.get();
    if (vf < 0) directionFactor.current = -1;
    else if (vf > 0) directionFactor.current = 1;
    moveBy += directionFactor.current * moveBy * Math.abs(vf);
    baseX.set(baseX.get() + moveBy);
  });

  const phrase = "DJ Trucks ✦ Dhol ✦ Pyro ✦ Vintage Cars ✦ Safa Teams ✦ Chhatri Lights ✦ ";

  return (
    <section aria-hidden className="overflow-hidden border-y border-black/10 bg-black py-5">
      <motion.div style={{ x }} className="flex whitespace-nowrap will-change-transform">
        {Array.from({ length: 4 }).map((_, i) => (
          <span
            key={i}
            className="shrink-0 font-serif text-2xl font-black uppercase tracking-wider text-[#F8F4EE] md:text-4xl"
          >
            {phrase}
          </span>
        ))}
      </motion.div>
    </section>
  );
}

function InkFillLine({ text }: { text: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "end 0.4"],
  });
  const clipPath = useTransform(scrollYProgress, [0, 1], [
    "inset(0 100% 0 0)",
    "inset(0 0% 0 0)",
  ]);

  return (
    <div ref={ref} className="mx-auto max-w-6xl px-4 py-20 text-center sm:px-6 lg:px-8">
      <div className="relative inline-block">
        <p className="font-serif text-3xl font-black leading-tight tracking-wide text-black/15 sm:text-5xl md:text-6xl">
          {text}
        </p>
        <motion.p
          style={{ clipPath }}
          aria-hidden
          className="absolute inset-0 font-serif text-3xl font-black leading-tight tracking-wide text-[#E70D1D] sm:text-5xl md:text-6xl"
        >
          {text}
        </motion.p>
      </div>
    </div>
  );
}

function SlidingLines() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const x1 = useTransform(scrollYProgress, [0, 1], ["-14%", "2%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["2%", "-14%"]);
  const line = "Royal Entry ✦ Grand Baraat ✦ Unforgettable Moments ✦ Royal Entry ✦ Grand Baraat ✦ ";

  return (
    <section ref={ref} aria-hidden className="select-none space-y-1 overflow-hidden py-14">
      <motion.p
        style={{ x: x1, WebkitTextStroke: "1.5px rgba(0,0,0,0.28)" }}
        className="whitespace-nowrap font-serif text-5xl font-black uppercase leading-none tracking-wide text-transparent md:text-7xl"
      >
        {line}
      </motion.p>
      <motion.p
        style={{ x: x2 }}
        className="whitespace-nowrap font-serif text-5xl font-black uppercase leading-none tracking-wide text-[#E70D1D]/10 md:text-7xl"
      >
        {line}
      </motion.p>
    </section>
  );
}

function FadeUp({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: easeReveal }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function GalleryParallax() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const yLeft = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const yRight = useTransform(scrollYProgress, [0, 1], [-60, 60]);

  const left = GALLERY_IMAGES.slice(0, 3);
  const right = GALLERY_IMAGES.slice(3, 5);

  return (
    <div ref={ref} className="grid grid-cols-2 gap-4 md:gap-6">
      <motion.div style={{ y: yLeft }} className="space-y-4 md:space-y-6">
        {left.map((image, index) => (
          <div
            key={index}
            className="group relative aspect-[4/5] overflow-hidden border border-black/10"
          >
            <Image
              src={image.src}
              alt={image.label}
              fill
              className="object-cover grayscale-[0.3] saturate-[0.82] transition duration-700 group-hover:scale-105 group-hover:grayscale-0 group-hover:saturate-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <span className="absolute bottom-3 left-3 text-[10px] font-bold uppercase tracking-widest text-white">
              {image.label}
            </span>
          </div>
        ))}
      </motion.div>

      <motion.div style={{ y: yRight }} className="space-y-4 pt-10 md:space-y-6 md:pt-16">
        {right.map((image, index) => (
          <div
            key={index}
            className="group relative aspect-[4/5] overflow-hidden border border-black/10"
          >
            <Image
              src={image.src}
              alt={image.label}
              fill
              className="object-cover grayscale-[0.3] saturate-[0.82] transition duration-700 group-hover:scale-105 group-hover:grayscale-0 group-hover:saturate-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <span className="absolute bottom-3 left-3 text-[10px] font-bold uppercase tracking-widest text-white">
              {image.label}
            </span>
          </div>
        ))}
        <div className="group relative aspect-[4/5] overflow-hidden border border-black/10 bg-[#F7F7F7]">
          <Image
            src={GALLERY_VIDEOS[0].thumb}
            alt={GALLERY_VIDEOS[0].label}
            fill
            className="object-cover opacity-50 grayscale-[0.25] saturate-[0.85] transition duration-700 group-hover:scale-105 group-hover:grayscale-0 group-hover:saturate-100"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              animate={{ scale: [1, 1.08, 1] }}
              transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-[#E70D1D]"
            >
              <Play className="ml-0.5 h-5 w-5 fill-white text-white" />
            </motion.div>
          </div>
          <span className="absolute right-3 top-3 bg-black/60 px-2 py-0.5 text-[9px] font-bold text-white">
            {GALLERY_VIDEOS[0].duration}
          </span>
          <span className="absolute bottom-3 left-3 text-[10px] font-bold uppercase tracking-widest text-white">
            {GALLERY_VIDEOS[0].label}
          </span>
        </div>
      </motion.div>
    </div>
  );
}

function VehicleParade() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center 0.55"],
  });
  const smooth = useSpring(scrollYProgress, { stiffness: 60, damping: 18 });
  const carX = useTransform(smooth, [0, 1], ["-90%", "0%"]);
  const truckX = useTransform(smooth, [0, 1], ["90%", "0%"]);
  const labelOpacity = useTransform(smooth, [0.75, 1], [0, 1]);

  return (
    <section ref={ref} className="overflow-hidden border-b border-black/10 bg-[#F8F4EE] py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-1 pb-10 text-center">
          <FadeUp>
            <span className="block text-[9px] font-bold uppercase tracking-widest text-[#E70D1D]">
              The Fleet
            </span>
          </FadeUp>
          <CharReveal
            text="They Arrive. Everyone Notices."
            className="font-serif text-2xl font-black tracking-wide text-black md:text-4xl"
          />
        </div>

        <div className="grid grid-cols-1 items-end gap-10 md:grid-cols-2 md:gap-6">
          <div>
            <motion.div style={{ x: carX }} className="will-change-transform">
              <VintageCarArt className="mx-auto w-full max-w-md" />
            </motion.div>
            <motion.p
              style={{ opacity: labelOpacity }}
              className="pt-4 text-center text-[10px] font-bold uppercase tracking-widest text-black/50"
            >
              Vintage Car Entry
            </motion.p>
          </div>

          <div>
            <motion.div style={{ x: truckX }} className="will-change-transform">
              <DjTruckArt className="mx-auto w-full max-w-lg" />
            </motion.div>
            <motion.p
              style={{ opacity: labelOpacity }}
              className="pt-4 text-center text-[10px] font-bold uppercase tracking-widest text-black/50"
            >
              Double-Decker DJ Truck
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}

function StepsSection() {
  return (
    <section className="mx-auto max-w-7xl space-y-10 px-4 py-20 sm:px-6 lg:px-8">
      <div className="space-y-1 text-center">
        <FadeUp>
          <span className="block text-[9px] font-bold uppercase tracking-widest text-[#E70D1D]">
            Simple Process
          </span>
        </FadeUp>
        <CharReveal
          text="How It Works"
          className="font-serif text-2xl font-black tracking-wide text-black md:text-4xl"
        />
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {STEPS.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60, rotate: index % 2 === 0 ? -1.5 : 1.5 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: index * 0.15, ease: easeReveal }}
            whileHover={{ y: -6 }}
            className="relative border border-black/10 bg-[#F8F4EE] p-7 shadow-sm"
          >
            <span className="absolute -left-2 -top-4 font-serif text-5xl font-black text-black/5">
              0{index + 1}
            </span>
            <div className="relative z-10 mb-4 flex h-11 w-11 items-center justify-center border border-[#E70D1D]/25 text-[#E70D1D]">
              <step.icon className="h-5 w-5" />
            </div>
            <h3 className="relative z-10 font-serif text-lg font-black text-black">
              {step.title}
            </h3>
            <p className="relative z-10 mt-2 text-xs leading-relaxed text-black/50">
              {step.text}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function CtaBanner() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1.25, 1]);

  return (
    <section ref={ref} className="relative overflow-hidden">
      <div className="relative h-[300px] md:h-[380px]">
        <motion.div style={{ scale }} className="absolute inset-0">
          <Image
            src={SITE_IMAGES.ctaBanner}
            alt="Book your baraat celebration"
            fill
            className="object-cover grayscale-[30%]"
          />
        </motion.div>
        <div className="absolute inset-0 bg-[rgba(248,244,238,0.85)]" />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
            <FadeUp className="space-y-2 text-center md:text-left">
              <motion.h2
                initial={{ letterSpacing: "0.3em", opacity: 0 }}
                whileInView={{ letterSpacing: "0.02em", opacity: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 1.1, ease: easeReveal }}
                className="font-serif text-2xl font-black text-black md:text-4xl"
              >
                Ready to Plan Your Baraat?
              </motion.h2>
              <p className="text-xs text-black/60 md:text-sm">
                Tell us your name, event, and number - we&apos;ll take it from there.
              </p>
            </FadeUp>
            <FadeUp delay={0.15}>
              <a
                href="#packages"
                className="mx-auto inline-flex h-12 items-center justify-center gap-2.5 bg-[#E70D1D] px-8 text-xs font-extrabold uppercase tracking-widest text-white transition-all duration-300 hover:bg-[#c40d1a] md:mx-0"
              >
                <MessageCircle className="h-4 w-4" />
                Enquire Now
              </a>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function HomeClient() {
  return (
    <div className="flex-grow">
      <ScrollProgressBar />
      <WhatsAppFloat />
      <RecentlyEnquiredToast />

      <BlueprintHero />

      <StatementSection />

      <VehicleParade />

      <section className="border-y border-black/10 bg-[#F7F7F7]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-12 sm:px-6 md:grid-cols-4 lg:px-8">
          {STATS.map((stat, index) => (
            <FadeUp
              key={index}
              delay={index * 0.1}
              className="flex flex-col items-center gap-2 text-center"
            >
              <div className="flex h-11 w-11 items-center justify-center border border-[#E70D1D]/25 text-[#E70D1D]">
                <stat.icon className="h-5 w-5" />
              </div>
              <span className="font-serif text-2xl font-black text-black md:text-3xl">
                <CountUp
                  value={stat.value}
                  suffix={stat.suffix}
                  decimals={Number.isInteger(stat.value) ? 0 : 1}
                />
              </span>
              <span className="text-[9px] font-bold uppercase tracking-widest text-black/40">
                {stat.label}
              </span>
            </FadeUp>
          ))}
        </div>
      </section>

      <MarqueeBand />

      <section
        id="about"
        className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8"
      >
        <FadeUp className="order-2 lg:order-1">
          <ParallaxImage
            src={SITE_IMAGES.goldCrownMoment}
            alt="PlanMyBaraat team at a wedding celebration"
            speed={0.12}
            className="h-[300px] border border-[#E70D1D]/25 sm:h-[380px] lg:h-[440px]"
          />
        </FadeUp>

        <FadeUp delay={0.15} className="order-1 space-y-6 lg:order-2">
          <span className="block text-[9px] font-bold uppercase tracking-widest text-[#E70D1D]">
            About Us
          </span>
          <CharReveal
            text="Gujarat's Trusted Name in Baraat Celebrations"
            className="font-serif text-2xl font-black tracking-wide text-black md:text-4xl"
          />
          <p className="text-sm leading-relaxed text-black/60">
            PlanMyBaraat by Ronak brings together everything a groom&apos;s entry
            needs - double-decker DJ trucks, vintage cars, dhol artists, pyro
            effects, and safa teams - under one roof, so families can focus on
            celebrating instead of coordinating five different vendors.
          </p>
          <ul className="space-y-3">
            {ABOUT_POINTS.map((point, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1, ease: easeReveal }}
                className="flex items-start gap-3 text-xs text-black/70"
              >
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#E70D1D]" />
                <span>{point}</span>
              </motion.li>
            ))}
          </ul>
        </FadeUp>
      </section>

      <StepsSection />

      <InkFillLine text="Four packages. One unforgettable entry." />

      <HomePackagesSection />

      <SlidingLines />

      <section id="gallery" className="mx-auto max-w-7xl space-y-10 px-4 py-20 sm:px-6 lg:px-8">
        <div className="space-y-1 text-center">
          <FadeUp>
            <span className="block text-[9px] font-bold uppercase tracking-widest text-[#E70D1D]">
              Moments We Love
            </span>
          </FadeUp>
          <CharReveal
            text="From Real Celebrations"
            className="font-serif text-2xl font-black tracking-wide text-black md:text-4xl"
          />
        </div>

        <GalleryParallax />

        <FadeUp className="text-center">
          <a
            href="/gallery"
            className="inline-flex h-12 items-center gap-2.5 border border-black/20 px-8 text-xs font-extrabold uppercase tracking-widest text-black transition-all duration-300 hover:border-[#E70D1D]/50 hover:text-[#E70D1D]"
          >
            View Full Gallery
          </a>
        </FadeUp>
      </section>

      <section id="testimonials" className="mx-auto max-w-7xl space-y-8 px-4 py-20 sm:px-6 lg:px-8">
        <div className="space-y-1 text-center">
          <FadeUp>
            <span className="block text-[9px] font-bold uppercase tracking-widest text-[#E70D1D]">
              What Families Say
            </span>
          </FadeUp>
          <CharReveal
            text="Testimonials"
            className="font-serif text-2xl font-black tracking-wide text-black md:text-4xl"
          />
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {TESTIMONIALS.slice(0, 3).map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 48, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: index * 0.12, ease: easeReveal }}
              className="relative flex flex-col overflow-hidden border border-black/10 bg-[#F8F4EE] p-8 text-center shadow-sm"
            >
              <div className="mb-4 flex items-center justify-center gap-1 text-[#E70D1D]">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <Star key={starIndex} className="h-3.5 w-3.5 fill-current" />
                ))}
              </div>
              <p className="flex-1 font-serif text-xs italic leading-relaxed text-black/80 md:text-sm">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="mt-5 text-[10px] font-bold uppercase tracking-widest text-[#E70D1D]">
                {testimonial.name} • {testimonial.place}
              </div>
            </motion.div>
          ))}
        </div>

        <FadeUp className="text-center">
          <a
            href="/testimonials"
            className="inline-flex h-12 items-center gap-2.5 border border-black/20 px-8 text-xs font-extrabold uppercase tracking-widest text-black transition-all duration-300 hover:border-[#E70D1D]/50 hover:text-[#E70D1D]"
          >
            View All Testimonials
          </a>
        </FadeUp>
      </section>

      <section id="contact" className="mx-auto max-w-7xl space-y-10 px-4 py-20 sm:px-6 lg:px-8">
        <FadeUp className="space-y-1 text-center">
          <span className="block text-[9px] font-bold uppercase tracking-widest text-[#E70D1D]">
            Get In Touch
          </span>
          <CharReveal
            text="Contact Us"
            className="font-serif text-2xl font-black tracking-wide text-black md:text-4xl"
          />
          <p className="mx-auto max-w-2xl pt-2 text-xs text-black/50 md:text-sm">
            Have a question before you enquire? Reach us directly - we usually reply
            within minutes on WhatsApp.
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {CONTACT_DETAILS.map((contact, index) => {
            const Icon = CONTACT_ICONS[contact.iconName];
            return (
              <FadeUp
                key={index}
                delay={index * 0.1}
                className="space-y-3 border border-black/10 bg-[#F8F4EE] p-6 shadow-sm"
              >
                <div className="flex h-10 w-10 items-center justify-center border border-[#E70D1D]/25 text-[#E70D1D]">
                  <Icon className="h-4.5 w-4.5" />
                </div>
                <span className="block text-[9px] font-bold uppercase tracking-widest text-black/40">
                  {contact.label}
                </span>
                {"href" in contact ? (
                  <a
                    href={contact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-xs leading-relaxed text-black/80 transition-colors hover:text-[#E70D1D]"
                  >
                    {contact.value}
                  </a>
                ) : (
                  <p className="text-xs leading-relaxed text-black/80">{contact.value}</p>
                )}
              </FadeUp>
            );
          })}
        </div>

        <FadeUp className="text-center">
          <a
            href="https://wa.me/918830612287"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center gap-2.5 bg-[#E70D1D] px-8 text-xs font-extrabold uppercase tracking-widest text-white transition-all duration-300 hover:bg-[#c40d1a]"
          >
            <MessageCircle className="h-4 w-4" />
            Chat With Us on WhatsApp
          </a>
        </FadeUp>
      </section>

      <CtaBanner />
    </div>
  );
}
