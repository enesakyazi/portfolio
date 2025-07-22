"use client";

import Link from "next/link";
import React from "react";

function Header() {
  return (
    <div className="fixed top-0 left-0 w-full z-[9999] bg-glass shadow-lg">
      <nav className="container mx-auto sm:px-32 py-3 sm:py-6">
        <div className="flex items-center justify-between gap-2 sm:gap-4">
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
            <span className="hidden sm:inline">Experiences</span>
            <span className="sm:hidden">Exp.</span>
          </Link>
          <Link
            className="px-2 sm:px-4 py-2 text-slate-100 hover:text-blue-400 duration-300 font-medium rounded-lg hover:bg-blue-500/10 text-sm sm:text-base"
            href="/Education"
          >
            <span className="hidden sm:inline">Education</span>
            <span className="sm:hidden">Edu.</span>
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
