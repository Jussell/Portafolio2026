import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { HiMail, HiOutlineGlobeAlt, HiLink } from 'react-icons/hi';
import ReCAPTCHA from 'react-google-recaptcha';
import { useLang } from '../context/LangContext';
import Logo from './Logo';

// TODO: Reemplaza esta URL con la que te dé Google Apps Script
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbw5JvUCm4rcj0s8OsKraUVQQEVLRUCydgIA-Nys-KXjMxbH97xj6UizwZmfqSm27i49/exec";

// TODO: Reemplaza esto con tu Clave de Sitio (Site Key) de Google reCAPTCHA
const RECAPTCHA_SITE_KEY = "6LeXasAsAAAAACiIJB7QsbWvltJDhpjp-kjNjohk";

const ContactSection = () => {
  const { t } = useLang();
  const recaptchaRef = useRef(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState('idle'); // 'idle', 'loading', 'success', 'error'
  const [recaptchaToken, setRecaptchaToken] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleRecaptchaChange = (token) => {
    setRecaptchaToken(token);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!recaptchaToken) {
      alert("Por favor, verifica que no eres un robot.");
      return;
    }

    setStatus('loading');

    // Usamos FormData para que Google Apps Script lo lea correctamente
    const data = new FormData();
    data.append('name', formData.name);
    data.append('email', formData.email);
    data.append('message', formData.message);

    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        body: data,
        mode: 'no-cors', // Evita errores de CORS en peticiones a Google Scripts
      });

      // Con no-cors no podemos leer la respuesta exacta, asumimos éxito si no lanza error
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setRecaptchaToken(null);
      if (recaptchaRef.current) {
        recaptchaRef.current.reset();
      }

      // Volver al estado normal después de unos segundos
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

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

          <form className="flex flex-col gap-4 text-left" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-widest text-muted pl-1">{t.contact?.name_label}</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder={t.contact?.name_placeholder}
                  className="w-full h-14 px-6 rounded-xl bg-surface border-none focus:ring-2 focus:ring-accent/50 transition-all font-medium"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-widest text-muted pl-1">{t.contact?.email_label}</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder={t.contact?.email_placeholder}
                  className="w-full h-14 px-6 rounded-xl bg-surface border-none focus:ring-2 focus:ring-accent/50 transition-all font-medium"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold uppercase tracking-widest text-muted pl-1">{t.contact?.message_label}</label>
              <textarea
                rows="4"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder={t.contact?.message_placeholder}
                className="w-full p-6 rounded-xl bg-surface border-none focus:ring-2 focus:ring-accent/50 transition-all font-medium resize-none"
              />
            </div>

            <div className="flex justify-center mt-2 mb-2">
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey={RECAPTCHA_SITE_KEY}
                onChange={handleRecaptchaChange}
              />
            </div>

            {status === 'success' && (
              <div className="p-4 bg-green-100 text-green-700 rounded-xl font-medium text-center">
                ¡Mensaje enviado con éxito! Te contactaré pronto.
              </div>
            )}

            {status === 'error' && (
              <div className="p-4 bg-red-100 text-red-700 rounded-xl font-medium text-center">
                Hubo un error al enviar el mensaje. Inténtalo de nuevo.
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'loading' || !recaptchaToken}
              className="h-14 mt-4 bg-primary text-white font-bold rounded-xl shadow-lg hover:bg-primary/90 transition-all transform hover:-translate-y-1 disabled:opacity-70 disabled:hover:translate-y-0"
            >
              {status === 'loading' ? 'Enviando...' : t.contact?.send_btn}
            </button>
          </form>

          <div className="mt-12 pt-12 border-t border-surface flex flex-wrap justify-center gap-8">
            <a href="https://www.linkedin.com/in/juanlozanol/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary font-bold hover:text-accent transition-colors">
              <HiLink /> LinkedIn
            </a>
            <a href="https://www.behance.net/juanlozanolamus" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary font-bold hover:text-accent transition-colors">
              <HiOutlineGlobeAlt /> Behance
            </a>
            <a href="mailto:juanlozanolamus@gmail.com" className="flex items-center gap-2 text-primary font-bold hover:text-accent transition-colors">
              <HiMail /> Email
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
