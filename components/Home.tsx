import React from "react";

function Home() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Parisienne&family=Cormorant+Garamond:wght@400;500;600&display=swap');
        
        .home-container { width: 100%; }
        .video-section { width: 100%; height: 500px; position: relative; overflow: hidden; }
        .video-placeholder { width: 100%; height: 100%; object-fit: cover; }
        .video-overlay { position: absolute; top: 0; left: 0; width: 100%; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 20px; pointer-events: none; }
        .logo-container { width: 450px; height: 450px; }
        .logo-container img { width: 100%; height: 100%; object-fit: contain; filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.15)); }
        .video-caption { font-family: 'Cormorant Garamond', serif; font-size: 20px; color: #ffffff; text-shadow: 0 2px 8px rgba(0, 0, 0, 0.4); letter-spacing: 1px; }
        
        .promo-cards { max-width: 900px; margin: -50px auto 16px; padding: 0 16px; position: relative; z-index: 2; }
        .promo-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
        .promo-card { background: #ffffff; border-radius: 0px; box-shadow: 0 10px 26px rgba(74,122,78,0.22), 0 6px 12px rgba(0,0,0,0.10); overflow: hidden; display: flex; flex-direction: column; transition: none; }
        .promo-media { width: 100%; aspect-ratio: 1/1; background: #eef2ee; position: relative; }
        .promo-media::after { content: ''; position: absolute; inset: 0; background: radial-gradient(ellipse at center, rgba(255,255,255,0) 55%, rgba(0,0,0,0.12) 100%); pointer-events: none; }
        .promo-media img { width: 100%; height: 100%; object-fit: cover; display: block; }
        @media (max-width: 960px) { .promo-cards { margin: -36px auto 12px; padding: 0 16px; } .promo-grid { grid-template-columns: 1fr; } }
        
        .about-wrap { max-width: 1400px; margin: 40px auto; padding: 60px 60px 0; }
        .about-section { display: grid; grid-template-columns: 1.05fr 1fr; align-items: center; gap: 40px; margin: 40px 0; }
        .about-section.reverse { grid-template-columns: 1fr 1.05fr; }
        .about-text h2 { font-family: 'Parisienne', cursive; font-size: 46px; margin: 0 0 12px 0; font-weight: 400; }
        .about-text h2.story { background: linear-gradient(90deg, #4a7a4e, #b58a4a); -webkit-background-clip: text; background-clip: text; color: transparent; }
        .about-text h2.philo { background: linear-gradient(90deg, #b58a4a, #4a7a4e); -webkit-background-clip: text; background-clip: text; color: transparent; }
        .about-text p { font-family: 'Cormorant Garamond', serif; font-size: 18px; line-height: 1.9; color: #4b4b4b; margin: 6px 0; }
        .about-note { color: #2f7d48; font-weight: 500; }
        .story-grid { display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 12px; align-items: stretch; }
        .story-big { height: 300px; background: #f3f5f3; overflow: hidden; box-shadow: 0 10px 26px rgba(0,0,0,0.10); }
        .story-stack { display: grid; grid-template-rows: 145px 145px; gap: 10px; }
        .story-small { background: #f3f5f3; overflow: hidden; box-shadow: 0 10px 26px rgba(0,0,0,0.10); }
        .story-big img, .story-small img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .philo-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
        .philo-item { height: 300px; background: #f3f5f3; overflow: hidden; box-shadow: 0 10px 26px rgba(0,0,0,0.10); }
        .philo-item img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .divider-section { max-width: 1400px; margin: 20px auto; padding: 0 0px; display: flex; justify-content: center; align-items: center; }
        .quote-card { display: flex; align-items: center; gap: 30px; width: 100%; max-width: 800px; }
        .divider-line { flex: 1; height: 2px; background: linear-gradient(to right, transparent, #4a7a4e 50%, transparent); }
        .divider-line.left { background: linear-gradient(to right, transparent, #4a7a4e); }
        .divider-line.right { background: linear-gradient(to left, transparent, #4a7a4e); }
        .quote-text { font-family: 'Cormorant Garamond', serif; font-size: 18px; color: #4a7a4e; font-weight: 500; margin: 0; letter-spacing: 1px; white-space: nowrap; }
        
        .cup-feature { max-width: 1400px; margin: 40px auto 60px; padding: 0 60px; display: grid; grid-template-columns: 1fr auto 1fr; align-items: center; gap: 50px; }
        .cup-col p { font-family: 'Cormorant Garamond', serif; font-size: 18px; line-height: 1.8; color: #4b4b4b; margin: 6px 0; text-align: center; }
        .cup-image { width: 480px; height: 480px; display: flex; align-items: center; justify-content: center; position: relative; background: radial-gradient(circle at center, rgba(255,255,255,0.95), rgba(74,122,78,0.08)); border-radius: 50%; box-shadow: 0 25px 50px rgba(74,122,78,0.15), 0 15px 30px rgba(0,0,0,0.08); }
        .cup-image::before { content: ''; position: absolute; inset: -25px; border-radius: 50%; background: linear-gradient(135deg, rgba(74,122,78,0.1), rgba(181,138,74,0.1)); filter: blur(20px); z-index: 0; }
        .cup-image img { width: 85%; height: 85%; object-fit: contain; position: relative; z-index: 1; filter: drop-shadow(0 10px 20px rgba(0,0,0,0.12)); }
        .cup-actions { display: flex; gap: 16px; justify-content: center; margin: 30px 0 60px; }
        .cup-btn { padding: 14px 28px; border: 2px solid #4a7a4e; background: #4a7a4e; color: #fff; cursor: pointer; font-family: 'Cormorant Garamond', serif; font-size: 16px; font-weight: 500; transition: all 0.3s ease; border-radius: 0; }
        .cup-btn:hover { background: #3d6641; border-color: #3d6641; transform: translateY(-2px); box-shadow: 0 8px 16px rgba(74,122,78,0.25); }
        .cup-btn.secondary { background: transparent; color: #4a7a4e; }
        .cup-btn.secondary:hover { background: #4a7a4e; color: #fff; }
        
        .features-section { max-width: 1400px; margin: 0 auto 80px; padding: 0 60px; }
        .features-title { font-family: 'Parisienne', cursive; font-size: 48px; text-align: center; margin: 0 0 50px; background: linear-gradient(90deg, #4a7a4e, #b58a4a); -webkit-background-clip: text; background-clip: text; color: transparent; }
        .features-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 40px; }
        .feature-item { text-align: center; padding: 25px 15px; }
        .feature-icon { width: 90px; height: 90px; margin: 0 auto 20px; background: linear-gradient(135deg, #4a7a4e, #5a8a5e); border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 10px 25px rgba(74,122,78,0.25); transition: transform 0.3s ease; }
        .feature-icon:hover { transform: translateY(-5px); }
        .feature-icon svg { width: 45px; height: 45px; fill: white; }
        .feature-title { font-family: 'Cormorant Garamond', serif; font-size: 22px; font-weight: 600; color: #4a7a4e; margin: 0 0 12px; }
        .feature-desc { font-family: 'Cormorant Garamond', serif; font-size: 16px; color: #666; line-height: 1.6; margin: 0; }
        
        .banner-section { width: 100%; height: 350px; background: linear-gradient(135deg, #f8f9f8, #eef2ee); border-top: 2px solid #e0e4e0; border-bottom: 2px solid #e0e4e0; margin: 0; display: flex; align-items: center; justify-content: center; position: relative; overflow: hidden; }
        .banner-section::before { content: ''; position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" patternUnits="userSpaceOnUse" width="100" height="100"><circle cx="20" cy="20" r="1" fill="%23000" opacity="0.02"/><circle cx="80" cy="80" r="1" fill="%23000" opacity="0.02"/><circle cx="40" cy="60" r="1" fill="%23000" opacity="0.02"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>'); }
        .banner-placeholder { font-family: 'Cormorant Garamond', serif; font-size: 28px; color: #999; text-align: center; position: relative; z-index: 1; }
        .banner-placeholder p { margin: 0; }
        .banner-placeholder .size-info { font-size: 18px; color: #bbb; margin-top: 12px; font-weight: 400; }
        
        @media (max-width: 1024px) { 
          .about-wrap { padding: 40px 24px 0; } 
          .about-section, .about-section.reverse { grid-template-columns: 1fr; gap: 20px; } 
          .story-big { height: 240px; } 
          .story-stack { grid-template-rows: 115px 115px; } 
          .philo-item { height: 240px; } 
          .cup-feature { grid-template-columns: 1fr; padding: 0 24px; gap: 30px; } 
          .cup-image { margin: 20px auto; width: 360px; height: 360px; } 
          .features-section { padding: 0 24px; }
          .features-grid { grid-template-columns: repeat(2, 1fr); gap: 30px; }
          .banner-section { height: 280px; }
          .banner-placeholder { font-size: 24px; }
          .banner-placeholder .size-info { font-size: 16px; }
        }
        
        @media (max-width: 640px) {
          .features-grid { grid-template-columns: 1fr; }
          .cup-feature { gap: 20px; }
          .cup-image { width: 280px; height: 280px; }
          .banner-section { height: 220px; }
          .banner-placeholder { font-size: 20px; }
        }
      `}</style>

      <div className="home-container">
        {/* Video Section */}
        <div className="video-section">
          <video className="video-placeholder" autoPlay loop muted>
            <source src="/videohome1.mp4" type="video/mp4" />
          </video>
          <div className="video-overlay">
            <div className="logo-container">
              <img src="/logo001.png" alt="Maria Ue Logo" onError={(e) => {e.target.style.display='none';}} />
            </div>
          </div>
        </div>

        {/* Promo */}
        <div className="promo-cards">
          <div className="promo-grid">
            <div className="promo-card"><div className="promo-media"><img src="/pros1.jpg?v=1" alt="Promo 1" onError={(e)=>{e.currentTarget.style.display='none';}} /></div></div>
            <div className="promo-card"><div className="promo-media"><img src="/pros2.jpg?v=1" alt="Promo 2" onError={(e)=>{e.currentTarget.style.display='none';}} /></div></div>
            <div className="promo-card"><div className="promo-media"><img src="/pros3.jpg?v=1" alt="Promo 3" onError={(e)=>{e.currentTarget.style.display='none';}} /></div></div>
          </div>
        </div>

        {/* About wrap with two sections */}
        <div className="about-wrap">
          {/* Our Story */}
          <div className="about-section">
            <div className="about-text">
              <h2 className="story">Our Story</h2>
              <p>At <span className="about-note">Maria Ue</span>, every cup and every dessert begins with carefully sourced ingredients and a devotion to craft. We celebrate the harmony of specialty coffee and artisanal pastry in a space designed for warmth and connection.</p>
              <p>From roasting profiles to seasonal produce, our team seeks balance—bright aromas, layered textures, and a finish that lingers. We hope each visit becomes a memory worth returning to.</p>
            </div>
            <div className="about-media">
              <div className="story-grid">
                <div className="story-big"><img src="/imagehome1.jpg" alt="Story big" /></div>
                <div className="story-stack">
                  <div className="story-small"><img src="/imagehome2.jpg" alt="Story small 1" /></div>
                  <div className="story-small"><img src="/imagehome3.png" alt="Story small 2" /></div>
                </div>
              </div>
            </div>
          </div>

          {/* Divider between Our sections */}
          <div className="divider-section"><div className="quote-card"><div className="divider-line left"></div><p className="quote-text">Crafted with Love</p><div className="divider-line right"></div></div></div>

          {/* Our Philosophy */}
          <div className="about-section reverse">
            <div className="about-media">
              <div className="philo-grid">
                <div className="philo-item"><img src="/imagehome4.jpg" alt="Philosophy 1" /></div>
                <div className="philo-item"><img src="/imagehome5.jpg" alt="Philosophy 2" /></div>
              </div>
            </div>
            <div className="about-text">
              <h2 className="philo">Our Philosophy</h2>
              <p>We pursue <span className="about-note">quality</span> and <span className="about-note">craftsmanship</span> through patience—fermentation, lamination, and slow extractions where time amplifies flavor.</p>
              <p>When coffee, pastry, and service align, the result is simple: a table where people feel seen, welcomed, and inspired to linger just a little longer.</p>
            </div>
          </div>
        </div>

        {/* Cup feature at bottom */}
        <div className="cup-feature">
          <div className="cup-col">
            <p>Open daily—dialed-in extractions, seasonal pastries, and a seat for you. Freshly ground beans, careful pours, and comfort in every cup.</p>
          </div>
          <div className="cup-image"><img src="/coffee1.png" alt="coffee1" onError={(e)=>{e.currentTarget.style.display='none';}} /></div>
          <div className="cup-col"><p>Ask our baristas about limited beans and sweet pairings to match. Take a moment—this is your quiet pause.</p></div>
        </div>
        <div className="cup-actions">
          <button className="cup-btn" onClick={()=>window.location.href='/menu'}>Explore Menu</button>
          <button className="cup-btn secondary" onClick={()=>window.location.href='/history'}>View Orders</button>
        </div>

        {/* Features Section with Icons */}
        <div className="features-section">
          <h2 className="features-title">Why Choose Maria Ue</h2>
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M18.5 2h-13c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h13c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM18 20H6V4h12v16z"/>
                  <path d="M12 6.5c-2.49 0-4.5 2.01-4.5 4.5s2.01 4.5 4.5 4.5 4.5-2.01 4.5-4.5-2.01-4.5-4.5-4.5zm0 7c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
              <h3 className="feature-title">Premium Quality</h3>
              <p className="feature-desc">Carefully selected beans from sustainable farms, roasted to perfection for exceptional flavor.</p>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="feature-title">Expert Craftsmanship</h3>
              <p className="feature-desc">Our skilled baristas bring years of experience to every cup, ensuring perfect extraction every time.</p>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="feature-title">Fresh Daily</h3>
              <p className="feature-desc">Artisanal pastries and desserts made fresh every morning with locally sourced ingredients.</p>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                </svg>
              </div>
              <h3 className="feature-title">Cozy Atmosphere</h3>
              <p className="feature-desc">A warm, welcoming space designed for connection, relaxation, and memorable moments.</p>
            </div>
          </div>
        </div>

        {/* Banner Section */}
        <div className="banner-section">
          <div className="banner-placeholder">
            <p>Banner Space Reserved</p>
            <p className="size-info">Recommended size: 1920px × 350px (Full width × 350px height)</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;