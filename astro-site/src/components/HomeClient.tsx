import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  AnimatePresence,
  animate,
  motion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import confetti from "canvas-confetti";
import { Award, Check, Clock, Mail, MapPin, MessageCircle, PartyPopper, PhoneCall, Play, Star } from "lucide-react";

import { DjTruckArt, VintageCarArt } from "./VehicleArt";
import { ABOUT_POINTS, CONTACT_DETAILS, GALLERY_IMAGES, GALLERY_VIDEOS, TESTIMONIALS } from "../data/siteContent";
import { SITE_IMAGES } from "../data/siteImages";
import { BARAAT_PACKAGES } from "../data/packagesData";

const CONTACT_ICONS = { PhoneCall, Mail, MapPin, Clock };
const easeReveal = [0.16, 1, 0.3, 1] as const;

const STATS = [
  { icon: PartyPopper, value: 500, suffix: "+", label: "Baraats Organized" },
  { icon: MapPin, value: 6, suffix: "", label: "Cities Covered" },
  { icon: Star, value: 4.9, suffix: "/5", label: "Average Rating" },
  { icon: Award, value: 5, suffix: " Yrs", label: "In Business" },
];

const ENQUIRY_TOASTS = [
  { name: "Priya", city: "Ahmedabad", ago: "2 hrs ago", interest: "Rajwada Package" },
  { name: "Kunal", city: "Vadodara", ago: "37 mins ago", interest: "DJ Truck + Dhol" },
  { name: "Neha", city: "Surat", ago: "1 hr ago", interest: "Vintage Car Entry" },
];

const STEPS = [
  {
    title: "Pick Your Package",
    text: "Choose the package that fits your family style, venue entry flow and guest count.",
  },
  {
    title: "Share Venue & Budget",
    text: "Send venue name, city and budget range on WhatsApp so we guide the right setup faster.",
  },
  {
    title: "Lock the Baraat",
    text: "We align the mini baraat truck, dhol, safa team, timing and effects into one managed experience.",
  },
];

const BLUEPRINT_LABELS = [
  { title: "Mini DJ Truck", note: "double decker sound stage", className: "right-[10%] top-[18%]" },
  { title: "Vintage Car", note: "groom arrival vehicle", className: "left-[8%] bottom-[22%]" },
  { title: "Dhol + Safa", note: "live rhythm and styling", className: "left-[14%] top-[20%]" },
];

function CountUp({ value, suffix, decimals = 0 }: { value: number; suffix: string; decimals?: number }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const node = ref.current;
    const controls = animate(0, value, {
      duration: 1.6,
      ease: easeReveal,
      onUpdate: (latest) => {
        node.textContent = latest.toFixed(decimals) + suffix;
      },
    });
    return () => controls.stop();
  }, [decimals, suffix, value]);

  return <span ref={ref}>0{suffix}</span>;
}

function FadeUp({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: easeReveal }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Word({ children, progress, range }: { children: string; progress: MotionValue<number>; range: [number, number] }) {
  const opacity = useTransform(progress, range, [0.12, 1]);
  return <motion.span style={{ opacity }} className="mr-[0.28em] inline-block text-[#F8F4EE]">{children}</motion.span>;
}

function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30 });
  return <motion.div style={{ scaleX }} className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-[#E70D1D]" />;
}

function RecentlyEnquiredToast() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => setIndex((value) => (value + 1) % ENQUIRY_TOASTS.length), 18000);
    return () => window.clearInterval(interval);
  }, []);

  const item = ENQUIRY_TOASTS[index];

  return (
    <div className="fixed bottom-6 left-6 z-40 hidden md:block">
      <AnimatePresence mode="wait">
        <motion.div
          key={`${item.name}-${item.city}`}
          initial={{ opacity: 0, x: -18, y: 12 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, x: -12, y: 8 }}
          transition={{ duration: 0.35 }}
          className="w-[270px] rounded-[24px] border border-white/30 bg-white/55 p-4 text-black shadow-[0_22px_50px_rgba(0,0,0,0.14)] backdrop-blur-xl"
        >
          <span className="text-[9px] font-bold uppercase tracking-[0.24em] text-[#E70D1D]">Recently Enquired</span>
          <p className="mt-2 text-sm font-semibold text-black/80">{item.name} from {item.city} enquired {item.ago}</p>
          <p className="mt-1 text-xs text-black/55">{item.interest}</p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function BlueprintHero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const titleY = useTransform(scrollYProgress, [0, 0.3], [0, -24]);
  const cardOpacity = useTransform(scrollYProgress, [0.15, 0.45], [0, 1]);
  const routePath = useTransform(scrollYProgress, [0.02, 0.3], [0, 1]);
  const carX = useTransform(scrollYProgress, [0.05, 0.45], ["-18%", "0%"]);
  const truckX = useTransform(scrollYProgress, [0.12, 0.52], ["20%", "0%"]);
  const labelOpacity = useTransform(scrollYProgress, [0.2, 0.42], [0, 1]);

  return (
    <section ref={ref} className="relative h-[260vh]">
      <div className="sticky top-0 h-screen overflow-hidden bg-[#07111c]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(68,118,173,0.28),transparent_42%),linear-gradient(180deg,#07111c_0%,#0b1b2a_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(112,167,227,0.11)_1px,transparent_1px),linear-gradient(90deg,rgba(112,167,227,0.11)_1px,transparent_1px)] bg-[size:42px_42px]" />

        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col px-4 pt-12 sm:px-6 lg:px-8">
          <motion.div style={{ y: titleY }} className="mx-auto max-w-4xl text-center">
            <div className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.28em] text-[#C9E7FF] backdrop-blur-xl">
              The Real PlanMyBaraat Scroll Experience
            </div>
            <h1 className="mt-6 font-serif text-4xl font-black leading-[1.02] tracking-wide text-white sm:text-5xl md:text-7xl">
              Plan the procession.
              <br />
              <span className="text-[#F6D38E]">Then watch it come alive.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-sm leading-relaxed text-white/68 md:text-base">
              Your public Astro site is back to the scrolling blueprint story with the mini baraat truck,
              route lines, moving vehicle art and a more memorable baraat-first feel.
            </p>
          </motion.div>

          <div className="relative mt-10 flex-1">
            <motion.div style={{ opacity: cardOpacity }} className="absolute left-0 top-0 hidden w-[280px] rounded-[28px] border border-white/25 bg-white/12 p-5 text-white shadow-[0_25px_60px_rgba(0,0,0,0.22)] backdrop-blur-2xl lg:block">
              <div className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#C9E7FF]">Planner View</div>
              <div className="mt-4 space-y-3 text-sm text-white/80">
                <p>Mini DJ truck route locked</p>
                <p>Vintage car staged for groom entry</p>
                <p>Dhol and safa flow mapped for venue movement</p>
              </div>
            </motion.div>

            <motion.svg viewBox="0 0 1200 640" className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid meet">
              <motion.path
                d="M 98 490 C 262 454 396 464 520 430 C 670 388 760 330 910 300 C 1010 282 1080 286 1140 270"
                fill="none"
                stroke="#86C8FF"
                strokeWidth="4"
                strokeDasharray="10 14"
                strokeLinecap="round"
                style={{ pathLength: routePath }}
              />
            </motion.svg>

            <motion.div style={{ x: carX }} className="absolute bottom-[16%] left-[3%] w-[34%] rounded-[30px] border border-white/10 bg-white/5 p-4 backdrop-blur-md">
              <VintageCarArt className="w-full opacity-95" />
            </motion.div>

            <motion.div style={{ x: truckX }} className="absolute bottom-[2%] right-[-4%] w-[72%] rounded-[30px] border border-white/10 bg-white/5 p-4 backdrop-blur-md md:right-[2%] md:w-[54%]">
              <DjTruckArt className="w-full opacity-95" />
            </motion.div>

            <motion.div style={{ opacity: labelOpacity }} className="absolute inset-0 hidden md:block">
              {BLUEPRINT_LABELS.map((label) => (
                <div key={label.title} className={`absolute ${label.className} rounded-[18px] border border-white/20 bg-white/10 px-4 py-3 text-white shadow-[0_14px_30px_rgba(0,0,0,0.18)] backdrop-blur-xl`}>
                  <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#C9E7FF]">{label.title}</p>
                  <p className="mt-1 text-xs text-white/60">{label.note}</p>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="absolute inset-x-0 bottom-24 z-20 px-4 text-center">
            <a
              href="#packages"
              onClick={() =>
                confetti({ particleCount: 70, spread: 76, origin: { y: 0.72 }, colors: ["#E70D1D", "#C9A24B", "#F8F4EE"] })
              }
              className="inline-flex h-12 items-center gap-2.5 rounded-full bg-[#E70D1D] px-8 text-xs font-extrabold uppercase tracking-widest text-white transition-all duration-300 hover:bg-[#c40d1a]"
            >
              <MessageCircle className="h-4 w-4" />
              Explore Packages
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatementSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.9", "end 0.35"] });
  const words = "One truck. Forty dhol beats. A thousand lights. Your entry becomes the story every guest tells for years.".split(" ");

  return (
    <section ref={ref} className="relative h-[160vh] bg-black">
      <div className="sticky top-0 flex h-screen items-center justify-center px-6">
        <p className="mx-auto max-w-4xl text-center font-serif text-3xl font-black leading-snug tracking-wide sm:text-4xl md:text-6xl">
          {words.map((word, i) => (
            <Word key={i} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]}>
              {word}
            </Word>
          ))}
        </p>
      </div>
    </section>
  );
}

function PackagesSection() {
  return (
    <section id="packages" className="mx-auto max-w-7xl space-y-10 px-4 py-20 sm:px-6 lg:px-8">
      <div className="space-y-1 text-center">
        <FadeUp>
          <span className="block text-[9px] font-bold uppercase tracking-widest text-[#E70D1D]">Baraat Packages</span>
        </FadeUp>
        <FadeUp>
          <h2 className="font-serif text-2xl font-black tracking-wide text-black md:text-4xl">Four packages. One unforgettable entry.</h2>
        </FadeUp>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        {BARAAT_PACKAGES.map((pkg, index) => (
          <FadeUp key={pkg.id} delay={index * 0.08}>
            <div className={`relative flex h-full flex-col rounded-[30px] border p-7 shadow-[0_16px_38px_-26px_rgba(0,0,0,0.35)] ${index === 2 ? "border-[#E70D1D]/30 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(253,244,247,0.96))]" : "border-black/10 bg-[#F8F4EE]"}`}>
              {index === 2 ? <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#E70D1D] px-4 py-1.5 text-[9px] font-black uppercase tracking-[0.22em] text-white">Most Popular</span> : null}
              <h3 className="font-serif text-2xl font-black text-black">{pkg.name}</h3>
              <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.22em] text-[#E70D1D]">{pkg.tagline}</p>
              <p className="mt-3 text-xs leading-relaxed text-black/60">{pkg.description}</p>
              <ul className="mt-5 flex-1 space-y-2.5">
                {pkg.features.slice(0, 6).map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-xs leading-relaxed text-black/75">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#E70D1D]" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-7 flex flex-col gap-3">
                <a href={`/packages/${pkg.id}`} className="inline-flex h-11 items-center justify-center border border-black/15 px-5 text-[11px] font-extrabold uppercase tracking-widest text-black transition-all duration-300 hover:border-[#E70D1D]/45 hover:text-[#E70D1D]">View Details</a>
                <a href={`https://wa.me/918830612287?text=${encodeURIComponent(`Hi PlanMyBaraat, I want details for ${pkg.name}. My venue name is ______, city is ______ and my budget range is ______.`)}`} target="_blank" rel="noopener noreferrer" className="inline-flex h-12 items-center justify-center gap-2.5 bg-[#E70D1D] px-5 text-xs font-extrabold uppercase tracking-widest text-white transition-all duration-300 hover:bg-[#c40d1a]">
                  <MessageCircle className="h-4 w-4" />
                  Enquire on WhatsApp
                </a>
              </div>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}

function GallerySection() {
  return (
    <section className="mx-auto max-w-7xl space-y-10 px-4 py-20 sm:px-6 lg:px-8">
      <div className="space-y-1 text-center">
        <FadeUp>
          <span className="block text-[9px] font-bold uppercase tracking-widest text-[#E70D1D]">Moments We Love</span>
        </FadeUp>
        <FadeUp>
          <h2 className="font-serif text-2xl font-black tracking-wide text-black md:text-4xl">From Real Celebrations</h2>
        </FadeUp>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {GALLERY_IMAGES.slice(0, 5).map((image, index) => (
          <FadeUp key={image.label} delay={index * 0.05} className={index === 0 ? "md:col-span-2" : ""}>
            <div className={`group relative overflow-hidden border border-black/10 ${index === 0 ? "aspect-[16/9]" : "aspect-[4/5]"}`}>
              <img src={image.src} alt={image.label} className="h-full w-full object-cover grayscale-[0.12] transition duration-700 group-hover:scale-105 group-hover:grayscale-0" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <span className="absolute bottom-3 left-3 text-[10px] font-bold uppercase tracking-widest text-white">{image.label}</span>
            </div>
          </FadeUp>
        ))}
        <FadeUp className="group relative aspect-[4/5] overflow-hidden border border-black/10 bg-[#F7F7F7]">
          <img src={GALLERY_VIDEOS[0].thumb} alt={GALLERY_VIDEOS[0].label} className="h-full w-full object-cover opacity-50 grayscale-[0.25]" loading="lazy" />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div animate={{ scale: [1, 1.08, 1] }} transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }} className="flex h-12 w-12 items-center justify-center rounded-full bg-[#E70D1D]">
              <Play className="ml-0.5 h-5 w-5 fill-white text-white" />
            </motion.div>
          </div>
          <span className="absolute bottom-3 left-3 text-[10px] font-bold uppercase tracking-widest text-white">{GALLERY_VIDEOS[0].label}</span>
        </FadeUp>
      </div>
    </section>
  );
}

export default function HomeClient() {
  return (
    <div className="flex-grow bg-[linear-gradient(180deg,#f8f4ee_0%,#ffffff_18%,#f8f4ee_100%)]">
      <ScrollProgressBar />
      <RecentlyEnquiredToast />
      <BlueprintHero />
      <StatementSection />

      <section className="border-y border-black/10 bg-[#F7F7F7]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-12 sm:px-6 md:grid-cols-4 lg:px-8">
          {STATS.map((stat, index) => (
            <FadeUp key={index} delay={index * 0.08} className="flex flex-col items-center gap-2 text-center">
              <div className="flex h-11 w-11 items-center justify-center border border-[#E70D1D]/25 text-[#E70D1D]">
                <stat.icon className="h-5 w-5" />
              </div>
              <span className="font-serif text-2xl font-black text-black md:text-3xl">
                <CountUp value={stat.value} suffix={stat.suffix} decimals={Number.isInteger(stat.value) ? 0 : 1} />
              </span>
              <span className="text-[9px] font-bold uppercase tracking-widest text-black/40">{stat.label}</span>
            </FadeUp>
          ))}
        </div>
      </section>

      <section className="overflow-hidden border-b border-black/10 bg-[#F8F4EE] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-1 pb-10 text-center">
            <FadeUp>
              <span className="block text-[9px] font-bold uppercase tracking-widest text-[#E70D1D]">The Fleet</span>
            </FadeUp>
            <FadeUp>
              <h2 className="font-serif text-2xl font-black tracking-wide text-black md:text-4xl">They Arrive. Everyone Notices.</h2>
            </FadeUp>
          </div>

          <div className="grid grid-cols-1 items-end gap-10 md:grid-cols-2 md:gap-6">
            <FadeUp><VintageCarArt className="mx-auto w-full max-w-md" /></FadeUp>
            <FadeUp delay={0.1}><DjTruckArt className="mx-auto w-full max-w-lg" /></FadeUp>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8">
        <FadeUp className="order-2 lg:order-1">
          <div className="overflow-hidden border border-[#E70D1D]/25">
            <img src={SITE_IMAGES.goldCrownMoment} alt="PlanMyBaraat team at a wedding celebration" className="h-[300px] w-full object-cover sm:h-[380px] lg:h-[440px]" loading="lazy" />
          </div>
        </FadeUp>

        <FadeUp delay={0.12} className="order-1 space-y-6 lg:order-2">
          <span className="block text-[9px] font-bold uppercase tracking-widest text-[#E70D1D]">About Us</span>
          <h2 className="font-serif text-2xl font-black tracking-wide text-black md:text-4xl">Gujarat&apos;s Trusted Name in Baraat Celebrations</h2>
          <p className="text-sm leading-relaxed text-black/60">
            PlanMyBaraat brings together the mini baraat truck, vintage car, dhol artists, pyro effects and safa teams
            under one roof so families can enjoy the celebration instead of coordinating multiple vendors.
          </p>
          <ul className="space-y-3">
            {ABOUT_POINTS.map((point, index) => (
              <li key={index} className="flex items-start gap-3 text-xs text-black/70">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#E70D1D]" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </FadeUp>
      </section>

      <section className="mx-auto max-w-7xl space-y-10 px-4 py-20 sm:px-6 lg:px-8">
        <div className="space-y-1 text-center">
          <FadeUp>
            <span className="block text-[9px] font-bold uppercase tracking-widest text-[#E70D1D]">Simple Process</span>
          </FadeUp>
          <FadeUp>
            <h2 className="font-serif text-2xl font-black tracking-wide text-black md:text-4xl">How It Works</h2>
          </FadeUp>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {STEPS.map((step, index) => (
            <FadeUp key={step.title} delay={index * 0.1}>
              <div className="relative border border-black/10 bg-[#F8F4EE] p-7 shadow-sm">
                <span className="absolute -left-2 -top-4 font-serif text-5xl font-black text-black/5">0{index + 1}</span>
                <h3 className="relative z-10 font-serif text-lg font-black text-black">{step.title}</h3>
                <p className="relative z-10 mt-3 text-xs leading-relaxed text-black/55">{step.text}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      <PackagesSection />
      <GallerySection />

      <section id="testimonials" className="mx-auto max-w-7xl space-y-8 px-4 py-20 sm:px-6 lg:px-8">
        <div className="space-y-1 text-center">
          <FadeUp>
            <span className="block text-[9px] font-bold uppercase tracking-widest text-[#E70D1D]">What Families Say</span>
          </FadeUp>
          <FadeUp>
            <h2 className="font-serif text-2xl font-black tracking-wide text-black md:text-4xl">Testimonials</h2>
          </FadeUp>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {TESTIMONIALS.slice(0, 3).map((testimonial, index) => (
            <FadeUp key={testimonial.name} delay={index * 0.08}>
              <div className="relative flex h-full flex-col overflow-hidden border border-black/10 bg-[#F8F4EE] p-8 text-center shadow-sm">
                <div className="mb-4 flex items-center justify-center gap-1 text-[#E70D1D]">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star key={starIndex} className="h-3.5 w-3.5 fill-current" />
                  ))}
                </div>
                <p className="flex-1 font-serif text-xs italic leading-relaxed text-black/80 md:text-sm">&quot;{testimonial.quote}&quot;</p>
                <div className="mt-5 text-[10px] font-bold uppercase tracking-widest text-[#E70D1D]">{testimonial.name} • {testimonial.place}</div>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl space-y-10 px-4 py-20 sm:px-6 lg:px-8">
        <FadeUp className="space-y-1 text-center">
          <span className="block text-[9px] font-bold uppercase tracking-widest text-[#E70D1D]">Get In Touch</span>
          <h2 className="font-serif text-2xl font-black tracking-wide text-black md:text-4xl">Contact Us</h2>
          <p className="mx-auto max-w-2xl pt-2 text-xs text-black/50 md:text-sm">
            Share your venue name, city and budget range. We usually reply fast on WhatsApp.
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {CONTACT_DETAILS.map((contact, index) => {
            const Icon = CONTACT_ICONS[contact.iconName];
            return (
              <FadeUp key={index} delay={index * 0.08}>
                <div className="space-y-3 border border-black/10 bg-[#F8F4EE] p-6 shadow-sm">
                  <div className="flex h-10 w-10 items-center justify-center border border-[#E70D1D]/25 text-[#E70D1D]">
                    <Icon className="h-4.5 w-4.5" />
                  </div>
                  <span className="block text-[9px] font-bold uppercase tracking-widest text-black/40">{contact.label}</span>
                  {"href" in contact ? (
                    <a href={contact.href} target="_blank" rel="noopener noreferrer" className="block text-xs leading-relaxed text-black/80 transition-colors hover:text-[#E70D1D]">
                      {contact.value}
                    </a>
                  ) : (
                    <p className="text-xs leading-relaxed text-black/80">{contact.value}</p>
                  )}
                </div>
              </FadeUp>
            );
          })}
        </div>
      </section>
    </div>
  );
}
