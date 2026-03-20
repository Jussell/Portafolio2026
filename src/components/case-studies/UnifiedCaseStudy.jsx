import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  HiArrowLeft,
  HiOutlineShieldCheck,
  HiOutlineLightningBolt,
  HiOutlineExclamation,
  HiOutlineUserCircle,
  HiOutlineCheckCircle,
  HiOutlineLightBulb,
  HiOutlineMail
} from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { useLang } from '../../context/LangContext';

const UnifiedCaseStudy = ({ data }) => {
  const { lang, t } = useLang();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!data) return null;

  // Labels used in the template (localized)
  const labels = t.caseStudyLabels || {
    back: lang === 'es' ? 'Volver a Proyectos' : 'Back to Projects',
    process: lang === 'es' ? 'Proceso' : 'Process',
    decisions: lang === 'es' ? 'Decisiones' : 'Decisions',
    results: lang === 'es' ? 'Resultados' : 'Results',
    contact_me: lang === 'es' ? 'Contáctame' : 'Contact Me',
    context_title: lang === 'es' ? 'Contexto del Proyecto' : 'Project Context',
    impact_report: lang === 'es' ? 'Reporte de Impacto' : 'Impact Report',
    period_label: lang === 'es' ? 'Periodo' : 'Period',
    final_learning: lang === 'es' ? 'Aprendizaje Final' : 'Final Learning',
    wanna_know_more: lang === 'es' ? '¿Quieres saber más sobre este proyecto?' : 'Want to know more about this project?',
    contact_btn: lang === 'es' ? 'Contactar conmigo' : 'Contact Me',
    footer_copy: lang === 'es' ? 'Realizado con enfoque en diseño centrado en el usuario.' : 'Designed with a user-centered approach.'
  };

  return (
    <div className="bg-[#F8FAFC] text-slate-900 font-sans selection:bg-accent/30">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md px-6 md:px-20 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0A2540] text-white group-hover:bg-accent transition-colors">
              <HiArrowLeft />
            </div>
            <span className="text-xl font-extrabold tracking-tight text-[#0A2540] uppercase">{data.tag.split(' ')[0]}</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
            <a href="#proceso" className="hover:text-[#0A2540] transition-colors">{labels.process}</a>
            <a href="#decisiones" className="hover:text-[#0A2540] transition-colors">{labels.decisions}</a>
            <a href="#resultados" className="hover:text-[#0A2540] transition-colors">{labels.results}</a>
            <Link to="/#contact" className="rounded-full bg-[#0A2540] px-6 py-2.5 text-white hover:bg-[#0A2540]/90 transition-all shadow-lg shadow-[#0A2540]/20">
              {labels.contact_me}
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-white pt-16 pb-24 md:pt-24 md:pb-32 px-6 md:px-20">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="z-10"
            >
              <span className="inline-block rounded-full bg-accent/10 px-4 py-1 text-sm font-bold text-accent mb-6 uppercase tracking-wider">
                {data.tag}
              </span>
              <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] text-[#0A2540] mb-6 tracking-tight">
                {data.hero_title_parts ? (
                  <>
                    {data.hero_title_parts.before} <span className="text-accent">{data.hero_title_parts.highlight}</span>
                  </>
                ) : data.hero_title}
              </h1>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-xl mb-10">
                {data.hero_description}
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 rounded-xl border border-slate-100 bg-slate-50 p-4 shadow-sm">
                  <HiOutlineShieldCheck className="text-accent text-xl" />
                  <span className="text-sm font-semibold text-[#0A2540]">{lang === 'es' ? 'Diseño Enfocado en Confianza' : 'Trust-Focused Design'}</span>
                </div>
                <div className="flex items-center gap-2 rounded-xl border border-slate-100 bg-slate-50 p-4 shadow-sm">
                  <HiOutlineLightningBolt className="text-accent text-xl" />
                  <span className="text-sm font-semibold text-[#0A2540]">{lang === 'es' ? 'UX sin Fricción' : 'Frictionless UX'}</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-accent/20 blur-3xl rounded-full"></div>
              <img
                className="relative rounded-3xl shadow-2xl border border-slate-200 transform lg:rotate-2 hover:rotate-0 transition-transform duration-500 w-full object-cover aspect-[4/3]"
                src={data.image}
                alt={data.title}
              />
            </motion.div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="bg-slate-50 py-20 px-6 md:px-20">
          <div className="max-w-4xl mx-auto">
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-[#0A2540] mb-6">{labels.context_title}</h2>
              <p className="text-xl leading-relaxed text-slate-600">
                {data.context}
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100"
              >
                <div className="size-12 bg-[#0A2540]/5 rounded-xl flex items-center justify-center mb-6 text-[#0A2540]">
                  <HiOutlineExclamation className="text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-[#0A2540] mb-4">{data.problem_label}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {data.problem}
                </p>
              </motion.div>
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100"
              >
                <div className="size-12 bg-[#0A2540]/5 rounded-xl flex items-center justify-center mb-6 text-[#0A2540]">
                  <HiOutlineUserCircle className="text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-[#0A2540] mb-4">{data.role_label}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {data.role_description || data.role}
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Research & Process */}
        <section className="py-24 px-6 md:px-20" id="proceso">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row gap-16 items-center mb-24">
              <div className="w-full md:w-1/2">
                <h2 className="text-4xl font-bold text-[#0A2540] mb-6 tracking-tight">{data.process_title}</h2>
                <p className="text-lg text-slate-600 mb-8">
                  {data.process_description}
                </p>
                <ul className="space-y-4">
                  {data.process_steps?.map((step, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <HiOutlineCheckCircle className="text-accent text-2xl mt-0.5" />
                      <span className="text-slate-700">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-full md:w-1/2 bg-slate-900 rounded-3xl p-4 shadow-2xl overflow-hidden group">
                <div className="bg-slate-800 rounded-2xl overflow-hidden aspect-video relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-accent/40 via-blue-400/20 to-transparent"></div>
                  <img
                    className="w-full h-full object-cover mix-blend-overlay opacity-80 group-hover:scale-110 transition-transform duration-700"
                    src={data.process_image || data.image}
                    alt="Process Visualization"
                  />
                  <div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-md p-3 rounded-lg border border-white/20">
                    <p className="text-xs text-white font-medium">{lang === 'es' ? 'Análisis de Proceso: Visualización de Hallazgos' : 'Process Analysis: Finding Visualization'}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decisions Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-slate-100" id="decisiones">
              <div className="md:col-span-1">
                <h3 className="text-3xl font-bold text-[#0A2540] mb-6">{lang === 'es' ? 'Decisiones Clave' : 'Key Decisions'}</h3>
                <p className="text-slate-600 mb-6">
                  {data.decisions_description || (lang === 'es' ? 'Priorizamos la experiencia funcional sobre lo recargado.' : 'We prioritized functional experience over cluttered visual solutions.')}
                </p>
                <div className="p-6 bg-accent/5 rounded-2xl border border-accent/10">
                  <p className="text-[#0A2540] font-bold italic">
                    "{data.learning_quote || (lang === 'es' ? 'En diseño, la claridad es el puente hacia la conversión.' : 'In design, clarity is the bridge to conversion.')}"
                  </p>
                </div>
              </div>
              <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {data.decision_images?.map((img, i) => (
                  <div key={i} className="rounded-2xl overflow-hidden border border-slate-200 bg-white p-4 shadow-sm hover:shadow-md transition-shadow">
                    <img className="w-full h-48 object-cover rounded-xl mb-4" src={img.url || data.image} alt={img.caption} />
                    <p className="text-sm font-bold text-[#0A2540]">{img.caption}</p>
                  </div>
                )) || (
                    <>
                      <div className="rounded-2xl overflow-hidden border border-slate-200 bg-white p-4 shadow-sm">
                        <div className="w-full h-48 bg-slate-100 rounded-xl mb-4 flex items-center justify-center">
                          <span className="text-slate-400 font-bold uppercase tracking-widest text-xs">Wireframe</span>
                        </div>
                        <p className="text-sm font-bold text-[#0A2540]">{lang === 'es' ? 'Wireframe: Estructura' : 'Wireframe: Structure'}</p>
                      </div>
                      <div className="rounded-2xl overflow-hidden border border-slate-200 bg-white p-4 shadow-sm">
                        <div className="w-full h-48 bg-slate-100 rounded-xl mb-4 flex items-center justify-center">
                          <span className="text-slate-400 font-bold uppercase tracking-widest text-xs">Mockup</span>
                        </div>
                        <p className="text-sm font-bold text-[#0A2540]">{lang === 'es' ? 'Mockup: Visual' : 'Mockup: Visual'}</p>
                      </div>
                    </>
                  )}
              </div>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="bg-white border-y border-slate-100 py-24 px-6 md:px-20" id="resultados">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/5 border border-accent/10 text-accent text-xs font-bold uppercase tracking-wider mb-4">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                  </span>
                  {labels.impact_report}
                </div>
                <h2 className="text-4xl font-extrabold text-[#0A2540] tracking-tight">{data.results_title}</h2>
                <p className="text-slate-500 mt-4 text-lg">{data.results_description}</p>
              </div>
              <div className="flex items-center gap-4 text-sm font-medium text-slate-400">
                <span>{labels.period_label}: {data.period || '2023 - 2024'}</span>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-0 border border-slate-200 rounded-3xl overflow-hidden bg-white shadow-sm">
              {data.metrics?.map((m, i) => (
                <div key={i} className="p-8 md:p-10 border-b md:border-b-0 md:border-r last:border-0 border-slate-200 hover:bg-slate-50/50 transition-colors">
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{m.label}</span>
                    <HiOutlineCheckCircle className="text-accent/40 text-xl" />
                  </div>
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-5xl font-extrabold text-[#0A2540] tracking-tighter">{m.number}</span>
                    <span className="text-accent font-bold">{m.unit || ''}</span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-800 mb-2">{m.label}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {m.desc}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-12 flex items-center justify-center">
              <div className="flex items-center gap-8 px-6 py-3 rounded-full bg-slate-50 border border-slate-100 text-xs font-semibold text-slate-400">
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div> KPI REACHED
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-accent"></div> AUDITED DATA
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Learning / CTA */}
        <section className="py-24 px-6 md:px-20 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <div className="size-16 bg-accent rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-xl shadow-accent/20 rotate-3 transform">
              <HiOutlineLightBulb className="text-white text-3xl" />
            </div>
            <h2 className="text-3xl font-bold text-[#0A2540] mb-6">{labels.final_learning}</h2>
            <p className="text-xl text-slate-600 italic leading-relaxed mb-12">
              "{data.learning}"
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 border-t border-slate-100 pt-12">
              <p className="font-bold text-[#0A2540]">{labels.wanna_know_more}</p>
              <Link to="/#contact" className="flex items-center gap-2 rounded-full bg-[#0A2540] px-8 py-4 text-white hover:bg-[#0A2540]/90 transition-all shadow-xl shadow-[#0A2540]/20">
                <HiOutlineMail className="text-xl" />
                {labels.contact_btn}
              </Link>
            </div>
          </div>
        </section>
      </main>

    </div>
  );
};

export default UnifiedCaseStudy;
