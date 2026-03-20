import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';
import { useLang } from '../context/LangContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { lang, toggleLang, t } = useLang();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const location = useLocation();
  const isHome = location.pathname === '/';

  const navLinks = [
    { name: t.nav.work, href: isHome ? '#projects' : '/#projects' },
    { name: t.nav.experience, href: isHome ? '#about' : '/#about' },
    { name: t.nav.contact, href: isHome ? '#contact' : '/#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md border-b border-surface py-4' : 'bg-transparent py-5'
        }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 text-primary"
          >
            <Logo className="w-8 h-8" />
            <span className="hidden md:block font-display font-bold text-xl tracking-tight uppercase">{t.hero.name}</span>
          </motion.div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-text-main hover:text-primary font-medium text-sm transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="h-6 w-[1px] bg-muted/20" />

          {/* Language Toggle */}
          <button
            onClick={toggleLang}
            className="flex items-center gap-2 px-2 py-1 rounded-md hover:bg-surface transition-colors"
          >
            <span className={`text-[10px] font-bold ${lang === 'en' ? 'text-primary' : 'text-muted'}`}>EN</span>
            <div className="w-8 h-4 bg-muted/20 rounded-full relative">
              <motion.div
                animate={{ x: lang === 'en' ? 2 : 18 }}
                className="absolute top-0.5 left-0 w-3 h-3 bg-primary rounded-full transition-all"
              />
            </div>
            <span className={`text-[10px] font-bold ${lang === 'es' ? 'text-primary' : 'text-muted'}`}>ES</span>
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-text-main p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-surface overflow-hidden shadow-xl"
          >
            <div className="flex flex-col p-6 gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-text-main font-bold text-xl"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-6 border-t border-surface flex items-center justify-between">
                <span className="text-sm font-semibold text-muted">{lang === 'en' ? 'Language' : 'Idioma'}</span>
                <button
                  onClick={toggleLang}
                  className="flex items-center gap-2"
                >
                  <span className={`text-xs font-bold ${lang === 'en' ? 'text-primary' : 'text-muted'}`}>EN</span>
                  <div className="w-8 h-4 bg-muted/20 rounded-full relative">
                    <motion.div
                      animate={{ x: lang === 'en' ? 2 : 18 }}
                      className="absolute top-0.5 left-0 w-3 h-3 bg-primary rounded-full"
                    />
                  </div>
                  <span className={`text-xs font-bold ${lang === 'es' ? 'text-primary' : 'text-muted'}`}>ES</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
