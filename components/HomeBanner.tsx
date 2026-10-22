import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

/* ── rice bag placeholder data ─────────────────────────────────────────────
   Replace src with real bag images once available, e.g. /bkn/bag1.png
   The colors + labels below mirror the 4 bags visible in the screenshot
──────────────────────────────────────────────────────────────────────────── */
const bags = [
  { src: "/bkn/pack-1.png", alt: "BNK Basmati Rice", accent: "#D4230A" },
  { src: "/bkn/pack-2.png", alt: "BNK Non-Basmati Rice", accent: "#2A7A2A" },
  { src: "/bkn/pack-3.png", alt: "BNK Parboiled Rice", accent: "#1A55A0" },
  { src: "/bkn/pack-4.png", alt: "BNK Sona Masoori Rice", accent: "#D4A800" },
];

/* ── Bag card ──────────────────────────────────────────────────────────────
   Fully responsive across mobile, tablet and desktop.
   Desktop preserves exact 135px x 170px dimensions as designed.
──────────────────────────────────────────────────────────────────────────── */
function BagCard({ src, alt }: { src: string; alt: string; accent?: string }) {
  return (
    <div
      className="relative shrink-0 rounded-md overflow-hidden transition-transform duration-200 hover:-translate-y-1 w-[72px] h-[92px] min-[380px]:w-[78px] min-[380px]:h-[100px] min-[430px]:w-[88px] min-[430px]:h-[112px] sm:w-[110px] sm:h-[140px] md:w-[125px] md:h-[158px] lg:w-[105px] lg:h-[134px] xl:w-[135px] xl:h-[170px]"
    >
      <img
        src={src}
        alt={alt}
        className="drop-shadow-md w-full h-full object-contain object-center"
      />
    </div>
  );
}

export default function HomeBanner() {
  return (
    <section className="relative w-full overflow-hidden bg-llgreen">
      {/* subtle warm texture overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 55% 70% at 68% 50%, rgba(255,255,255,0.55) 0%, transparent 80%)",
        }}
      />

      <div className="section-wid relative z-10 flex flex-col lg:flex-row min-h-0 lg:min-h-[calc(100vh-64px)]">
        {/* ══════════════════════════════════════
            LEFT — text + CTAs + bags
        ══════════════════════════════════════ */}
        <div className="flex flex-col gap-4 sm:gap-5 w-full lg:w-1/2 xl:w-5/12 pt-8 pb-4 sm:pt-12 sm:pb-8 lg:py-10 xl:py-14 shrink-0">
          {/* Eyebrow */}
          <p className="text-[20px] xl:text-[22px] tracking-wide mt-2 sm:mt-4 text-green font-medium">
            Premium Indian{" "}
            <strong className="font-bold">Rice Exporters</strong>
          </p>

          {/* Headline */}
          <h1 className="banner-title text-[#111] -mt-1 sm:-mt-2">
            Rooted in Tradition.
            <br />
            <span style={{ color: "#0C5402" }}>Built for G</span>
            {/* rice grain icon inline — mimics the 'l' swap in the screenshot */}
            <span className="banner-rice-icon" aria-hidden="true">
              <img
                src="/bkn/banner-rice.png"
                alt=""
                className="w-full h-full object-contain"
              />
            </span>
            <span style={{ color: "#0C5402" }}>obal</span>
            <br />
            <span style={{ color: "#0C5402" }}>Reach.</span>
          </h1>

          {/* Body copy */}
          <p className="text-[18px]  xl:text-[22px] leading-[1.6] sm:leading-[1.5] max-w-[660px] text-black">
            From carefully sourced paddy and modern processing to export-ready
            packing and dependable global supply, BNK delivers the richness of
            Indian rice to international buyers with consistency, scale and trust.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mt-1">
            <Link
              href="/our-products"
              className="btn-red inline-flex items-center justify-center gap-2 font-semibold !text-[16px] sm:!text-[18px] lg:!text-[18px]  2xl:!text-[20px] !py-3 !px-6 sm:!px-5 xl:!px-[30px] text-center"
            >
              Explore Our Products
              <ArrowRight className="w-4 h-4 shrink-0" />
            </Link>
            <Link
              href="/contact"
              className="btn-red-outline inline-flex items-center justify-center gap-2 !bg-[#fff] !text-[16px] sm:!text-[18px] xl:!text-[20px] !py-2.5 !px-6 sm:!px-5 xl:!px-[30px] text-center"
            >
              Enquire for Bulk Orders
            </Link>
          </div>

          {/* Product bag row */}
          <div className="flex justify-center lg:justify-start items-end gap-1.5 min-[380px]:gap-2 sm:gap-3 xl:gap-[10px] mt-4 sm:mt-6 overflow-x-auto sm:overflow-visible pb-1 no-scrollbar max-w-full">
            {bags.map((bag, i) => (
              <BagCard key={i} {...bag} />
            ))}
          </div>
        </div>

        {/* ══════════════════════════════════════
            RIGHT — India map illustration
            Desktop: Absolute right-anchored full height map
            Tablet & Mobile: Flow-centered responsive graphic
        ══════════════════════════════════════ */}
        <div className="w-full lg:w-1/2 xl:w-7/12 relative flex-1 self-stretch flex items-center justify-center lg:justify-end my-4 sm:my-6 lg:my-0 min-h-[260px] sm:min-h-[380px] md:min-h-[460px] lg:min-h-[420px]">
          <Image
            src="/bkn/banner-img.png"
            alt="Floating India rice-field map with farmers, tractor, airplane and shipping port"
            width={900}
            height={820}
            priority
            className="w-full h-auto max-h-[300px] sm:max-h-[420px] md:max-h-[500px] lg:max-h-none lg:h-full object-contain object-center lg:object-right relative lg:absolute right-0 lg:-right-10 xl:-right-20 scale-100 lg:scale-[1.05] xl:scale-[1.12]"
          />
        </div>
      </div>
    </section>
  );
}
