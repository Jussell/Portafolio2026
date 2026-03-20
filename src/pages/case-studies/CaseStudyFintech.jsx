import React from 'react';
import { motion } from 'framer-motion';
import { HiCheckCircle, HiLightBulb, HiArrowLeft } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import Logo from '../../components/Logo';

const CaseStudyFintech = ({ data }) => {
  if (!data) return null;

  return (
    <div className="bg-white text-text-main font-body pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white pt-16 pb-24 md:pt-24 md:pb-32 px-6">
        {/* Background Watermark */}
        <div 
          className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none -z-0"
          style={{ opacity: 0.03 }}
        >
          <Logo className="w-full h-full text-primary transform translate-x-1/2 -translate-y-1/2" />
        </div>
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="z-10"
          >
            <Link to="/" className="inline-flex items-center gap-2 text-primary font-bold mb-8 hover:text-accent transition-colors group">
              <HiArrowLeft className="group-hover:-translate-x-1 transition-transform" /> 
              {data.back_btn || "Back to Projects"}
            </Link>
            <span className="inline-block rounded-full bg-accent/10 px-4 py-1 text-sm font-bold text-accent mb-6 uppercase tracking-widest">
              {data.tag}
            </span>
            <h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.1] text-primary mb-6 tracking-tight">
              {data.hero_title}
            </h1>
            <p className="text-lg md:text-xl text-muted leading-relaxed max-w-xl mb-10">
              {data.hero_description}
            </p>
            <div className="flex flex-wrap gap-4">
              {data.features?.map((feature, i) => (
                <div key={i} className="flex items-center gap-2 rounded-xl border border-surface bg-surface/50 p-4">
                  <HiCheckCircle className="text-accent text-xl" />
                  <span className="text-sm font-bold text-primary">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-accent/10 blur-3xl rounded-full"></div>
            <img 
              className="relative rounded-[2rem] shadow-2xl border border-surface transform lg:rotate-2 hover:rotate-0 transition-transform duration-500 w-full object-cover aspect-[4/3]" 
              src={data.image} 
              alt={data.title}
            />
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="bg-surface/30 py-24 px-6 border-y border-surface">
        <div className="max-w-4xl mx-auto">
          <div className="mb-20">
            <h2 className="text-sm font-bold text-accent uppercase tracking-[0.3em] mb-4">{data.overview_label}</h2>
            <p className="text-2xl md:text-3xl font-display font-medium leading-relaxed text-primary">
              {data.context}
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="bg-white p-10 rounded-[2rem] shadow-soft border border-surface">
              <div className="size-12 bg-primary/5 rounded-2xl flex items-center justify-center mb-6 text-primary">
                <span className="font-bold text-xl">!</span>
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">{data.problem_label}</h3>
              <p className="text-muted leading-relaxed">
                {data.problem}
              </p>
            </div>
            <div className="bg-white p-10 rounded-[2rem] shadow-soft border border-surface">
              <div className="size-12 bg-primary/5 rounded-2xl flex items-center justify-center mb-6 text-primary">
                <span className="font-bold text-xl">@</span>
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">{data.role_label}</h3>
              <p className="text-muted leading-relaxed">
                {data.role}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-6 md:px-20">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-8 tracking-tight">{data.process_title}</h2>
              <p className="text-lg text-muted mb-10 leading-relaxed">
                {data.process_description}
              </p>
              <ul className="space-y-6">
                {data.process_steps?.map((step, i) => (
                  <li key={i} className="flex items-start gap-4 p-4 rounded-2xl hover:bg-surface transition-colors">
                    <HiCheckCircle className="text-accent text-2xl mt-1 shrink-0" />
                    <span className="text-text-main font-medium">{step}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:w-1/2 bg-primary rounded-[3rem] p-4 shadow-2xl relative overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent pointer-events-none"></div>
               <img 
                 className="w-full h-full object-cover rounded-[2.5rem] opacity-90 transition-opacity hover:opacity-100" 
                 src={data.process_image || data.image} 
                 alt="Process" 
               />
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="bg-primary py-24 px-6 text-white relative overflow-hidden">
        {/* Background Watermark */}
        <div 
          className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-0"
          style={{ opacity: 0.05 }}
        >
          <Logo className="w-full h-full text-white transform -translate-x-1/4 translate-y-1/4" />
        </div>
        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">{data.results_title}</h2>
            <p className="text-accent font-medium max-w-2xl mx-auto">{data.results_description}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {data.metrics?.map((m, i) => (
              <div key={i} className="relative group text-center">
                <div className="absolute inset-0 bg-white/5 blur-xl group-hover:bg-white/10 transition-all rounded-full scale-150"></div>
                <div className="relative">
                  <span className="text-6xl md:text-7xl font-metrics font-bold text-accent mb-4 block">{m.number}</span>
                  <p className="text-lg font-bold text-white mb-2 uppercase tracking-[0.2em]">{m.label}</p>
                  <p className="text-white/60 text-sm max-w-[200px] mx-auto">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Section */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="size-16 bg-accent rounded-2xl flex items-center justify-center mx-auto mb-10 shadow-xl shadow-accent/20 transform rotate-3">
            <HiLightBulb className="text-white text-3xl" />
          </div>
          <h2 className="text-2xl md:text-3xl font-display font-medium text-primary mb-8 italic">
            "{data.learning}"
          </h2>
          <div className="pt-12 border-t border-surface">
             <Link to="/#contact" className="inline-flex items-center gap-3 px-10 py-5 bg-primary text-white font-bold rounded-full hover:bg-accent-dark transition-all transform hover:-translate-y-1 shadow-lg">
                {data.contact_btn || "Contact for Collaboration"}
             </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudyFintech;
