import React from 'react';
import { motion } from 'framer-motion';
import { HiFire, HiShieldCheck, HiCube, HiArrowLeft } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import Logo from '../../components/Logo';

const CaseStudyPremium = ({ data }) => {
  if (!data) return null;

  return (
    <div className="bg-white text-text-main font-body pt-20 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center pt-32 pb-24 px-6 overflow-hidden bg-white">
        {/* Background Watermark */}
        <div 
          className="absolute inset-0 pointer-events-none -z-0 flex items-center justify-center"
          style={{ opacity: 0.04 }}
        >
          <Logo className="w-full h-full text-primary scale-150 rotate-12" />
        </div>
        
        <div className="max-w-[1400px] mx-auto text-center relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Link to="/" className="inline-flex items-center gap-2 text-primary font-bold mb-10 hover:text-accent transition-colors group">
              <HiArrowLeft className="group-hover:-translate-x-1 transition-transform" /> 
              {data.back_btn || "Back to Projects"}
            </Link>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-widest mb-10">
              {data.tag}
            </div>
            <h1 className="text-primary text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[1.05] tracking-tight mb-10">
              {data.hero_title_part1} <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary">{data.hero_title_accent}</span> {data.hero_title_part2}
            </h1>
            <p className="text-muted text-lg md:text-2xl max-w-3xl leading-relaxed mb-16 mx-auto">
              {data.hero_description}
            </p>
            
            <div className="w-full relative rounded-[3rem] overflow-hidden shadow-2xl aspect-[21/9] border border-surface group">
              <img 
                src={data.image} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                alt={data.title} 
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Context Section */}
      <section className="bg-white py-24 px-6 border-y border-surface" id="context">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20">
          <div className="lg:col-span-7 flex flex-col gap-10">
            <div>
              <h2 className="text-accent text-sm font-bold uppercase tracking-[0.3em] mb-6">{data.summary_label}</h2>
              <p className="text-3xl md:text-4xl font-display font-medium leading-tight text-primary">
                {data.context}
              </p>
            </div>
            <div className="p-10 rounded-[2.5rem] bg-surface/50 border border-surface shadow-soft">
              <h3 className="text-primary text-2xl font-bold mb-6 flex items-center gap-3">
                <HiFire className="text-accent" /> {data.problem_label}
              </h3>
              <p className="text-lg text-muted leading-relaxed italic">
                {data.problem}
              </p>
            </div>
          </div>
          <div className="lg:col-span-5 space-y-12">
            <div className="flex flex-col gap-3">
              <h3 className="text-muted font-bold text-xs uppercase tracking-widest">{data.role_label}</h3>
              <p className="text-2xl font-display font-bold text-primary">{data.role_title}</p>
              <p className="text-lg text-muted leading-relaxed">
                {data.role_description}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {data.role_tags?.map((tag, i) => (
                <div key={i} className="p-6 border border-surface rounded-2xl bg-white shadow-soft flex items-center gap-3">
                   <div className="size-2 rounded-full bg-accent"></div>
                   <span className="font-bold text-sm text-primary">{tag}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Decisions Grid */}
      <section className="px-6 py-32 bg-primary text-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-accent text-sm font-bold uppercase tracking-[0.4em] mb-6">{data.decisions_label}</h2>
            <h3 className="text-4xl md:text-6xl font-display font-bold max-w-5xl mx-auto leading-tight">
              {data.decisions_title}
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.decision_cards?.map((card, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="p-12 rounded-[3rem] bg-white/5 border border-white/10 backdrop-blur-md"
              >
                <div className="size-16 bg-accent/20 rounded-2xl flex items-center justify-center mb-8">
                  <HiCube className="text-accent text-3xl" />
                </div>
                <h4 className="text-2xl font-bold mb-6">{card.title}</h4>
                <p className="text-white/60 leading-relaxed text-lg">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="px-6 py-32 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-24 items-center">
            <div className="lg:w-1/2">
               <h2 className="text-accent text-sm font-bold uppercase tracking-[0.3em] mb-6">{data.results_label}</h2>
               <h3 className="text-5xl md:text-7xl font-display font-bold mb-10 text-primary tracking-tight">
                 {data.results_title}
               </h3>
               <p className="text-xl text-muted leading-relaxed mb-12">
                 {data.results_description}
               </p>
               
               <div className="inline-flex items-center gap-8 p-10 rounded-[3rem] bg-gradient-to-br from-primary to-slate-900 text-white shadow-2xl">
                 <div className="flex flex-col">
                   <span className="text-8xl font-metrics font-bold text-accent">{data.big_metric}</span>
                   <span className="text-xs uppercase font-bold tracking-[0.2em] opacity-60">{data.big_metric_label}</span>
                 </div>
                 <div className="h-20 w-[1px] bg-white/10"></div>
                 <div className="flex flex-col">
                   <span className="text-2xl font-bold text-white">{data.big_metric_detail}</span>
                   <span className="text-sm opacity-50">{data.big_metric_detail_label}</span>
                 </div>
               </div>
            </div>
            <div className="lg:w-1/2 w-full">
               <div className="grid grid-cols-2 gap-6">
                 {data.secondary_metrics?.map((m, i) => (
                    <div key={i} className="aspect-square rounded-[2.5rem] bg-surface p-10 flex flex-col justify-center items-center text-center shadow-soft border border-white/50">
                       <span className="text-5xl font-metrics font-bold text-primary mb-4">{m.value}</span>
                       <span className="text-sm text-muted font-bold uppercase tracking-wider">{m.label}</span>
                    </div>
                 ))}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <footer className="px-6 py-24">
        <div className="max-w-[1400px] mx-auto rounded-[4rem] bg-gradient-to-br from-primary via-slate-900 to-primary p-16 md:p-32 text-center text-white relative overflow-hidden group">
           <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
           <div className="relative z-10">
              <h2 className="text-5xl md:text-7xl font-display font-bold mb-10 tracking-tight">{data.final_cta_title}</h2>
              <p className="text-xl text-white/60 mb-16 max-w-2xl mx-auto">
                {data.final_cta_description}
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                 <Link to="/" className="px-12 py-6 bg-accent text-primary font-bold rounded-full hover:bg-white transition-all transform hover:-translate-y-1 shadow-xl">
                   {data.final_cta_btn1 || "See more projects"}
                 </Link>
                 <Link to="/#contact" className="px-12 py-6 bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold rounded-full hover:bg-white/20 transition-all">
                   {data.final_cta_btn2 || "Contact Me"}
                 </Link>
              </div>
           </div>
        </div>
      </footer>
    </div>
  );
};

export default CaseStudyPremium;
