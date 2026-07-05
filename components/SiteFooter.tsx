import Image from "next/image";

export default function SiteFooter() {
  return (
    <footer className="hidden md:block bg-black text-white/40 border-t border-[#C9A24B]/15 py-10 text-center">
      <Image src="/logo.png" alt="PlanMyBaraat" width={140} height={38} className="h-8 w-auto object-contain mx-auto mb-3" />
      <p className="text-[10px] uppercase tracking-widest font-semibold">
        © 2026 PlanMyBaraat Corp • Delhi • Mumbai • Ahmedabad • Surat • Vadodara • Bangalore
      </p>
    </footer>
  );
}
