import { useLang } from '../context/LangContext';
import Logo from './Logo';

const Footer = () => {
  const { t } = useLang();

  return (
    <footer className="py-12 px-6 border-t border-surface bg-primary transition-colors">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2">
          <Logo className="w-8 h-8" color="#60A5FA" />
          <span className="font-display font-bold text-white uppercase tracking-tight">{t.hero.name}</span>
        </div>

        <p className="text-muted text-sm font-medium">
          © {new Date().getFullYear()} {t.footer.copy}
        </p>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-[10px] font-black uppercase tracking-[0.3em] text-accent hover:text-white transition-colors"
        >
          {t.footer.back_top}
        </button>
      </div>
    </footer>
  );
};

export default Footer;
