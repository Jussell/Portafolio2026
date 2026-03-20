import React from 'react';
import { motion } from 'framer-motion';
import { HiMail, HiOutlineGlobeAlt, HiLink } from 'react-icons/hi';
import { useLang } from '../context/LangContext';
import Logo from './Logo';

const ContactSection = () => {
  const { t } = useLang();

  return (
    <section className="section-padding container-max" id="contact">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-white p-8 md:p-12 rounded-[2rem] border border-surface shadow-soft text-center"
        >
          <div className="flex justify-center mb-8">
            <Logo className="w-12 h-12" color="#0A2540" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">{t.contact?.heading}</h2>
          <p className="text-lg text-muted mb-10 max-w-xl mx-auto">
            {t.contact?.subheading || "Let's bridge the gap together. Reach out for collaborations or inquiries."}
          </p>

          <form className="flex flex-col gap-4 text-left">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-widest text-muted pl-1">{t.contact?.name_label}</label>
                <input 
                  type="text" 
                  placeholder={t.contact?.name_placeholder}
                  className="w-full h-14 px-6 rounded-xl bg-surface border-none focus:ring-2 focus:ring-accent/50 transition-all font-medium"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-widest text-muted pl-1">{t.contact?.email_label}</label>
                <input 
                  type="email" 
                  placeholder={t.contact?.email_placeholder}
                  className="w-full h-14 px-6 rounded-xl bg-surface border-none focus:ring-2 focus:ring-accent/50 transition-all font-medium"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold uppercase tracking-widest text-muted pl-1">{t.contact?.message_label}</label>
              <textarea 
                rows="4"
                placeholder={t.contact?.message_placeholder}
                className="w-full p-6 rounded-xl bg-surface border-none focus:ring-2 focus:ring-accent/50 transition-all font-medium resize-none"
              />
            </div>
            <button className="h-14 mt-4 bg-primary text-white font-bold rounded-xl shadow-lg hover:bg-primary/90 transition-all transform hover:-translate-y-1">
              {t.contact?.send_btn}
            </button>
          </form>

          <div className="mt-12 pt-12 border-t border-surface flex flex-wrap justify-center gap-8">
            <a href="#" className="flex items-center gap-2 text-primary font-bold hover:text-accent transition-colors">
              <HiLink /> LinkedIn
            </a>
            <a href="#" className="flex items-center gap-2 text-primary font-bold hover:text-accent transition-colors">
              <HiOutlineGlobeAlt /> Behance
            </a>
            <a href="mailto:mateo@example.com" className="flex items-center gap-2 text-primary font-bold hover:text-accent transition-colors">
              <HiMail /> Email
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
