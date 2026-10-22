import Image from "next/image";

export default function Infrastructure() {
  return (
    <section className="w-full !pt-0 md:!pt-16 section-pad bg-beige">
      <div className="section-wid">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">

          {/* LEFT — facility photo */}
          <div className="lg:col-span-7 rounded-xl">
            <img
              src="/bkn/built-for-scale.png"
              alt="BNK rice processing facility with silos and storage units"
              className="object-cover rounded-xl w-full h-full"
            />
          </div>

          {/* RIGHT — content */}
          <div className="lg:col-span-5 flex flex-col justify-center gap-6 pt-8 pb-4 px-2 lg:ps-10 2xl:ps-20 lg:py-12">

            <h3 className="section-label">Built For Scale</h3>

            <h2 className="section-ti ">
              Infrastructure That<br />
              Keeps<br />
              <span className="text-green">Supply Moving.</span>
            </h2>

            <p className="">
              BMK&apos;s processing network brings milling, storage and dispatch
              together to support dependable production across different rice
              requirements.
            </p>

            {/* Stats row */}
            <div className="flex items-start lg:gap-10 mt-2 py-8 border-t border-b border-[#D0D3C0]">
              <div className="flex-1 flex flex-col gap-1 pr-8 border-r border-[#C8D8C0]">
                <span className="stat-num">4</span>
                <span className="stat-label">Processing Units</span>
              </div>
              <div className="flex-1 flex flex-col gap-1 pl-8">
                <span className="stat-num">
                  20 <span className="text-[24px] font-medium">MT/Hr</span>
                </span>
                <span className="stat-label">Combined Capacity</span>
              </div>
            </div>

            <p className="tag-strip !text-[16px] md:!text-[14px] lg:!text-[16px] xl:!text-[22px]">
              Processing&nbsp;•&nbsp;Storage&nbsp;•&nbsp;Milling&nbsp;•&nbsp;Dispatch
            </p>

          </div>
        </div>
      </div>
    </section>
  );
}
