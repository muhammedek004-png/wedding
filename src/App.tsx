/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Heart } from 'lucide-react';
import { MovingBackground, AnimatedSection, FiligreeBorder, RoyalCardOverlay, CurtainReveal, RoyalFrame } from './components/shared';
import { CoupleSection } from './components/CoupleSection';
import { WaxSealReveal } from './components/WaxSealReveal';
import { VenueSection } from './components/VenueSection';

export default function App() {
  return (
    <div className="relative min-h-screen w-full max-w-[375px] mx-auto overflow-hidden shadow-2xl bg-pearl border-x border-gold/5">
      <CurtainReveal />
      <RoyalFrame />
      <MovingBackground />
      
      {/* Decorative Floating Silks */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <motion.div 
          animate={{ x: [-10, 10, -10], opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[15%] left-[5%] w-64 h-64 bg-white/40 blur-[50px] rounded-full rotate-45"
        />
        <motion.div 
          animate={{ x: [10, -10, 10], opacity: [0.03, 0.08, 0.03] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute top-[35%] right-[5%] w-80 h-80 bg-champagne/20 blur-[70px] rounded-full"
        />
      </div>

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center px-12 text-center">
        <AnimatedSection delay={0.4}>
          <div className="mb-14 relative">
            <span className="font-luxury text-[8px] text-royal-gold uppercase tracking-[0.6em] block mb-6 font-bold">The Celebration of Union</span>
            
            <div className="flex items-center justify-center gap-6 mb-2">
               <div className="h-[1px] w-10 bg-royal-gold/15" />
               <h2 className="font-arabic-display text-2xl text-royal-gold opacity-60 tracking-[0.2em]">دعوة زفاف</h2>
               <div className="h-[1px] w-10 bg-royal-gold/15" />
            </div>
            
            <h1 className="font-display text-[42px] text-slate-800 tracking-tight leading-[1.2] mb-4">
               ARSHAD <br /> 
               <span className="text-royal-gold font-script text-6xl italic block -mt-2 mb-2">&</span>
               FATHIMA
            </h1>
            <p className="font-accent text-[10px] text-slate-400 tracking-[0.5em] font-light uppercase">Noorfiya</p>
          </div>

          <div className="mt-14">
            <p className="font-arabic-serif text-[26px] text-slate-700/80 leading-relaxed max-w-[220px] mx-auto opacity-90 italic">
               نتشرف بدعوتكم لحضور حفل زفافنا الميمون
            </p>
            <div className="w-12 h-[1px] bg-royal-gold/20 mx-auto mt-8" />
          </div>
        </AnimatedSection>
        
        {/* Boutique Scroll Indicator */}
        <motion.div 
          className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-[1px] h-12 bg-gradient-to-b from-royal-gold/40 to-transparent" />
          <span className="text-[7px] text-royal-gold/30 uppercase tracking-[0.6em] font-luxury font-bold">Discover</span>
        </motion.div>
      </section>

      {/* Couple Section */}
      <section id="couple" className="relative z-10">
        <CoupleSection />
      </section>

      {/* Date Reveal Section */}
      <section id="reveal" className="relative z-10">
        <WaxSealReveal />
      </section>

      {/* Venue Section */}
      <section id="venue" className="relative z-10">
        <VenueSection 
          name="The Royal Orchid Auditorium"
          location="Bangalore, Karnataka"
          mapUrl="https://share.google/lGlxEe9ytTfcQqMc5"
        />
      </section>

      {/* Ending/RSVP Section */}
      <footer className="py-24 px-8 relative overflow-hidden bg-gradient-to-b from-transparent to-champagne/10">
        <AnimatedSection>
          <div className="luxury-card rounded-[4rem] p-12 relative overflow-hidden">
            <RoyalCardOverlay />
            <div className="relative z-10 text-center">
              <h2 className="font-arabic-display text-4xl text-royal-gold arabic-glow mb-6">شكراً لكم</h2>
              <h3 className="font-display text-3xl text-slate-800 mb-8 tracking-[0.2em]">THANK YOU</h3>
              
              <div className="w-10 h-[1px] bg-royal-gold/20 mx-auto mb-8" />
              
              <p className="font-arabic-serif text-xl text-slate-600/90 mb-8 leading-loose">
                يسعدنا حضوركم ومشاركتكم فرحتنا وتكريمكم لنا في يومنا المميز
              </p>
              
              <p className="font-accent text-[9px] text-slate-400 leading-relaxed uppercase tracking-[0.3em] mb-12 font-medium">
                Your presence will make our celebration truly unforgettable.
              </p>
              
              <p className="font-arabic-display text-xl text-royal-gold italic mb-3">
                يرجى تأكيد الحضور
              </p>
              <p className="font-luxury text-royal-gold font-bold text-[10px] tracking-[0.4em]">
                KINDLY RSVP
              </p>
              
              <div className="mt-14 flex justify-center">
                 <motion.div 
                  whileHover={{ scale: 1.1, backgroundColor: 'rgba(212, 175, 55, 0.1)' }}
                  className="w-16 h-16 rounded-full border border-royal-gold/15 flex items-center justify-center text-royal-gold transition-colors"
                 >
                   <Heart size={24} className="fill-royal-gold/5" />
                 </motion.div>
              </div>
            </div>
          </div>
          
          <div className="mt-28 text-center">
            <span className="text-[8px] uppercase tracking-[0.8em] text-royal-gold/40 font-luxury font-bold block mb-3">Est. 2026</span>
            <span className="text-[10px] uppercase tracking-[0.5em] text-slate-400 font-accent font-light">
              ARSHAD <span className="text-royal-gold mx-2">♥</span> FATHIMA
            </span>
          </div>
        </AnimatedSection>
      </footer>
    </div>
  );
}
