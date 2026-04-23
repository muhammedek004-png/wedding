import { FiligreeBorder, AnimatedSection } from './shared';

export function CoupleSection() {
  return (
    <div className="py-24 px-12 relative">
      <div className="flex flex-col items-center gap-20">
        {/* Groom */}
        <AnimatedSection direction="up" className="w-full flex flex-col items-start">
          <div className="relative">
            <span className="font-accent text-[8px] text-royal-gold/60 uppercase tracking-[0.5em] block mb-4 font-bold">The Groom</span>
            <h2 className="font-display text-4xl text-slate-800 leading-none">ARSHAD</h2>
            <h2 className="font-arabic-display text-3xl text-royal-gold arabic-glow mt-4 opacity-80">أرشد</h2>
            <div className="h-[1px] w-16 bg-royal-gold/20 mt-8" />
          </div>
          
          <div className="mt-8 w-full">
             <p className="font-serif text-[13px] text-slate-500/70 italic tracking-wide leading-relaxed font-light">
               "A gentleman of character and grace, embarking on a new journey of love."
             </p>
          </div>
        </AnimatedSection>

        {/* Separator */}
        <div className="relative flex items-center justify-center w-full">
           <div className="h-[1px] w-full bg-royal-gold/10" />
           <div className="absolute bg-[#fffdfa] px-4 rounded-full border border-royal-gold/10 w-10 h-10 flex items-center justify-center shadow-sm">
              <span className="font-luxury text-sm text-royal-gold/40">∞</span>
           </div>
        </div>

        {/* Bride */}
        <AnimatedSection direction="up" className="w-full flex flex-col items-end text-right">
          <div className="relative flex flex-col items-end">
            <span className="font-accent text-[8px] text-royal-gold/60 uppercase tracking-[0.5em] block mb-4 font-bold">The Bride</span>
            <h2 className="font-display text-4xl text-slate-800 leading-none">FATHIMA</h2>
            <p className="font-accent text-[10px] text-slate-400 mt-1 uppercase tracking-widest">Noorfiya</p>
            <h2 className="font-arabic-display text-3xl text-royal-gold arabic-glow mt-4 opacity-80">فاطمة نورفيا</h2>
            <div className="h-[1px] w-16 bg-royal-gold/20 mt-8" />
          </div>

          <div className="mt-8 w-full">
             <p className="font-serif text-[13px] text-slate-500/70 italic tracking-wide leading-relaxed font-light">
               "A presence of light and elegance, the heart of this beautiful union."
             </p>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
