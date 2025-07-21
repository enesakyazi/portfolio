import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaReact,
  FaPython,
  FaNodeJs,
} from "react-icons/fa";
import Image from "next/image";
import { DiJavascript } from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import AnimatedSection from "@/components/AnimatedSection";

function About() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div>
        <div className="w-full flex flex-col items-center justify-center gap-y-6 sm:gap-y-8">
          <AnimatedSection direction="fade" delay={100}>
            <Image
              src="/enes.jpg"
              alt="Melih Enes Akyazı"
              width={160}
              height={160}
              className="w-32 h-32 sm:w-40 sm:h-40 lg:w-44 lg:h-44 rounded-full shadow-2xl hover-glow"
            />
          </AnimatedSection>
          
          <AnimatedSection direction="up" delay={300}>
            <div className="text-center px-4">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-200 mb-2">
                Melih Enes Akyazı
              </h1>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={500}>
            <h2 className="text-lg sm:text-xl text-blue-300 font-semibold bg-card px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-blue-500/20">
              Software Developer
            </h2>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={700}>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 px-2 sm:px-0">
              <div className="bg-card p-3 sm:p-4 rounded-xl hover-glow flex flex-col items-center gap-2 hover:scale-105 transition-transform border border-yellow-500/20">
                <DiJavascript size={24} className="text-yellow-400 sm:w-8 sm:h-8" />
                <span className="text-slate-200 font-medium text-xs sm:text-sm text-center">JavaScript</span>
              </div>
              <div className="bg-card p-3 sm:p-4 rounded-xl hover-glow flex flex-col items-center gap-2 hover:scale-105 transition-transform border border-cyan-500/20">
                <FaReact size={24} className="text-cyan-400 sm:w-8 sm:h-8" />
                <span className="text-slate-200 font-medium text-xs sm:text-sm text-center">React</span>
              </div>
              <div className="bg-card p-3 sm:p-4 rounded-xl hover-glow flex flex-col items-center gap-2 hover:scale-105 transition-transform border border-blue-500/20">
                <SiTypescript size={24} className="text-blue-400 sm:w-8 sm:h-8" />
                <span className="text-slate-200 font-medium text-xs sm:text-sm text-center">TypeScript</span>
              </div>
              <div className="bg-card p-3 sm:p-4 rounded-xl hover-glow flex flex-col items-center gap-2 hover:scale-105 transition-transform border border-green-500/20">
                <FaNodeJs size={24} className="text-green-500 sm:w-8 sm:h-8" />
                <span className="text-slate-200 font-medium text-xs sm:text-sm text-center">Node.js</span>
              </div>
              <div className="bg-card p-3 sm:p-4 rounded-xl hover-glow flex flex-col items-center gap-2 hover:scale-105 transition-transform border border-green-500/20 col-span-2 sm:col-span-1">
                <FaPython size={24} className="text-green-400 sm:w-8 sm:h-8" />
                <span className="text-slate-200 font-medium text-xs sm:text-sm text-center">Python</span>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={800}>
            <div className="flex gap-4 sm:gap-6">
              <a
                href="https://www.instagram.com/enesakyazi/"
                target="_blank"
                role="button"
                className="bg-slate-700 hover:bg-slate-600 p-2 sm:p-3 rounded-full hover-glow hover:scale-110 transition-all"
              >
                <FaInstagram size={20} className="text-white sm:w-6 sm:h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/enes-akyaz%C4%B1-347902196/"
                target="_blank"
                role="button"
                className="bg-blue-600 hover:bg-blue-500 p-2 sm:p-3 rounded-full hover-glow hover:scale-110 transition-all"
              >
                <FaLinkedin size={20} className="text-white sm:w-6 sm:h-6" />
              </a>
              <a
                href="https://github.com/enesakyazi"
                target="_blank"
                role="button"
                className="bg-zinc-700 hover:bg-gray-700 p-2 sm:p-3 rounded-full hover-glow hover:scale-110 transition-all"
              >
                <FaGithub size={20} className="text-white sm:w-6 sm:h-6" />
              </a>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection direction="up" delay={0}>
          <div className="mt-12 sm:mt-16 lg:mt-20 bg-card rounded-2xl p-6 sm:p-8 lg:p-12 hover-glow border border-slate-600/20 mx-2 sm:mx-0">
            <div className="flex flex-col items-center justify-center gap-y-4 sm:gap-y-6">
              <h1 className="text-2xl sm:text-3xl font-bold text-slate-200">About me</h1>
              <div className="w-1/3 h-1 bg-slate-600 rounded-full"></div>
              <p className="w-1/2 text-base sm:text-lg lg:text-xl text-slate-300 text-center leading-relaxed px-2 sm:px-4">
                Hello, I&apos;m Enes. I graduated from Istanbul Kultur University
                Computer Engineering department in 2024. After completing my
                internship on web front-end development, I had the opportunity to
                work as a freelancer. Later, I completed my graduation project on
                artificial intelligence and deep learning.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}

export default About;
