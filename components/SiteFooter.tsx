import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, PhoneCall } from "lucide-react";

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
    <>
      <footer className="border-t border-black/8 bg-[#F8F4EE] text-black/50">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8">
          <div className="space-y-4">
            <Image src="/logo.png" alt="PlanMyBaraat" width={150} height={40} className="h-9 w-auto object-contain" />
            <p className="text-xs leading-relaxed">
              Gujarat&apos;s trusted baraat specialists — double-decker DJ trucks, vintage cars,
              dhol, pyro effects, and safa teams, delivered as ready-made royal packages.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-black">Quick Links</h3>
            <ul className="space-y-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-xs transition-colors hover:text-[#9F1239]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-black">Packages</h3>
            <ul className="space-y-2.5">
              {PACKAGE_LINKS.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-xs transition-colors hover:text-[#9F1239]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-black">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-xs">
                <PhoneCall className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#9F1239]" />
                <a href="tel:+918830612287" className="transition-colors hover:text-[#9F1239]">
                  +91 88306 12287
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-xs">
                <Mail className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#9F1239]" />
                <a
                  href="https://www.planmybaraat.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-[#9F1239]"
                >
                  www.planmybaraat.com
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-xs">
                <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#9F1239]" />
                <span>Vadodara, Gujarat - 391110</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-black/10 py-6 text-center">
          <p className="text-[10px] font-semibold uppercase tracking-widest">
            © 2026 PlanMyBaraat Corp • Delhi • Mumbai • Ahmedabad • Surat • Vadodara • Bangalore
          </p>
        </div>
      </footer>
    </>
  );
}
