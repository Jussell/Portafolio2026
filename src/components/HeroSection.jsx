import React from 'react';
import { motion } from 'framer-motion';
import { HiArrowRight, HiUsers, HiCreditCard, HiHome, HiTrendingUp } from 'react-icons/hi';
import { useLang } from '../context/LangContext';
import Logo from './Logo';
import HeroGraphic from './HeroGraphic';

const HeroSection = () => {
  const { t } = useLang();

  const metricsIcons = {
    group: HiUsers,
    payments: HiCreditCard,
    store: HiHome,
    trending_up: HiTrendingUp
  };

  return (
    <main className="min-h-screen flex flex-col pt-20 overflow-hidden relative">
      {/* Background Watermark Logo */}
      <div
        className="absolute top-[10%] -right-[15%] pointer-events-none select-none -z-10"
        style={{ opacity: 0.03 }}
      >
        <Logo className="w-[800px] h-[800px]" color="#0A2540" />
      </div>

      {/* Hero Section */}
      <section className="flex-grow flex flex-col justify-center px-6 py-12 md:py-24">
        <div className="max-w-[1400px] mx-auto w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-8 justify-between">
          <div className="lg:w-[55%] flex flex-col items-start text-left z-10">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-display font-bold text-5xl md:text-[72px] leading-[1.05] text-primary mb-6 tracking-tight"
            >
              {t.hero.name}
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display font-medium text-xl md:text-[32px] leading-tight text-text-main max-w-[800px]"
            >
              {t.hero.title} | {t.hero.subtitle}
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center gap-4 mt-10 w-full sm:w-auto"
            >
              <a
                href="#projects"
                className="w-full sm:w-auto h-14 px-10 bg-primary hover:bg-accent-dark text-white font-display font-semibold text-[16px] rounded-[6px] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-hover flex items-center justify-center gap-3 group"
              >
                {t.hero.cta_primary}
                <HiArrowRight className="text-xl group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="w-full sm:w-auto h-14 px-10 bg-white border-2 border-surface text-primary font-display font-semibold text-[16px] rounded-[6px] transition-all duration-300 hover:bg-surface hover:border-muted flex items-center justify-center"
              >
                {t.hero.cta_secondary}
              </a>
            </motion.div>
          </div>

          <div className="lg:w-[40%] w-full flex justify-center z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="w-full"
            >
              <HeroGraphic />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Marquee Metrics */}
      <div className="w-full border-y border-surface bg-surface/30 backdrop-blur-sm relative z-20 py-5">
        <div className="flex whitespace-nowrap animate-marquee hover:[animation-play-state:paused] w-max">
          <div className="flex items-center gap-12 px-6">
            {t.metrics.map((metric, idx) => {
              const Icon = metricsIcons[metric.icon] || HiTrendingUp;
              return (
                <React.Fragment key={idx}>
                  <div className="flex items-center gap-3">
                    <Icon className="text-accent-light text-2xl" />
                    <span className="font-metrics font-bold text-primary text-sm md:text-base uppercase tracking-wider">
                      {metric.number} {metric.label} {metric.company}
                    </span>
                  </div>
                  <div className="text-muted">•</div>
                </React.Fragment>
              );
            })}
          </div>
          {/* Duplicate for seamless loop */}
          <div className="flex items-center gap-12 px-6">
            {t.metrics.map((metric, idx) => {
              const Icon = metricsIcons[metric.icon] || HiTrendingUp;
              return (
                <React.Fragment key={`dup-${idx}`}>
                  <div className="flex items-center gap-3">
                    <Icon className="text-accent-light text-2xl" />
                    <span className="font-metrics font-bold text-primary text-sm md:text-base uppercase tracking-wider">
                      {metric.number} {metric.label} {metric.company}
                    </span>
                  </div>
                  <div className="text-muted">•</div>
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
