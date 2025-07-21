import React from 'react'
import AnimatedSection from '@/components/AnimatedSection'
import { FaGraduationCap, FaUniversity } from 'react-icons/fa'

function Education() {
  return (
    <div className="container mx-auto px-4 py-12">
      <AnimatedSection direction="fade" delay={100}>
        <div className="flex flex-col items-center justify-center gap-y-6">
          <h1 className="text-4xl text-slate-100 font-bold">Education</h1>
          <hr className="w-32 border-gray-700" />
          <p className="text-slate-300 text-center max-w-2xl">
            My academic journey and continuous learning path in technology.
          </p>
        </div>
      </AnimatedSection>
      
      <div className="mt-12 max-w-3xl mx-auto">
        <AnimatedSection direction="left" delay={200}>
          <div className="flex items-start gap-6 mb-8">
            <div className="bg-blue-600 p-3 rounded-full">
              <FaGraduationCap size={24} className="text-white" />
            </div>
            <div className="bg-gray-800 p-6 rounded-lg flex-1">
              <h3 className="text-xl text-slate-100 font-semibold mb-2">
                Computer Engineering
              </h3>
              <p className="text-blue-400 mb-2 flex items-center gap-2">
                <FaUniversity size={16} />
                Istanbul Kultur University
              </p>
              <p className="text-slate-300 mb-3">2020 - 2024</p>
              <p className="text-slate-400">
                Bachelor&apos;s degree in Computer Engineering. Gained comprehensive knowledge in 
                software development, algorithms, data structures, and computer systems.
              </p>
            </div>
          </div>
        </AnimatedSection>
        
        <AnimatedSection direction="right" delay={300}>
          <div className="flex items-start gap-6 mb-8">
            <div className="bg-green-600 p-3 rounded-full">
              <FaGraduationCap size={24} className="text-white" />
            </div>
            <div className="bg-gray-800 p-6 rounded-lg flex-1">
              <h3 className="text-xl text-slate-100 font-semibold mb-2">
                Graduation Project
              </h3>
              <p className="text-green-400 mb-2">
                Artificial Intelligence & Deep Learning
              </p>
              <p className="text-slate-300 mb-3">2024</p>
              <p className="text-slate-400">
                Completed a comprehensive graduation project focusing on AI and deep learning 
                technologies, showcasing practical application of machine learning concepts.
              </p>
            </div>
          </div>
        </AnimatedSection>
        
        <AnimatedSection direction="left" delay={400}>
          <div className="flex items-start gap-6">
            <div className="bg-purple-600 p-3 rounded-full">
              <FaGraduationCap size={24} className="text-white" />
            </div>
            <div className="bg-gray-800 p-6 rounded-lg flex-1">
              <h3 className="text-xl text-slate-100 font-semibold mb-2">
                Continuous Learning
              </h3>
              <p className="text-purple-400 mb-2">
                Self-directed & Online Courses
              </p>
              <p className="text-slate-300 mb-3">Ongoing</p>
              <p className="text-slate-400">
                Continuously learning new technologies and frameworks including React, Next.js, 
                TypeScript, and modern web development practices.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}

export default Education
