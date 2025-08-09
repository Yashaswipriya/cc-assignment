"use client";
import React, { useState } from "react";

export default function Navigation() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const menuItems = ["ABOUT ME", "PORTFOLIO", "SKILLS", "SERVICES", "TESTIMONIALS"];

  return (
    <div className="flex w-auto items-center justify-between px-6 sm:px-10 lg:px-14 py-4 relative rounded-[40px] bg-black">
      {/* Logo */}
      <div className="flex flex-col h-6 items-center justify-center gap-2.5">
        ERICA JONES
      </div>

      {/* Desktop navigation — show only on lg and above */}
      <nav className="hidden lg:flex items-start gap-10 text-[#fdfaee99]">
        {menuItems.map((item) => (
          <div key={item}>{item}</div>
        ))}
      </nav>

      <button className="hidden lg:inline-flex items-center justify-center gap-2.5 px-6 py-3 relative bg-white rounded-full overflow-hidden text-black">
        GET IN TOUCH
      </button>

      {/* Mobile navigation trigger */}
      <div className="lg:hidden flex items-center">
        <button onClick={() => setIsMobileOpen(true)}>
          <img src="/Menu Icon.svg" alt="Menu" className="w-8 h-8" />
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-50 bg-neutral-900">
          <div className="relative w-full h-full overflow-hidden backdrop-blur-[25px] px-4 py-6">
            <div className="flex justify-between items-center mb-8">
              <div className="font-semibold text-light text-sm">ERICA JONES</div>
              <button onClick={() => setIsMobileOpen(false)}>
                <img src="/CloseIcon.svg" alt="Close" className="w-5 h-5" />
              </button>
            </div>
            <div className="flex flex-col gap-10 text-[#fdfaeecc] text-[21px]">
              {menuItems.map((item) => (
                <div key={item}>{item}</div>
              ))}
            </div>
            <button className="mt-12 w-full px-6 py-3 bg-white text-black rounded-[40px]">
              GET IN TOUCH
            </button>
            <div className="absolute w-[334px] h-[334px] top-[348px] left-[25px] rounded-full blur-[50px] bg-[linear-gradient(-10deg,rgba(255,250,239,1)_31%,rgba(252,214,139,1)_47%,rgba(249,120,76,1)_66%,rgba(156,53,109,1)_49%,rgba(23,23,23,1)_96%)] -z-10" />
          </div>
        </div>
      )}
    </div>
  );
}

