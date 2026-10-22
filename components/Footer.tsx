import React from "react";
import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Our Story", href: "/our-story" },
  { label: "Our Products", href: "/our-products" },
  { label: "Rice Processing", href: "/rice-processing" },
  { label: "Quality Assurance", href: "/quality-assurance" },
  { label: "Infrastructure", href: "/infrastructure" },
  { label: "Global Markets", href: "/global-markets" },
  { label: "Sustainability", href: "/sustainability" },
  { label: "News & Insights", href: "/news" },
  { label: "Contact Us", href: "/contact" },
];

const products = [
  { label: "Basmati Rice", href: "/products/basmati-rice" },
  { label: "Non-Basmati Rice", href: "/products/non-basmati-rice" },
  { label: "Sona Masoori Rice", href: "/products/sona-masoori-rice" },
  { label: "Jasmine Rice", href: "/products/jasmine-rice" },
  { label: "Parboiled Rice", href: "/products/parboiled-rice" },
  { label: "Broken Rice", href: "/products/broken-rice" },
  { label: "Organic Rice", href: "/products/organic-rice" },
  { label: "Private Label", href: "/products/private-label" },
  { label: "Custom Packaging", href: "/products/custom-packaging" },
];

const company = [
  { label: "About BNK", href: "/about" },
  { label: "Our Vision", href: "/vision" },
  { label: "Our Values", href: "/values" },
  { label: "Sustainability", href: "/sustainability" },
  { label: "Certifications", href: "/certifications" },
];

const business = [
  { label: "Bulk Enquiries", href: "/business/bulk-enquiries" },
  { label: "Private Label", href: "/business/private-label" },
  { label: "Distributorship", href: "/business/distributorship" },
  { label: "Export Process", href: "/business/export-process" },
  { label: "Documentation", href: "/business/documentation" },
  { label: "Logistics Support", href: "/business/logistics-support" },
  { label: "Payment Terms", href: "/business/payment-terms" },
];

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.851s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.516 2.497 5.783 2.225 7.15 2.163 8.416 2.105 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.014 7.052.072 5.197.157 3.355.673 2.014 2.014.673 3.355.157 5.197.072 7.052.014 8.332 0 8.741 0 12c0 3.259.014 3.668.072 4.948.085 1.855.601 3.697 1.942 5.038 1.341 1.341 3.183 1.857 5.038 1.942C8.332 23.986 8.741 24 12 24s3.668-.014 4.948-.072c1.855-.085 3.697-.601 5.038-1.942 1.341-1.341 1.857-3.183 1.942-5.038.058-1.28.072-1.689.072-4.948 0-3.259-.014-3.668-.072-4.948-.085-1.855-.601-3.697-1.942-5.038C20.645.673 18.803.157 16.948.072 15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
  </svg>
);

const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.235 2.686.235v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.269h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
  </svg>
);

const LinkList = ({ items , border }: { items: { label: string; href: string }[], border?: string  }) => (
  <ul  className={`footer-link-list h-90 space-y-1 ${border ? border : "border"}`}>
    {items.map((l) => (
      <li key={l.label} >
        <Link href={l.href} className="text-[16px] text-white  hover:text-white transition-colors ">
          {l.label}
        </Link>
      </li>
    ))}
  </ul>
);

export default function Footer() {
  return (
    <footer
      className="site-footer relative overflow-hidden text-white"
      style={{
        backgroundImage: "url('/bkn/footer.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0" />

      {/* Main content */}
      <div className="site-footer__main relative section-wid py-14">
        <div className="site-footer__grid grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.8fr_1fr_1fr_1fr_1fr_1.2fr]">

          {/* Brand */}
          <div className="site-footer__brand flex flex-col gap-4">
            <img src="/bkn/logo-white.png" alt="BNK Logo" className="site-footer__logo h-16 w-46" />
            <h4 className="text-white !font-[400]  text-[22px] !mt-5">
              Premium Indian Rice Exporters
            </h4>
            <p className="site-footer__description text-white text-[16px]  leading-relaxed w-90">
              Rooted in tradition. Built for global reach. BNK brings the finest
              Indian rice to tables across the world — with quality, integrity
              and a commitment to a healthier future.
            </p>
            {/* <p
              className="text-white text-[15px] mt-1 leading-snug"
              style={{ fontFamily: "'Georgia','Times New Roman',serif", fontStyle: "italic" }}
            >
              Good Rice,<br />Brighter Tomorrow
            </p> */}

            <img src="/bkn/footer-label.png" alt="" className="site-footer__label w-fit mt-5"/>
          </div>

          {/* Quick Links */}
          <div className="site-footer__column">
            <h3 className="text-white font-semibold text-[20px] !mb-5 ">Quick Links</h3>
            <LinkList items={quickLinks}  border="border-r border-[#50724D]"/>
          </div>

          {/* Our Products */}
          <div className="site-footer__column">
            <h3 className="text-white font-semibold text-[20px] !mb-5">Our Products</h3>
            <LinkList items={products}  border="border-r border-[#50724D]" />
          </div>

          {/* Our Company */}
          <div className="site-footer__column">
            <h3 className="text-white font-semibold text-[20px] !mb-5">Our Company</h3>
            <LinkList items={company}  border="border-r border-[#50724D]" />
          </div>

          {/* Business */}
          <div className="site-footer__column">
            <h3 className="text-white font-semibold text-[20px] !mb-5">Business</h3>
            <LinkList items={business} border="border-r border-[#50724D]"/>
          </div>

          {/* Contact Us */}
          <div className="site-footer__contact">
            <h3 className="text-white font-semibold text-[20px] !mb-5">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-white mt-0.5 shrink-0" />
                <span className="text-[16px] text-white  leading-relaxed">
                  BNK Exports Pvt. Ltd.<br />
                  123 Rice Mill Road,<br />
                  Thanjavur, Tamil Nadu,<br />
                  India – 613001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-white shrink-0" />
                <a href="tel:+919876543210" className="text-[16px] text-white  hover:text-white transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-[16px] w-4 h-4 text-white shrink-0" />
                <a href="mailto:info@bnkrice.com" className="text-[16px] text-white  hover:text-white transition-colors">
                  info@bnkrice.com
                </a>
              </li>
              <li className="flex items-center gap-3 pt-1">
                {[
                  { href: "https://instagram.com", label: "Instagram", Icon: InstagramIcon },
                  { href: "https://youtube.com", label: "YouTube", Icon: YoutubeIcon },
                  { href: "https://facebook.com", label: "Facebook", Icon: FacebookIcon },
                ].map(({ href, label, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-10 h-10 rounded-full bg-white flex items-center justify-center  text-[#064102] hover:bg-white/20 transition-colors"
                  >
                    <Icon />
                  </a>
                ))}
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="site-footer__bottom relative " style={{ backgroundColor: "#0a260acc" }}>
        <div className="site-footer__bottom-inner section-wid py-10 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-white text-[14px] !font-[300]">
            © 2026 BNK Rice Exports. All rights reserved. Concept by repute.
          </p>
          <p className="text-white text-[14px] t uppercase !font-[300]">
            Indian Rice&nbsp;•&nbsp;Global Plates&nbsp;•&nbsp;A Brighter Tomorrow
          </p>
        </div>
      </div>
    </footer>
  );
}
