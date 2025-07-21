import React from "react";
import AnimatedSection from "@/components/AnimatedSection";
import { FaGithub } from "react-icons/fa";

function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "Personal portfolio website built with Next.js, TypeScript, and Tailwind CSS",
      tech: ["Next.js", "TypeScript", "Tailwind CSS"],
      github: "https://github.com/enesakyazi",
      accent: "border-blue-500/30",
    },
    {
      title: "Emotion Recognition with Deep Learning",
      description:
        "Graduation project focusing on artificial intelligence and deep learning",
      tech: ["Python", "TensorFlow", "AI/ML"],
      github: "https://github.com/enesakyazi/EmotionRecognition",
      accent: "border-slate-500/30",
    },
    {
      title: "Google Flights Clone",
      description: "Google Flights Clone for API connection testing",
      tech: ["React", "JavaScript"],
      github: "https://github.com/enesakyazi/flight-search",
      accent: "border-gray-500/30",
    },
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <AnimatedSection direction="fade" delay={100}>
        <div className="flex flex-col items-center justify-center gap-y-4 sm:gap-y-6">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-300">
            Projects
          </h1>
          <div className="w-1/3 h-1 bg-gradient-primary rounded-full"></div>
        </div>
      </AnimatedSection>

      <div className="mt-8 sm:mt-12 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 px-2 sm:px-0">
        {projects.map((project, index) => (
          <AnimatedSection key={index} direction="up" delay={200 + index * 100}>
            <div
              className={`bg-card rounded-2xl hover-glow h-full flex flex-col border ${project.accent}`}
            >
              <div className="p-4 sm:p-6 flex-1 flex flex-col">
                <h3 className="text-lg sm:text-xl text-blue-300 font-bold mb-2 sm:mb-3">
                  {project.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-300 mb-4 flex-grow leading-relaxed">
                  {project.description}
                </p>
                <div className="mb-4 sm:mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-slate-700/60 text-slate-300 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium border border-slate-600/40"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-slate-300 hover:text-blue-400 transition-colors bg-slate-700/50 hover:bg-slate-600/50 px-3 sm:px-4 py-2 rounded-lg border border-slate-600/40 text-sm sm:text-base"
                  >
                    <FaGithub size={14} className="sm:w-4 sm:h-4" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
}

export default Projects;
