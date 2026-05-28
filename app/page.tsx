"use client";
import React, { useState, useEffect } from 'react';

// Configuration constants
const PAGEANT_DATE = "2026-06-02T00:00:00";
const ASSET_BASE = "https://raw.githubusercontent.com/Jowci1/emmanuel-king-portfolio/main";

export default function Home() {
  const [view, setView] = useState("portfolio");
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0 });

  useEffect(() => {
    const target = new Date(PAGEANT_DATE).getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = target - now;
      if (difference <= 0) {
        clearInterval(interval);
      } else {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Premium Global Styles System
  const mainContainerStyle: React.CSSProperties = {
    backgroundColor: '#030704',
    backgroundImage: 'radial-gradient(circle at 50% 0%, #061f10 0%, #030704 80%)',
    color: '#ffffff',
    minHeight: '100vh',
    padding: '40px 24px',
    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", Helvetica, Arial, sans-serif',
    letterSpacing: '-0.01em',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale'
  };

  const glassPanelStyle: React.CSSProperties = {
    background: 'rgba(255, 255, 255, 0.03)',
    backdropFilter: 'blur(25px)',
    WebkitBackdropFilter: 'blur(25px)',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    borderRadius: '24px',
    padding: '32px',
    boxShadow: '0 30px 60px rgba(0, 0, 0, 0.5)'
  };

  const emeraldBadgeStyle: React.CSSProperties = {
    background: 'rgba(4, 189, 87, 0.12)',
    border: '1px solid rgba(4, 189, 87, 0.3)',
    color: '#04bd57',
    padding: '6px 14px',
    borderRadius: '100px',
    fontSize: '11px',
    fontWeight: 600,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    display: 'inline-block'
  };

  return (
    <main style={mainContainerStyle}>
      
      {/* ================= EDITORIAL STICKY-READY HEADER ================= */}
      <header style={{ maxWidth: '1200px', margin: '0 auto 56px auto', display: 'flex', flexDirection: 'column', gap: '24px', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '32px', textAlign: 'center' }}>
        <div>
          <h1 style={{ fontSize: '30px', fontWeight: 800, letterSpacing: '0.12em', margin: 0, textTransform: 'uppercase', color: '#ffffff' }}>ONYELE EMMANUEL KING</h1>
          <p style={{ color: '#d4af37', fontSize: '11px', fontWeight: 700, margin: '8px 0 0 0', letterSpacing: '0.2em', textTransform: 'uppercase' }}>MR ECO INTERNATIONAL NIGERIA 2026</p>
        </div>
        
        {/* View Segment Switcher */}
        <div style={{ display: 'flex', background: 'rgba(255,255,255,0.04)', padding: '4px', borderRadius: '14px', border: '1px solid rgba(255,255,255,0.08)', backdropFilter: 'blur(10px)' }}>
          <button onClick={() => setView("portfolio")} style={{ padding: '10px 28px', border: 'none', borderRadius: '10px', cursor: 'pointer', fontWeight: 600, fontSize: '13px', transition: 'all 0.2s', background: view === 'portfolio' ? 'rgba(255,255,255,0.1)' : 'transparent', color: view === 'portfolio' ? '#ffffff' : '#a0a5a1' }}>PORTFOLIO</button>
          <button onClick={() => setView("hub")} style={{ padding: '10px 28px', border: 'none', borderRadius: '10px', cursor: 'pointer', fontWeight: 600, fontSize: '13px', transition: 'all 0.2s', background: view === 'hub' ? 'rgba(255,255,255,0.1)' : 'transparent', color: view === 'hub' ? '#ffffff' : '#a0a5a1' }}>CONNECT HUB</button>
        </div>
      </header>

      {view === "portfolio" ? (
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '48px' }}>
          
          {/* ================= SECTION 1: HERO & CORE INTRO ================= */}
          <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px', alignItems: 'start' }}>
            
            {/* Left Narrative Frame */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div>
                <span style={emeraldBadgeStyle}>✦ Official Representative</span>
                <h2 style={{ fontSize: '46px', fontWeight: 800, lineHeight: 1.15, margin: '16px 0 12px 0', letterSpacing: '-0.03em' }}>
                  Representing <span style={{ color: '#04bd57' }}>Nigeria</span> on the Global Stage
                </h2>
                <p style={{ color: '#d4af37', fontSize: '15px', fontWeight: 600, margin: 0, letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                  Mr Eco International Contestant — Philippines
                </p>
              </div>

              {/* Verified Full Summary Context */}
              <div style={glassPanelStyle}>
                <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: 700, color: '#d4af37', letterSpacing: '0.02em', textTransform: 'uppercase' }}>Summary About Me</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', color: '#cbd5e1', fontSize: '14.5px', lineHeight: 1.65, fontWeight: 400 }}>
                  <p style={{ margin: 0 }}>
                    My name is Onyele Emmanuel King, a Nigerian model, actor, and public figure currently serving as Mr Eco International Nigeria 2026. My journey in the entertainment and pageantry industry has been one of growth, resilience, and continuous self-development.
                  </p>
                  <p style={{ margin: 0 }}>
                    In 2021, I contested in Mr Paragon Nigeria where I emerged as the First Runner-Up. In 2022, I participated in my first national pageant, Misters of Nigeria, where I finished as a Top 7 finalist. That same year, I also worked as a runway model at the Lagos QFashion Fair 2022, expanding my experience in the fashion industry.
                  </p>
                  <p style={{ margin: 0 }}>
                    Beyond pageantry and modeling, I am also involved in commercial projects and acting, with movie features currently showing on YouTube. These experiences have helped shape my confidence, communication skills, stage presence, and ability to connect with diverse audiences.
                  </p>
                  <p style={{ margin: 0 }}>
                    As I prepare to represent Nigeria at Mr Eco International, I remain passionate about using my platform to promote environmental sustainability, youth empowerment, leadership, and positive representation of Nigerian culture on the global stage.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Hero Image Column & Live Countdown */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px' }}>
              <div style={{ ...glassPanelStyle, padding: '14px', width: '100%', maxWidth: '420px', background: 'rgba(255,255,255,0.015)' }}>
                <img 
                  src={`${ASSET_BASE}/gallery-1.jpg`} 
                  alt="Onyele Emmanuel King Headshot" 
                  style={{ width: '100%', borderRadius: '16px', display: 'block', objectFit: 'cover', height: '500px', boxShadow: '0 4px 30px rgba(0,0,0,0.4)' }}
                />
              </div>
              
              {/* COMPILER COMPLIANT TYPE-SAFE COUNTDOWN FRAME */}
              <div style={{ ...glassPanelStyle, width: '100%', maxWidth: '420px', textAlign: 'center', padding: '20px 24px', border: '1px solid rgba(4, 189, 87, 0.25)', background: 'linear-gradient(180deg, rgba(4,189,87,0.04) 0%, rgba(0,0,0,0) 100%)' }}>
                <span style={{ fontSize: '11px', fontWeight: 700, color: '#d4af37', letterSpacing: '0.15em', display: 'block', marginBottom: '6px', textTransform: 'uppercase' }}>PHILIPPINES DEPLOYMENT COUNTDOWN</span>
                <span style={{ fontSize: '26px', fontWeight: 800, color: '#ffffff', letterSpacing: '0.04em', fontVariantNumeric: 'tabular-nums' }}>
                  {timeLeft.days}d : {timeLeft.hours}h : {timeLeft.minutes}m
                </span>
              </div>
            </div>

          </section>

          {/* ================= SECTION 2: OPTIONAL VITALS FRAME ================= */}
          <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
            {[
              { label: "HEIGHT", val: "182cm" },
              { label: "STATE OF ORIGIN", val: "Imo State" },
              { label: "NATIONALITY", val: "Nigerian" },
              { label: "LANGUAGES SPOKEN", val: "English, Igbo" }
            ].map((vitals, i) => (
              <div key={i} style={{ ...glassPanelStyle, padding: '24px', textAlign: 'center', border: '1px solid rgba(255,255,255,0.06)' }}>
                <span style={{ color: '#a0a5a1', fontSize: '10px', fontWeight: 700, display: 'block', marginBottom: '6px', letterSpacing: '0.1em' }}>{vitals.label}</span>
                <span style={{ fontSize: '20px', fontWeight: 700, color: '#ffffff' }}>{vitals.val}</span>
              </div>
            ))}
          </section>

          {/* ================= SECTION 3: ADVOCACY FOCUS FRAME ================= */}
          <section style={{ ...glassPanelStyle, borderLeft: '4px solid #04bd57', padding: '32px', background: 'linear-gradient(90deg, rgba(4,189,87,0.02) 0%, rgba(0,0,0,0) 100%)' }}>
            <span style={{ color: '#04bd57', fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em', display: 'block', marginBottom: '6px' }}>OFFICIAL ADVOCACY PROJECT</span>
            <h3 style={{ margin: '0 0 10px 0', fontSize: '24px', fontWeight: 800, letterSpacing: '-0.01em' }}>Green Community Project (GCP)</h3>
            <p style={{ color: '#cbd5e1', fontSize: '14.5px', margin: 0, lineHeight: 1.6 }}>
              Dedicated to accelerating environmental awareness, community clean energy development, youth empowerment frameworks, and proactive green sustainability initiatives throughout Nigeria and international spaces.
            </p>
          </section>

          {/* ================= SECTION 4: DEEP TIMELINE & SKILLS EXPANSION ================= */}
          <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
            
            {/* Full Historical Career Tracker */}
            <div style={glassPanelStyle}>
              <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#d4af37', marginBottom: '24px', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '12px', letterSpacing: '0.02em', textTransform: 'uppercase' }}>Verified Experience Records</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ borderLeft: '2px solid #04bd57', paddingLeft: '16px' }}>
                  <span style={{ fontSize: '11px', fontWeight: 700, color: '#04bd57', letterSpacing: '0.05em' }}>2026 — CURRENT</span>
                  <h4 style={{ margin: '2px 0', fontSize: '16px', fontWeight: 700 }}>Mr Eco International Nigeria 2026</h4>
                  <p style={{ margin: 0, fontSize: '13.5px', color: '#cbd5e1' }}>Current titleholder and official runway framework leader.</p>
                </div>
                <div style={{ borderLeft: '2px solid #04bd57', paddingLeft: '16px' }}>
                  <span style={{ fontSize: '11px', fontWeight: 700, color: '#04bd57', letterSpacing: '0.05em' }}>GLOBAL ASSIGNMENT</span>
                  <h4 style={{ margin: '2px 0', fontSize: '16px', fontWeight: 700 }}>Official Nigeria Representative</h4>
                  <p style={{ margin: 0, fontSize: '13.5px', color: '#cbd5e1' }}>Assigned delegate to Mr Eco International competition based in the Philippines.</p>
                </div>
                <div style={{ borderLeft: '2px solid rgba(255,255,255,0.15)', paddingLeft: '16px' }}>
                  <span style={{ fontSize: '11px', fontWeight: 700, color: '#a0a5a1', letterSpacing: '0.05em' }}>2022</span>
                  <h4 style={{ margin: '2px 0', fontSize: '16px', fontWeight: 700 }}>Misters of Nigeria Pageant</h4>
                  <p style={{ margin: 0, fontSize: '13.5px', color: '#cbd5e1' }}>National Top 7 Placement Finalist competitor.</p>
                </div>
                <div style={{ borderLeft: '2px solid rgba(255,255,255,0.15)', paddingLeft: '16px' }}>
                  <span style={{ fontSize: '11px', fontWeight: 700, color: '#a0a5a1', letterSpacing: '0.05em' }}>2022</span>
                  <h4 style={{ margin: '2px 0', fontSize: '16px', fontWeight: 700 }}>Lagos QFashion Fair</h4>
                  <p style={{ margin: 0, fontSize: '13.5px', color: '#cbd5e1' }}>High-Fashion Runway Elite Performance Model.</p>
                </div>
                <div style={{ borderLeft: '2px solid rgba(255,255,255,0.15)', paddingLeft: '16px' }}>
                  <span style={{ fontSize: '11px', fontWeight: 700, color: '#a0a5a1', letterSpacing: '0.05em' }}>2021</span>
                  <h4 style={{ margin: '2px 0', fontSize: '16px', fontWeight: 700 }}>Mr Paragon Nigeria Pageant</h4>
                  <p style={{ margin: 0, fontSize: '13.5px', color: '#cbd5e1' }}>National First Runner-Up Titleholder execution.</p>
                </div>
              </div>
            </div>

            {/* Comprehensive Capability Index */}
            <div style={glassPanelStyle}>
              <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#d4af37', marginBottom: '24px', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '12px', letterSpacing: '0.02em', textTransform: 'uppercase' }}>Industry Placement Elements</h3>
              <ul style={{ paddingLeft: '18px', margin: 0, display: 'flex', flexDirection: 'column', gap: '14px', color: '#cbd5e1', fontSize: '14px', lineHeight: 1.55 }}>
                <li><strong>Pageantry Excellence:</strong> Advanced competitive stage structural choreography and elite public presentations.</li>
                <li><strong>Fashion Modeling Frameworks:</strong> Comprehensive runway execution, high-fashion looks, editorial catalogs, and styling mechanics.</li>
                <li><strong>Commercial Advertising:</strong> Professional casting assignments for premium marketing and promotional media campaigns.</li>
                <li><strong>Cinematic Acting:</strong> Dramatic media performance execution with multiple motion film roles currently distributed via YouTube.</li>
                <li><strong>Media & Public Appearances:</strong> High-profile social presence curation, media interviews, and public presentation management.</li>
                <li><strong>Brand Collaborations:</strong> Strategic ambassador operations, promotional corporate modeling, and enterprise partnerships.</li>
              </ul>
            </div>

          </section>

          {/* ================= SECTION 5: ADDITIONAL PREFERENCES METRIC ================= */}
          <section style={glassPanelStyle}>
            <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#ffffff', marginBottom: '16px', letterSpacing: '0.02em', textTransform: 'uppercase' }}>Strategic Interests & Alignment Fields</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {[
                "Environmental Awareness", "Community Development", "High Fashion Runway", 
                "Fitness & Athletics", "Personal Development", "Media & Entertainment", 
                "Ambassadorial Campaigns", "International Networking", "Corporate Sponsorships"
              ].map((tag, i) => (
                <span key={i} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', padding: '8px 16px', borderRadius: '10px', fontSize: '13px', color: '#e2e8f0', fontWeight: 500 }}>
                  {tag}
                </span>
              ))}
            </div>
          </section>

          {/* ================= SECTION 6: LOOKBOOK TRACKS VISUALIZER ================= */}
          <section style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3 style={{ fontSize: '22px', fontWeight: 800, letterSpacing: '-0.02em' }}>Lookbook Catalogue Portfolio</h3>
              <span style={{ fontSize: '11px', color: '#a0a5a1', fontWeight: 700, letterSpacing: '0.05em' }}>SWIPE HORIZONTALLY →</span>
            </div>
            
            <div style={{ display: 'flex', gap: '16px', overflowX: 'auto', paddingBottom: '16px', scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch' }}>
              {Array.from({ length: 16 }, (_, i) => i + 1).map((num) => (
                <div key={num} style={{ flexShrink: 0, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '16px', padding: '6px', scrollSnapAlign: 'start' }}>
                  <img 
                    src={`${ASSET_BASE}/gallery-${num}.jpg`} 
                    alt={`Lookbook Presentation Slide ${num}`} 
                    style={{ height: '400px', borderRadius: '12px', display: 'block', objectFit: 'cover', minWidth: '280px' }}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </section>

        </div>
      ) : (
        
        /* ================= CONNECT HUB LAYER (100% DISPATCH ACCURATE) ================= */
        <div style={{ maxWidth: '600px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '32px' }}>
          
          <div style={{ ...glassPanelStyle, textAlign: 'center' }}>
            <h3 style={{ fontSize: '24px', fontWeight: 800, margin: '0 0 10px 0', color: '#d4af37', textTransform: 'uppercase', letterSpacing: '0.02em' }}>Official Media Hub</h3>
            <p style={{ color: '#a0a5a1', fontSize: '14px', margin: 0, lineHeight: 1.5 }}>Direct structural access lines to Onyele Emmanuel King across validated networks.</p>
          </div>

          {/* Social Vectors Frame */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {[
              { label: "Instagram", id: "@mhannie_king", url: "https://instagram.com/mhannie_king" },
              { label: "Facebook", id: "Emma Nuel King", url: "https://facebook.com" },
              { label: "TikTok", id: "@Emmanuel King", url: "https://tiktok.com" },
              { label: "X (Twitter)", id: "@Emmanuel King", url: "https://twitter.com" }
            ].map((social, idx) => (
              <a key={idx} href={social.url} target="_blank" rel="noopener noreferrer" style={{ ...glassPanelStyle, padding: '20px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', textDecoration: 'none', color: '#ffffff', border: '1px solid rgba(255,255,255,0.06)', transition: 'all 0.2s' }}>
                <span style={{ fontWeight: 700, fontSize: '15px' }}>{social.label}</span>
                <span style={{ color: '#04bd57', fontWeight: 600, fontSize: '14px', letterSpacing: '0.01em' }}>{social.id}</span>
              </a>
            ))}
          </div>

          {/* Professional Engagement Vectors */}
          <div style={{ ...glassPanelStyle, border: '1px solid rgba(212, 175, 55, 0.25)', display: 'flex', flexDirection: 'column', gap: '20px', background: 'linear-gradient(180deg, rgba(212,175,55,0.02) 0%, rgba(0,0,0,0) 100%)' }}>
            <div>
              <h4 style={{ margin: '0 0 8px 0', fontSize: '18px', fontWeight: 800, color: '#d4af37', textTransform: 'uppercase', letterSpacing: '0.01em' }}>Management, Bookings & Partnerships</h4>
              <p style={{ margin: 0, color: '#cbd5e1', fontSize: '14px', lineHeight: 1.55 }}>
                Available globally for strategic creative collaborations, high-profile commercial partnerships, corporate sponsorships, media interviews, campaign features, ambassadorial opportunities, and international networking channels.
              </p>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '4px' }}>
              <div style={{ background: 'rgba(255,255,255,0.015)', padding: '14px 18px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)', fontSize: '14.5px' }}>
                <span style={{ color: '#a0a5a1', display: 'block', fontSize: '11px', fontWeight: 600, letterSpacing: '0.05em', marginBottom: '2px' }}>CONTACT EMAIL</span>
                <strong style={{ color: '#ffffff' }}>nonsoking799@gmail.com</strong>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.015)', padding: '14px 18px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)', fontSize: '14.5px' }}>
                <span style={{ color: '#a0a5a1', display: 'block', fontSize: '11px', fontWeight: 600, letterSpacing: '0.05em', marginBottom: '2px' }}>SECURE WHATSAPP DISPATCH</span>
                <strong style={{ color: '#ffffff' }}>07033402271</strong>
              </div>
            </div>

            <a href="https://wa.me/2347033402271" target="_blank" rel="noopener noreferrer" style={{ display: 'block', width: '100%', textAlign: 'center', backgroundColor: '#04bd57', color: '#030704', padding: '16px', borderRadius: '12px', fontWeight: 800, fontSize: '14px', textDecoration: 'none', letterSpacing: '0.04em', marginTop: '4px', boxShadow: '0 10px 25px rgba(4,189,87,0.2)' }}>
              ENGAGE VIA WHATSAPP CHANNEL
            </a>
          </div>

        </div>
      )}

      {/* Signature Premium Footer Row */}
      <footer style={{ maxWidth: '1200px', margin: '96px auto 0 auto', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '32px', textAlign: 'center', fontSize: '10px', color: '#505651', fontWeight: 600, letterSpacing: '0.15em' }}>
        © 2026 ONYELE EMMANUEL KING. ALL RIGHTS RESERVED. DESIGNED BY JOWCI.
      </footer>

    </main>
  );
}
