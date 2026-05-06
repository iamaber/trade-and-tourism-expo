import React from 'react'
import RevealOnScroll from '@/components/RevealOnScroll'
import SectionLabel from '@/components/SectionLabel'
import SpringButton from '@/components/SpringButton'
import ProgressBar from '@/components/ProgressBar'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { ArrowDown, Check, Download } from 'lucide-react'

export default function ExhibitorPage() {
  useScrollReveal()

  return (
    <>
      {/* ─── HERO ─── */}
      <section className="ex-hero">
        <div className="ex-hero__map-bg">
          <svg className="ex-hero__world-map" viewBox="0 0 1000 500">
            <path className="map-path" d="M150,180 Q200,140 250,170 Q280,150 300,165 Q340,130 370,155 Q400,140 420,160 Q450,135 460,155 Q470,145 490,160 L490,170 Q460,190 430,175 Q400,200 370,180 Q340,195 310,175 Q280,200 250,185 Q220,195 200,180 Q170,200 150,185Z" fill="none" stroke="rgba(26,155,170,0.15)" strokeWidth="1" />
            <path className="map-path" d="M530,140 Q580,100 650,130 Q700,110 750,140 Q790,120 820,150 Q850,135 870,155 Q880,145 880,160 L880,170 Q850,190 820,175 Q790,200 760,180 Q730,195 700,175 Q670,190 640,170 Q610,195 580,175 Q550,190 530,175Z" fill="none" stroke="rgba(26,155,170,0.15)" strokeWidth="1" />
            <path className="map-path" d="M420,200 Q460,170 500,190 Q530,175 560,195 Q580,180 600,200 L600,210 Q570,230 540,215 Q510,235 480,220 Q450,240 420,220Z" fill="none" stroke="rgba(26,155,170,0.15)" strokeWidth="1" />
            <path className="map-path" d="M650,200 Q700,175 750,200 Q780,185 800,210 Q820,195 830,215 L830,225 Q810,245 790,230 Q760,250 730,235 Q700,250 680,235 Q660,250 650,240Z" fill="none" stroke="rgba(26,155,170,0.15)" strokeWidth="1" />
            <circle className="map-dot" cx="500" cy="210" r="4" fill="#C8973E" />
            <circle className="map-dot map-dot--pulse" cx="500" cy="210" r="8" fill="none" stroke="#C8973E" strokeWidth="1" />
            <text x="500" y="240" textAnchor="middle" fill="#C8973E" fontSize="12" fontWeight="600" fontFamily="Outfit, sans-serif" letterSpacing="2">DHAKA</text>
            <circle className="map-dot map-dot--small" cx="200" cy="170" r="3" fill="#1A9BAA" />
            <circle className="map-dot map-dot--small" cx="780" cy="150" r="3" fill="#1A9BAA" />
            <circle className="map-dot map-dot--small" cx="650" cy="170" r="3" fill="#1A9BAA" />
            <circle className="map-dot map-dot--small" cx="350" cy="180" r="3" fill="#1A9BAA" />
            <circle className="map-dot map-dot--small" cx="820" cy="200" r="3" fill="#1A9BAA" />
          </svg>
        </div>
        <div className="ex-hero__overlay" />
        <div className="ex-hero__content">
          <RevealOnScroll>
            <div className="ex-hero__badge">
              <span>Exhibitor Registration Open</span>
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={1}>
            <h1 className="ex-hero__title">
              Exhibit your brand<br />to the <em>world</em>
            </h1>
          </RevealOnScroll>
          <RevealOnScroll delay={2}>
            <p className="ex-hero__desc">
              Showcase to 15,000+ visitors, 30+ international pavilions, and industry leaders from across the globe. Your booth at the crossroads of tourism and trade.
            </p>
          </RevealOnScroll>
          <RevealOnScroll delay={3}>
            <div className="ex-hero__actions">
              <SpringButton href="#book">Book Your Stall</SpringButton>
              <SpringButton href="#booths" variant="outline">View Booth Options</SpringButton>
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={5}>
            <div className="ex-hero__scroll-arrow">
              <ArrowDown size={20} color="rgba(255,255,255,0.3)" />
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ─── PAGE JUMP ─── */}
      <section className="page-jump page-jump--exhibitor">
        <div className="container">
          <RevealOnScroll>
            <div className="page-jump__inner">
              <span className="page-jump__label">Quick Route</span>
              <a href="#why-exhibit" className="page-jump__link">Why Exhibit</a>
              <a href="#booths" className="page-jump__link">Booth Options</a>
              <a href="#included" className="page-jump__link">What's Included</a>
              <a href="info/Stall%20Invitation.docx" className="page-jump__link" download>Stall Invitation</a>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ─── WHY EXHIBIT ─── */}
      <section className="ex-why" id="why-exhibit">
        <div className="container">
          <div className="ex-why__header">
            <RevealOnScroll><SectionLabel>Why Exhibit</SectionLabel></RevealOnScroll>
            <RevealOnScroll delay={1}>
              <h2 className="section-title">Unmatched exposure,<br /><em>extraordinary</em> opportunities</h2>
            </RevealOnScroll>
          </div>
          <div className="ex-why__items">
            {[
              { icon: 'booth', title: 'Dedicated High-Traffic Booth', desc: 'Your brand in a prime exhibition zone with guaranteed footfall from thousands of travel enthusiasts and decision-makers.' },
              { icon: 'audience', title: 'Direct Customer Engagement', desc: 'Face-to-face interactions with potential customers, corporate clients, and investors actively seeking travel and hospitality services.' },
              { icon: 'promote', title: 'Promote Packages & Services', desc: 'Launch travel packages, showcase services, offer exclusive expo deals, and generate immediate on-site bookings and leads.' },
              { icon: 'network', title: 'Network with Embassies & Investors', desc: 'Build relationships with embassies, corporate clients, and investors in the B2B Networking Lounge and exclusive matchmaking sessions.' },
            ].map((item, i) => (
              <RevealOnScroll key={item.title} delay={i + 1}>
                <div className="ex-why-item">
                  <div className="ex-why-item__icon">
                    <svg viewBox="0 0 48 48" width="48" height="48">
                      <circle cx="24" cy="24" r="22" fill="none" stroke="#1A9BAA" strokeWidth="1.5" />
                      {i === 0 && <path d="M16 24 L22 30 L32 18" fill="none" stroke="#1A9BAA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />}
                      {i === 1 && <><circle cx="24" cy="16" r="6" fill="none" stroke="#1A9BAA" strokeWidth="1.5" /><path d="M12 38 C12 30 36 30 36 38" fill="none" stroke="#1A9BAA" strokeWidth="1.5" /></>}
                      {i === 2 && <><rect x="14" y="14" width="20" height="20" rx="2" fill="none" stroke="#1A9BAA" strokeWidth="1.5" /><line x1="14" y1="22" x2="34" y2="22" stroke="#1A9BAA" strokeWidth="1.5" /><line x1="24" y1="22" x2="24" y2="34" stroke="#1A9BAA" strokeWidth="1.5" /></>}
                      {i === 3 && <><circle cx="18" cy="20" r="4" fill="none" stroke="#1A9BAA" strokeWidth="1.5" /><circle cx="30" cy="20" r="4" fill="none" stroke="#1A9BAA" strokeWidth="1.5" /><path d="M10 32 C10 26 38 26 38 32" fill="none" stroke="#1A9BAA" strokeWidth="1.5" /></>}
                    </svg>
                  </div>
                  <div className="ex-why-item__text">
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BOOTHS ─── */}
      <section className="ex-booths" id="booths">
        <div className="container">
          <div className="ex-booths__header">
            <RevealOnScroll><SectionLabel>Booth Options</SectionLabel></RevealOnScroll>
            <RevealOnScroll delay={1}>
              <h2 className="section-title">Find your <em>perfect</em> fit</h2>
            </RevealOnScroll>
          </div>
          <div className="ex-booth-compare">
            {[
              { type: 'Standard Booth', area: 'Dedicated showcase footprint', width: 33, features: ['Dedicated booth space', 'Company signage', 'Brand listing in event materials', 'Direct customer engagement'] },
              { type: 'Featured Zone Booth', area: 'Enhanced branded presence', width: 60, features: ['Preferred placement in a high-traffic zone', 'Custom branding opportunity', 'Live offer or service demonstrations', 'Access to networking sessions', 'Stronger visibility across visitor routes'] },
              { type: 'Pavilion Showcase', area: 'Immersive destination or brand setup', width: 100, popular: true, features: ['Best-fit for tourism boards, airlines, and hospitality leaders', 'Expanded branded environment', 'Placement near major showcase areas', 'High-touch visitor engagement format', 'Strong diplomatic and media visibility', 'Ideal for landmark brand storytelling'] },
            ].map((booth, i) => (
              <RevealOnScroll key={booth.type} delay={i + 1}>
                <div className={`ex-booth ${booth.popular ? 'ex-booth--vip' : ''}`}>
                  {booth.popular && <div className="ex-booth__popular">Premium Presence</div>}
                  <div className="ex-booth__type">{booth.type}</div>
                  <div className="ex-booth__area">{booth.area}</div>
                  <ProgressBar width={booth.width} color="linear-gradient(90deg, var(--teal), var(--gold))" className="ex-booth__bar" delay={i * 300} />
                  <ul className="ex-booth__features">
                    {booth.features.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ZONES ─── */}
      <section className="ex-zones" id="zones">
        <div className="container">
          <div className="ex-zones__header">
            <RevealOnScroll><SectionLabel>Exhibition Zones</SectionLabel></RevealOnScroll>
            <RevealOnScroll delay={1}>
              <h2 className="section-title">Where will your<br /><em>brand</em> live?</h2>
            </RevealOnScroll>
          </div>
        </div>
        <div className="ex-zone-bands">
          {[
            { name: 'Global Tourism Pavilion', detail: 'Embassies • Tourism Boards • Travel Info', color: '#1A9BAA' },
            { name: 'Hospitality & Hotel Zone', detail: '5-Star Hotels • Resorts • VR Experiences', color: '#C8973E' },
            { name: 'Aviation & Travel Zone', detail: 'Airlines • Agencies • Cruise Lines', color: '#0B1D3A' },
            { name: 'Food & Culinary Arena', detail: 'International Cuisine • Live Cooking • Tastings', color: '#2D6A4F' },
            { name: 'B2B Networking Lounge', detail: 'Matchmaking • Meetings • Deal Making', color: '#7B2D8B' },
          ].map((zone, i) => (
            <RevealOnScroll key={zone.name} delay={i + 1}>
              <div className="ex-zone-band" style={{ '--zone-color': zone.color } as React.CSSProperties} data-zone-color={zone.color}>
                <div className="ex-zone-band__inner container">
                  <span className="ex-zone-band__name">{zone.name}</span>
                  <span className="ex-zone-band__detail">{zone.detail}</span>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
        <div className="container">
          <div className="ex-zone-visuals">
            <RevealOnScroll>
              <article className="ex-zone-visual">
                <picture>
                  <source srcSet="assets/img/premium/itte-vr-travel-booth.webp" type="image/webp" />
                  <img src="assets/img/premium/itte-vr-travel-booth.png" alt="Premium VR travel experience booth" loading="lazy" />
                </picture>
                <div className="ex-zone-visual__body">
                  <span className="ex-zone-visual__eyebrow">Travel-Tech Moment</span>
                  <h3>VR Travel Experience</h3>
                  <p>Support live destination previews and room simulations aligned with the hospitality and travel showcase zones.</p>
                </div>
              </article>
            </RevealOnScroll>
            <RevealOnScroll delay={1}>
              <article className="ex-zone-visual">
                <picture>
                  <source srcSet="assets/img/premium/itte-food-pavilion.webp" type="image/webp" />
                  <img src="assets/img/premium/itte-food-pavilion.png" alt="Premium international food pavilion" loading="lazy" />
                </picture>
                <div className="ex-zone-visual__body">
                  <span className="ex-zone-visual__eyebrow">Food & Culinary Arena</span>
                  <h3>Taste-Led Visitor Pull</h3>
                  <p>International cuisine stalls and live cooking activations keep visitors circulating through the expo floor all day.</p>
                </div>
              </article>
            </RevealOnScroll>
          </div>
          <div className="ex-zone-notes">
            <RevealOnScroll>
              <div className="ex-zone-note">
                <img src="assets/img/zones/zone-icon-1.png" alt="" loading="lazy" />
                <div>
                  <h4>Conference & Seminar Hall</h4>
                  <p>Panels, keynote speeches, tourism summits, and official session branding opportunities.</p>
                </div>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={1}>
              <div className="ex-zone-note">
                <img src="assets/img/zones/zone-icon-2.png" alt="" loading="lazy" />
                <div>
                  <h4>B2B Networking Lounge</h4>
                  <p>Pre-scheduled meetings, embassy-business matchmaking, and direct access to high-value stakeholders.</p>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ─── INCLUDED ─── */}
      <section className="ex-included" id="included">
        <div className="container">
          <div className="ex-included__header">
            <RevealOnScroll><SectionLabel>What's Included</SectionLabel></RevealOnScroll>
            <RevealOnScroll delay={1}>
              <h2 className="section-title">Everything you need<br />to <em>succeed</em></h2>
            </RevealOnScroll>
          </div>
          <div className="ex-included__grid">
            {[
              'Booth space with basic setup',
              'Company listing in event directory',
              'Exhibitor passes (varies by package)',
              'Branding on event website',
              'Networking session access',
              'Embassy, corporate client & investor touchpoints',
              'Promotion of packages, services, and exclusive offers',
              'First-come stall allocation support',
            ].map((item, i) => (
              <RevealOnScroll key={item} delay={i + 1}>
                <div className="ex-inc-item">
                  <div className="ex-inc-item__check"><Check size={14} /></div>
                  <span>{item}</span>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="ex-cta" id="book">
        <div className="ex-cta__bg">
          <div className="ex-cta__pattern" />
        </div>
        <div className="container">
          <div className="ex-cta__content">
            <RevealOnScroll>
              <div className="ex-cta__early-bird">
                <span className="ex-cta__early-bird-dot" />
                First-Come Stall Allocation
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={1}>
              <h2 className="section-title white-text section-center">Secure your<br /><em>booth</em> today</h2>
            </RevealOnScroll>
            <RevealOnScroll delay={2}>
              <p className="cta-section__desc" style={{ maxWidth: 550 }}>
                Stalls are allocated on a first-come basis. Early confirmation helps secure stronger placement within the exhibition layout.
              </p>
            </RevealOnScroll>
            <RevealOnScroll delay={3}>
              <div className="ex-cta__actions">
                <SpringButton href="mailto:sameer@nagorikprotidin.com">Book Your Stall Now</SpringButton>
                <SpringButton href="info/Stall%20Invitation.docx" variant="outline" download>
                  <Download size={16} /> Download Stall Invitation
                </SpringButton>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={4}>
              <div className="ex-cta__contact">
                <span>Questions?</span>
                <a href="mailto:sameer@nagorikprotidin.com">sameer@nagorikprotidin.com</a>
                <span>|</span>
                <a href="tel:+8801734991111">+88 01734 991111</a>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>
    </>
  )
}
