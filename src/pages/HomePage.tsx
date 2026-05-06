import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import RevealOnScroll from '@/components/RevealOnScroll'
import SpringButton from '@/components/SpringButton'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { ArrowRight, Globe, Hotel, Plane, UtensilsCrossed, Users, Mic, Calendar, MapPin } from 'lucide-react'

export default function HomePage() {
  useScrollReveal()

  useEffect(() => {
    // Counter animation for hero sidebar
    const counters = [
      { id: 'c1', target: 30, suffix: '+' },
      { id: 'c2', target: 15, suffix: 'K+' },
      { id: 'c3', target: 2, suffix: '' },
    ]

    counters.forEach(({ id, target, suffix }) => {
      const el = document.getElementById(id)
      if (!el) return
      let start = 0
      const dur = 1800
      const inc = target / (dur / 16)
      const t = setInterval(() => {
        start += inc
        if (start >= target) {
          start = target
          clearInterval(t)
        }
        el.textContent = Math.floor(start) + suffix
      }, 16)
    })
  }, [])

  return (
    <>
      {/* ─── HERO ─── */}
      <section className="home-hero">
        <aside className="home-hero__sidebar">
          <div>
            <div className="hs-label">Event Category</div>
            <div className="hs-value">International Trade & Tourism Exhibition</div>
            <div className="hs-divider" />
            <div className="hs-label">Organised by</div>
            <div className="hs-value">
              <img src="assets/img/organizers/nagorik-protidin.png" alt="Nagorik Protidin" style={{ height: 18, marginRight: 6, verticalAlign: 'middle' }} />
              Nagorik Protidin
              <br />
              <img src="assets/img/organizers/bloodman.png" alt="Bloodman" style={{ height: 18, marginRight: 6, marginTop: 8, verticalAlign: 'middle' }} />
              Bloodman
            </div>
          </div>
          <div className="hs-ticker">
            <div>
              <div className="hs-accent-bar" />
              <div className="hs-counter" id="c1">0</div>
              <div className="hs-counter-label">International Pavilions</div>
            </div>
            <div className="hs-divider" />
            <div>
              <div className="hs-counter" id="c2">0</div>
              <div className="hs-counter-label">Expected Visitors</div>
            </div>
            <div className="hs-divider" />
            <div>
              <div className="hs-counter" id="c3">0</div>
              <div className="hs-counter-label">Days</div>
            </div>
          </div>
          <div className="hs-cta-area">
            <div className="hs-scroll-hint">
              <div className="hs-scroll-line" />
              Scroll to explore
            </div>
          </div>
        </aside>

        <div className="home-hero__main">
          <div className="hero-top-rule">
            <div className="htr-tag">
              <div className="htr-dot" />
              Open for Exhibitor Registration
            </div>
            <div className="htr-right">Aloki Convention Centre &middot; Dhaka &middot; Bangladesh</div>
          </div>
          <div className="hero-content">
            <div className="hero-edition">ITT Expo &middot; Inaugural Edition &middot; 2026</div>
            <h1 className="hero-title">
              International<br />
              <span className="light-word">Trade &</span><br />
              <span className="rule-word">Tourism</span><br />
              Expo
            </h1>
            <p className="hero-desc">
              Bangladesh's most significant gathering of global travel brands, tourism boards, airlines, hotel chains, and industry leaders — over two extraordinary days in Dhaka.
            </p>
            <div className="hero-action-row">
              <SpringButton href="mailto:sameer@nagorikprotidin.com">Reserve Your Booth</SpringButton>
              <Link to="/#about" className="btn-line">
                Explore the Expo <ArrowRight size={16} />
              </Link>
            </div>
          </div>
          <div className="hero-specs">
            <div className="spec-item">
              <div className="spec-num">30+</div>
              <div className="spec-label">International Pavilions</div>
            </div>
            <div className="spec-item">
              <div className="spec-num">15K+</div>
              <div className="spec-label">Expected Visitors</div>
            </div>
            <div className="spec-item">
              <div className="spec-num">40+</div>
              <div className="spec-label">Countries</div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── ABOUT ─── */}
      <section className="section-rule" id="about">
        <aside className="sr-sidebar">
          <div className="sr-label">01 &middot; About</div>
        </aside>
        <div className="sr-main">
          <RevealOnScroll>
            <h2 className="section-title">
              Where <em>South Asia</em> Meets<br />the Global Tourism Industry
            </h2>
          </RevealOnScroll>
          <div className="about-two">
            <div className="about-body reveal delay-1">
              <p>
                The <strong>International Trade & Tourism Expo 2026</strong> is conceived as Bangladesh's foremost platform for the convergence of international tourism stakeholders — from national tourism boards and airline carriers to luxury hotel groups, travel technology firms, and diplomatic missions.
              </p>
              <p>
                Held across two days at Aloki, Tejgaon, Dhaka, this inaugural edition positions Bangladesh as a serious destination on the global tourism trade calendar, creating structured opportunities for B2B deal-making, brand showcase, and cross-border partnerships.
              </p>
            </div>
            <div className="fact-list reveal delay-2">
              <div className="fact-row"><div className="fact-key">Event Name</div><div className="fact-val">ITT Expo 2026</div></div>
              <div className="fact-row"><div className="fact-key">Dates</div><div className="fact-val">21 – 22 August 2026</div></div>
              <div className="fact-row"><div className="fact-key">Venue</div><div className="fact-val">Aloki, Tejgaon, Dhaka</div></div>
              <div className="fact-row"><div className="fact-key">Pavilions</div><div className="fact-val">30+ International</div></div>
              <div className="fact-row"><div className="fact-key">Visitors</div><div className="fact-val">15,000+ Expected</div></div>
              <div className="fact-row"><div className="fact-key">Format</div><div className="fact-val">B2B + B2C Exhibition</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── EXHIBIT BENEFITS ─── */}
      <section className="section-rule" id="exhibit">
        <aside className="sr-sidebar">
          <div className="sr-label">02 &middot; Exhibit</div>
        </aside>
        <div className="sr-main">
          <RevealOnScroll>
            <h2 className="section-title">Exhibitor <em>Advantages</em></h2>
          </RevealOnScroll>
          <div className="benefit-grid">
            {[
              { num: '01', title: 'Prime Exhibition Booth', desc: 'A dedicated, high-traffic position with custom branding options — allocated on a first-come basis to ensure optimal placement within the exhibition floor.' },
              { num: '02', title: 'Qualified Audience Access', desc: 'Direct face time with verified travel agents, corporate buyers, embassy officials, investors, and 15,000+ consumer visitors over two days.' },
              { num: '03', title: 'Embassy & Diplomatic Network', desc: 'Exclusive access to representatives from embassies, consulates, and government tourism bodies — creating unparalleled partnership potential.' },
              { num: '04', title: 'Brand & Package Promotion', desc: 'Promote travel packages, hotel offers, tour products, and services to a highly motivated and engaged audience in a premium exhibition environment.' },
            ].map((item, i) => (
              <RevealOnScroll key={item.num} delay={i + 1}>
                <div className="bg-item">
                  <div className="bg-num">{item.num}</div>
                  <div className="bg-title">{item.title}</div>
                  <div className="bg-desc">{item.desc}</div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTORS ─── */}
      <section className="section-rule" id="sectors">
        <aside className="sr-sidebar">
          <div className="sr-label">03 &middot; Sectors</div>
        </aside>
        <div className="sr-main">
          <RevealOnScroll>
            <h2 className="section-title">Source <em>Event Zones</em></h2>
          </RevealOnScroll>
          <RevealOnScroll delay={1}>
            <table className="sector-table">
              <thead>
                <tr>
                  <th className="td-icon" />
                  <th>Zone</th>
                  <th>Description</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { icon: <Globe size={20} />, name: 'Global Tourism Pavilion', desc: 'Embassy and tourism board booths, destination showcases, visa and travel info desks' },
                  { icon: <Hotel size={20} />, name: 'Hospitality & Hotel Zone', desc: '5-star hotels, resorts, boutique stays, and live room experience simulations' },
                  { icon: <Plane size={20} />, name: 'Aviation & Travel Zone', desc: 'Airlines, travel agencies, cruise lines, flight deals, and travel packages' },
                  { icon: <UtensilsCrossed size={20} />, name: 'Food & Culinary Arena', desc: 'International cuisine stalls and celebrity chef live cooking showcases' },
                  { icon: <Users size={20} />, name: 'Cultural Experience Stage', desc: 'Traditional dances, music, and fashion presentations across nations' },
                  { icon: <Mic size={20} />, name: 'B2B Networking Lounge', desc: 'Pre-scheduled meetings and embassy-business matchmaking sessions' },
                  { icon: <Calendar size={20} />, name: 'Conference & Seminar Hall', desc: 'Panels, keynote speeches, and tourism summits with public and private stakeholders' },
                  { icon: <MapPin size={20} />, name: 'Youth & Career Zone', desc: 'Hospitality career guidance and workshops with industry leaders' },
                ].map((zone) => (
                  <tr key={zone.name}>
                    <td className="td-icon">{zone.icon}</td>
                    <td className="td-name">{zone.name}</td>
                    <td className="td-desc">{zone.desc}</td>
                    <td><span className="td-badge">Open</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </RevealOnScroll>
        </div>
      </section>

      {/* ─── VENUE ─── */}
      <section className="section-rule" id="venue">
        <aside className="sr-sidebar">
          <div className="sr-label">04 &middot; Venue</div>
        </aside>
        <div className="sr-main">
          <RevealOnScroll>
            <h2 className="section-title">Aloki, <em>Tejgaon</em><br />Dhaka, Bangladesh</h2>
          </RevealOnScroll>
          <div className="about-two" style={{ marginTop: '2rem' }}>
            <RevealOnScroll delay={1}>
              <picture>
                <source srcSet="assets/img/pptx/slides-17-22/expo-entrance-night.webp" type="image/webp" />
                <img
                  src="assets/img/pptx/slides-17-22/expo-entrance-night.jpg"
                  alt="Aloki Convention Centre entrance at night"
                  style={{ width: '100%', aspectRatio: '16/9', objectFit: 'cover' }}
                  loading="lazy"
                />
              </picture>
            </RevealOnScroll>
            <RevealOnScroll delay={2} direction="right">
              <div className="about-body">
                <p>
                  <strong>Aloki Convention Centre</strong> in Tejgaon, Dhaka serves as the primary venue for ITT Expo 2026. With expansive hall spaces, modern conference facilities, and dedicated zones for exhibitions, cultural performances, and networking, Aloki provides the ideal setting for an event of this magnitude.
                </p>
                <p>
                  The venue features dedicated areas for all eight event zones, from the Global Tourism Pavilion and Hospitality Zone to the Cultural Experience Stage and B2B Networking Lounge.
                </p>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ─── PARTICIPATING NATIONS ─── */}
      <section className="section-rule" id="countries">
        <aside className="sr-sidebar">
          <div className="sr-label">05 &middot; Nations</div>
        </aside>
        <div className="sr-main">
          <RevealOnScroll>
            <h2 className="section-title">Participating <em>nations</em></h2>
          </RevealOnScroll>
          <RevealOnScroll delay={1}>
            <div className="nation-tags">
              {['🇮🇳 India', '🇳🇵 Nepal', '🇧🇹 Bhutan', '🇱🇰 Sri Lanka', '🇨🇳 China', '🇯🇵 Japan', '🇰🇷 South Korea', '🇲🇾 Malaysia', '🇮🇩 Indonesia', '🇹🇷 Turkey', '🇳🇬 Nigeria', '🇸🇴 Somalia', '🇪🇬 Egypt', '🇵🇸 Palestine', '🇺🇿 Uzbekistan'].map((nation) => (
                <span key={nation} className="nation-tag">{nation}</span>
              ))}
              <span className="nation-tag" style={{ fontStyle: 'italic' }}>& many more</span>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ─── CULTURAL SHOWCASE ─── */}
      <section className="section-rule" id="cultural">
        <aside className="sr-sidebar">
          <div className="sr-label">06 &middot; Culture</div>
        </aside>
        <div className="sr-main">
          <RevealOnScroll>
            <h2 className="section-title">Cultural <em>showcase</em></h2>
          </RevealOnScroll>
          <div className="cultural-grid">
            {[
              { img: 'chinese-fan-dance', label: 'Chinese Fan Dance 🇨🇳' },
              { img: 'nepali-folk-dance', label: 'Nepali Folk Dance 🇳🇵' },
              { img: 'african-tribal-dance', label: 'African Tribal Dance 🇳🇬' },
              { img: 'kashmiri-dance', label: 'Kashmiri Cultural Dance 🇮🇳' },
              { img: 'indonesian-fashion', label: 'Indonesian Fashion Show 🇮🇩' },
              { img: 'indian-folk-dance', label: 'Indian Folk Dance 🇮🇳' },
            ].map((item, i) => (
              <RevealOnScroll key={item.img} delay={i + 1}>
                <div className="cultural-item">
                  <picture>
                    <source srcSet={`assets/img/cultural/${item.img}.webp`} type="image/webp" />
                    <img
                      src={`assets/img/cultural/${item.img}.jpg`}
                      alt={item.label}
                      loading="lazy"
                      style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover' }}
                    />
                  </picture>
                  <p className="cultural-label">{item.label}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ─── GUESTS ─── */}
      <section className="section-rule" id="guests">
        <aside className="sr-sidebar">
          <div className="sr-label">07 &middot; Guests</div>
        </aside>
        <div className="sr-main">
          <RevealOnScroll>
            <h2 className="section-title">Distinguished <em>guests</em></h2>
          </RevealOnScroll>
          <div className="guests-grid">
            <RevealOnScroll delay={1}>
              <div>
                <h3 style={{ marginBottom: '0.75rem', fontSize: '1rem' }}>Government & Regulatory</h3>
                <ul className="guest-list">
                  <li>Honorable Minister, Ministry of Civil Aviation & Tourism</li>
                  <li>Secretary, Ministry of Civil Aviation & Tourism</li>
                  <li>Secretary, Ministry of Foreign Affairs</li>
                  <li>CEO, Bangladesh Tourism Board</li>
                  <li>Chairman, Bangladesh Parjatan Corporation</li>
                </ul>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={2}>
              <div>
                <h3 style={{ marginBottom: '0.75rem', fontSize: '1rem' }}>Diplomatic Corps</h3>
                <ul className="guest-list">
                  <li>High Commissioners & Ambassadors</li>
                  <li>Representatives of international organizations</li>
                  <li>Embassy trade & cultural attaches</li>
                </ul>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={3}>
              <div>
                <h3 style={{ marginBottom: '0.75rem', fontSize: '1rem' }}>Industry Leaders</h3>
                <ul className="guest-list">
                  <li>Country heads of leading airlines</li>
                  <li>Hotel & hospitality group executives</li>
                  <li>International student office directors</li>
                  <li>Education consultancy leaders</li>
                  <li>Travel-tech startup founders & VCs</li>
                </ul>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ─── CTA BANNER ─── */}
      <section className="cta-banner" id="cta">
        <div className="ctab-side">
          <div className="ctab-side-text">EXHIBIT</div>
        </div>
        <div className="ctab-main">
          <RevealOnScroll>
            <h2 className="section-title white-text">Secure Your<br />Exhibition Space</h2>
          </RevealOnScroll>
          <RevealOnScroll delay={1}>
            <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, maxWidth: 560, marginBottom: '2.5rem' }}>
              Limited stalls are available for ITT Expo 2026. Contact Nagorik Protidin to discuss booth packages, customised branding solutions, and participation terms. Early registration ensures preferred placement.
            </p>
          </RevealOnScroll>
          <RevealOnScroll delay={2}>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <SpringButton href="mailto:sameer@nagorikprotidin.com">Request a Proposal</SpringButton>
              <SpringButton href="tel:+8801734991111" variant="outline">Call +88 01734 991111</SpringButton>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  )
}
