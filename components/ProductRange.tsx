"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const products = [
  {
    id: "thanjavur-ponni",
    tab: "Thanjavur Ponni Raw Rice",
    label: "SELECTED VARIETY",
    title: "Thanjavur Ponni\nRaw Rice",
    desc: "Light, versatile grains for everyday retail and food service.",
    tag1: "Grain profile",
    tag2: "Clean & versatile",
    image: "/bkn/rice-pack.png",
    slide: "01 / 08",
  },
  {
    id: "white-ponni",
    tab: "White Ponni Boiled Rice",
    label: "SELECTED VARIETY",
    title: "White Ponni\nBoiled Rice",
    desc: "Soft, fluffy texture ideal for daily consumption and bulk export.",
    tag1: "Grain profile",
    tag2: "Soft & fluffy",
    image: "/bkn/rice-pack.png",
    slide: "02 / 08",
  },
  {
    id: "sona-masoori",
    tab: "Sona Masoori",
    label: "SELECTED VARIETY",
    title: "Sona Masoori\nRice",
    desc: "Medium-grain aromatic rice loved across South India and globally.",
    tag1: "Grain profile",
    tag2: "Aromatic & light",
    image: "/bkn/rice-pack.png",
    slide: "03 / 08",
  },
  {
    id: "idly-dosa",
    tab: "Idly / Dosa Rice",
    label: "SELECTED VARIETY",
    title: "Idly / Dosa\nRice",
    desc: "High-starch short grain specially suited for traditional batter preparation.",
    tag1: "Grain profile",
    tag2: "High starch",
    image: "/bkn/rice-pack.png",
    slide: "04 / 08",
  },
  {
    id: "jeerakasala",
    tab: "Jeerakasala",
    label: "SELECTED VARIETY",
    title: "Jeerakasala\nRice",
    desc: "Small aromatic grains prized in Kerala cuisine and biriyani preparations.",
    tag1: "Grain profile",
    tag2: "Aromatic & premium",
    image: "/bkn/rice-pack.png",
    slide: "05 / 08",
  },
  {
    id: "palakkadan-matta",
    tab: "Palakkadan Matta",
    label: "SELECTED VARIETY",
    title: "Palakkadan\nMatta Rice",
    desc: "Nutrient-rich red rice with a firm bite, popular for health-conscious buyers.",
    tag1: "Grain profile",
    tag2: "Nutritious & firm",
    image: "/bkn/rice-pack.png",
    slide: "06 / 08",
  },
  {
    id: "vadi-matta",
    tab: "Vadi Matta",
    label: "SELECTED VARIETY",
    title: "Vadi Matta\nRice",
    desc: "Traditional Kerala parboiled rice with robust flavour and high fibre content.",
    tag1: "Grain profile",
    tag2: "Robust & fibrous",
    image: "/bkn/rice-pack.png",
    slide: "07 / 08",
  },
];

export default function ProductRange() {
  const [active, setActive] = useState(products[0].id);

  const current =
    products.find((p) => p.id === active) ?? products[0];

  return (
    <section className="w-full !pb-0 product-range-section section-pad">
      <div className="section-wid">
        <h3 className="section-label !mb-8">
          One Source. Many Market Needs.
        </h3>

        {/* Header */}
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex flex-col gap-4">
            <h2 className="section-ti">
              Rice Selected for
              <br />
              <span className="text-green">Different Tables.</span>
            </h2>
          </div>

          <Link
            href="/our-products"
            className="inline-flex shrink-0 items-center gap-1.5 self-end border-b-[1.5px] border-[#111] pb-0.5 font-medium text-base text-[#111] no-underline [font-family:'Manrope',sans-serif]"
          >
            Explore the Rice Range
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Card + tabs wrapper */}
        <div className="overflow-hidden">
          {/* Two-column card */}
          <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr]">
            {/* LEFT — product image */}
            <div className="relative aspect-[16/10]">
              <span className="absolute left-0 top-4 z-10 bg-[rgba(255,255,255,0.88)] px-[10px] py-2 text-[14px] font-semibold tracking-[0.08em] text-[#444]">
                {current.slide}
              </span>

              <Image
                key={current.id}
                src={current.image}
                alt={current.title.replace("\n", " ")}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 62vw"
                priority
              />
            </div>

            {/* RIGHT — product details */}
            <div className="flex flex-col lg:items-center justify-between bg-[#FAF7EA] py-10 lg:py-20">
              <div className="flex flex-col gap-4">
                <h3 className="section-label-sec">
                  {current.label}
                </h3>

                <h2 className="section-ti w-98 !text-[#0F2013]">
                  {current.title}
                </h2>

                <p className="text-base leading-[1.7] text-[#666]">
                  {current.desc}
                </p>
              </div>

              {/* Bottom tags */}
              <div className="mt-5 flex w-100 items-center justify-between border-t border-[#D3D2C0] pt-5">
                <span className="text-[16px] !font-[500] text-green">
                  {current.tag1}
                </span>

                <span className="text-[16px] !font-[500] text-green">
                  {current.tag2}
                </span>
              </div>
            </div>
          </div>

          {/* Tab strip */}
          <div className="mt-5 flex justify-between gap-5 overflow-x-auto border-b border-[#D3D2C0] no-scrollbar">
            {products.map((p) => (
              <button
                key={p.id}
                onClick={() => setActive(p.id)}
                aria-pressed={active === p.id}
                className={`shrink-0 whitespace-nowrap border-t-[3px] px-5 py-5 text-[20px] transition-colors [font-family:'Manrope',sans-serif] ${
                  active === p.id
                    ? "border-[#0F4D25] bg-[#F7FCDA] font-semibold text-[#0F4D25]"
                    : "border-transparent bg-white font-normal text-black"
                }`}
              >
                {p.tab}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
