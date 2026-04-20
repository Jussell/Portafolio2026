import React from 'react';
import { motion } from 'framer-motion';
import Logo from './Logo';
import { 
  HiOutlineColorSwatch, HiOutlineLightBulb, HiOutlineUserGroup, 
  HiOutlineCubeTransparent, HiOutlineShoppingCart, HiOutlineChartPie, 
  HiOutlineChip, HiOutlineBriefcase, HiOutlineViewGridAdd, HiOutlineDeviceMobile 
} from 'react-icons/hi';

const outerNodes = [
  { id: 1, label: 'Product Designer', angle: 315, color: 'text-rose-700 bg-rose-50 border-rose-200', icon: HiOutlineColorSwatch },
  { id: 2, label: 'Design Systems', angle: 235, color: 'text-blue-700 bg-blue-50 border-blue-200', icon: HiOutlineViewGridAdd },
  { id: 3, label: 'AI & Tooling', angle: 165, color: 'text-orange-700 bg-orange-50 border-orange-200', icon: HiOutlineChip },
  { id: 4, label: 'Data & Analytics', angle: 90, color: 'text-emerald-700 bg-emerald-50 border-emerald-200', icon: HiOutlineChartPie },
  { id: 5, label: 'Project Mgmt', angle: 345, color: 'text-green-700 bg-green-50 border-green-200', icon: HiOutlineBriefcase },
];

const innerNodes = [
  { id: 6, label: 'UI Design', angle: 15, color: 'text-red-700 bg-red-50 border-red-200', icon: HiOutlineDeviceMobile },
  { id: 7, label: 'Ecommerce', angle: 60, color: 'text-amber-700 bg-amber-50 border-amber-200', icon: HiOutlineShoppingCart },
  { id: 8, label: 'Prototyping', angle: 135, color: 'text-indigo-700 bg-indigo-50 border-indigo-200', icon: HiOutlineCubeTransparent },
  { id: 9, label: 'Product Strategy', angle: 200, color: 'text-sky-700 bg-sky-50 border-sky-200', icon: HiOutlineLightBulb },
  { id: 10, label: 'User Research', angle: 285, color: 'text-teal-700 bg-teal-50 border-teal-200', icon: HiOutlineUserGroup },
];

const OrbitRing = ({ radius, duration, direction = 1, nodes }) => {
  return (
    <motion.div
      animate={{ rotate: direction * 360 }}
      transition={{ duration, repeat: Infinity, ease: "linear" }}
      className="absolute inset-0 w-full h-full"
    >
      {/* SVG Lines for this orbit */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r={radius} fill="none" stroke="#e2e8f0" strokeWidth="0.2" strokeDasharray="1 1.5" />
        {nodes.map(node => {
          const x = 50 + radius * Math.cos(node.angle * Math.PI / 180);
          const y = 50 + radius * Math.sin(node.angle * Math.PI / 180);
          return (
            <line 
              key={`line-${node.id}`}
              x1="50" y1="50" 
              x2={x} y2={y} 
              stroke="#e2e8f0" strokeWidth="0.2" 
            />
          );
        })}
      </svg>
      
      {/* Nodes for this orbit */}
      {nodes.map((node) => {
        const Icon = node.icon;
        const left = `${50 + radius * Math.cos(node.angle * Math.PI / 180)}%`;
        const top = `${50 + radius * Math.sin(node.angle * Math.PI / 180)}%`;

        return (
          <div key={node.id} className="absolute transform -translate-x-1/2 -translate-y-1/2" style={{ left, top }}>
            <motion.div
              animate={{ rotate: -direction * 360 }}
              transition={{ duration, repeat: Infinity, ease: "linear" }}
              className={`flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full border ${node.color} shadow-sm backdrop-blur-sm whitespace-nowrap cursor-default hover:shadow-md transition-shadow`}
            >
              <Icon className="w-4 h-4 md:w-5 md:h-5" />
              <span className="text-xs md:text-sm font-medium font-display">{node.label}</span>
            </motion.div>
          </div>
        );
      })}
    </motion.div>
  );
};

const HeroGraphic = () => {
  return (
    <div className="relative w-full max-w-[650px] aspect-square flex items-center justify-center mx-auto mt-12 lg:mt-0 select-none opacity-90 hover:opacity-100 transition-opacity duration-500">
      
      {/* Inner Logo rings (Static) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="14" fill="none" stroke="#e2e8f0" strokeWidth="0.3" />
        <circle cx="50" cy="50" r="12" fill="none" stroke="#cbd5e1" strokeWidth="0.3" />
      </svg>

      {/* Outer Orbit (Rendered first so it sits behind inner orbit) */}
      <OrbitRing radius={40} duration={60} direction={1} nodes={outerNodes} />

      {/* Inner Orbit */}
      <OrbitRing radius={24} duration={40} direction={-1} nodes={innerNodes} />

      {/* Center Logo */}
      <motion.div 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', damping: 15 }}
        className="relative z-20 w-24 h-24 md:w-32 md:h-32 bg-white rounded-full shadow-lg flex items-center justify-center border border-surface/50"
      >
        <Logo className="w-14 h-14 md:w-20 md:h-20" color="#333" />
      </motion.div>

    </div>
  );
};

export default HeroGraphic;
