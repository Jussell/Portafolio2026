import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { HiCheckCircle, HiDownload, HiBriefcase } from 'react-icons/hi';
import { useLang } from '../context/LangContext';

const TimelineCV = () => {
  const { t } = useLang();
  
  // Progress line animation
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section className="section-padding container-max" id="about">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        
        {/* Left Pane: Identity */}
        <div className="lg:col-span-5 lg:sticky lg:top-32 flex flex-col gap-10">
          <div className="flex flex-col items-center lg:items-start gap-6 text-center lg:text-left">
            <div className="relative group">
              <div className="absolute -inset-1 rounded-full bg-primary/20 blur-xl transition-all duration-500 group-hover:bg-primary/30 group-hover:blur-2xl" />
              <div className="relative h-[200px] w-[200px] overflow-hidden rounded-full border-4 border-white shadow-xl bg-white">
                <img 
                  src="/profile.png" 
                  alt={t.hero.name} 
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary mb-3">Senior UX/Product Designer</h2>
              <p className="text-lg leading-relaxed text-muted max-w-[480px]">
                Based in Bogotá, I bridge the gap between user needs and business metrics. Specializing in high-conversion flows for LATAM's top fintech and eCommerce platforms.
              </p>
            </div>
            <button className="flex items-center gap-2 px-6 py-3 bg-primary text-white font-bold rounded-full shadow-lg hover:shadow-primary/50 transition-all transform hover:-translate-y-1">
              <HiDownload />
              Download Resume
            </button>
          </div>
        </div>

        {/* Right Pane: Trajectory Timeline */}
        <div className="lg:col-span-7 relative">
          <h3 className="text-2xl font-bold text-primary mb-12 flex items-center gap-3">
            <HiBriefcase className="text-accent text-2xl" />
            {t.timeline.heading}
          </h3>

          <div className="relative pl-8">
            {/* Animated Progress Line */}
            <div className="absolute left-[15px] top-2 bottom-0 w-[2px] bg-surface rounded-full overflow-hidden">
               <motion.div 
                 style={{ scaleY, originY: 0 }}
                 className="absolute inset-0 bg-primary"
               />
            </div>

            <div className="flex flex-col gap-12">
              {t.timeline.items.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  {/* Node Dot */}
                  <div className="absolute -left-[27px] top-2 w-6 h-6 rounded-full bg-white border-4 border-primary shadow-sm z-10 transition-transform group-hover:scale-125" />
                  
                  {/* Content Card */}
                  <div className="bg-white p-8 rounded-xl border border-surface shadow-soft hover:shadow-hover hover:border-accent/30 transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                      <div>
                        <h4 className="text-xl font-bold text-primary">{item.role}</h4>
                        <p className="text-base font-semibold text-accent">{item.company}</p>
                      </div>
                      <span className="px-3 py-1 bg-surface font-bold text-xs rounded-full text-muted border border-muted/10 whitespace-nowrap self-start">
                        {item.period}
                      </span>
                    </div>

                    <ul className="flex flex-col gap-3">
                      {item.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <HiCheckCircle className="text-accent text-xl shrink-0 mt-0.5" />
                          <span className="text-[15px] text-text-main leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TimelineCV;
