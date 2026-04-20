import React from 'react';
import { motion } from 'framer-motion';
import { useLang } from '../../context/LangContext';

/**
 * BentoGallery
 * 
 * Recibe un array de `items` con la forma:
 * {
 *   type: 'image' | 'stat' | 'label' | 'wide-image',
 *   src?: string,
 *   caption?: string,
 *   stat?: string,
 *   statLabel?: string,
 *   statSub?: string,
 *   tag?: string,
 *   text?: string,
 *   accent?: boolean,   // fondo accent (azul) en el tile
 *   dark?: boolean,     // fondo oscuro (navy)
 *   colspan?: number,   // 1 o 2 columnas
 *   rowspan?: number,   // 1 o 2 filas
 * }
 */
const BentoGallery = ({ items = [], heading }) => {
  const { lang } = useLang();
  const title = heading || (lang === 'es' ? 'Proceso Visual' : 'Visual Process');

  if (!items || items.length === 0) return null;

  return (
    <section className="py-20 px-6 md:px-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-10 flex items-center gap-3"
        >
          <span className="h-px flex-1 bg-slate-200" />
          <h2 className="text-xs font-bold uppercase tracking-[0.25em] text-accent shrink-0">{title}</h2>
          <span className="h-px flex-1 bg-slate-200" />
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[260px] gap-4">
          {items.map((item, i) => (
            <BentoTile key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

const BentoTile = ({ item, index }) => {
  const { lang } = useLang();

  // Column/row span classes
  const colSpanClass =
    item.colspan === 2 ? 'sm:col-span-2' : '';
  const rowSpanClass =
    item.rowspan === 2 ? 'row-span-2' : '';

  // Base bg
  let bgClass = 'bg-white';
  if (item.accent) bgClass = 'bg-accent';
  if (item.dark)   bgClass = 'bg-[#0A2540]';

  const containerClass = [
    'relative rounded-2xl overflow-hidden border transition-all duration-300 group',
    bgClass,
    item.accent || item.dark ? 'border-transparent' : 'border-slate-100',
    'shadow-soft hover:shadow-hover hover:-translate-y-1',
    colSpanClass,
    rowSpanClass,
  ].join(' ');

  return (
    <motion.div
      className={containerClass}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      viewport={{ once: true }}
    >
      {/* IMAGE tile — supports src (single), or src_desk + src_mobile (responsive) */}
      {item.type === 'image' && (item.src || item.src_desk) && (
        <>
          <picture className="w-full h-full">
            {/* Desktop source (≥768px) */}
            {item.src_desk && (
              <source
                media="(min-width: 768px)"
                srcSet={item.src_desk}
              />
            )}
            {/* Mobile source (fallback) */}
            <img
              src={item.src_mobile || item.src_desk || item.src}
              alt={item.caption || ''}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </picture>
          {item.caption && (
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0A2540]/80 to-transparent px-5 py-4">
              <p className="text-white text-xs font-semibold uppercase tracking-widest">{item.caption}</p>
            </div>
          )}
        </>
      )}

      {/* STAT tile */}
      {item.type === 'stat' && (
        <div className="flex flex-col justify-between h-full p-8">
          {item.tag && (
            <span className={`text-xs font-bold uppercase tracking-widest ${item.accent || item.dark ? 'text-white/60' : 'text-slate-400'}`}>
              {item.tag}
            </span>
          )}
          <div>
            <p className={`text-6xl font-extrabold tracking-tighter leading-none mb-2 ${item.accent ? 'text-white' : item.dark ? 'text-white' : 'text-[#0A2540]'}`}>
              {item.stat}
            </p>
            <p className={`text-base font-semibold ${item.accent ? 'text-white/80' : item.dark ? 'text-white/70' : 'text-slate-600'}`}>
              {item.statLabel}
            </p>
            {item.statSub && (
              <p className={`text-sm mt-1 ${item.accent ? 'text-white/60' : item.dark ? 'text-white/50' : 'text-slate-400'}`}>
                {item.statSub}
              </p>
            )}
          </div>
        </div>
      )}

      {/* LABEL / quote tile */}
      {item.type === 'label' && (
        <div className="flex flex-col justify-center h-full p-8">
          {item.tag && (
            <span className={`text-xs font-bold uppercase tracking-widest mb-4 ${item.accent || item.dark ? 'text-white/50' : 'text-accent'}`}>
              {item.tag}
            </span>
          )}
          <p className={`text-2xl md:text-3xl font-extrabold leading-tight ${item.accent || item.dark ? 'text-white' : 'text-[#0A2540]'}`}>
            {item.text}
          </p>
        </div>
      )}
    </motion.div>
  );
};

export default BentoGallery;
