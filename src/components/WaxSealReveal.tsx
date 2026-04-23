import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { AnimatedSection, RoyalCardOverlay } from './shared';

export function WaxSealReveal() {
  const [isBroken, setIsBroken] = useState(false);

  return (
    <div className="py-24 px-10 relative overflow-hidden">
      <AnimatedSection className="flex flex-col items-center">
        <AnimatePresence mode="wait">
          {!isBroken ? (
            <motion.div 
              key="seal"
              exit={{ opacity: 0, scale: 0.8, filter: 'blur(10px)' }}
              className="flex flex-col items-center"
            >
              <span className="font-accent text-[8px] text-royal-gold uppercase tracking-[0.6em] mb-14 font-bold opacity-60">Wait for the moment</span>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsBroken(true)}
                className="relative w-56 h-56 flex items-center justify-center group"
              >
                {/* Outer Decorative Rings */}
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-0 border border-royal-gold/10 rounded-full"
                />
                <motion.div 
                  animate={{ rotate: -360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-6 border border-royal-gold/5 border-dashed rounded-full"
                />
                
                {/* The Wax Seal */}
                <div className="w-32 h-32 bg-[#a33b3b] rounded-full border-4 border-white relative shadow-[0_15px_40px_rgba(163,59,59,0.25)] flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                   <div className="absolute inset-2 border border-white/20 rounded-full" />
                   <span className="font-display text-3xl text-white font-bold opacity-90">2026</span>
                   
                   {/* Floating light particles */}
                   <div className="absolute -top-3 -right-3 w-4 h-4 text-royal-gold animate-pulse">✧</div>
                   <div className="absolute -bottom-2 -left-2 w-3 h-3 text-royal-gold animate-pulse delay-700">✧</div>
                </div>
              </motion.button>
              <p className="mt-12 font-luxury text-[9px] text-slate-400 tracking-[0.4em] uppercase">Tap to reveal the date</p>
            </motion.div>
          ) : (
            <motion.div 
              key="card"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="luxury-card p-14 rounded-[4.5rem] w-full flex flex-col items-center text-center relative overflow-hidden"
            >
              <RoyalCardOverlay />
              
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="relative z-10"
              >
                <span className="font-accent text-[9px] text-royal-gold uppercase tracking-[0.6em] block mb-10 font-bold">The Reveal</span>
                
                <h2 className="font-display text-5xl text-slate-800 tracking-tight mb-4">MAY 11, 2026</h2>
                <div className="h-[1px] w-20 bg-gradient-to-r from-transparent via-royal-gold/25 to-transparent mx-auto mb-6" />
                <h2 className="font-arabic-display text-4xl text-royal-gold arabic-glow">١١ مايو ٢٠٢٦ م</h2>
                
                <p className="mt-12 font-serif text-[13px] text-slate-400 italic tracking-[0.2em] font-light">Monday Afternoon • 4:00 PM</p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </AnimatedSection>
    </div>
  );
}
