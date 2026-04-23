import { MapPin, QrCode as QrIcon, ExternalLink } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';
import { AnimatedSection, RoyalCardOverlay } from './shared';

interface VenueProps {
  name: string;
  location: string;
  mapUrl: string;
}

export function VenueSection({ name, location, mapUrl }: VenueProps) {
  return (
    <div className="px-10 py-24 relative">
      <AnimatedSection className="luxury-card rounded-[4rem] p-12 flex flex-col items-center relative overflow-hidden group">
        <RoyalCardOverlay />
        <div className="relative z-10 flex flex-col items-center w-full">
          <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-10 border border-royal-gold/10 shadow-sm">
            <MapPin className="text-royal-gold w-6 h-6" />
          </div>
          
          <h2 className="font-arabic-display text-4xl text-royal-gold arabic-glow mb-6 tracking-widest">موقع الحفل</h2>
          <h3 className="font-display text-2xl text-slate-800 mb-4 text-center tracking-[0.1em]">{name}</h3>
          
          <div className="flex items-center gap-5 mb-12">
             <div className="h-[1px] w-6 bg-royal-gold/15" />
             <p className="font-accent text-[9px] text-slate-400 uppercase tracking-[0.3em] font-medium">{location}</p>
             <div className="h-[1px] w-6 bg-royal-gold/15" />
          </div>
          
          <div className="bg-white p-6 rounded-[2.5rem] mb-12 shadow-[0_15px_35px_rgba(0,0,0,0.04)] border border-royal-gold/5 group-hover:scale-[1.02] transition-transform duration-700">
            <div className="bg-pearl p-4 rounded-2xl">
              <QRCodeSVG 
                value={mapUrl} 
                size={120}
                fgColor="#c5a044"
              />
            </div>
          </div>
          
          <p className="font-arabic-serif text-lg text-slate-700 mb-2 leading-relaxed" dir="rtl">امسح الرمز للحصول على الاتجاهات</p>
          <span className="text-[8px] text-royal-gold uppercase tracking-[0.6em] mb-12 font-bold font-accent">Scan for entry</span>
          
          <a
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-3 py-5 bg-white border border-royal-gold/10 text-royal-gold rounded-3xl font-luxury text-[10px] font-bold tracking-[0.4em] shadow-[0_10px_25px_rgba(212,175,55,0.06)] hover:bg-royal-gold/5 transition-all duration-300"
          >
            <ExternalLink size={16} />
            OPEN IN MAPS
          </a>
        </div>
      </AnimatedSection>
    </div>
  );
}
