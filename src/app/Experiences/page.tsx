import React from 'react'
import AnimatedSection from '@/components/AnimatedSection'

function Experiences() {
  return (
    <div className="container mx-auto px-4 py-12">
      <AnimatedSection direction="fade" delay={100}>
        <div className="flex flex-col items-center justify-center gap-y-6">
          <h1 className="text-4xl font-bold text-slate-200">Experiences</h1>
          <div className="w-1/4 h-1 bg-gradient-primary rounded-full"></div>
        </div>
      </AnimatedSection>
      
      <div className="mt-12 space-y-8 max-w-4xl mx-auto">
        <AnimatedSection direction="left" delay={200}>
          <div className="bg-card p-8 rounded-2xl hover-glow border border-slate-600/20">
            <div className="flex items-start gap-4">
              <div className="bg-blue-600 p-3 rounded-lg flex-shrink-0">
                <div className="w-6 h-6 bg-white rounded-full"></div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl text-blue-300 font-bold mb-2">Internship</h3>
                <p className="text-slate-400 font-semibold mb-4">Adesso Turkiye • 2022</p>
                <p className="text-slate-300 leading-relaxed">
                  I received training as a front-end developer intern at Adesso Turkey office and I improved myself on topics such as HTML/CSS, Javascript and React.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
        
        <AnimatedSection direction="right" delay={300}>
          <div className="bg-card p-8 rounded-2xl hover-glow border border-slate-600/20">
            <div className="flex items-start gap-4">
              <div className="bg-slate-600 p-3 rounded-lg flex-shrink-0">
                <div className="w-6 h-6 bg-white rounded-full"></div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl text-blue-300 font-bold mb-2">Jr.Front-End Developer</h3>
                <p className="text-slate-400 font-semibold mb-4">Freelancer • 2022-2023</p>
                <p className="text-slate-300 leading-relaxed">
                  After my internship ended, I worked on creating the interface of the e-commerce site as a junior front-end developer.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}

export default Experiences