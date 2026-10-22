import Image from "next/image";

const cards = [
  {
    title: "Growing Regions",
    desc: "Rice sourced from trusted agro-climatic regions.",
  },
  {
    title: "Paddy Selection",
    desc: "Grain selected for seed purity and suitability.",
  },
  {
    title: "Harvest Quality",
    desc: "Critical moisture supports better processing later.",
  },
];

export default function ItStartsWithGrain() {
  return (
    <section className="relative w-full overflow-hidden ">

      {/* ── Banner image block ── */}
      <div className="relative w-full" style={{ height: "clamp(260px, 32vw, 600px)" }}>

        {/* Background photo */}
        <Image
          src="/bkn/it-starts.png"
          alt="Hands holding fresh rice stalks in a paddy field"
          fill
          className="object-cover object-center"
          priority
        />

        {/* Dark green overlay — left half fades to transparent right */}
        <div
          aria-hidden="true"
          className="absolute inset-0"
          
        />

        {/* Text content */}
        <div className="section-wid relative z-10 h-full flex flex-col justify-center gap-3">
          {/* Eyebrow */}
          <p
            className="section-label-sec !text-[#D0EB24]"
           
          >
            It Starts With The Grain
          </p>

          {/* Headline */}
          <h2
            className="section-ti-sec max-w-[600px] !text-white"
            // style={{fontSize: "clamp(42px, 5.2vw, 66px)"}}
          >
            Good Rice Begins<br />
            Long Before the<br />
            Pack.
          </h2>
        </div>

      </div>

      {/* ── 3-card strip below the banner ── */}
      <div className="w-full border-t border-b border-[#D0D3C0]" style={{ backgroundColor: "#FEFFF5 " }}>
        <div className="section-wid">
          <div className="grid grid-cols-1 sm:grid-cols-3">
            {cards.map((card, i) => (
              <div
                key={card.title}
                className={`flex flex-col gap-1.5 py-4 md:py-6 px-6 text-center ${i < cards.length - 1 ? " border-b sm:border-r sm:!border-b-0 border-[#D0D3C0]" : ""}`}
                // style={{
                //   borderRight:
                //     i < cards.length - 1 ? "1px solid #D0D3C0" : "none",
                // }}
              >
                <h3
                  className="text-[18px] md:text-[20px] xl:text-[22px] "
                 
                >
                  {card.title}
                </h3>
                <p className="text-[16px] md:text-[18px]">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
