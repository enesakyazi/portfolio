"use client";

import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

function Header() {
  return (
    <div className="fixed top-0 left-0 w-full z-[9999] bg-glass shadow-lg">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link
            className="px-4 py-2 text-slate-100 hover:text-blue-400 duration-300 font-medium rounded-lg hover:bg-blue-500/10"
            href="/"
          >
            About
          </Link>
          <Link
            className="px-4 py-2 text-slate-100 hover:text-blue-400 duration-300 font-medium rounded-lg hover:bg-blue-500/10"
            href="/Experiences"
          >
            Experiences
          </Link>
          <Link
            className="px-4 py-2 text-slate-100 hover:text-blue-400 duration-300 font-medium rounded-lg hover:bg-blue-500/10"
            href="/Education"
          >
            Education
          </Link>
          <Link
            className="px-4 py-2 text-slate-100 hover:text-blue-400 duration-300 font-medium rounded-lg hover:bg-blue-500/10"
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
