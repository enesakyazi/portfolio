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
    <div className="container mx-auto px-4 py-12">
      <AnimatedSection direction="fade" delay={100}>
        <div className="flex flex-col items-center justify-center gap-y-6">
          <h1 className="text-4xl font-bold text-slate-200">Projects</h1>
          <div className="w-1/4 h-1 bg-gradient-primary rounded-full"></div>
          <p className="text-slate-300 text-center max-w-2xl">
            Here are some of the projects I&apos;ve worked on.
          </p>
        </div>
      </AnimatedSection>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <AnimatedSection key={index} direction="up" delay={200 + index * 100}>
            <div className={`bg-card rounded-2xl hover-glow h-full flex flex-col border ${project.accent}`}>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl text-blue-300 font-bold mb-3">
                  {project.title}
                </h3>
                <p className="text-slate-300 mb-4 flex-grow leading-relaxed">
                  {project.description}
                </p>
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-slate-700/60 text-slate-300 px-3 py-1 rounded-full text-sm font-medium border border-slate-600/40"
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
                    className="flex items-center gap-2 text-slate-300 hover:text-blue-400 transition-colors bg-slate-700/50 hover:bg-slate-600/50 px-4 py-2 rounded-lg border border-slate-600/40"
                  >
                    <FaGithub size={16} />
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
