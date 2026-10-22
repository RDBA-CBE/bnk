import Image from "next/image";

const checkItems = [
  "Strict Quality Control",
  "100% EOU in Non-Basmati Rice",
  "USFDA Registered Exporter",
  "Hygienic Processing & Packing",
];

/* Green filled checkmark icon */
function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10 shrink-0">
      <circle cx="12" cy="12" r="12" fill="#67A005" />
      <path
        d="M7 12.5l3.5 3.5 6.5-7"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* Arrow chevron for the between-images button */
function ChevronRight() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
      <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Quality() {
  return (
    <section className="quality-section w-full bg-llgreen bg-[url('/bkn/quality-bg.png')]">
      <div className="section-wid section-pad">
        <div className="quality-section__grid grid grid-cols-1 lg:grid-cols-2 gap-0 ">

          {/* ══════════ LEFT — text content ══════════ */}
          <div className="quality-section__content flex flex-col gap-6">

            <h3 className="section-label">Quality</h3>

            <h2 className="section-ti">
              Consistency in{" "}
              <span className="text-green">Every Grain.</span>
            </h2>

            <p className="quality-section__description">
              Our rigorous quality control ensures clean, safe and premium rice
              that meets international standards.
            </p>

            {/* Checklist */}
            <ul className="quality-section__checklist flex flex-col gap-4 mt-2">
              {checkItems.map((item) => (
                <li key={item} className="check-item">
                  <CheckIcon />
                  {item}
                </li>
              ))}
            </ul>

          </div>

          {/* ══════════ RIGHT — before / after images ══════════ */}
          <div className="quality-section__visual flex flex-col gap-4">
               <img
                  src="/bkn/quality.png"
                  alt="Rice before sortex — mixed grains with impurities"
                  
                  className="quality-section__image object-cover w-full h-full"
                />
            

            {/* Tagline below images */}
            <p className="quality-section__tagline text-center mt-5 text-[28px] !font-[600] uppercase">
              Cleaner Grains. Higher Standards.
            </p>

          </div>

        </div>
      </div>
    </section>
  );
}
