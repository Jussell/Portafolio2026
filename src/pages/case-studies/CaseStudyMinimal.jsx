import React from 'react';
import { motion } from 'framer-motion';
import { HiArrowLeft, HiOutlineLightBulb, HiCheck } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import Logo from '../../components/Logo';

const CaseStudyMinimal = ({ data }) => {
  if (!data) return null;

  return (
    <div className="bg-white text-text-main font-body pt-20">
      {/* Hero Section with Watermark */}
      <section className="relative px-6 md:px-20 lg:px-40 py-16 md:py-32 bg-surface/50 overflow-hidden">
        {/* Subtle Watermark */}
        <div 
          className="absolute -top-[20%] -left-[10%] pointer-events-none -z-0"
          style={{ opacity: 0.03 }}
        >
          <Logo className="w-[1000px] h-[1000px] text-primary" />
        </div>

        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col gap-10"
          >
            <Link to="/" className="inline-flex items-center gap-2 text-primary font-bold hover:text-accent transition-colors group">
              <HiArrowLeft className="group-hover:-translate-x-1 transition-transform" /> 
              {data.back_btn || "Back to Projects"}
            </Link>
            <div className="flex flex-col gap-6">
              <span className="text-accent font-bold tracking-[0.3em] uppercase text-xs">{data.tag}</span>
              <h1 className="text-primary text-6xl md:text-8xl font-display font-bold leading-[1] tracking-tight">
                {data.title}
              </h1>
              <p className="text-muted text-xl md:text-2xl leading-relaxed max-w-xl">
                {data.hero_description}
              </p>
            </div>
            <div className="flex gap-12 pt-6 border-t border-surface">
              <div className="flex flex-col gap-2">
                <span className="text-muted text-xs font-bold uppercase tracking-widest">{data.sector_label}</span>
                <span className="text-primary font-bold text-lg">{data.sector}</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-muted text-xs font-bold uppercase tracking-widest">{data.year_label}</span>
                <span className="text-primary font-bold text-lg">{data.year}</span>
              </div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="aspect-[4/3] w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-surface">
              <img className="w-full h-full object-cover" src={data.image} alt={data.title} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="px-6 md:px-20 lg:px-40 py-32 bg-white" id="context">
        <div className="max-w-[1000px] mx-auto">
          <div className="border-l-8 border-accent pl-12 mb-24">
            <h2 className="text-primary text-3xl md:text-5xl font-display font-medium leading-tight italic">
              "{data.quotation}"
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <div className="flex flex-col gap-6">
              <h3 className="text-primary text-2xl font-bold flex items-center gap-3">
                <div className="size-8 rounded-lg bg-surface flex items-center justify-center">
                   <div className="size-2 rounded-full bg-accent"></div>
                </div>
                {data.summary_label}
              </h3>
              <p className="text-lg text-muted leading-relaxed">
                {data.context}
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <h3 className="text-primary text-2xl font-bold flex items-center gap-3">
                <div className="size-8 rounded-lg bg-surface flex items-center justify-center">
                   <div className="size-2 rounded-full bg-accent"></div>
                </div>
                {data.problem_label}
              </h3>
              <p className="text-lg text-muted leading-relaxed">
                {data.problem}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Role & Design Process */}
      <section className="px-6 md:px-20 lg:px-40 py-32 bg-surface/30 relative overflow-hidden">
        {/* Subtle Watermark */}
        <div 
          className="absolute -bottom-[10%] -right-[10%] pointer-events-none -z-0"
          style={{ opacity: 0.02 }}
        >
          <Logo className="w-[800px] h-[800px] text-primary" />
        </div>

        <div className="max-w-[1000px] mx-auto space-y-32 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 items-start">
            <div className="md:col-span-1 bg-primary text-white p-10 rounded-[2.5rem] shadow-xl">
              <h4 className="text-accent font-bold text-xs uppercase mb-6 tracking-[0.2em]">{data.role_label}</h4>
              <p className="text-xl font-display font-medium leading-relaxed">
                {data.role_description}
              </p>
            </div>
            <div className="md:col-span-2 space-y-10">
              <h3 className="text-primary text-4xl md:text-5xl font-display font-bold tracking-tight">{data.process_title}</h3>
              <p className="text-muted text-xl leading-relaxed">
                {data.process_description}
              </p>
              <div className="grid grid-cols-2 gap-6">
                {data.process_tags?.map((tag, i) => (
                   <div key={i} className="p-6 bg-white rounded-2xl border border-surface shadow-soft flex items-center gap-4">
                     <HiCheck className="text-accent text-xl" />
                     <span className="font-bold text-primary">{tag}</span>
                   </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-16">
            <div className="flex flex-col gap-6 max-w-2xl">
              <h3 className="text-primary text-4xl font-display font-bold tracking-tight">{data.decisions_title}</h3>
              <p className="text-muted text-xl leading-relaxed">
                {data.decisions_description}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {data.decision_images?.map((img, i) => (
                <div key={i} className="bg-white p-3 rounded-3xl shadow-soft border border-surface group overflow-hidden">
                  <img className="w-full h-auto rounded-2xl grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-[1.02]" src={img.url || data.image} alt="Decision" />
                  <p className="p-6 text-sm text-muted font-medium italic">{img.caption}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results Center */}
      <section className="px-6 py-40 bg-primary text-white text-center relative overflow-hidden">
        {/* Subtle Watermark */}
        <div 
          className="absolute inset-0 pointer-events-none -z-0 flex items-center justify-center"
          style={{ opacity: 0.1 }}
        >
          <Logo className="w-full h-full text-white scale-125 opacity-20" />
        </div>

        <div className="max-w-[1000px] mx-auto space-y-16 relative z-10">
          <div className="space-y-6">
            <h2 className="text-accent font-bold tracking-[0.4em] uppercase text-xs">{data.results_label}</h2>
            <h3 className="text-5xl md:text-7xl font-display font-bold leading-tight">{data.results_title}</h3>
            <p className="text-white/60 text-xl max-w-2xl mx-auto">
              {data.results_description}
            </p>
          </div>
          <div className="relative group">
             <div className="absolute -inset-20 bg-accent/20 rounded-full blur-[100px] opacity-50"></div>
             <div className="relative flex flex-col items-center justify-center p-20 bg-white/5 border border-white/10 rounded-[4rem] backdrop-blur-xl">
                <span className="text-accent text-9xl md:text-[12rem] font-metrics font-bold tracking-tighter mb-6">{data.main_metric}</span>
                <p className="text-2xl md:text-3xl font-bold tracking-wide text-white/90">{data.main_metric_label}</p>
             </div>
          </div>
        </div>
      </section>

      {/* Learnings & Footer */}
      <section className="px-6 py-40 bg-white">
        <div className="max-w-[1000px] mx-auto flex flex-col md:flex-row gap-24 items-center">
          <div className="flex-1 space-y-10">
             <h3 className="text-primary text-4xl font-display font-bold tracking-tight">{data.learning_label}</h3>
             <p className="text-2xl text-muted leading-relaxed italic border-l-4 border-surface pl-10">
               "{data.learning}"
             </p>
          </div>
          <div className="flex-1 w-full">
             <div className="aspect-square bg-surface rounded-[3rem] flex items-center justify-center relative group overflow-hidden">
                <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <HiOutlineLightBulb className="text-primary text-9xl relative z-10 transform group-hover:scale-110 transition-transform" />
             </div>
          </div>
        </div>
        <div className="mt-32 pt-16 border-t border-surface flex flex-col md:flex-row justify-between items-center gap-10">
           <Link to="/" className="text-primary font-bold hover:text-accent transition-colors">Ver todos los proyectos</Link>
           <p className="text-muted text-sm font-medium">© 2024 Design Case Study</p>
           <div className="flex gap-8">
              <Link to="/#contact" className="px-8 py-3 bg-primary text-white font-bold rounded-full text-sm">Contáctame</Link>
           </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudyMinimal;
