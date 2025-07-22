"use client";

import Link from "next/link";
import React from "react";
import { CiMail } from "react-icons/ci";
import { IoLocationSharp } from "react-icons/io5";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import AnimatedSection from "@/components/AnimatedSection";

function Footer() {
  return (
    <div className="w-full bg-card mt-12 sm:mt-16 border-t border-slate-600/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <AnimatedSection direction="fade" delay={100}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
            <div className="sm:col-span-2 lg:col-span-2">
              <h1 className="text-xl sm:text-2xl font-bold text-blue-300 mb-3 sm:mb-4">
                Melih Enes Akyazı
              </h1>
              <div className="h-1 bg-slate-600 rounded-full mb-4 sm:mb-6"></div>
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-center gap-x-2 sm:gap-x-3 text-sm">
                  <CiMail size={18} className="text-blue-400 sm:w-5 sm:h-5" />
                  <p className="text-slate-300 text-xs sm:text-sm">melihenesakyazi@gmail.com</p>
                </div>
                <div className="flex items-center gap-x-2 sm:gap-x-3 text-sm">
                  <IoLocationSharp size={18} className="text-blue-400 sm:w-5 sm:h-5" />
                  <p className="text-slate-300 text-xs sm:text-sm">Istanbul, Türkiye</p>
                </div>
              </div>
            </div>

            <AnimatedSection direction="up" delay={200}>
              <div>
                <h3 className="font-bold text-lg sm:text-xl text-blue-300 mb-3 sm:mb-4">
                  Links
                </h3>
                <div className="h-1 bg-slate-600 rounded-full mb-3 sm:mb-4"></div>
                <ul className="flex flex-col gap-y-2 sm:gap-y-3">
                  <li>
                    <Link
                      href="/"
                      className="text-slate-300 hover:text-blue-400 transition-colors hover:translate-x-1 transform duration-200 inline-block text-sm sm:text-base"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/Experiences"
                      className="text-slate-300 hover:text-blue-400 transition-colors hover:translate-x-1 transform duration-200 inline-block text-sm sm:text-base"
                    >
                      Experiences
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/Education"
                      className="text-slate-300 hover:text-blue-400 transition-colors hover:translate-x-1 transform duration-200 inline-block text-sm sm:text-base"
                    >
                      Education
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/Projects"
                      className="text-slate-300 hover:text-blue-400 transition-colors hover:translate-x-1 transform duration-200 inline-block text-sm sm:text-base"
                    >
                      Projects
                    </Link>
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={300}>
              <div>
                <h3 className="font-bold text-lg sm:text-xl text-blue-300 mb-3 sm:mb-4">
                  Socials
                </h3>
                <div className="h-1 bg-slate-600 rounded-full mb-3 sm:mb-4"></div>
                <ul className="flex flex-col gap-y-2 sm:gap-y-3">
                  <li>
                    <a
                      href="https://github.com/enesakyazi"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-x-2 sm:gap-x-3 text-slate-300 hover:text-blue-400 transition-colors group text-sm sm:text-base"
                    >
                      <FaGithub size={18} className="group-hover:scale-110 transition-transform sm:w-5 sm:h-5" />
                      GitHub
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/enes-akyaz%C4%B1-347902196/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-x-2 sm:gap-x-3 text-slate-300 hover:text-blue-400 transition-colors group text-sm sm:text-base"
                    >
                      <FaLinkedin size={18} className="group-hover:scale-110 transition-transform sm:w-5 sm:h-5" />
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/enesakyazi/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-x-2 sm:gap-x-3 text-slate-300 hover:text-blue-400 transition-colors group text-sm sm:text-base"
                    >
                      <FaInstagram size={18} className="group-hover:scale-110 transition-transform sm:w-5 sm:h-5" />
                      Instagram
                    </a>
                  </li>
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </AnimatedSection>

        <AnimatedSection direction="fade" delay={400}>
          <div className="border-t border-slate-600/30 pt-4 sm:pt-6">
            <div className="text-center">
              <p className="text-slate-400 text-xs sm:text-sm">
                © 2024 Melih Enes Akyazı. All rights reserved.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}

export default Footer;
