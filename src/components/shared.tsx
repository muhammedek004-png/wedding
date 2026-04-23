import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { ReactNode, useRef, useState } from 'react';

/**
 * Pearl & Gold Reveal Component
 */
export function CurtainReveal() {
  const [isOpen, setIsOpen] = useState(false);
  const [shouldRender, setShouldRender] = useState(true);

  if (!shouldRender) return null;

  return (
    <AnimatePresence onExitComplete={() => setShouldRender(false)}>
      {!isOpen && (
        <motion.div 
          className="absolute inset-0 z-[100] flex pointer-events-auto h-screen"
          exit={{ opacity: 0, transition: { delay: 1.2, duration: 0.8 } }}
        >
          {/* Left Curtain */}
          <motion.div 
            initial={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 1.6, ease: [0.77, 0, 0.175, 1] }}
            className="w-1/2 h-full bg-[#fdfaf5] relative overflow-hidden border-r border-royal-gold/10"
          >
            <div className="absolute inset-0 arabesque-luxury opacity-30" />
            <div className="absolute inset-0 bg-gradient-to-r from-white/40 to-transparent" />
          </motion.div>

          {/* Right Curtain */}
          <motion.div 
            initial={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 1.6, ease: [0.77, 0, 0.175, 1] }}
            className="w-1/2 h-full bg-[#fdfaf5] relative overflow-hidden border-l border-royal-gold/10"
          >
            <div className="absolute inset-0 arabesque-luxury opacity-30" />
            <div className="absolute inset-0 bg-gradient-to-l from-white/40 to-transparent" />
          </motion.div>

          {/* Central Luxury Seal */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center">
            <motion.button
              onClick={() => setIsOpen(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative flex flex-col items-center pointer-events-auto"
            >
              <div className="w-44 h-44 flex items-center justify-center relative">
                <motion.div 
                   animate={{ rotate: 360 }}
                   transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                   className="absolute inset-0 border border-royal-gold/20 rounded-full"
                />
                <motion.div 
                   animate={{ rotate: -360 }}
                   transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                   className="absolute inset-4 border border-royal-gold/10 border-dashed rounded-full"
                />
                
                {/* The Seal */}
                <div className="w-32 h-32 bg-white rounded-full flex flex-col items-center justify-center shadow-[0_15px_40px_rgba(212,175,55,0.15)] border-2 border-royal-gold/10">
                   <span className="font-luxury text-4xl text-royal-gold font-light tracking-widest">A & F</span>
                   <div className="w-10 h-[1px] bg-royal-gold/20 mt-1" />
                </div>
              </div>

              <div className="mt-12 text-center">
                <p className="font-arabic-display text-2xl text-royal-gold arabic-glow tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity duration-500">تفضلوا بالدخول</p>
                <p className="mt-2 font-luxury text-xs text-royal-gold/60 tracking-[0.5em] animate-pulse">REVEAL INVITATION</p>
              </div>
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/**
 * Pearl & Gold Frame
 */
export function RoyalFrame() {
  return (
    <div className="absolute inset-x-0 top-0 h-screen pointer-events-none z-[80] overflow-hidden">
      <div className="absolute inset-6 border border-royal-gold/10 rounded-[3rem]" />
      <div className="absolute top-0 left-0 w-24 h-24 text-royal-gold opacity-20 p-8">
        <IslamicCorner />
      </div>
      <div className="absolute top-0 right-0 w-24 h-24 text-royal-gold opacity-20 p-8 rotate-90">
        <IslamicCorner />
      </div>
      <div className="absolute bottom-0 left-0 w-24 h-24 text-royal-gold opacity-20 p-8 -rotate-90">
        <IslamicCorner />
      </div>
      <div className="absolute bottom-0 right-0 w-24 h-24 text-royal-gold opacity-20 p-8 rotate-180">
        <IslamicCorner />
      </div>
    </div>
  );
}

function IslamicCorner() {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="1">
      <path d="M0,0 L30,0 L30,30 L0,30 Z" />
      <path d="M15,0 L15,40" strokeWidth="0.5" />
      <path d="M0,15 L40,15" strokeWidth="0.5" />
      <circle cx="15" cy="15" r="4" fill="currentColor" fillOpacity="0.1" />
    </svg>
  );
}

/**
 * Animated Entrance
 */
export function AnimatedSection({ 
  children, 
  className = "", 
  delay = 0,
  direction = 'up' 
}: { children: ReactNode, className?: string, delay?: number, direction?: 'up'|'down'|'left'|'right' }) {
  const variants = {
    hidden: { 
      opacity: 0, 
      y: direction === 'up' ? 30 : direction === 'down' ? -30 : 0,
      x: direction === 'left' ? 30 : direction === 'right' ? -30 : 0
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      x: 0,
      transition: { duration: 1.2, delay, ease: [0.19, 1, 0.22, 1] }
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * Soft Pearl Background
 */
export function MovingBackground() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '10%']);
  
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden bg-pearl">
      {/* Soft Champagne Gradient */}
      <div className="absolute inset-0 bg-gradient-to-tr from-champagne/10 via-pearl to-ivory/20" />
      
      {/* Pattern Layer */}
      <motion.div 
        className="absolute inset-[-10%] arabesque-luxury opacity-[0.05] scale-110"
        style={{ y }}
      />

      {/* Floating Light Soft Orbs */}
      <div className="absolute top-[10%] right-0 w-[400px] h-[400px] bg-royal-gold/5 blur-[100px] rounded-full" />
      <div className="absolute bottom-[10%] left-0 w-[500px] h-[500px] bg-rose-gold/10 blur-[130px] rounded-full" />
    </div>
  );
}

/**
 * Filigree Border Decor - Light Luxury Style
 */
export function FiligreeBorder({ position = 'top' }: { position?: 'top' | 'bottom' | 'both' }) {
  const Pattern = () => (
    <div className="flex items-center gap-4 text-royal-gold/30">
      <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-royal-gold/30" />
      <div className="rotate-45 w-[6px] h-[6px] border border-royal-gold/30" />
      <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-royal-gold/30" />
    </div>
  );

  return (
    <div className="flex flex-col items-center w-full py-4 pointer-events-none">
      {(position === 'top' || position === 'both') && <Pattern />}
      {(position === 'bottom' || position === 'both') && (
        <div className="mt-2">
          <Pattern />
        </div>
      )}
    </div>
  );
}

/**
 * Royal Card Pattern
 */
export function RoyalCardOverlay() {
  return (
    <div className="absolute inset-0 pointer-events-none arabesque-luxury opacity-[0.04] rounded-[inherit]" />
  );
}
