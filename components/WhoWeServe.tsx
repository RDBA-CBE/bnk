import Image from "next/image";

const steps = [
  {
    num: "01",
    title: "Overseas\nImporters",
    desc: "Sourcing trusted Indian rice",
    left: "1%",
    bottom: "25%",
  },
  {
    num: "02",
    title: "Wholesale\nDistributors",
    desc: "Reliable bulk supply",
    left: "25%",
    bottom: "55%",
  },
  {
    num: "03",
    title: "Retailers",
    desc: "Quality rice for global markets",
    left: "50%",
    bottom: "85%",
  },
  {
    num: "04",
    title: "Private Label\nPartners",
    desc: "Your brand, our expertise",
    left: "75%",
    bottom: "115%",
  },
];

const stepsDesc = [
  {
    num: "01",
    desc: "Sourcing trusted Indian rice",
    left: "1%",
    bottom: "-14%",
  },
  {
    num: "02",
    desc: "Reliable bulk supply",
    left: "28%",
    bottom: "15%",
  },
  {
    num: "03",
    desc: "Quality rice for global markets",
    left: "52%",
    bottom: "40%",
  },
  {
    num: "04",
    desc: "Your brand, our expertise",
    left: "77%",
    bottom: "75%",
  },
];

export default function WhoWeServe() {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      {/* ── Full-bleed background photo ── */}
      <Image
        src="/bkn/who-we-serve-bg.png"
        alt="Farmer holding rice grains"
        fill
        className="object-cover object-right pointer-events-none select-none"
        sizes="100vw"
      />

      <div className="absolute xl:hidden inset-0 pointer-events-none bg-[linear-gradient(to_top_right,#ffffff96_0%,#ffffff96_60%,transparent_100%)] xl:bg-[linear-gradient(to_top_right,#fff_0%,#fff_4%,transparent_100%)]" />

      

      <div className="section-wid relative z-10 pb-16 md:!pb-60 lg:!pb-16 section-pad">
        {/* ── Top header: eyebrow + headline + body ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="flex flex-col gap-5">
            <h3 className="section-label">Who We Serve</h3>
            <h2 className="section-ti leading-tight">
              Partnering for a Stronger
              <br />
              <span className="text-green">Global Food Supply.</span>
            </h2>
            <p className=" max-w-xl">
              We work with a wide range of international businesses, offering
              reliable supply, consistent quality and flexible solutions.
            </p>
          </div>
        </div>

        {/* ── Mobile (<1000px): vertical timeline ── */}
        <div className="flex flex-col mt-10 min-[1000px]:hidden">
          {steps.map((step, i) => (
            <div key={step.num} className="flex gap-4">
              {/* Left: circle + connecting line */}
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-green flex items-center justify-center shrink-0">
                  <span className="text-white text-[13px] !font-[700]">{step.num}</span>
                </div>
                {i < steps.length - 1 && (
                  <div className="w-[2px] flex-1 bg-[#67A005] my-1" />
                )}
              </div>
              {/* Right: title + desc */}
              <div className="pb-8">
                <span className="block font-semibold leading-[1.3] whitespace-pre-line text-[20px]">
                  {step.title}
                </span>
                <span className="block   mt-1 leading-[1.4]">
                  {step.desc}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* ── Desktop (≥1000px): original absolute-positioned ladder ── */}
        <div className="hidden min-[1000px]:grid grid-cols-12 gap-8 xl:-mt-20 mb-10">
          {/* ── Ladder + steps ── */}
          <div className="col-span-10 lg:col-span-9 xl:col-span-8 relative w-full mt-30 py-3 xl:py-0">
            {/* Ladder image */}
            <img
              src="/bkn/who-we-serve-step-ladder.png"
              alt=""
              className="object-contain object-left pointer-events-none select-none"
            />

            {/* Steps */}
            {steps.map((step) => (
              <div
                key={step.num}
                className="absolute flex flex-col gap-5"
                style={{
                  bottom: step.bottom,
                  left: step.left,
                  transform: "translateY(0)",
                }}
              >
                <span className="text-[50px] !font-[700] text-[#4C7702] leading-none">
                  {step.num}
                </span>

                <span className="  leading-[1.3] whitespace-pre-line">
                  {step.title}
                </span>
              </div>
            ))}

            {stepsDesc.map((step) => (
              <div
                key={step.num}
                className="absolute flex flex-col gap-5"
                style={{
                  bottom: step.bottom,
                  left: step.left,
                  transform: "translateY(0)",
                }}
              >
                <span className="leading-[1.4] whitespace-nowrap">
                  {step.desc}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
