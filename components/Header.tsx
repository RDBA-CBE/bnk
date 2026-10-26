"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Our Story", href: "/our-story" },
  { label: "Our Products", href: "/our-products" },
  { label: "Infrastructure", href: "/infrastructure" },
  { label: "Quality", href: "/quality" },
  { label: "Global reach", href: "/global-reach" },
  { label: "Private Label", href: "/private-label" },
];

const Header = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header
        className={`w-full sticky top-0 z-30 py-5 lg:py-7 transition-all duration-300 ${
          scrolled ? "shadow-md bg-white/95 backdrop-blur-sm py-4" : " bg-white"
        }`}
      >
        <div className="section-wid flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <img src="/bkn/logo.png" alt="Logo" className="h-10 lg:h-15 w-auto" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden [@media(min-width:1400px)]:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`flex items-center gap-3 text-[18px] transition-colors !font-medium ${
                  isActive(link.href) ? "text-green" : "text-[#000]"
                }`}
              >
                {isActive(link.href) && (
                  <span className="w-2.5 h-2.5 rounded-full bg-[#0C5402] shrink-0" />
                )}
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden [@media(min-width:1400px)]:flex shrink-0">
            <a
              href="/contact"
              className="btn-header inline-flex items-center gap-2 transition-colors !font-medium"
            >
              Connect With Us
              <span aria-hidden="true"><ArrowRight className="w-6 h-6" /></span>
            </a>
          </div>

          {/* Hamburger — visible below 1300px */}
          <button
            className="[@media(min-width:1400px)]:hidden flex flex-col gap-1.5 p-1"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(true)}
          >
            <span className="block w-6 h-0.5 bg-gray-700" />
            <span className="block w-6 h-0.5 bg-gray-700" />
            <span className="block w-6 h-0.5 bg-gray-700" />
          </button>
        </div>
      </header>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white z-50 shadow-2xl flex flex-col p-8 gap-2 transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="self-end p-1"
          aria-label="Close menu"
          onClick={() => setMenuOpen(false)}
        >
          <X className="w-6 h-6 text-gray-700" />
        </button>

        <nav className="flex flex-col gap-5">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`flex items-center gap-3 text-[17px] font-medium transition-colors ${
                isActive(link.href) ? "text-green" : "text-gray-700 hover:text-gray-900"
              }`}
            >
              {isActive(link.href) && (
                <span className="w-2.5 h-2.5 rounded-full bg-[#0C5402] shrink-0" />
              )}
              {link.label}
            </Link>
          ))}
        </nav>

        <a
          href="/contact"
          className="btn-primary inline-flex items-center gap-2 transition-colors mt-auto"
          onClick={() => setMenuOpen(false)}
        >
          Connect With Us
          <ArrowRight className="w-5 h-5" />
        </a>
      </div>
    </>
  );
};

export default Header;
