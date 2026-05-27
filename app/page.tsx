"use client";
import React, { useState, useEffect } from 'react';

const COMPETITION_DATE = "2026-06-02T00:00:00";

const SOCIALS = [
  { name: "Instagram", handle: "@mhannie_king", url: "https://instagram.com/mhannie_king" },
  { name: "Facebook", handle: "Emma Nuel King", url: "https://facebook.com" },
  { name: "TikTok", handle: "@Emmanuel King", url: "https://tiktok.com" },
  { name: "X (Twitter)", handle: "@Emmanuel King", url: "https://twitter.com" }
];

const TIMELINE = [
  { year: "2026", title: "Mr Eco International Nigeria", role: "Current Titleholder & Official Representative", location: "Nigeria / Philippines", win: true },
  { year: "2022", title: "Misters of Nigeria Pageant", role: "Top 7 Finalist", location: "National" },
  { year: "2022", title: "Lagos QFashion Fair", role: "Runway Model", location: "Lagos, Nigeria" },
  { year: "2021", title: "Mr Paragon Nigeria", role: "First Runner-Up", location: "National", win: true }
];

const EXPERIENCES = [
  "Runway modeling and high-fashion pageantry",
  "Commercial model featured in promotional & advertising campaigns",
  "Actor featured in movies currently streaming on YouTube",
  "Media appearances, international networking, and brand collaborations"
];

export default function Home() {
  const [view, setView] = useState("portfolio");
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  // GENERATE ARRAY FOR 20 IMAGES Dynamically
  const extendedImages = Array.from({ length: 20 }, (_, i) => `/model/gallery-${i + 1}.jpg`);

  useEffect(() => {
    const target = new Date(COMPETITION_DATE).getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = target - now;

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-[#030704] text-white selection:bg-[#04bd57]/30 selection:text-[#d4af37] font-sans antialiased overflow-x-hidden">
      
      {/* BACKGROUND EFFECTS */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-[#04bd57]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-[#d4af37]/5 rounded-full blur-[120px]" />
      </div>

      {/* FIXED GLASS NAVIGATION */}
      <nav className="fixed top-0 z-50 w-full backdrop-blur-md bg-[#030704]/60 border-b border-white/5 px-6 py-4 md:py-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex flex-col cursor-pointer" onClick={() => setView("portfolio")}>
            <span className="font-black tracking-[0.3em] text-xs md:text-sm text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#d4af37]">ONYELE EMMANUEL KING</span>
            <span className="text-[9px] uppercase tracking-[0.4em] text-[#04bd57] font-bold mt-0.5">Mr Eco International Nigeria 2026</span>
          </div>
          <div className="flex gap-6 text-[10px] font-bold uppercase tracking-widest">
            <button onClick={() => setView("portfolio")} className={`transition-colors ${view === "portfolio" ? "text-[#d4af37]" : "text-white/50 hover:text-white"}`}>Portfolio</button>
            <button onClick={() => setView("hub")} className={`transition-colors ${view === "hub" ? "text-[#d4af37]" : "text-white/50 hover:text-white"}`}>Connect Hub</button>
          </div>
        </div>
      </nav>

      {view === "portfolio" ? (
        <div className="relative z-10 pt-28 md:pt-36 pb-24 px-4 md:px-8 max-w-7xl mx-auto space-y-16 md:space-y-24">
          
          {/* HERO SECTION */}
          <section className="grid lg:grid-cols-12 gap-8 items-center min-h-[70vh]">
            <div className="lg:col-span-7 space-y-6 order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#04bd57]/10 border border-[#04bd57]/30 text-[#04bd57] text-[10px] font-black uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-[#04bd57] animate-pulse" />
                Road to the Philippines
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-none text-white">
                Representing <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#04bd57] to-[#d4af37]">Nigeria</span> on the Global Stage
              </h1>
              <p className="text-white/60 text-sm md:text-base max-w-xl font-light leading-relaxed">
                A Nigerian model, actor, and public figure dedicated to excellence, growth, and continuous self-development. Using a global platform to advocate for environmental sustainability and cultural pride.
              </p>
              
              {/* COMPACT BENTO STATS */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-4">
                {[
                  { label: "Height", val: "182 cm" },
                  { label: "Nationality", val: "Nigerian" },
                  { label: "State of Origin", val: "Imo State" },
                  { label: "Languages", val: "English, Igbo" }
                ].map((stat, idx) => (
                  <div key={idx} className="bg-white/[0.02] border border-white/5 backdrop-blur-md rounded-2xl p-4 text-center">
                    <p className="text-[9px] uppercase tracking-widest text-white/40 font-bold mb-1">{stat.label}</p>
                    <p className="text-sm font-bold text-white tracking-wide">{stat.val}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* HERO IMAGE CONTAINER */}
            <div className="lg:col-span-5 order-1 lg:order-2">
              <div className="relative aspect-[4/5] w-full max-w-md mx-auto rounded-[2.5rem] overflow-hidden border border-white/10 bg-gradient-to-b from-white/5 to-transparent shadow-2xl group">
                <img 
                  src="/model/hero-front.jpg" 
                  alt="Onyele Emmanuel King" 
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                  onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600"; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030704] via-transparent to-transparent" />
                
                {/* GLASS FLOATING COUNTDOWN CONTAINER */}
                <div className="absolute bottom-6 left-4 right-4 backdrop-blur-xl bg-black/60 border border-white/10 p-4 rounded-2xl text-center shadow-2xl">
                  <p className="text-[9px] uppercase tracking-[0.2em] font-black text-[#d4af37] mb-2">MR ECO INTERNATIONAL COUNTDOWN</p>
                  <div className="grid grid-cols-4 gap-1 text-white">
                    <div>
                      <p className="text-lg font-black">{timeLeft.days}</p>
                      <p className="text-[8px] uppercase text-white/40 font-semibold">Days</p>
                    </div>
                    <div>
                      <p className="text-lg font-black">{timeLeft.hours}</p>
                      <p className="text-[8px] uppercase text-white/40 font-semibold">Hrs</p>
                    </div>
                    <div>
                      <p className="text-lg font-black">{timeLeft.minutes}</p>
                      <p className="text-[8px] uppercase text-white/40 font-semibold">Min</p>
                    </div>
                    <div>
                      <p className="text-lg font-black text-[#04bd57]">{timeLeft.seconds}</p>
                      <p className="text-[8px] uppercase text-white/40 font-semibold">Sec</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ADVOCACY BAR */}
          <section className="backdrop-blur-xl bg-[#04bd57]/5 border border-[#04bd57]/20 p-6 md:p-8 rounded-[2rem] grid md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-1">
              <span className="text-[9px] uppercase tracking-[0.3em] font-black text-[#d4af37]">OFFICIAL ADVOCACY</span>
              <h3 className="text-xl font-bold tracking-tight text-white mt-1">Green Community Project (GCP)</h3>
            </div>
            <p className="md:col-span-2 text-xs md:text-sm text-white/70 font-light leading-relaxed">
              Passionate about environmental awareness, youth empowerment, leadership, and driving positive community development to safeguard local ecosystems while accurately projecting cultural representation globally.
            </p>
          </section>

          {/* HIGH-END CURATED GRID (First 4 Key Editorial Shots) */}
          <section className="space-y-6">
            <div className="text-center md:text-left">
              <span className="text-[10px] font-mono tracking-[0.4em] text-[#d4af37] uppercase font-black">VISUAL EDITORIAL</span>
              <h2 className="text-3xl font-bold tracking-tight text-white mt-1">Core Showcase</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((num) => (
                <div key={num} className="relative aspect-[3/4] bg-white/5 rounded-2xl overflow-hidden border border-white/5 group shadow-lg">
                  <img 
                    src={`/model/gallery-${num}.jpg`} 
                    alt={`Lookbook decoration ${num}`} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?q=80&w=400"; }}
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <span className="text-[9px] uppercase tracking-widest font-black text-white/90 bg-black/60 px-3 py-1.5 rounded-full border border-white/10 backdrop-blur-md">Featured Look</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* EXTENDED CAROUSEL RUNWAY (For all remaining 20+ images) */}
          <section className="space-y-4">
            <div className="px-2">
              <span className="text-[9px] font-mono tracking-[0.3em] text-[#04bd57] uppercase font-black">EXTENDED CATALOGUE</span>
              <h3 className="text-xl font-bold tracking-tight text-white">Full Lookbook Comp-Card</h3>
            </div>
            
            {/* Horizontal Glass Slider Container */}
            <div className="flex gap-4 overflow-x-auto pb-4 pt-2 px-2 scrollbar-hide snap-x snap-mandatory">
              {extendedImages.map((src, index) => (
                <div key={index} className="w-[180px] md:w-[240px] flex-shrink-0 aspect-[3/4] bg-white/[0.02] border border-white/5 rounded-2xl overflow-hidden snap-start relative group">
                  <img 
                    src={src} 
                    alt={`Extended portfolio sequence ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                    onError={(e) => { e.currentTarget.parentElement?.remove(); }} // Automatically safely hides elements if you upload fewer than 20
                  />
                  <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md border border-white/10 text-[8px] font-mono px-2 py-1 rounded-md text-white/60">
                    Frame {index + 1}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* TIMELINE & EXPERIENCE */}
          <section className="grid lg:grid-cols-2 gap-12 pt-6">
            <div className="space-y-6">
              <div>
                <span className="text-[10px] font-mono tracking-[0.4em] text-[#d4af37] uppercase font-black">RECORD & DECORATIONS</span>
                <h2 className="text-3xl font-bold tracking-tight text-white mt-1">Pageantry Track</h2>
              </div>
              <div className="relative border-l border-white/10 pl-6 space-y-8 ml-2">
                {TIMELINE.map((item, index) => (
                  <div key={index} className="relative group">
                    <div className={`absolute -left-[31px] top-1 w-4 h-4 rounded-full border-2 bg-[#030704] transition-colors ${item.win ? "border-[#d4af37]" : "border-[#04bd57]"}`} />
                    <span className="text-[10px] font-mono font-bold text-[#d4af37] bg-white/5 px-2 py-0.5 rounded-md border border-white/5">{item.year}</span>
                    <h4 className="text-lg font-bold text-white tracking-tight mt-2">{item.title}</h4>
                    <p className="text-xs text-white/60 font-light">{item.role} — <span className="italic text-white/40">{item.location}</span></p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8 bg-white/[0.01] border border-white/5 backdrop-blur-xl p-6 md:p-10 rounded-[2.5rem]">
              <div className="space-y-4">
                <span className="text-[10px] font-mono tracking-[0.4em] text-[#04bd57] uppercase font-black">BIOGRAPHY PROFILE</span>
                <h2 className="text-3xl font-bold tracking-tight text-white">The Journey So Far</h2>
                <p className="text-xs md:text-sm text-white/70 font-light leading-relaxed">
                  My journey in the entertainment and pageantry industry has been one of growth, resilience, and continuous self-development. Contesting across diverse platforms has radically shaped my confidence, communication skills, stage presence, and organic ability to connect directly with vast audiences.
                </p>
                <p className="text-xs md:text-sm text-white/70 font-light leading-relaxed">
                  Beyond pageantry, I intentionally anchor my voice in commercial projects, runway modeling, and strategic acting executions. I remain deeply passionate about maximizing this ecosystem to foster leadership development and champion positive global representations of Nigerian culture.
                </p>
              </div>
              <div className="border-t border-white/5 pt-6 space-y-3">
                <p className="text-[10px] uppercase tracking-widest text-[#d4af37] font-black">CORE COMPETENCIES & EXPOSURE</p>
                <ul className="grid gap-2 text-xs text-white/80 font-light">
                  {EXPERIENCES.map((exp, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#04bd57] mt-0.5">✦</span>
                      <span>{exp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

        </div>
      ) : (
        /* CONNECT HUB VIEW */
        <section className="relative z-10 pt-28 md:pt-36 pb-24 px-4 md:px-8 max-w-3xl mx-auto space-y-8 animate-in fade-in duration-500">
          <div className="text-center space-y-2">
            <span className="text-[10px] font-mono tracking-[0.4em] text-[#d4af37] uppercase font-black">ENGAGEMENT PLATFORMS</span>
            <h2 className="text-4xl font-extrabold tracking-tight text-white">Connect Hub</h2>
            <p className="text-xs md:text-sm text-white/50 font-light max-w-md mx-auto">
              Open to verified interviews, campaigns, brand ambassadorial opportunities, sponsorships, and international industry networking.
            </p>
          </div>

          <div className="space-y-3">
            {SOCIALS.map((soc, idx) => (
              <a 
                key={idx} 
                href={soc.url} 
                target="_blank" 
                rel="noreferrer"
                className="flex justify-between items-center bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 rounded-2xl p-5 group transition-all"
              >
                <span className="text-sm font-bold tracking-wide text-white group-hover:text-[#04bd57] transition-colors">{soc.name}</span>
                <span className="text-xs font-mono text-white/40 group-hover:text-white transition-colors">{soc.handle}</span>
              </a>
            ))}
          </div>

          <div className="backdrop-blur-2xl bg-gradient-to-b from-white/[0.03] to-transparent border border-white/10 rounded-[2rem] p-6 md:p-8 space-y-6 text-center shadow-2xl">
            <div className="space-y-1">
              <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#d4af37] font-black">SECURE BOOKINGS & PLACEMENTS</p>
              <h3 className="text-xl font-bold tracking-tight text-white">Management & Representation</h3>
              <p className="text-xs text-white/50 font-light">Direct Contact: <span className="text-white font-mono">nonsoking@gmail.com</span></p>
            </div>
            
            <a 
              href="https://wa.me/2347033402271?text=Hello%20Onyele%20Emmanuel%20King,%20we%20are%20interested%20in%20booking%20you%20for%20an%20editorial/endorsement/pageant%20coaching%20session.%20Please%20provide%20your%20current%20availability."
              target="_blank"
              rel="noreferrer"
              className="block w-full text-center bg-white text-black font-black uppercase tracking-[0.2em] text-[11px] py-5 rounded-2xl hover:bg-[#04bd57] hover:text-white transition-all shadow-xl active:scale-[0.98]"
            >
              Initialize WhatsApp Chat
            </a>
          </div>
        </section>
      )}

      <footer className="relative z-10 border-t border-white/5 py-8 text-center text-[10px] text-white/30 font-medium tracking-widest uppercase">
        © 2026 Onyele Emmanuel King. All Rights Reserved.
      </footer>
    </main>
  );
}
