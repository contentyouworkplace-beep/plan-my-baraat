import Image from "next/image";
import Link from "next/link";
import { PhoneCall, Mail, MapPin } from "lucide-react";

const QUICK_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/gallery", label: "Gallery" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact Us" },
];

const PACKAGE_LINKS = [
  { href: "/#packages", label: "Raj Tilak Package" },
  { href: "/#packages", label: "Rajwada Package" },
  { href: "/#packages", label: "Maharaja Package" },
  { href: "/#packages", label: "Signature Package" },
];

export default function SiteFooter() {
  return (
    <footer className="bg-white text-black/50 border-t border-[#E70D1D]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="space-y-4">
          <Image src="/logo.png" alt="PlanMyBaraat" width={150} height={40} className="h-9 w-auto object-contain" />
          <p className="text-xs leading-relaxed">
            Gujarat&apos;s trusted baraat specialists — double-decker DJ trucks, vintage cars, dhol, pyro effects,
            and safa teams, delivered as ready-made royal packages.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-[10px] uppercase tracking-widest font-bold text-black">Quick Links</h3>
          <ul className="space-y-2.5">
            {QUICK_LINKS.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className="text-xs hover:text-[#E70D1D] transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-[10px] uppercase tracking-widest font-bold text-black">Packages</h3>
          <ul className="space-y-2.5">
            {PACKAGE_LINKS.map((l, i) => (
              <li key={i}>
                <Link href={l.href} className="text-xs hover:text-[#E70D1D] transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-[10px] uppercase tracking-widest font-bold text-black">Contact</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-2.5 text-xs">
              <PhoneCall className="h-3.5 w-3.5 mt-0.5 shrink-0 text-[#E70D1D]" />
              <a href="tel:+918830612287" className="hover:text-[#E70D1D] transition-colors">+91 88306 12287</a>
            </li>
            <li className="flex items-start gap-2.5 text-xs">
              <Mail className="h-3.5 w-3.5 mt-0.5 shrink-0 text-[#E70D1D]" />
              <a href="https://www.planmybaraat.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#E70D1D] transition-colors">www.planmybaraat.com</a>
            </li>
            <li className="flex items-start gap-2.5 text-xs">
              <MapPin className="h-3.5 w-3.5 mt-0.5 shrink-0 text-[#E70D1D]" />
              <span>Vadodara, Gujarat – 391110</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-black/10 py-6 text-center">
        <p className="text-[10px] uppercase tracking-widest font-semibold">
          © 2026 PlanMyBaraat Corp • Delhi • Mumbai • Ahmedabad • Surat • Vadodara • Bangalore
        </p>
      </div>
    </footer>
  );
}
