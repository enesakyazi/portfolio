"use client";

import Link from "next/link";
import React from "react";
import { CiMail } from "react-icons/ci";
import { IoLocationSharp } from "react-icons/io5";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import AnimatedSection from "@/components/AnimatedSection";

function Footer() {
  return (
    <div className="w-full bg-card mt-16 border-t border-slate-600/30">
      <div className="container mx-auto px-4 py-16">
        <AnimatedSection direction="fade" delay={100}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="lg:col-span-2">
              <h1 className="text-2xl font-bold text-blue-300 mb-4">
                Melih Enes Akyazı
              </h1>
              <div className="w-1/2 h-1 bg-slate-600 rounded-full mb-6"></div>
              <div className="space-y-3">
                <div className="flex items-center gap-x-3 text-sm">
                  <CiMail size={20} className="text-blue-400" />
                  <p className="text-slate-300">melihenesakyazi@gmail.com</p>
                </div>
                <div className="flex items-center gap-x-3 text-sm">
                  <IoLocationSharp size={20} className="text-blue-400" />
                  <p className="text-slate-300">Istanbul, Türkiye</p>
                </div>
              </div>
            </div>

            <AnimatedSection direction="up" delay={200}>
              <div>
                <h3 className="font-bold text-xl text-blue-300 mb-4">
                  Links
                </h3>
                <div className="h-1 bg-slate-600 rounded-full mb-4"></div>
                <ul className="flex flex-col gap-y-3">
                  <li>
                    <Link
                      href="/"
                      className="text-slate-300 hover:text-blue-400 transition-colors hover:translate-x-1 transform duration-200 inline-block"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/Experiences"
                      className="text-slate-300 hover:text-blue-400 transition-colors hover:translate-x-1 transform duration-200 inline-block"
                    >
                      Experiences
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/Education"
                      className="text-slate-300 hover:text-blue-400 transition-colors hover:translate-x-1 transform duration-200 inline-block"
                    >
                      Education
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/Projects"
                      className="text-slate-300 hover:text-blue-400 transition-colors hover:translate-x-1 transform duration-200 inline-block"
                    >
                      Projects
                    </Link>
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={300}>
              <div>
                <h3 className="font-bold text-xl text-blue-300  mb-4">
                  Socials
                </h3>
                <div className="h-1 bg-slate-600 rounded-full mb-4"></div>
                <ul className="flex flex-col gap-y-3">
                  <li>
                    <a
                      href="https://github.com/enesakyazi"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-x-3 text-slate-300 hover:text-blue-400 transition-colors group"
                    >
                      <FaGithub size={20} className="group-hover:scale-110 transition-transform" />
                      GitHub
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/melihenesakyazi/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-x-3 text-slate-300 hover:text-blue-400 transition-colors group"
                    >
                      <FaLinkedin size={20} className="group-hover:scale-110 transition-transform" />
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/melihenesakyazi/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-x-3 text-slate-300 hover:text-blue-400 transition-colors group"
                    >
                      <FaInstagram size={20} className="group-hover:scale-110 transition-transform" />
                      Instagram
                    </a>
                  </li>
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </AnimatedSection>

        <AnimatedSection direction="fade" delay={400}>
          <div className="border-t border-slate-600/30 pt-6">
            <div className="text-center">
              <p className="text-slate-400 text-sm">
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
