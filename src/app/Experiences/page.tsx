import React from 'react'
import AnimatedSection from '@/components/AnimatedSection'

function Experiences() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <AnimatedSection direction="fade" delay={100}>
        <div className="flex flex-col items-center justify-center gap-y-4 sm:gap-y-6">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-300">Experiences</h1>
          <div className="w-1/3 h-1 bg-gradient-primary rounded-full"></div>
          
        </div>
      </AnimatedSection>
      
      <div className="mt-8 sm:mt-12 space-y-6 sm:space-y-8 max-w-4xl mx-auto px-2 sm:px-0">
        <AnimatedSection direction="left" delay={200}>
          <div className="bg-card p-4 sm:p-6 lg:p-8 rounded-2xl hover-glow border border-slate-600/20">
            <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
              <div className="bg-blue-600 p-2 sm:p-3 rounded-lg flex-shrink-0">
                <div className="w-4 h-4 sm:w-6 sm:h-6 bg-white rounded-full"></div>
              </div>
              <div className="flex-1 w-full">
                <h3 className="text-lg sm:text-xl lg:text-2xl text-blue-300 font-bold mb-1 sm:mb-2">Internship</h3>
                <p className="text-sm sm:text-base text-slate-400 font-semibold mb-2 sm:mb-4">Adesso Turkiye • 2022</p>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  I received training as a front-end developer intern at Adesso Turkey office and I improved myself on topics such as HTML/CSS, Javascript and React.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
        
        <AnimatedSection direction="right" delay={300}>
          <div className="bg-card p-4 sm:p-6 lg:p-8 rounded-2xl hover-glow border border-slate-600/20">
            <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
              <div className="bg-slate-600 p-2 sm:p-3 rounded-lg flex-shrink-0">
                <div className="w-4 h-4 sm:w-6 sm:h-6 bg-white rounded-full"></div>
              </div>
              <div className="flex-1 w-full">
                <h3 className="text-lg sm:text-xl lg:text-2xl text-blue-300 font-bold mb-1 sm:mb-2">Jr.Front-End Developer</h3>
                <p className="text-sm sm:text-base text-slate-400 font-semibold mb-2 sm:mb-4">Freelancer • 2022-2023</p>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
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