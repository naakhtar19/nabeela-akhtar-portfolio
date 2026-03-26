import { Header } from "../components/Header";
import { CaseStudyCard } from "../components/CaseStudyCard";
import { caseStudies } from "../data/caseStudies";
import { Sparkles, MoveRight, Coffee, BookOpen } from "lucide-react";
import { motion } from "motion/react";
import chaiGuyImg from "figma:asset/783d72c5aca6c80d280de4f6c0a6e46598120b4c.png";
import chaiCupImg from "figma:asset/d89e445d318ebea23977b69da8d47d54d7de1768.png";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } }
};

export function Home() {
  return (
    <div className="min-h-screen bg-[#F4EFE6] text-[#432A18] selection:bg-[#C85A17] selection:text-[#F4EFE6] overflow-x-hidden">
      <Header />
      
      {/* Hero Section */}
      <section className="relative container mx-auto px-6 pt-48 pb-40 max-w-6xl">
        {/* Colorful Gradients in background */}
        <motion.div 
          className="absolute -top-40 -left-40 w-96 h-96 bg-orange-700/10 rounded-full blur-[100px] -z-10"
          animate={{ scale: [1, 1.2, 1], x: [0, 50, 0], y: [0, 50, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-40 -right-40 w-96 h-96 bg-amber-600/10 rounded-full blur-[100px] -z-10"
          animate={{ scale: [1.2, 1, 1.2], x: [0, -50, 0], y: [0, -50, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#939A86]/20 rounded-full blur-[120px] -z-10"
          animate={{ opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Cozy Chai Themed Floating Interactive Objects */}
        <div className="absolute inset-0 pointer-events-none z-30 hidden md:block">
          {/* Object 1: Chai Guy Illustration */}
          <motion.div
            className="absolute top-[8%] right-[18%] w-56 h-56 cursor-grab active:cursor-grabbing pointer-events-auto origin-center z-40"
            drag
            dragConstraints={{ left: -1000, right: 100, top: -200, bottom: 600 }}
            dragElastic={0.2}
            whileDrag={{ scale: 1.1, rotate: 5, zIndex: 50 }}
            whileHover={{ scale: 1.05, rotate: -3 }}
            animate={{ y: [0, -10, 0], rotate: [0, -2, 0] }}
            transition={{ y: { duration: 4, repeat: Infinity, ease: "easeInOut" }, rotate: { duration: 6, repeat: Infinity, ease: "easeInOut" } }}
          >
            <div className="relative w-full h-full flex flex-col items-center justify-center select-none group drop-shadow-2xl">
              {/* Floating Phone Prototype */}
              <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-24 h-32 z-10 transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-105 group-hover:rotate-3">
                <svg viewBox="0 0 120 160" className="w-full h-full drop-shadow-xl overflow-visible group">
                  <defs>
                    <linearGradient id="phoneBody" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#432A18" />
                      <stop offset="100%" stopColor="#2A180E" />
                    </linearGradient>
                    <linearGradient id="screenGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#FDFBF7" />
                      <stop offset="100%" stopColor="#EAE0D3" />
                    </linearGradient>
                    <radialGradient id="bulbGlow" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#FFD700" stopOpacity="1" />
                      <stop offset="70%" stopColor="#FFA500" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="#FF8C00" stopOpacity="0" />
                    </radialGradient>
                  </defs>

                  {/* Phone Frame */}
                  <rect x="20" y="10" width="80" height="140" rx="16" fill="url(#phoneBody)" stroke="#C85A17" strokeWidth="1" opacity="0.95" />
                  
                  {/* Screen */}
                  <rect x="25" y="15" width="70" height="130" rx="12" fill="url(#screenGrad)" className="transition-all duration-500 group-hover:fill-[#FFF3E0]" />
                  
                  {/* Top Notch / Speaker */}
                  <rect x="50" y="22" width="20" height="4" rx="2" fill="#2A180E" opacity="0.2" />

                  {/* Normal Screen Elements (Fade out on hover) */}
                  <g className="transition-opacity duration-300 group-hover:opacity-0">
                    {/* UI Wireframe Elements */}
                    <rect x="35" y="35" width="50" height="30" rx="6" fill="#D5C8B4" />
                    <path d="M 35 35 L 85 65 M 85 35 L 35 65" stroke="#C6B7A1" strokeWidth="1" opacity="0.5" />
                    <rect x="35" y="75" width="40" height="4" rx="2" fill="#C6B7A1" />
                    <rect x="35" y="85" width="25" height="4" rx="2" fill="#C6B7A1" />
                    <rect x="35" y="100" width="22" height="22" rx="6" fill="#C85A17" opacity="0.8" />
                    <rect x="63" y="100" width="22" height="22" rx="6" fill="#D5C8B4" opacity="0.8" />
                    <rect x="35" y="130" width="50" height="8" rx="4" fill="#C6B7A1" opacity="0.4" />
                    <circle cx="46" cy="111" r="3" fill="#FFFFFF" />
                  </g>

                  {/* Hover Brewing Loader (Fade in on hover) */}
                  <g className="opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    {/* Minimalist Loading Spinner */}
                    <circle cx="60" cy="70" r="14" fill="none" stroke="#D5C8B4" strokeWidth="2.5" opacity="0.4" />
                    <circle cx="60" cy="70" r="14" fill="none" stroke="#C85A17" strokeWidth="2.5" strokeDasharray="22 66" strokeLinecap="round" className="origin-[60px_70px] animate-[spin_1.5s_linear_infinite]" />
                    
                    {/* Text */}
                    <text x="60" y="100" fontSize="8" fill="#432A18" textAnchor="middle" fontWeight="bold" className="tracking-widest animate-pulse" style={{ fontFamily: 'monospace' }}>BREWING...</text>
                  </g>
                </svg>
              </div>
            </div>
          </motion.div>

          {/* Object 2: Chai Cup Image */}
          <motion.div
            className="absolute top-[38%] right-[8%] w-40 h-40 cursor-grab active:cursor-grabbing pointer-events-auto z-30"
            drag
            dragConstraints={{ left: -1000, right: 200, top: -400, bottom: 400 }}
            dragElastic={0.2}
            whileDrag={{ scale: 1.1, rotate: 10, zIndex: 50 }}
            whileHover={{ scale: 1.05, rotate: -2 }}
            animate={{ y: [0, 15, 0], rotate: [0, 3, 0] }}
            transition={{ y: { duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }, rotate: { duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 } }}
          >
            <div className="relative w-full h-full flex flex-col items-center justify-center select-none">
              {/* Tight wrapper for precise hover area */}
              <div className="relative group flex flex-col items-center mt-6">
                {/* Steam Container */}
                <div className="absolute -top-10 flex gap-4 w-full justify-center z-10 pointer-events-none transition-opacity duration-300">
                  <motion.div 
                    className="w-2.5 h-12 bg-white/80 rounded-full blur-[3px] shadow-[0_0_8px_rgba(255,255,255,0.7)] group-hover:bg-white/95 group-hover:h-16 group-hover:blur-[4px] group-hover:shadow-[0_0_12px_rgba(255,255,255,0.9)] transition-all duration-300"
                    animate={{ y: [0, -35], opacity: [0, 0.8, 0], scale: [1, 1.2, 1], x: [0, -8, 0] }}
                    transition={{ duration: 2.2, repeat: Infinity, ease: "linear", delay: 0.1 }}
                  />
                  <motion.div 
                    className="w-3 h-16 bg-white/70 rounded-full blur-[4px] shadow-[0_0_10px_rgba(255,255,255,0.6)] group-hover:bg-white/90 group-hover:h-24 group-hover:blur-[5px] group-hover:shadow-[0_0_15px_rgba(255,255,255,0.8)] transition-all duration-300"
                    animate={{ y: [0, -45], opacity: [0, 0.9, 0], scale: [1, 1.4, 1], x: [0, 8, 0] }}
                    transition={{ duration: 2.8, repeat: Infinity, ease: "linear", delay: 0.8 }}
                  />
                  <motion.div 
                    className="w-2.5 h-14 bg-white/80 rounded-full blur-[3px] shadow-[0_0_8px_rgba(255,255,255,0.7)] group-hover:bg-white/95 group-hover:h-20 group-hover:blur-[4px] group-hover:shadow-[0_0_12px_rgba(255,255,255,0.9)] transition-all duration-300"
                    animate={{ y: [0, -40], opacity: [0, 0.7, 0], scale: [1, 1.2, 1], x: [0, -5, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "linear", delay: 1.5 }}
                  />
                </div>

                {/* Stylish Ceramic Cup Object */}
                <div className="relative z-20 transition-transform duration-300 group-hover:scale-110 origin-bottom">
                  <svg width="120" height="90" viewBox="0 0 120 90" className="drop-shadow-[0_15px_20px_rgba(67,42,24,0.25)]">
                    <defs>
                      <linearGradient id="cupBase" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#FDFBF7" />
                        <stop offset="70%" stopColor="#EAE0D3" />
                        <stop offset="100%" stopColor="#D5C8B4" />
                      </linearGradient>
                      <linearGradient id="saucerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#FDFBF7" />
                        <stop offset="100%" stopColor="#C6B7A1" />
                      </linearGradient>
                      <linearGradient id="chaiLiquidGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#D66D24" />
                        <stop offset="100%" stopColor="#8B3A0A" />
                      </linearGradient>
                    </defs>

                    {/* Saucer */}
                    <ellipse cx="50" cy="78" rx="42" ry="8" fill="rgba(0,0,0,0.15)" />
                    <ellipse cx="50" cy="75" rx="48" ry="14" fill="url(#saucerGrad)" stroke="#EAE0D3" strokeWidth="1"/>
                    <ellipse cx="50" cy="75" rx="45" ry="12" fill="none" stroke="#C85A17" strokeWidth="1" opacity="0.6"/>
                    <ellipse cx="50" cy="77" rx="22" ry="6" fill="#C6B7A1" opacity="0.4"/>

                    {/* Handle */}
                    <path d="M 72 35 C 105 30, 105 60, 72 60" fill="none" stroke="url(#cupBase)" strokeWidth="8" strokeLinecap="round" />
                    <path d="M 72 35 C 105 30, 105 60, 72 60" fill="none" stroke="#C85A17" strokeWidth="2" strokeLinecap="round" opacity="0.5" transform="translate(0, -1)" />

                    {/* Cup Base */}
                    <path d="M 35 65 L 32 75 C 32 78, 68 78, 68 75 L 65 65 Z" fill="url(#cupBase)" />
                    <ellipse cx="50" cy="75" rx="18" ry="4" fill="none" stroke="#C85A17" strokeWidth="1.5" />

                    {/* Cup Body */}
                    <path d="M 15 25 C 15 65, 30 70, 50 70 C 70 70, 85 65, 85 25 Z" fill="url(#cupBase)" />

                    {/* Decorative Pattern */}
                    <path d="M 22 45 Q 35 55, 50 45 T 78 45" fill="none" stroke="#C85A17" strokeWidth="1.5" opacity="0.7"/>
                    <circle cx="50" cy="38" r="2.5" fill="#C85A17" opacity="0.8"/>
                    <circle cx="35" cy="36" r="2" fill="#C85A17" opacity="0.6"/>
                    <circle cx="65" cy="36" r="2" fill="#C85A17" opacity="0.6"/>

                    {/* Cup Top Rim Base */}
                    <ellipse cx="50" cy="25" rx="35" ry="12" fill="#D5C8B4" />

                    {/* Chai Liquid */}
                    <ellipse cx="50" cy="26" rx="31" ry="9" fill="url(#chaiLiquidGrad)" />
                    <ellipse cx="60" cy="25" rx="15" ry="4" fill="rgba(255,255,255,0.15)" transform="rotate(-15 60 25)" />
                    <path d="M 30 26 Q 50 20, 70 28" fill="none" stroke="#E57D58" strokeWidth="1.5" opacity="0.8" strokeLinecap="round"/>

                    {/* Cup Front Rim */}
                    <ellipse cx="50" cy="25" rx="35" ry="12" fill="none" stroke="#C85A17" strokeWidth="2" />
                    <ellipse cx="50" cy="25" rx="35" ry="12" fill="none" stroke="#FFFFFF" strokeWidth="1" opacity="0.4" transform="translate(0, -1)" />

                    {/* Edge Highlight */}
                    <path d="M 18 32 C 18 55, 25 65, 35 68" fill="none" stroke="#FFFFFF" strokeWidth="2" opacity="0.6" strokeLinecap="round"/>
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Object 3: Cozy Book */}
          <motion.div
            className="absolute top-[35%] left-[4%] z-30 pointer-events-auto cursor-grab active:cursor-grabbing -rotate-[12deg]"
            drag
            dragConstraints={{ left: -200, right: 800, top: -200, bottom: 400 }}
            dragElastic={0.2}
            whileDrag={{ scale: 1.15, rotate: 0, zIndex: 50 }}
            animate={{ y: [0, -15, 0] }}
            transition={{ y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }, hover: { type: "spring", stiffness: 300 } }}
          >
            <div className="relative w-24 h-32 [perspective:1200px] group drop-shadow-[10px_10px_15px_rgba(0,0,0,0.15)]">
              {/* Clickable area for the toggle */}
              <label htmlFor="ux-book" className="absolute inset-0 z-50 cursor-pointer" />
              <input type="checkbox" id="ux-book" className="peer hidden" />

              {/* Back Cover & Right Page (Inside) */}
              <div className="absolute inset-0 bg-[#EAE0D3] rounded-r-xl rounded-l-sm border-y-[3px] border-r-[3px] border-l-[1px] border-[#7A836D] flex flex-col p-1.5 transition-transform duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] peer-checked:translate-x-12 z-10">
                <div className="w-full h-full bg-[#FDFBF7] rounded-sm p-1.5 flex flex-col gap-1 shadow-[inset_2px_0_5px_rgba(0,0,0,0.05)] border border-[#C6B7A1]/30 overflow-hidden">
                  <span className="text-[7px] font-bold text-[#432A18] border-b border-[#432A18]/20 pb-0.5 tracking-wide text-center">UX Process</span>
                  <ul className="text-[6px] text-[#432A18]/80 font-medium space-y-1 mt-0.5 px-0.5">
                    <li className="flex items-center gap-1"><span className="w-3 h-3 bg-[#C85A17]/10 text-[#C85A17] rounded-full flex items-center justify-center text-[5px] font-bold shrink-0">1</span> Empathize</li>
                    <li className="flex items-center gap-1"><span className="w-3 h-3 bg-[#C85A17]/10 text-[#C85A17] rounded-full flex items-center justify-center text-[5px] font-bold shrink-0">2</span> Define</li>
                    <li className="flex items-center gap-1"><span className="w-3 h-3 bg-[#C85A17]/10 text-[#C85A17] rounded-full flex items-center justify-center text-[5px] font-bold shrink-0">3</span> Ideate</li>
                    <li className="flex items-center gap-1"><span className="w-3 h-3 bg-[#C85A17]/10 text-[#C85A17] rounded-full flex items-center justify-center text-[5px] font-bold shrink-0">4</span> Prototype</li>
                    <li className="flex items-center gap-1"><span className="w-3 h-3 bg-[#C85A17]/10 text-[#C85A17] rounded-full flex items-center justify-center text-[5px] font-bold shrink-0">5</span> Test</li>
                  </ul>
                </div>
              </div>

              {/* Front Cover */}
              <div className="absolute inset-0 bg-[#939A86] rounded-r-xl rounded-l-sm border-l-[3px] border-[#69725C] origin-left transition-transform duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] z-20 [transform-style:preserve-3d] group-hover:[transform:rotateY(-25deg)] peer-checked:[transform:translateX(3rem)_rotateY(-180deg)] peer-checked:group-hover:[transform:translateX(3rem)_rotateY(-180deg)]">
                
                {/* Front Face */}
                <div className="absolute inset-0 [backface-visibility:hidden] flex flex-col justify-between p-3 overflow-hidden bg-[#939A86] rounded-r-xl rounded-l-sm shadow-[5px_5px_15px_rgba(0,0,0,0.2)]">
                  <div className="absolute top-0 bottom-0 left-1 w-1.5 bg-black/10 mix-blend-overlay"></div>
                  
                  <div className="w-full flex justify-end">
                    <div className="w-2.5 h-8 bg-[#F4EFE6] rounded-b-full shadow-inner opacity-80 border-b border-x border-black/5" />
                  </div>
                  
                  <div className="flex-1 flex flex-col items-center justify-center gap-2">
                    <div className="flex gap-1.5 opacity-60">
                       <div className="w-8 h-0.5 bg-[#432A18] rounded-full" />
                       <div className="w-4 h-0.5 bg-[#432A18] rounded-full" />
                    </div>
                    <div className="flex gap-1.5 opacity-60">
                       <div className="w-6 h-0.5 bg-[#432A18] rounded-full" />
                    </div>
                  </div>
                </div>

                {/* Inside Front Cover (Backface) */}
                <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] bg-[#7A836D] rounded-l-xl rounded-r-sm flex items-center justify-center p-2 border-r-[3px] border-[#69725C] shadow-[inset_-5px_0_15px_rgba(0,0,0,0.2)]">
                   <div className="w-full h-full border border-[#EAE0D3]/20 rounded-sm p-1.5 flex flex-col items-center justify-center gap-1.5 text-center">
                      <div className="w-3 h-3 bg-[#EAE0D3]/10 rounded-full flex items-center justify-center text-[#EAE0D3] text-[6px]">✨</div>
                      <p className="text-[#EAE0D3]/80 text-[6px] font-serif italic leading-[1.3]">
                        "Design is intelligence made visible."
                      </p>
                   </div>
                </div>

              </div>
            </div>
          </motion.div>

          {/* Floating UX Logo Badge */}
          
          
          {/* Object 4: "Sip & Solve" Tag */}
          <motion.div
            className="absolute top-[12%] left-[18%] px-6 py-3 bg-[#FDFBF7] border border-[#C85A17]/20 rounded-full shadow-xl cursor-grab active:cursor-grabbing pointer-events-auto rotate-6 flex items-center gap-2 group z-30"
            drag
            dragConstraints={{ left: -200, right: 800, top: -400, bottom: 400 }}
            dragElastic={0.2}
            whileDrag={{ scale: 1.1, rotate: 0, zIndex: 50 }}
            whileHover={{ scale: 1.05, rotate: 0, backgroundColor: "#C85A17", borderColor: "#C85A17" }}
            animate={{ y: [0, 10, 0] }}
            transition={{ y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 } }}
          >
            <Coffee className="w-4 h-4 text-[#C85A17] group-hover:text-[#FDFBF7] transition-colors duration-300" />
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#432A18] group-hover:text-[#FDFBF7] transition-colors duration-300 select-none">Sip & Solve</span>
          </motion.div>

          {/* Object 5: Sparkle (Hover Element) */}
          <motion.div
            className="absolute top-[22%] right-[10%] w-10 h-10 cursor-grab active:cursor-grabbing pointer-events-auto z-20 group"
            drag dragConstraints={{ left: -200, right: 800, top: -400, bottom: 400 }} dragElastic={0.2}
            whileDrag={{ scale: 1.2, rotate: 45, zIndex: 50 }}
            whileHover={{ scale: 1.3, rotate: 15 }}
            animate={{ y: [0, -8, 0], rotate: [0, 5, 0] }}
            transition={{ y: { duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }, rotate: { duration: 5, repeat: Infinity, ease: "easeInOut" } }}
          >
            <svg viewBox="0 0 512 512" className="w-full h-full drop-shadow-sm opacity-70 group-hover:opacity-100 transition-all duration-300 group-hover:drop-shadow-[0_0_10px_rgba(200,90,23,0.6)]">
              <defs>
                <linearGradient id="sparkleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#C85A17" />
                  <stop offset="50%" stopColor="#E8A87C" />
                  <stop offset="100%" stopColor="#9e5b29" />
                </linearGradient>
                <filter id="sparkleGlow">
                  <feGaussianBlur stdDeviation="8" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              {/* Four-pointed sparkle matching glitter-2.svg */}
              <path 
                d="M247.355,106.9C222.705,82.241,205.833,39.18,197.46,0c-8.386,39.188-25.24,82.258-49.899,106.917c-24.65,24.642-67.724,41.514-106.896,49.904c39.188,8.373,82.254,25.235,106.904,49.895c24.65,24.65,41.522,67.72,49.908,106.9c8.373-39.188,25.24-82.258,49.886-106.917c24.65-24.65,67.724-41.514,106.896-49.904C315.08,148.422,272.014,131.551,247.355,106.9z" 
                fill="url(#sparkleGradient)" 
                className="group-hover:[filter:url(#sparkleGlow)] transition-all duration-300"
              />
            </svg>
          </motion.div>

          {/* Object 6: Cinnamon Sticks (Hover Element) */}
          <motion.div
            className="absolute top-[8%] left-[32%] w-14 h-10 cursor-grab active:cursor-grabbing pointer-events-auto z-20 group -rotate-12"
            drag dragConstraints={{ left: -800, right: 200, top: -400, bottom: 400 }} dragElastic={0.2}
            whileDrag={{ scale: 1.2, rotate: -30, zIndex: 50 }}
            whileHover={{ scale: 1.2, rotate: -25 }}
            animate={{ y: [0, 10, 0], rotate: [-12, -8, -12] }}
            transition={{ y: { duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 1 }, rotate: { duration: 6, repeat: Infinity, ease: "easeInOut" } }}
          >
            
          </motion.div>

          {/* Object 7: Tea Leaves (Hover Element) */}
          <motion.div
            className="absolute top-[26%] left-[14%] w-12 h-12 cursor-grab active:cursor-grabbing pointer-events-auto z-20 group rotate-[35deg]"
            drag dragConstraints={{ left: -200, right: 800, top: -400, bottom: 400 }} dragElastic={0.2}
            whileDrag={{ scale: 1.2, rotate: 60, zIndex: 50 }}
            whileHover={{ scale: 1.2, rotate: 45 }}
            animate={{ y: [0, -12, 0], x: [0, 5, 0], rotate: [35, 42, 35] }}
            transition={{ y: { duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }, x: { duration: 5, repeat: Infinity, ease: "easeInOut" } }}
          >
            <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-sm opacity-60 group-hover:opacity-100 group-hover:drop-shadow-lg transition-all duration-300">
              <path d="M20 80 Q 5 40 40 10 Q 75 50 20 80 Z" fill="#7d9b4f" stroke="#4C8C2B" strokeWidth="2" />
              <path d="M20 80 Q 30 40 40 10" fill="none" stroke="#4C8C2B" strokeWidth="2" />
              <path d="M25 60 L 35 55 M 32 40 L 45 40 M 36 25 L 45 30" fill="none" stroke="#4C8C2B" strokeWidth="1.5" />
              <path d="M20 80 Q 50 95 80 60 Q 50 30 20 80 Z" fill="#93a968" stroke="#599539" strokeWidth="2" />
              <path d="M20 80 Q 55 70 80 60" fill="none" stroke="#599539" strokeWidth="2" />
              <path d="M40 73 L 45 83 M 55 68 L 65 75 M 68 62 L 78 65" fill="none" stroke="#599539" strokeWidth="1.5" />
            </svg>
          </motion.div>
        </div>

        <motion.div 
          className="max-w-4xl mx-auto flex flex-col items-center text-center relative z-40"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div 
            variants={item}
            className="mb-6 relative flex justify-center w-full"
          >
            <svg width="300" height="50" viewBox="0 0 300 50" className="overflow-visible opacity-70">
              <path id="curve" d="M 20 45 Q 150 5 280 45" fill="transparent" />
              <text width="300">
                <textPath href="#curve" startOffset="50%" textAnchor="middle" className="text-[12px] font-bold tracking-[0.2em] uppercase fill-[#432A18]">
                  Hi, I am Nabeela Akhtar
                </textPath>
              </text>
            </svg>
          </motion.div>
          
          <motion.h1 
            variants={item}
            className="font-serif font-medium mb-8 leading-[1.05] tracking-tight text-[78px] text-[#2A180E]"
          >
            Crafting digital <br />
            <span className="italic text-[#432A18]/40">human</span> experiences.
          </motion.h1>
          
          <motion.p 
            variants={item}
            className="text-2xl md:text-3xl font-serif italic text-[#C85A17] font-medium mb-10"
          >
            Every unmet need is a design opportunity.
          </motion.p>
          
          <motion.p 
            variants={item}
            className="text-[#432A18]/70 leading-relaxed mb-12 max-w-2xl font-light text-[15px]"
          >I ask before I sketch, and listen before I solve. My process is rooted in real conversations with real users — uncovering the needs they couldn't articulate, then designing experiences precise enough to meet them.</motion.p>
          
          <motion.div variants={item} className="flex flex-wrap items-center justify-center gap-6">
            <a 
              href="#work" 
              className="group px-8 py-4 bg-[#432A18] text-[#F4EFE6] rounded-2xl hover:bg-[#2A180E] transition-all hover:scale-[1.02] font-medium flex items-center justify-center gap-2 shadow-xl shadow-[#432A18]/10"
            >
              Explore my work
              <MoveRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </motion.div>
      </section>
      
      {/* Case Studies Section - Bento Grid */}
      <section id="work" className="container mx-auto px-6 py-20 max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <h2 className="text-4xl md:text-6xl font-serif mb-4 text-[#2A180E]">Selected Stories</h2>
            <p className="text-lg text-[#432A18]/60 max-w-md font-light">A curated collection of my design journey,&nbsp;&nbsp;from concept to final pixel.</p>
          </div>
          
        </motion.div>
        
        {/* Side-by-side Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {caseStudies.map((caseStudy, index) => (
            <div 
              key={caseStudy.id} 
              className="h-full"
            >
              <CaseStudyCard caseStudy={caseStudy} index={index} />
            </div>
          ))}
        </div>
      </section>
      
      {/* About Section - Minimalist Style */}
      <section id="about" className="py-40 bg-[#432A18] text-[#F4EFE6] rounded-[3rem] mx-4 md:mx-10 mb-20 overflow-hidden relative">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-7xl font-serif mb-12 leading-tight text-[#F4EFE6]">
                Design is more <br />
                than how it <span className="italic text-[#F4EFE6]/40">looks</span>.
              </h2>
              <div className="space-y-8 text-lg md:text-xl text-[#F4EFE6]/70 font-light leading-relaxed">
                <p>
                  As a 2024 graduate, I approach design with a fresh perspective and a hunger 
                  to solve complex problems. My philosophy centers on deep user understanding 
                  and minimalist execution.
                </p>
                <p>
                  I believe the best interfaces are those that disappear, leaving only the 
                  user and their goals in a state of flow.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col justify-center"
            >
              <div className="bg-[#F4EFE6]/5 backdrop-blur-sm rounded-[2.5rem] p-10 md:p-14 border border-[#F4EFE6]/10 shadow-2xl">
                <h3 className="text-2xl font-serif mb-10 text-[#F4EFE6]">Skills & Toolkit</h3>
                <div className="grid gap-12">
                  <div>
                    <h4 className="text-[10px] font-semibold uppercase tracking-[0.25em] mb-6 text-[#F4EFE6]/40">Process</h4>
                    <div className="flex flex-wrap gap-4">
                      {["User Research", "Interaction Design", "Prototyping", "A/B Testing"].map((skill) => (
                        <span key={skill} className="text-[#F4EFE6]/80 border-b border-[#F4EFE6]/20 pb-1.5 text-sm font-light hover:border-[#F4EFE6] transition-all cursor-default">{skill}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-semibold uppercase tracking-[0.25em] mb-6 text-[#F4EFE6]/40">Softwares</h4>
                    <div className="flex flex-wrap gap-4">
                      {["Figma", "Motion", "Spline", "Vite", "Tailwind"].map((skill) => (
                        <span key={skill} className="text-[#F4EFE6]/80 border-b border-[#F4EFE6]/20 pb-1.5 text-sm font-light hover:border-[#F4EFE6] transition-all cursor-default">{skill}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Soft Light in the corner of about */}
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-[#F4EFE6]/5 rounded-full blur-[80px]" />
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-40 bg-transparent relative overflow-hidden">
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-700/5 rounded-full blur-[120px] -z-10"
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="container mx-auto px-6 max-w-6xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, type: "spring", stiffness: 50 }}
          >
            <h2 className="text-4xl md:text-7xl font-serif mb-10 tracking-tight text-[#2A180E]">
              Let's craft <br />
              something <span className="italic text-[#432A18]/20">together</span>.
            </h2>
            <p className="text-xl md:text-2xl text-[#432A18]/60 mb-20 max-w-xl mx-auto font-light">
              Currently looking for new opportunities and collaborations where I can contribute and grow.
            </p>
            <div className="flex flex-col items-center gap-10">
              <a 
                href="mailto:hello@nabeela.design"
                className="text-3xl md:text-5xl font-serif border-b-2 border-[#432A18]/20 pb-2 hover:border-[#432A18] transition-all hover:scale-105 text-[#2A180E]"
              >
                hello@nabeela.design
              </a>
              <div className="flex gap-10 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#432A18]/50">
                <a href="#" className="hover:text-[#432A18] transition-colors">LinkedIn</a>
                <a href="#" className="hover:text-[#432A18] transition-colors">Dribbble</a>
                <a href="#" className="hover:text-[#432A18] transition-colors">Instagram</a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-16 border-t border-[#432A18]/5 text-center text-[10px] font-semibold uppercase tracking-[0.25em] text-[#432A18]/30">
        <div className="container mx-auto px-6 max-w-6xl">
          <p>© 2026 NA Studio. Built with intentionality.</p>
        </div>
      </footer>
    </div>
  );
}
