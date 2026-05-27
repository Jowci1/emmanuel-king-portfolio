"use client";
import React, { useState, useEffect } from 'react';

// SET COUNTDOWN TARGET TO THE PAGEANT DATE
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

  // APP-WIDE STYLES FOR APPLE TYPOGRAPHY & LUXURY PALETTE
  const mainContainerStyle = {
    backgroundColor: '#030704',
    backgroundImage: 'radial-gradient(circle at 50% 0%, #0a1f11 0%, #030704 75%)',
    color: '#ffffff',
    minHeight: '100vh',
    padding: '30px 20px',
    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", Helvetica, Arial, sans-serif',
    letterSpacing: '-0.01em',
    WebkitFontSmoothing: 'antialiased'
  };

  const glassPanelStyle = {
    background: 'rgba(255, 255, 255, 0.03)',
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    borderRadius: '20px',
    padding: '30px',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)'
  };

  const emeraldBadgeStyle = {
    background: 'rgba(4, 189, 87, 0.12)',
    border: '1px solid rgba(4, 189, 87, 0.3)',
    color: '#04bd57',
    padding: '6px 14px',
    borderRadius: '100px',
    fontSize: '12px',
    fontWeight: '600',
    letterSpacing: '0.05em',
    textTransform: 'uppercase' as const,
    display: 'inline-block'
  };

  return (
    <main style={mainContainerStyle}>
      
      {/* BRAND HEADER NAVIGATION */}
      <header style={{ maxWidth: '1200px', margin: '0 auto 50px auto', display: 'flex', flexDirection: 'column', gap: '20px', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '25px', textAlign: 'center' }}>
        <div>
          <h1 style={{ fontSize: '26px', fontWeight: '800', letterSpacing: '0.1em', margin: 0, textTransform: 'uppercase', color: '#ffffff' }}>ONYELE EMMANUEL KING</h1>
          <p style={{ color: '#d4af37', fontSize: '12px', fontWeight: '700', margin: '5px 0 0 0', letterSpacing: '0.15em' }}>MR ECO INTERNATIONAL NIGERIA 2026</p>
        </div>
        
        {/* NATIVE NAVIGATION SWITCHES */}
        <div style={{ display: 'flex', background: 'rgba(255,255,255,0.05)', padding: '4px', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.08)' }}>
          <button onClick={() => setView("portfolio")} style={{ padding: '10px 24px', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: '600', fontSize: '13px', transition: '0.2s', background: view === 'portfolio' ? 'rgba(255,255,255,0.1)' : 'transparent', color: view === 'portfolio' ? '#ffffff' : '#a0a5a1' }}>PORTFOLIO</button>
          <button onClick={() => setView("hub")} style={{ padding: '10px 24px', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: '600', fontSize: '13px', transition: '0.2s', background: view === 'hub' ? 'rgba(255,255,255,0.1)' : 'transparent', color: view === 'hub' ? '#ffffff' : '#a0a5a1' }}>CONNECT HUB</button>
        </div>
      </header>

      {view === "portfolio" ? (
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '40px' }}>
          
          {/* INTRO HERO GRID */}
          <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', alignItems: 'center' }}>
            
            {/* HERO BIO BLOCK */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <span style={emeraldBadgeStyle}>✦ Official Representative</span>
                <h2 style={{ fontSize: '42px', fontWeight: '800', lineHeight: '1.1', margin: '15px 0 10px 0', letterSpacing: '-0.03em' }}>
                  Representing <span style={{ color: '#04bd57' }}>Nigeria</span> on the Global Stage
                </h2>
                <p style={{ color: '#d4af37', fontSize: '16px', fontWeight: '500', margin: 0 }}>Mr Eco International Contestant — Philippines</p>
              </div>

              <div style={{ ...glassPanelStyle, padding: '25px' }}>
                <h3 style={{ margin: '0 0 10px 0', fontSize: '18px', fontWeight: '700', color: '#d4af37' }}>Summary Biography</h3>
                <p style={{ color: '#cbd5e1', fontSize: '14.5px', lineHeight: '1.6', margin: 0, fontWeight: '400' }}>
                  My name is Onyele Emmanuel King, a Nigerian model, actor, and public figure currently serving as Mr Eco International Nigeria 2026. My journey in the entertainment and pageantry industry has been one of growth, resilience, and continuous self-development.
                </p>
                <p style={{ color: '#cbd5e1', fontSize: '14.5px', lineHeight: '1.6', margin: '12px 0 0 0', fontWeight: '400' }}>
                  Beyond pageantry and modeling, I am also involved in commercial projects and acting, with movie features currently showing on YouTube. These experiences have helped shape my confidence, communication skills, stage presence, and ability to connect with diverse audiences.
                </p>
                <p style={{ color: '#cbd5e1', fontSize: '14.5px', lineHeight: '1.6', margin: '12px 0 0 0', fontWeight: '400' }}>
                  As I prepare to represent Nigeria at Mr Eco International, I remain passionate about using my platform to promote environmental sustainability, youth empowerment, leadership, and positive representation of Nigerian culture on the global stage.
                </p>
              </div>
            </div>

            {/* HERO PORTRAIT & GLASS COUNTDOWN */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
              <div style={{ ...glassPanelStyle, padding: '12px', width: '100%', maxWidth: '400px' }}>
                <img 
                  src={`${ASSET_BASE}/gallery-1.jpg`} 
                  alt="Onyele Emmanuel King Portrait" 
                  style={{ width: '100%', borderRadius: '14px', display: 'block', objectFit: 'cover', height: '480px' }}
                />
              </div>
              
              <div style={{ ...glassPanelStyle, width: '100%', maxWidth: '400px', textAlign: 'center', padding: '15px', border: '1px solid rgba(4, 189, 87, 0.3)' }}>
                <span style={{ fontSize: '11px', fontWeight: '700', color: '#d4af37', letterSpacing: '0.1em', display: 'block', marginBottom: '4px' }}>PHILIPPINES DEPLOYMENT COUNTDOWN</span>
                <span style={{ fontSize: '24px', fontWeight: '800', color: '#ffffff', tabularNums: true }}>{timeLeft.days}d : {timeLeft.hours}h : {timeLeft.minutes}m</span>
              </div>
            </div>

          </section>

          {/* PHYSICAL SPECIFICATIONS & VITALS METRICS */}
          <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px' }}>
            <div style={{ ...glassPanelStyle, padding: '20px', textAlign: 'center' }}>
              <span style={{ color: '#a0a5a1', fontSize: '11px', fontWeight: '600', display: 'block', marginBottom: '5px' }}>HEIGHT</span>
              <span style={{ fontSize: '20px', fontWeight: '700', color: '#ffffff' }}>182 cm</span>
            </div>
            <div style={{ ...glassPanelStyle, padding: '20px', textAlign: 'center' }}>
              <span style={{ color: '#a0a5a1', fontSize: '11px', fontWeight: '600', display: 'block', marginBottom: '5px' }}>STATE OF ORIGIN</span>
              <span style={{ fontSize: '20px', fontWeight: '700', color: '#ffffff' }}>Imo State</span>
            </div>
            <div style={{ ...glassPanelStyle, padding: '20px', textAlign: 'center' }}>
              <span style={{ color: '#a0a5a1', fontSize: '11px', fontWeight: '600', display: 'block', marginBottom: '5px' }}>NATIONALITY</span>
              <span style={{ fontSize: '20px', fontWeight: '700', color: '#ffffff' }}>Nigerian</span>
            </div>
            <div style={{ ...glassPanelStyle, padding: '20px', textAlign: 'center' }}>
              <span style={{ color: '#a0a5a1', fontSize: '11px', fontWeight: '600', display: 'block', marginBottom: '5px' }}>LANGUAGES SPOKEN</span>
              <span style={{ fontSize: '18px', fontWeight: '700', color: '#ffffff' }}>English, Igbo</span>
            </div>
          </section>

          {/* ADVOCACY BANNER */}
          <section style={{ ...glassPanelStyle, borderLeft: '4px solid #04bd57', padding: '25px' }}>
            <span style={{ color: '#04bd57', fontSize: '11px', fontWeight: '700', letterSpacing: '0.1em', display: 'block', marginBottom: '5px' }}>OFFICIAL ADVOCACY PROJECT</span>
            <h3 style={{ margin: '0 0 8px 0', fontSize: '22px', fontWeight: '800' }}>Green Community Project (GCP)</h3>
            <p style={{ color: '#cbd5e1', fontSize: '14.5px', margin: 0, lineHeight: '1.5' }}>
              Dedicated to accelerating environmental awareness, community clean energy development, youth empowerment frameworks, and proactive green sustainability initiatives throughout Nigeria and international spaces.
            </p>
          </section>

          {/* PROFESSIONAL TIMELINE & PLACEMENTS */}
          <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
            
            <div style={glassPanelStyle}>
              <h3 style={{ fontSize: '20px', fontWeight: '800', color: '#d4af37', marginBottom: '20px', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '10px' }}>Pageantry & Modeling Career</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ borderLeft: '2px solid #04bd57', paddingLeft: '15px' }}>
                  <span style={{ fontSize: '12px', fontWeight: '700', color: '#04bd57' }}>2026 — CURRENT</span>
                  <h4 style={{ margin: '3px 0', fontSize: '16px', fontWeight: '700' }}>Mr Eco International Nigeria</h4>
                  <p style={{ margin: 0, fontSize: '13.5px', color: '#cbd5e1' }}>Official Titleholder and Global Runway Representative.</p>
                </div>
                <div style={{ borderLeft: '2px solid rgba(255,255,255,0.2)', paddingLeft: '15px' }}>
                  <span style={{ fontSize: '12px', fontWeight: '700', color: '#a0a5a1' }}>2022</span>
                  <h4 style={{ margin: '3px 0', fontSize: '16px', fontWeight: '700' }}>Misters of Nigeria Pageant</h4>
                  <p style={{ margin: 0, fontSize: '13.5px', color: '#cbd5e1' }}>National Top 7 Placement Finalist.</p>
                </div>
                <div style={{ borderLeft: '2px solid rgba(255,255,255,0.2)', paddingLeft: '15px' }}>
                  <span style={{ fontSize: '12px', fontWeight: '700', color: '#a0a5a1' }}>2022</span>
                  <h4 style={{ margin: '3px 0', fontSize: '16px', fontWeight: '700' }}>Lagos QFashion Fair</h4>
                  <p style={{ margin: 0, fontSize: '13.5px', color: '#cbd5e1' }}>Runway Elite Performance Model.</p>
                </div>
                <div style={{ borderLeft: '2px solid rgba(255,255,255,0.2)', paddingLeft: '15px' }}>
                  <span style={{ fontSize: '12px', fontWeight: '700', color: '#a0a5a1' }}>2021</span>
                  <h4 style={{ margin: '3px 0', fontSize: '16px', fontWeight: '700' }}>Mr Paragon Nigeria Pageant</h4>
                  <p style={{ margin: 0, fontSize: '13.5px', color: '#cbd5e1' }}>National First Runner-Up Titleholder.</p>
                </div>
              </div>
            </div>

            <div style={glassPanelStyle}>
              <h3 style={{ fontSize: '20px', fontWeight: '800', color: '#d4af37', marginBottom: '20px', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '10px' }}>Industry Placements & Core Skillsets</h3>
              <ul style={{ paddingLeft: '18px', margin: 0, display: 'flex', flexDirection: 'column', gap: '12px', color: '#cbd5e1', fontSize: '14px', lineHeight: '1.5' }}>
                <li><strong>Pageantry & Runways:</strong> Professional execution in high-fashion modeling, international runway pageantry, and elite public appearances.</li>
                <li><strong>Commercial Advertising:</strong> Experienced commercial model featured extensively in creative marketing and media advertising campaigns.</li>
                <li><strong>Cinematic Acting:</strong> Dramatic actor with multiple motion picture roles currently streaming globally on YouTube.</li>
                <li><strong>Brand Collaborations:</strong> Specialized asset execution for corporate brand partnerships, sponsorships, and ambassadorial engagements.</li>
              </ul>
            </div>

          </section>

          {/* INTERESTS & ENGAGEMENTS */}
          <section style={glassPanelStyle}>
            <h3 style={{ fontSize: '20px', fontWeight: '800', color: '#ffffff', marginBottom: '15px' }}>Core Engagements & Focus Areas</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {["Environmental Awareness", "Community Development", "High Fashion", "Fitness & Athletics", "Personal Development", "Media & Entertainment", "Ambassadorial Campaigns", "International Networking"].map((tag, i) => (
                <span key={i} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', padding: '8px 16px', borderRadius: '8px', fontSize: '13px', color: '#e2e8f0', fontWeight: '500' }}>{tag}</span>
              ))}
            </div>
          </section>

          {/* COMPREHENSIVE HORIZONTAL PORTFOLIO GALLEY LOOKBOOK */}
          <section style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3 style={{ fontSize: '22px', fontWeight: '800', letterSpacing: '-0.02em' }}>Lookbook Catalogue Portfolio</h3>
              <span style={{ fontSize: '12px', color: '#a0a5a1', fontWeight: '600' }}>SWIPE HORIZONTALLY →</span>
            </div>
            
            <div style={{ display: 'flex', gap: '15px', overflowX: 'auto', paddingBottom: '15px', scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch' }}>
              {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
                <div key={num} style={{ flexShrink: 0, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '12px', padding: '6px' }}>
                  <img 
                    src={`${ASSET_BASE}/gallery-${num}.jpg`} 
                    alt={`Lookbook Presentation Slide ${num}`} 
                    style={{ height: '400px', borderRadius: '8px', display: 'block', objectFit: 'cover', minWidth: '280px' }}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </section>

        </div>
      ) : (
        
        /* FULL SOCIAL LINK CONNECTIONS & BOOKING HUB */
        <div style={{ maxWidth: '600px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '25px' }}>
          
          <div style={{ ...glassPanelStyle, textAlign: 'center' }}>
            <h3 style={{ fontSize: '24px', fontWeight: '800', margin: '0 0 10px 0', color: '#d4af37' }}>Official Media Hub</h3>
            <p style={{ color: '#a0a5a1', fontSize: '14px', margin: 0 }}>Connect with Onyele Emmanuel King directly across all monitored channels.</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {[
              { label: "Instagram", id: "@mhannie_king", url: "https://instagram.com/mhannie_king" },
              { label: "Facebook", id: "Emma Nuel King", url: "https://facebook.com" },
              { label: "TikTok", id: "@Emmanuel King", url: "https://tiktok.com" },
              { label: "X (Twitter)", id: "@Emmanuel King", url: "https://twitter.com" }
            ].map((social, idx) => (
              <a key={idx} href={social.url} target="_blank" rel="noopener noreferrer" style={{ ...glassPanelStyle, padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', textDecoration: 'none', color: '#ffffff', transition: 'transform 0.2s' }}>
                <span style={{ fontWeight: '700', fontSize: '15px' }}>{social.label}</span>
                <span style={{ color: '#04bd57', fontWeight: '600', fontSize: '14px' }}>{social.id}</span>
              </a>
            ))}
          </div>

          {/* SYSTEM MANAGEMENT & COMMUNICATIONS DISPATCH */}
          <div style={{ ...glassPanelStyle, border: '1px solid rgba(212, 175, 55, 0.25)', display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <h4 style={{ margin: 0, fontSize: '18px', fontWeight: '800', color: '#d4af37' }}>Management, Bookings & Features</h4>
            <p style={{ margin: 0, color: '#cbd5e1', fontSize: '14px', lineHeight: '1.5' }}>
              Onyele Emmanuel King is explicitly open to brand endorsements, corporate sponsorships, media interviews, international collaborations, and advertising representation campaigns.
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '5px' }}>
              <div style={{ background: 'rgba(255,255,255,0.02)', padding: '12px 15px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)', fontSize: '14px' }}>
                <span style={{ color: '#a0a5a1', display: 'block', fontSize: '11px', fontWeight: '600' }}>MANAGEMENT EMAIL</span>
                <strong>nonsoking@gmail.com</strong>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.02)', padding: '12px 15px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)', fontSize: '14px' }}>
                <span style={{ color: '#a0a5a1', display: 'block', fontSize: '11px', fontWeight: '600' }}>SECURE HOTLINE</span>
                <strong>+234 703 340 2271</strong>
              </div>
            </div>

            <a href="https://wa.me/2347033402271" target="_blank" rel="noopener noreferrer" style={{ display: 'block', width: '100%', textAlign: 'center', backgroundColor: '#04bd57', color: '#030704', padding: '16px', borderRadius: '10px', fontWeight: '800', fontSize: '14px', textDecoration: 'none', letterSpacing: '0.02em', marginTop: '5px' }}>
              ENGAGE VIA WHATSAPP DISPATCH
            </a>
          </div>

        </div>
      )}

      {/* SYSTEM DESIGN FOOTER ACKNOWLEDGEMENT */}
      <footer style={{ maxWidth: '1200px', margin: '80px auto 0 auto', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '25px', textAlign: 'center', fontSize: '11px', color: '#656b66', fontWeight: '600', letterSpacing: '0.08em' }}>
        © 2026 ONYELE EMMANUEL KING. ALL RIGHTS RESERVED. DESIGNED BY JOWCI.
      </footer>

    </main>
  );
}
