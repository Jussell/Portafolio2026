import React from 'react';
import { motion } from 'framer-motion';
import { HiArrowUpRight } from 'react-icons/hi2';
import { Link } from 'react-router-dom';
import { useLang } from '../context/LangContext';

const ProjectsSection = () => {
  const { lang, t } = useLang();

  return (
    <section className="bg-surface/50 w-full py-12 md:py-20" id="projects">
      <div className="max-w-[1400px] mx-auto px-6">
        <h2 className="sr-only">{t.projects.heading}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.projects.items.map((project, idx) => (
            <Link key={idx} to={`/project/${project.id}`}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group relative aspect-[3/4] md:aspect-[4/3] rounded-xl overflow-hidden shadow-soft hover:shadow-hover transition-all duration-500 hover:-translate-y-2"
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 project-card-overlay opacity-80 group-hover:opacity-100 transition-opacity" />
                
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <span className="inline-block px-3 py-1 bg-accent/20 backdrop-blur-md text-white text-[10px] font-bold rounded-full mb-3 w-fit border border-white/20 uppercase tracking-widest leading-none">
                    {project.tag}
                  </span>
                  <div className="mb-2">
                    <h3 className="font-display font-bold text-2xl text-white leading-tight">{project.title}</h3>
                    <span className="font-metrics text-white/90 text-xs font-bold uppercase tracking-wider">{project.metric}</span>
                  </div>
                  <p className="text-white/80 text-sm mb-6 transform translate-y-0 md:translate-y-4 opacity-100 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 transition-all duration-500 italic leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* View Case CTA - Integrated into flow to prevent overlap */}
                  <div className="flex justify-end transform translate-y-0 md:translate-y-4 opacity-100 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 transition-all duration-500">
                    <div className="flex items-center text-white font-semibold text-xs gap-1.5 bg-primary/20 backdrop-blur-sm px-3 py-2 rounded-lg border border-white/10">
                      {lang === 'en' ? 'View Case' : 'Ver Caso'} <HiArrowUpRight className="text-sm" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
