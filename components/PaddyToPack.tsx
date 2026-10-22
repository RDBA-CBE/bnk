"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

const steps = [
  { id: 1, label: "Paddy Selection", image: "/bkn/process-1.png" },
  { id: 2, label: "Cleaning & Drying", image: "/bkn/process-2.png" },
  { id: 3, label: "Milling & Processing", image: "/bkn/process-3.png" },
  { id: 4, label: "Polishing", image: "/bkn/process-4.png" },
  { id: 5, label: "Sortex Colour Sorting", image: "/bkn/process-5.png" },
  { id: 6, label: "Quality Inspection", image: "/bkn/process-6.png" },
  { id: 7, label: "Packing", image: "/bkn/process-7.png" },
];

export default function PaddyToPack() {
  const [active, setActive] = useState(steps[0].id);
  const current = steps.find((s) => s.id === active) ?? steps[0];

  return (
    <section className="w-full lg:!pt-45 lg:!pb-15 section-pad bg-[url('/bkn/paddy-top-pack-bg.png')] "> 
      <div className=" flex flex-col gap-10">
        <div className="section-wid flex flex-col gap-10">
          <h3 className="section-label">From Paddy To Pack</h3>

          {/* ── Header row ── */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-end justify-start">
            {/* Left */}

            <div className="flex flex-col gap-4">
              <h2 className="section-ti">
                Seven Steps.
                <br />
                One <span className="text-green">Consistent Output.</span>
              </h2>
            </div>
            {/* Right — body copy */}
            <p className="max-w-xl ms-0 lg:ms-auto">
              Every stage has a different purpose — protecting grain quality,
              removing impurities, improving consistency and preparing the final
              product for packing.
            </p>
          </div>
        </div>

        <div className="section-wid-sec flex flex-col gap-10">
          {/* ── Wide banner video ── */}
          <div className="w-full px-2 lg:px-10 relative aspect-[16/8] lg:aspect-[16/5] rounded-xl overflow-hidden">
            <video
              src="/bkn/rice-video.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* ── Step thumbnails ── */}
          <div className="grid grid-cols-4 sm:grid-cols-7 gap-3">
            {steps.map((step) => (
              <button
                key={step.id}
                onClick={() => setActive(step.id)}
                className={[
                  "flex flex-col gap-2 cursor-pointer group",
                  "focus:outline-none",
                ].join(" ")}
              >
                {/* Thumbnail */}
                <div
                  className={[
                    "relative w-full aspect-[3/4]  overflow-hidden",
                    // active === step.id
                    //   ? "ring-[3px] ring-[#4A90D9]"
                    //   : "ring-0",
                  ].join(" ")}
                >
                  <Image
                    src={step.image}
                    alt={step.label}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 25vw, 14vw"
                  />
                </div>
                {/* Label */}
                <span
                  className={[
                    "mt-2 lg:mt-4 text-center text-[14px] text-[18px]  2xl:text-[22px] !font-[600]",
                    active === step.id
                      ? "text-green font-semibold"
                      : "text-[#000]",
                  ].join(" ")}
                >
                  {step.label}
                </span>
              </button>
            ))}
          </div>

          {/* ── CTA ── */}
          <div className="flex justify-center mt-2">
            <Link href="/process" className="btn-primary">
              Explore the process
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
