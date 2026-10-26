import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const features = [
  {
    icon: "/bkn/cta-icon-1.png",
    title: "Bulk Supply",
    desc: "For international markets",
  },
  {
    icon: "/bkn/cta-icon-2.png",
    title: "Global Shipping Support",
    desc: "Worldwide delivery assistance",
  },
  {
    icon: "/bkn/cta-icon-3.png",
    title: "Long-Term Partnerships",
    desc: "Growing together for tomorrow",
  },
];

export default function BusinessCTA() {
  return (
    <section className="business-cta w-full bg-white ">

      {/* ── Top: full-width banner with overlay card ── */}
      <div className="section-pad business-cta__hero relative w-full aspect-[16/6] overflow-hidden">

        {/* Background photo */}
        <Image
          src="/bkn/cta-bg.png"
          alt="Rice processing facility with port and shipping containers"
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
        />

        {/* White card overlay — left side */}
        <div className="business-cta__overlay absolute inset-0 flex items-center">
          <div className="business-cta__inner section-wid w-full">
            <div className="business-cta__card bg-white rounded-xl p-8 max-w-2xl flex flex-col gap-3 shadow-lg">

              {/* Eyebrow */}
              <span className="section-label-sec !pb-0">Business Enquiries</span>

              {/* Headline */}
              <h2 className="section-ti">
                Looking for Indian Rice<br />
                for Your Market?
              </h2>

              {/* Sub text */}
              <p className="text-[20px]">
                Tell us the variety, quantity and market you are sourcing for.
              </p>

              {/* CTA buttons */}
              <div className="business-cta__actions flex flex-wrap gap-6 mt-3">
                <Link href="/contact" className="btn-primary bg-dgreen">
                  Request A Quote
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/contact" className="btn-sec  !text-black !font-[600] inline-flex items-center gap-2 ">
                  Contact Export Team
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Tag strip */}
              <p className="tag-strip gap-5 text-green !mt-6">
                Bulk Supply&nbsp;&nbsp;·&nbsp;&nbsp;Distribution&nbsp;&nbsp;·&nbsp;&nbsp;Private Label

              </p>

            </div>
          </div>
        </div>

      </div>

      {/* ── Bottom: 3-feature strip ── */}
      <div className="business-cta__features max-w-6xl py-10 m-auto">
        <div className="business-cta__feature-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className={[
                "flex items-start gap-4",
                i < features.length - 1 ? "md:border-r md:border-[#E0E0E0] sm:pr-6" : "",
              ].join(" ")}
            >
              {/* Icon */}
              <div className="relative w-8 h-8 lg:w-10 lg:h-10 shrink-0">
                <Image
                  src={f.icon}
                  alt={f.title}
                  fill
                  className="object-contain"
                  sizes="40px"
                />
              </div>
              {/* Text */}
              <div className="flex flex-col gap-1">
                <span className=" !font-[700] text-dgreen">{f.title}</span>
                <span className="text-[20px] ">{f.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
