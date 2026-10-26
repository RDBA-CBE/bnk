import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function GlobalReach() {
  return (
    <section className="global-reach relative w-full overflow-hidden " style={{backgroundImage: "url('/bkn/global-bg.png')"}}>

      {/* ── Dark leaf texture background ── */}
      <Image
        src="/bkn/global-bg.png"
        alt=""
        aria-hidden="true"
        fill
        className="object-cover object-right opacity-40 pointer-events-none select-none"
        sizes="100vw"
      />

      <div className="global-reach__inner section-wid relative z-10">
        <div className="global-reach__grid grid grid-cols-1 xl:grid-cols-[2fr_3fr] items-center gap-0">

          {/* ══════ LEFT — text content ══════ */}
          <div className="global-reach__content flex flex-col gap-2">

            {/* Eyebrow */}
            <span className="section-label-sec !text-white">Global Reach</span>

            {/* Headline */}
            <h2 className="section-ti !text-white ">
              From India <br className="hidden lg:block"/>
              to Global Tables.
            </h2>

            {/* Stat */}
            <div className="flex items-baseline gap-3 mt-2">
              <span className="stat-hero text-white leading-none">
                10<span className="text-[#CFEF54]">+</span>
              </span>
              <span className="text-white font-medium">Countries Reached</span>
            </div>

            {/* Tag strip */}
            <p className="tag-strip text-white ">
              India &nbsp;→&nbsp; International Markets
            </p>

            {/* CTA */}
            <Link
              href="/global-reach"
              className="mt-5 inline-flex items-center gap-1.5 text-white text-[18px] font-medium border-b border-white pb-0.5 w-fit hover:border-white transition-colors"
            >
              See Our Export Network
              <ArrowUpRight className="w-4 h-4" />
            </Link>

          </div>

          {/* ══════ RIGHT — map illustration ══════ */}
          <div className="global-reach__map relative w-full aspect-[6/3] lg:aspect-[16/9]">
            <Image
              src="/bkn/globalLocation.png"
              alt="BNK export map showing routes from India to Canada, USA, UK, Europe, Gulf, Asia and Oman"
              fill
              className="object-contain object-center"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
          </div>

        </div>
      </div>

    </section>
  );
}
