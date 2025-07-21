import React from "react";
import AnimatedSection from "@/components/AnimatedSection";
import { FaGraduationCap, FaUniversity } from "react-icons/fa";

function Education() {
  return (
    <div className="container mx-auto px-4 py-12">
      <AnimatedSection direction="fade" delay={100}>
        <div className="flex flex-col items-center justify-center gap-y-6">
          <h1 className="text-4xl text-slate-100 font-bold text-slate-300">Education</h1>
          <div className="w-1/4 h-1 bg-gradient-primary rounded-full"></div>
        </div>
      </AnimatedSection>

      <div className="mt-12 max-w-3xl mx-auto">
        <AnimatedSection direction="left" delay={200}>
          <div className="flex items-start gap-6 mb-8">
            <div className="bg-blue-600 p-3 rounded-full">
              <FaGraduationCap size={24} className="text-white" />
            </div>
            <div className="bg-gray-800 p-6 rounded-lg flex-1">
              <h3 className="text-xl text-slate-300 font-semibold mb-2 ">
                Bachelor's Degree in Computer Engineering
              </h3>
              <p className="text-blue-400 mb-2 flex items-center gap-2">
                <FaUniversity size={16} />
                Istanbul Kultur University
              </p>
              <p className="text-slate-300 mb-3">2018 - 2024</p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection direction="right" delay={300}>
          <div className="flex items-start gap-6 mb-8">
            <div className="bg-green-600 p-3 rounded-full">
              <FaGraduationCap size={24} className="text-white" />
            </div>
            <div className="bg-gray-800 p-6 rounded-lg flex-1">
              <h3 className="text-xl text-slate-100 font-semibold mb-2 text-slate-300">
                High School
              </h3>
              <p className="text-green-400 mb-2">
                Nazmi Arıkan Fen Bilimleri Temel Lisesi
              </p>
              <p className="text-slate-300 mb-3">2017 - 2018</p>
              
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection direction="left" delay={400}>
          <div className="flex items-start gap-6">
            <div className="bg-purple-600 p-3 rounded-full">
              <FaGraduationCap size={24} className="text-white" />
            </div>
            <div className="bg-gray-800 p-6 rounded-lg flex-1">
              <h3 className="text-xl text-slate-100 font-semibold mb-2 text-slate-300">
                High School
              </h3>
              <p className="text-purple-400 mb-2">
                Özdemir Sabancı Emirgan Anadolu Lisesi
              </p>
              <p className="text-slate-300 mb-3">2014 - 2017</p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}

export default Education;
