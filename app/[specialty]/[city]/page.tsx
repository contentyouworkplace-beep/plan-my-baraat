import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { CATEGORIES } from "@/lib/data/categories";
import { CITIES } from "@/lib/data/cities";
import {
  slugToSpecialty,
  slugToCity,
  specialtyToSlug,
  cityToSlug,
  generatePageTitle,
  generateMetaDescription,
  generateBodyCopy,
  generateFAQs,
  generateJsonLdFAQ,
  generateJsonLdBreadcrumb,
  generateJsonLdLocalBusiness,
} from "@/lib/seoHelpers";
import { getVendorImages } from "@/lib/data/vendorImages";
import WhatsAppInquiryForm from "@/components/WhatsAppInquiryForm";
import FAQAccordion from "@/components/FAQAccordion";

// ─── Static Params (top 300 cities × all specialties) ─────────────────────────
export async function generateStaticParams() {
  // Return empty array to generate pages dynamically on-demand,
  // making builds and deployments extremely fast.
  return [];
}

// ─── Metadata ─────────────────────────────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: { specialty: string; city: string };
}): Promise<Metadata> {
  const specialty = slugToSpecialty(params.specialty);
  const city = slugToCity(params.city);
  if (!specialty || !city) return {};

  const title = generatePageTitle(specialty, city);
  const description = generateMetaDescription(specialty, city);
  const canonical = `https://planmybaraat.com/${params.specialty}/${params.city}`;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "PlanMyBaraat",
      images: [{ url: getVendorImages(specialty.id)[0], width: 900, height: 600 }],
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [getVendorImages(specialty.id)[0]],
    },
  };
}

// ─── Page Component ────────────────────────────────────────────────────────────
export default function VendorCityPage({
  params,
}: {
  params: { specialty: string; city: string };
}) {
  const specialty = slugToSpecialty(params.specialty);
  const city = slugToCity(params.city);

  if (!specialty || !city) notFound();

  const bodyCopy = generateBodyCopy(specialty, city);
  const faqs = generateFAQs(specialty, city);
  const images = getVendorImages(specialty.id);

  // Related cities (same state, excluding current)
  const relatedCities = CITIES.filter(
    (c) =>
      !c.isInternational &&
      c.state === city.state &&
      c.name.toLowerCase() !== city.name.toLowerCase()
  ).slice(0, 10);

  // Related specialties (same group)
  const relatedSpecialties = CATEGORIES.filter(
    (c) => c.group === specialty.group && c.id !== specialty.id
  ).slice(0, 8);

  const jsonLdFaq = generateJsonLdFAQ(faqs);
  const jsonLdBreadcrumb = generateJsonLdBreadcrumb(specialty, city);
  const jsonLdBusiness = generateJsonLdLocalBusiness(specialty, city);

  return (
    <>
      {/* ── JSON-LD Schema ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdFaq }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdBreadcrumb }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdBusiness }}
      />

      {/* ── Top Navbar ── */}
      <nav className="lp-nav">
        <Link href="/" className="lp-nav-logo">
          <span className="lp-nav-logo-icon">👑</span>
          <span>PlanMyBaraat</span>
        </Link>
        <a
          href="https://wa.me/918830612287"
          target="_blank"
          rel="noopener noreferrer"
          className="lp-nav-cta"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          WhatsApp Us
        </a>
      </nav>

      {/* ── Breadcrumb ── */}
      <nav className="lp-breadcrumb" aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <span>/</span>
        <Link href={`/${params.specialty}`}>{specialty.name}</Link>
        <span>/</span>
        <span style={{ color: "#1c1917", fontWeight: 600 }}>{city.name}</span>
      </nav>

      {/* ══ HERO ══════════════════════════════════════════════════════════════ */}
      <section className="lp-hero">
        {/* Left: Text + Form */}
        <div className="lp-hero-left">
          <div className="lp-hero-badge">
            ✦ {specialty.group} · {city.name}
          </div>

          <h1 className="lp-hero-h1">
            Best <span>{specialty.name}</span>
            <br />
            for Baraat in {city.name}
          </h1>

          <p className="lp-hero-sub">
            {city.description || `Connect with verified ${specialty.name.toLowerCase()} vendors for your grand Baraat in ${city.name}. Free inquiry, instant quotes.`}
          </p>

          {/* Stats row */}
          <div className="lp-hero-stats">
            <div className="lp-hero-stat">
              <span className="lp-hero-stat-val">500+</span>
              <span className="lp-hero-stat-label">Inquiries Served</span>
            </div>
            <div className="lp-hero-stat-divider" />
            <div className="lp-hero-stat">
              <span className="lp-hero-stat-val">4.9★</span>
              <span className="lp-hero-stat-label">Avg Rating</span>
            </div>
            <div className="lp-hero-stat-divider" />
            <div className="lp-hero-stat">
              <span className="lp-hero-stat-val">2hr</span>
              <span className="lp-hero-stat-label">Response Time</span>
            </div>
          </div>

          {/* WhatsApp Form inline for desktop */}
          <div className="lp-hero-form-desktop">
            <WhatsAppInquiryForm
              specialtyName={specialty.name}
              cityName={city.name}
              variant="hero"
            />
          </div>
        </div>

        {/* Right: Hero image */}
        <div className="lp-hero-image-wrap">
          <img
            src={images[0]}
            alt={`${specialty.name} in ${city.name} - PlanMyBaraat`}
            className="lp-hero-image"
            loading="eager"
          />
          <div className="lp-hero-image-overlay" />
          <div className="lp-hero-image-badge">
            <span>🎊</span>
            <span>Verified Vendors</span>
          </div>
        </div>
      </section>

      {/* Mobile-only WhatsApp form after hero image */}
      <section className="lp-hero-form-mobile">
        <WhatsAppInquiryForm
          specialtyName={specialty.name}
          cityName={city.name}
          variant="hero"
        />
      </section>

      {/* ══ TRUST BAR ═════════════════════════════════════════════════════════ */}
      <div className="lp-trust-bar">
        <div className="lp-trust-item">100% Free Inquiry</div>
        <div className="lp-trust-item">Verified Vendors Only</div>
        <div className="lp-trust-item">No Hidden Commission</div>
        <div className="lp-trust-item">Instant WhatsApp Quotes</div>
        <div className="lp-trust-item">Pan India Coverage</div>
      </div>

      {/* ══ ABOUT / CONTENT ════════════════════════════════════════════════════ */}
      <section className="lp-about">
        <h2>
          {specialty.name} in {city.name} – Everything You Need to Know
        </h2>
        {bodyCopy.map((para, idx) => (
          <p key={idx}>{para}</p>
        ))}
      </section>

      {/* ══ GALLERY ════════════════════════════════════════════════════════════ */}
      <section className="lp-gallery">
        <h2>{specialty.name} — Inspiration Gallery</h2>
        <div className="lp-gallery-grid">
          {images.map((src, idx) => (
            <div
              key={idx}
              className="lp-gallery-item"
              style={idx === 0 ? { gridColumn: "span 2" } : {}}
            >
              <img
                src={src}
                alt={`${specialty.name} ${idx + 1} in ${city.name}`}
                loading="lazy"
              />
              <div className="lp-gallery-overlay">
                <span className="lp-gallery-overlay-text">{specialty.name}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══ USP CARDS ══════════════════════════════════════════════════════════ */}
      <section className="lp-usp">
        <h2>Why Book Through PlanMyBaraat?</h2>
        <div className="lp-usp-grid">
          <div className="lp-usp-card">
            <div className="lp-usp-icon">💬</div>
            <h3>Free WhatsApp Inquiry</h3>
            <p>No signup needed. Just send your requirement and get vendor options in under 2 hours.</p>
          </div>
          <div className="lp-usp-card">
            <div className="lp-usp-icon">✅</div>
            <h3>Verified Professionals</h3>
            <p>Every {specialty.name.toLowerCase()} vendor is manually verified with past client reviews.</p>
          </div>
          <div className="lp-usp-card">
            <div className="lp-usp-icon">💰</div>
            <h3>Best Price Guarantee</h3>
            <p>We negotiate on your behalf. You always get the most competitive rates in {city.name}.</p>
          </div>
          <div className="lp-usp-card">
            <div className="lp-usp-icon">🎯</div>
            <h3>100% Customized</h3>
            <p>Each vendor package is tailored to your guest count, budget, and wedding vision.</p>
          </div>
        </div>
      </section>

      {/* ══ FAQ ════════════════════════════════════════════════════════════════ */}
      <section className="lp-faq">
        <h2>Frequently Asked Questions</h2>
        <FAQAccordion faqs={faqs} />
      </section>

      {/* ══ BOTTOM CTA ═════════════════════════════════════════════════════════ */}
      <section className="lp-bottom-cta">
        <h2>Still Looking for {specialty.name} in {city.name}?</h2>
        <p>
          Send us your requirement on WhatsApp. Our team personally curates the best vendor
          shortlist for you — no middlemen, no delay.
        </p>
        <WhatsAppInquiryForm
          specialtyName={specialty.name}
          cityName={city.name}
          variant="bottom"
        />
      </section>

      {/* ══ RELATED SPECIALTIES ════════════════════════════════════════════════ */}
      {relatedSpecialties.length > 0 && (
        <section className="lp-related">
          <h3>Other {specialty.group} Services in {city.name}</h3>
          <div className="lp-related-links">
            {relatedSpecialties.map((s) => (
              <Link
                key={s.id}
                href={`/${specialtyToSlug(s)}/${params.city}`}
                className="lp-related-link"
              >
                {s.name}
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* ══ RELATED CITIES ═════════════════════════════════════════════════════ */}
      {relatedCities.length > 0 && (
        <section className="lp-related" style={{ background: "#fff" }}>
          <h3>{specialty.name} in Other Cities of {city.state}</h3>
          <div className="lp-related-links">
            {relatedCities.map((c) => (
              <Link
                key={c.name}
                href={`/${params.specialty}/${cityToSlug(c)}`}
                className="lp-related-link"
              >
                {c.name}
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* ══ FOOTER ═════════════════════════════════════════════════════════════ */}
      <footer className="lp-footer">
        <div className="lp-footer-inner">
          <div className="lp-footer-brand">
            <span className="lp-footer-logo">👑 PlanMyBaraat</span>
            <p>India&apos;s #1 Royal Baraat Planning Platform</p>
          </div>
          <div className="lp-footer-links">
            <Link href="/">Home</Link>
            <a href="https://wa.me/918830612287" target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
          </div>
        </div>
        <div className="lp-footer-copy">
          © {new Date().getFullYear()} PlanMyBaraat. All rights reserved.
        </div>
      </footer>

      {/* ══ MOBILE STICKY WA BUTTON ════════════════════════════════════════════ */}
      <a
        href="https://wa.me/918830612287"
        target="_blank"
        rel="noopener noreferrer"
        className="wa-float-btn"
        aria-label="Chat on WhatsApp"
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </>
  );
}
