"use client";

import Link from "next/link";
import React from "react";

function Header() {
  return (
    <div className="fixed top-0 left-0 w-full z-[9999] bg-glass shadow-lg">
      <nav className="container mx-auto px-2 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between gap-1 sm:gap-4">
          <Link
            className="px-2 sm:px-4 py-2 text-slate-100 hover:text-blue-400 duration-300 font-medium rounded-lg hover:bg-blue-500/10 text-sm sm:text-base"
            href="/"
          >
            About
          </Link>
          <Link
            className="px-2 sm:px-4 py-2 text-slate-100 hover:text-blue-400 duration-300 font-medium rounded-lg hover:bg-blue-500/10 text-sm sm:text-base"
            href="/Experiences"
          >
            Experiences
          </Link>
          <Link
            className="px-2 sm:px-4 py-2 text-slate-100 hover:text-blue-400 duration-300 font-medium rounded-lg hover:bg-blue-500/10 text-sm sm:text-base"
            href="/Education"
          >
            Education
          </Link>
          <Link
            className="px-2 sm:px-4 py-2 text-slate-100 hover:text-blue-400 duration-300 font-medium rounded-lg hover:bg-blue-500/10 text-sm sm:text-base"
            href="/Projects"
          >
            Projects
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Header;
