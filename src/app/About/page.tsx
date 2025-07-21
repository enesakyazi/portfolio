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
    <div className="container mx-auto px-4 py-12">
      <div>
        <div className="w-full flex flex-col items-center justify-center gap-y-8">
          <AnimatedSection direction="fade" delay={100}>
            <Image
              src="/enes.jpg"
              alt="Melih Enes Akyazı"
              width={180}
              height={180}
              className="rounded-full shadow-2xl hover-glow"
            />
          </AnimatedSection>
          
          <AnimatedSection direction="up" delay={300}>
            <div className="text-center">
              <h1 className="text-4xl font-bold text-blue-200  mb-2">
                Melih Enes Akyazı
              </h1>
            </div>
            <div className="h-1 bg-gradient-primary rounded-full"></div>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={500}>
            
            <h2 className="text-xl text-blue-300 font-semibold bg-card px-6 py-3 rounded-full border border-blue-500/20">
              Software Developer
            </h2>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={700}>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <div className="bg-card p-4 rounded-xl hover-glow flex flex-col items-center gap-2 hover:scale-105 transition-transform border border-yellow-500/20">
                <DiJavascript size={30} className="text-yellow-400" />
                <span className="text-slate-200 font-medium">JavaScript</span>
              </div>
              <div className="bg-card p-4 rounded-xl hover-glow flex flex-col items-center gap-2 hover:scale-105 transition-transform border border-cyan-500/20">
                <FaReact size={30} className="text-cyan-400" />
                <span className="text-slate-200 font-medium">React</span>
              </div>
              <div className="bg-card p-4 rounded-xl hover-glow flex flex-col items-center gap-2 hover:scale-105 transition-transform border border-blue-500/20">
                <SiTypescript size={30} className="text-blue-400" />
                <span className="text-slate-200 font-medium">TypeScript</span>
              </div>
              <div className="bg-card p-4 rounded-xl hover-glow flex flex-col items-center gap-2 hover:scale-105 transition-transform border border-green-500/20">
                <FaNodeJs size={30} className="text-green-500" />
                <span className="text-slate-200 font-medium">Node.js</span>
              </div>
              <div className="bg-card p-4 rounded-xl hover-glow flex flex-col items-center gap-2 hover:scale-105 transition-transform border border-green-500/20">
                <FaPython size={30} className="text-green-400" />
                <span className="text-slate-200 font-medium">Python</span>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={800}>
            <div className="flex gap-6">
              <a
                href="https://www.instagram.com/enesakyazi/"
                target="_blank"
                role="button"
                className="bg-slate-700 hover:bg-slate-600 p-3 rounded-full hover-glow hover:scale-110 transition-all"
              >
                <FaInstagram size={24} className="text-white" />
              </a>
              <a
                href="https://www.linkedin.com/in/enes-akyaz%C4%B1-347902196/"
                target="_blank"
                role="button"
                className="bg-blue-600 hover:bg-blue-500 p-3 rounded-full hover-glow hover:scale-110 transition-all"
              >
                <FaLinkedin size={24} className="text-white" />
              </a>
              <a
                href="https://github.com/enesakyazi"
                target="_blank"
                role="button"
                className="bg-zinc-700 hover:bg-gray-700 p-3 rounded-full hover-glow hover:scale-110 transition-all"
              >
                <FaGithub size={24} className="text-white" />
              </a>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection direction="up" delay={0}>
          <div className="mt-20 bg-card rounded-2xl p-12 hover-glow border border-slate-600/20">
            <div className="flex flex-col items-center justify-center gap-y-6">
              <h1 className="text-3xl font-bold text-slate-200">About me</h1>
              <div className="w-1/4 h-1 bg-slate-600 rounded-full"></div>
              <p className="w-full md:w-2/3 lg:w-1/2 text-xl text-slate-300 text-center leading-relaxed">
                Hello, I'm Enes. I graduated from Istanbul Kultur University
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
