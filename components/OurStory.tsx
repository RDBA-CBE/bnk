import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function OurStory() {
  return (
    <section
      className="relative w-full overflow-hidden bg-llgreen about-bg-pseudo"
    >
      {/* ── Decorative subtle organic wave contour lines in top-left ── */}

      <div className="section-wid relative z-10 pt-0 py-16  lg:py-20">
        <div className="flex flex-col lg:flex-row items-stretch gap-2 lg:gap-0">
          {/* ══════════════════════════════════════
              LEFT — Section Label + Headline + Body + CTA + Stats
          ══════════════════════════════════════ */}
          <div className="w-full lg:w-5/12 flex flex-col gap-5 shrink-0 justify-center pr-0 lg:pr-6 pb-6 lg:pb-0">
            <h3 className="section-label !w-[95%]">OUR STORY</h3>

            <h2 className="section-ti">
              Four Decades of Rice.
              <br />
              <span className="text-green">One Global Journey.</span>
            </h2>

            <p>
              For over <strong className="text-green">40 years</strong>,{" "}
              <strong className="text-black">
                BNK has built its journey around rice
              </strong>{" "}
              — from trusted sourcing and processing to consistent quality and
              global supply. What began with deep roots in Indian rice tradition
              has grown into a dependable export presence across international
              markets.
            </p>

            <div className="mt-1">
              <Link href="/our-story" className="btn-primary">
                More About Our Story
                <ArrowRight className="w-4 h-4 " />
              </Link>
            </div>

            <div className="flex items-center gap-0 mt-8 pt-2 overflow-visible">
              <div className="flex flex-col gap-1 pr-5 2xl:pr-8 ">
                <h4 className="our-story-stat-num !font-[500] leading-none text-green">
                  40<span style={{ color: "#CFEF54" }}>+</span>
                </h4>
                <span className="text-[20px] mt-1  whitespace-nowrap">
                  Years of Rice Expertise
                </span>
              </div>

              {/* Vertical divider 1 */}
              <div
                className="w-[1px] h-full shrink-0 me-4 hidden sm:block"
                style={{ backgroundColor: "#67A00561" }}
              />

              <div className="flex flex-col gap-1 px-5 2xl:px-8 ">
                <h4 className="our-story-stat-num !font-[500] leading-none text-green">
                  4
                </h4>
                <span className="text-[20px] mt-1 whitespace-nowrap">
                  Integrated Processing Units
                </span>
              </div>

              {/* Vertical divider 2 */}
              <div
                className="w-[1px] h-full shrink-0 me-4 hidden sm:block"
                style={{ backgroundColor: "#67A00561" }}
              />

              <div className="flex flex-col gap-1 pl-5 2xl:pl-8 ">
                <h4 className="our-story-stat-num !font-[500] leading-none text-green">
                  10+
                </h4>
                <span className="text-[20px] mt-1  whitespace-nowrap">
                  International Markets
                </span>
              </div>
            </div>
          </div>

          {/* ══════════════════════════════════════
              RIGHT — Hand + Grain Composition
              with 3 Floating White Cards & 3 Curved Dotted Vectors
          ══════════════════════════════════════ */}
          <div className="lg:w-7/12 relative flex-1 ">
            {/* ── Hand / grain image anchored bottom-right ── */}
            <div className="absolute  2xl:-right-24 -bottom-20 w-[800px] 2xl:w-[900px] 2xl:h-[700px] pointer-events-none">
              <img
                src="/bkn/our-story-1.png"
                alt="Hand holding a rice grain with scenic rice fields inside"
                
                className=" object-right-bottom pointer-events-none"
                // sizes="(max-width: 1024px) 100vw, 54vw"
              />
            </div>

            

          
          </div>
        </div>
      </div>
    </section>
  );
}
