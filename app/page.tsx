"use client";
import React, { useState, useEffect } from 'react';

// EXACT COMPETITION DATE FIXED
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

  // PULLS DIRECTLY FROM YOUR MAIN REPOSITORY ROOT
  const extendedImages = Array.from({ length: 20 }, (_, i) => `gallery-${i + 1}.jpg`);

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
    <main style={{ backgroundColor: '#030704', color: 'white', minHeight: 'screen', padding: '20px', fontFamily: 'sans-serif' }}>
      
      {/* HEADER */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '20px' }}>
        <div>
          <h2 style={{ letterSpacing: '0.2em', fontSize: '16px', margin: 0 }}>ONYELE EMMANUEL KING</h2>
          <p style={{ color: '#04bd57', fontSize: '11px', margin: '5px 0 0 0', fontWeight: 'bold' }}>MR ECO INTERNATIONAL NIGERIA 2026</p>
        </div>
        <div>
          <button onClick={() => setView("portfolio")} style={{ background: 'none', border: 'none', color: view === 'portfolio' ? '#d4af37' : 'white', fontWeight: 'bold', marginRight: '15px', cursor: 'pointer' }}>Portfolio</button>
          <button onClick={() => setView("hub")} style={{ background: 'none', border: 'none', color: view === 'hub' ? '#d4af37' : 'white', fontWeight: 'bold', cursor: 'pointer' }}>Connect Hub</button>
        </div>
      </nav>

      {view === "portfolio" ? (
        <div style={{ marginTop: '40px' }}>
          
          {/* HERO */}
          <section style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', alignItems: 'center' }}>
            <div style={{ flex: '1', minWidth: '300px' }}>
              <span style={{ color: '#04bd57', fontWeight: 'bold', fontSize: '12px' }}>✦ ROAD TO THE PHILIPPINES</span>
              <h1 style={{ fontSize: '48px', margin: '10px 0' }}>Representing <span style={{ color: '#04bd57' }}>Nigeria</span> on the Global Stage</h1>
              <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: '1.6' }}>
                A Nigerian model, actor, and public figure dedicated to excellence, growth, and continuous self-development.
              </p>
              
              {/* STATS */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginTop: '20px' }}>
                <div style={{ background: 'rgba(255,255,255,0.03)', padding: '15px', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.05)' }}><strong>Height:</strong> 182 cm</div>
                <div style={{ background: 'rgba(255,255,255,0.03)', padding: '15px', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.05)' }}><strong>Nationality:</strong> Nigerian</div>
                <div style={{ background: 'rgba(255,255,255,0.03)', padding: '15px', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.05)' }}><strong>State:</strong> Imo State</div>
                <div style={{ background: 'rgba(255,255,255,0.03)', padding: '15px', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.05)' }}><strong>Languages:</strong> English, Igbo</div>
              </div>
            </div>

            {/* HERO IMAGE */}
            <div style={{ flex: '1', minWidth: '300px', textAlign: 'center' }}>
              <img 
                src="hero-front.jpg" 
                alt="Emmanuel King" 
                style={{ width: '100%', maxWidth: '350px', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.1)' }}
                onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600"; }}
              />
              <div style={{ background: 'black', padding: '15px', borderRadius: '10px', marginTop: '15px', inlineSize: 'max-content', margin: '15px auto' }}>
                <p style={{ color: '#d4af37', margin: '0 0 5px 0', fontSize: '11px', fontWeight: 'bold' }}>COUNTDOWN TO PAGEANT</p>
                <span style={{ fontSize: '18px', fontWeight: 'bold' }}>{timeLeft.days}d : {timeLeft.hours}h : {timeLeft.minutes}m</span>
              </div>
            </div>
          </section>

          {/* MAIN IMAGES LOOKBOOK */}
          <section style={{ marginTop: '50px' }}>
            <h3 style={{ borderLeft: '3px solid #d4af37', paddingLeft: '10px', color: 'white' }}>Core Showcase</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '15px', marginTop: '20px' }}>
              {[1, 2, 3, 4].map((num) => (
                <img 
                  key={num}
                  src={`gallery-${num}.jpg`} 
                  alt="Showcase item" 
                  style={{ width: '100%', borderRadius: '10px', objectFit: 'cover', aspectRatio: '3/4' }}
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
              ))}
            </div>
          </section>

          {/* EXTENDED IMAGES */}
          <section style={{ marginTop: '50px' }}>
            <h3 style={{ borderLeft: '3px solid #04bd57', paddingLeft: '10px', color: 'white' }}>Full Portfolio Catalogue</h3>
            <div style={{ display: 'flex', gap: '15px', overflowX: 'auto', paddingBottom: '15px', marginTop: '20px' }}>
              {extendedImages.map((src, index) => (
                <img 
                  key={index}
                  src={src} 
                  alt="Catalogue item" 
                  style={{ height: '250px', borderRadius: '10px', flexShrink: 0 }}
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
              ))}
            </div>
          </section>

          {/* BIOGRAPHY & HISTORY */}
          <section style={{ marginTop: '60px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '40px' }}>
            <div>
              <h3 style={{ color: '#d4af37' }}>Pageantry Record</h3>
              {TIMELINE.map((item, idx) => (
                <div key={idx} style={{ marginBottom: '20px' }}>
                  <span style={{ background: 'rgba(255,255,255,0.1)', padding: '2px 6px', borderRadius: '4px', fontSize: '11px' }}>{item.year}</span>
                  <h4 style={{ margin: '5px 0 2px 0' }}>{item.title}</h4>
                  <p style={{ margin: 0, fontSize: '13px', color: 'rgba(255,255,255,0.6)' }}>{item.role} — <em>{item.location}</em></p>
                </div>
              ))}
            </div>
            <div style={{ background: 'rgba(255,255,255,0.01)', padding: '25px', borderRadius: '15px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <h3>Core Experience</h3>
              <ul>
                {EXPERIENCES.map((exp, i) => <li key={i} style={{ marginBottom: '10px', fontSize: '14px', color: 'rgba(255,255,255,0.8)' }}>{exp}</li>)}
              </ul>
            </div>
          </section>

        </div>
      ) : (
        /* CONNECT HUB */
        <div style={{ maxWidth: '600px', margin: '40px auto', textAlign: 'center' }}>
          <h2>Connect Hub</h2>
          <div style={{ display: 'grid', gap: '15px', marginTop: '30px' }}>
            {SOCIALS.map((soc, idx) => (
              <a key={idx} href={soc.url} target="_blank" rel="noreferrer" style={{ display: 'flex', justifyContent: 'space-between', padding: '20px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '10px', color: 'white', textDecoration: 'none' }}>
                <span>{soc.name}</span>
                <span style={{ color: 'rgba(255,255,255,0.4)' }}>{soc.handle}</span>
              </a>
            ))}
          </div>
          <div style={{ marginTop: '40px', padding: '20px', border: '1px solid #d4af37', borderRadius: '15px' }}>
            <h4>Management & Representation</h4>
            <p>Direct Contact: <strong>nonsoking@gmail.com</strong></p>
            <a href="https://wa.me/2347033402271" target="_blank" rel="noreferrer" style={{ display: 'block', background: 'white', color: 'black', padding: '15px', borderRadius: '10px', fontWeight: 'bold', textDecoration: 'none', marginTop: '15px' }}>Chat on WhatsApp</a>
          </div>
        </div>
      )}

      <footer style={{ marginTop: '80px', textAlign: 'center', fontSize: '11px', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.1em' }}>
        © 2026 ONYELE EMMANUEL KING. ALL RIGHTS RESERVED.
      </footer>
    </main>
  );
}
