import React from 'react';
import { motion } from 'framer-motion';
import { HiLightningBolt } from 'react-icons/hi';
import { useLang } from '../context/LangContext';

const SkillsSection = () => {
  const { t } = useLang();

  return (
    <section className="bg-surface/30 py-20" id="skills">
      <div className="container-max px-6">
        <div className="flex flex-col gap-5 pt-6 border-t border-muted/20">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-xl font-bold tracking-tight text-primary flex items-center gap-2"
          >
            <HiLightningBolt className="text-accent" />
            {t.skills.heading}
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-8">
            {t.skills.groups.map((group, idx) => (
              <div key={idx} className="flex flex-col gap-6">
                <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-muted">{group.label}</h3>
                <div className="flex flex-wrap gap-3">
                  {group.items.map((skill, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.05 }}
                      whileHover={{ scale: 1.05, borderColor: 'var(--accent)' }}
                      className="flex h-12 items-center rounded-lg bg-white px-5 text-sm font-semibold text-text-main shadow-soft border border-surface hover:shadow-md transition-all cursor-default"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
