import { motion } from 'framer-motion'
import RevealOnScroll from '@/components/RevealOnScroll'
import SectionLabel from '@/components/SectionLabel'
import SpringButton from '@/components/SpringButton'
import CountUp from '@/components/CountUp'
import ProgressBar from '@/components/ProgressBar'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { Download } from 'lucide-react'

const stagger = {
  container: { transition: { staggerChildren: 0.08 } },
  item: {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
  },
}

export default function SponsorPage() {
  useScrollReveal()

  return (
    <>
      {/* ─── HERO ─── */}
      <section className="sp-hero">
        <div className="sp-hero__lines">
          <div className="sp-hero__line sp-hero__line--1" />
          <div className="sp-hero__line sp-hero__line--2" />
          <div className="sp-hero__line sp-hero__line--3" />
        </div>
        <div className="sp-hero__content">
          <RevealOnScroll>
            <div className="sp-hero__label">
              <span>Partnership Opportunity</span>
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={1}>
            <h1 className="sp-hero__title">
              Stand at the center of<br />
              <em>South Asia's next</em> global<br />
              tourism movement
            </h1>
          </RevealOnScroll>
          <RevealOnScroll delay={2}>
            <p className="sp-hero__desc">
              Position your brand at the intersection of tourism, diplomacy, and business. International Trade & Tourism Expo 2026, Dhaka.
            </p>
          </RevealOnScroll>
          <RevealOnScroll delay={3}>
            <div className="sp-hero__meta">
              <span>August 21-22, 2026</span>
              <span className="sp-hero__meta-dot" />
              <span>Aloki, Tejgaon, Dhaka</span>
              <span className="sp-hero__meta-dot" />
              <span>40+ Countries</span>
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={4}>
            <div className="sp-hero__partner-strip">
              <div className="sp-hero__partner-group">
                <span className="sp-hero__partner-head">Organized By</span>
                <div className="sp-hero__partner-logos">
                  <img src="assets/img/organizers/bloodman-white.webp" alt="Bloodman" loading="lazy" />
                  <span style={{ color: 'var(--white)', fontSize: '0.9rem', fontWeight: 600, alignSelf: 'center' }}>GamePlay</span>
                </div>
              </div>
              <div className="sp-hero__partner-group">
                <span className="sp-hero__partner-head">In Association With</span>
                <div className="sp-hero__partner-logos">
                  <img src="assets/img/organizers/nagorik-protidin-white.webp" alt="Nagorik Protidin" loading="lazy" />
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ─── PAGE JUMP ─── */}
      <section className="page-jump page-jump--sponsor">
        <div className="container">
          <RevealOnScroll>
            <div className="page-jump__inner">
              <span className="page-jump__label">Quick Route</span>
              <a href="#benefits" className="page-jump__link">Brand Benefits</a>
              <a href="#tiers" className="page-jump__link">Sponsor Tiers</a>
              <a href="#visibility" className="page-jump__link">Audience Reach</a>
              <a href="info/International%20Trade%20%26%20Tourism%20Fair%202026.pptx" className="page-jump__link" download>Event Deck</a>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ─── STATS ─── */}
      <section className="sp-stats">
        <motion.div
            className="sp-stats__inner container"
            variants={stagger.container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { target: 40, suffix: '+', label: 'Countries Represented', width: 85 },
              { target: 15000, suffix: '+', label: 'High-Value Visitors', width: 95 },
              { target: 30, suffix: '+', label: 'International Pavilions', width: 75 },
              { target: 8, suffix: '', label: 'Dedicated Event Zones', width: 60 },
            ].map((stat) => (
              <motion.div key={stat.label} variants={stagger.item}>
                <div className="sp-stat">
                  <span className="sp-stat__number">
                    <CountUp target={stat.target} suffix={stat.suffix} />
                  </span>
                  <span className="sp-stat__label">{stat.label}</span>
                  <ProgressBar width={stat.width} color="linear-gradient(90deg, var(--gold), var(--teal))" delay={0} />
                </div>
              </motion.div>
            ))}
          </motion.div>
      </section>

      {/* ─── BENEFITS ─── */}
      <section className="sp-benefits" id="benefits">
        <div className="container">
          <div className="sp-benefits__header">
            <RevealOnScroll><SectionLabel>Why Partner With Us</SectionLabel></RevealOnScroll>
            <RevealOnScroll delay={1}>
              <h2 className="section-title">Your brand deserves<br /><em>this stage</em></h2>
            </RevealOnScroll>
          </div>
          <motion.div
            className="sp-benefits__list"
            variants={stagger.container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { num: '01', title: 'Premium Brand Visibility', desc: 'Your logo and brand identity featured prominently across all event platforms — from digital campaigns and social media to on-ground signage, stage backdrops, and printed materials.' },
              { num: '02', title: 'Direct Decision-Maker Access', desc: 'Engage face-to-face with government officials, embassy representatives, airline executives, hospitality leaders, and high-net-worth travelers from 40+ nations.' },
              { num: '03', title: 'Government & Embassy Association', desc: 'Align your brand with government bodies, international organizations, and diplomatic missions. Enhance credibility through official institutional partnerships.' },
              { num: '04', title: 'Exclusive Networking & Leads', desc: 'Pre-scheduled B2B meetings, VIP networking lounges, and dedicated matchmaking sessions designed to generate qualified business leads and strategic partnerships.' },
              { num: '05', title: 'Digital & Media Amplification', desc: 'Featured across press releases, TV coverage, digital campaigns, influencer partnerships, and social media content reaching millions across South Asia and beyond.' },
            ].map((item) => (
              <motion.div key={item.num} variants={stagger.item}>
                <div className="sp-benefit">
                  <div className="sp-benefit__line" />
                  <div className="sp-benefit__content">
                    <div className="sp-benefit__head">
                      <span className="sp-benefit__num">{item.num}</span>
                      <h3>{item.title}</h3>
                    </div>
                    <p>{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── TIERS ─── */}
      <section className="sp-tiers" id="tiers">
        <div className="container">
          <div className="sp-tiers__header">
            <RevealOnScroll><SectionLabel className="section-center">Partnership Tiers</SectionLabel></RevealOnScroll>
            <RevealOnScroll delay={1}>
              <h2 className="section-title section-center">Choose your <em>level</em> of impact</h2>
            </RevealOnScroll>
          </div>
          <motion.div
            className="sp-tiers__grid"
            variants={stagger.container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            {[
              { badge: 'Most Visible', title: 'Title Sponsor', color: '#F07E21', width: '100%', perks: ['Exclusive naming rights: brand in official title, theme & tagline', 'Largest logo placement on all materials — main entrance, stage, LED screens, banners, backdrop', 'Keynote speaking slot at conference sessions', 'Premium booth in highest-traffic zone with live demo opportunity', 'Full social media, press & TV integration', 'Foreign Pavilion branding under sponsor name with direct diplomatic exposure'] },
              { title: 'Powered By Sponsor', color: '#F5A623', width: '80%', perks: ['Co-branding on select event assets and collateral', 'Large booth in premium zone with product & service live demonstration', 'Conference panel participation & networking access', 'Dedicated social media campaign & influencer amplification', 'Sponsor lounge access for Ambassadors, Ministers & CXOs', 'Customer data collection and lead generation opportunity'] },
              { title: 'Co-Sponsor', color: '#1A9BAA', width: '60%', perks: ['Logo placement on event materials, website & social media', 'Standard booth in designated zone', 'Brand mention in TV, newspaper & digital press coverage', 'Networking session & VIP lounge access', 'Inclusion in event live streaming & press releases'] },
              { title: 'Category Partner', color: '#6B7280', width: '40%', perks: ['Category-specific branding rights (e.g. aviation, hospitality, technology)', 'Logo on event website & printed materials', 'Activation opportunity in relevant zone', '"World in One Frame" iconic photo booth with sponsor branding'] },
            ].map((tier) => (
              <motion.div key={tier.title} variants={stagger.item}>
                <div className="sp-tier" style={{ '--tier-color': tier.color, '--tier-width': tier.width } as React.CSSProperties}>
                  {tier.badge && <div className="sp-tier__badge">{tier.badge}</div>}
                  <h3>{tier.title}</h3>
                  <div className="sp-tier__bar">
                    <div className="sp-tier__bar-fill" style={{ width: tier.width, background: tier.color }} />
                  </div>
                  <ul className="sp-tier__perks">
                    {tier.perks.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── VISIBILITY ─── */}
      <section className="sp-visibility" id="visibility">
        <div className="sp-visibility__bg" />
        <div className="container">
          <div className="sp-visibility__header">
            <RevealOnScroll><SectionLabel>Brand Visibility</SectionLabel></RevealOnScroll>
            <RevealOnScroll delay={1}>
              <h2 className="section-title white-text">Everywhere your<br /><em>audience</em> looks</h2>
            </RevealOnScroll>
          </div>
          <motion.div
            className="sp-visibility__grid"
            variants={stagger.container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { number: 'ENTRY', title: 'Main Entrance & Welcome Walls', desc: 'Prime sponsor identity across event entry points, welcome branding, directional signage, and opening arrival moments.', width: 90 },
              { number: 'STAGE', title: 'Conference & Session Presence', desc: 'Logo visibility around keynote sessions, seminar hall branding, moderated talks, and sponsor acknowledgements on stage.', width: 75 },
              { number: 'ZONE', title: 'Foreign Pavilion & Zone Branding', desc: 'Category takeovers and co-branding opportunities inside the global tourism pavilion, networking lounge, and themed activity zones.', width: 65 },
              { number: 'MEDIA', title: 'Deck, Print & Organiser Outreach', desc: 'Brand inclusion across the official deck, organiser materials, sponsor correspondence, and event communication assets.', width: 55 },
            ].map((item) => (
              <motion.div key={item.number} variants={stagger.item}>
                <div className="sp-vis-item">
                  <div className="sp-vis-item__number">{item.number}</div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                  <ProgressBar width={item.width} color="linear-gradient(90deg, var(--gold), var(--teal))" delay={0} />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="sp-cta" id="partner">
        <div className="container">
          <div className="sp-cta__content">
            <RevealOnScroll><SectionLabel className="section-center">Ready to Partner?</SectionLabel></RevealOnScroll>
            <RevealOnScroll delay={1}>
              <h2 className="section-title section-center">Let's build something<br /><em>impactful</em> together</h2>
            </RevealOnScroll>
            <RevealOnScroll delay={2}>
              <p className="cta-section__desc">
                Our team is ready to present the sponsorship deck and explore how we can create a partnership tailored to your brand's objectives.
              </p>
            </RevealOnScroll>
            <RevealOnScroll delay={3}>
              <div className="sp-cta__actions">
                <SpringButton href="mailto:sameer@nagorikprotidin.com">Request Sponsorship Deck</SpringButton>
                <SpringButton href="info/International%20Trade%20%26%20Tourism%20Fair%202026.pptx" variant="outlineDark" download>
                  <Download size={16} /> Download Event Deck
                </SpringButton>
                <SpringButton href="info/Sponsor%20Invitation.docx" variant="outlineDark" download>
                  <Download size={16} /> Download Sponsor Letter
                </SpringButton>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={4}>
              <div className="sp-cta__contact-info">
                <span>Bloodman & GamePlay</span>
                <span>&bull;</span>
                <a href="mailto:sameer@nagorikprotidin.com">sameer@nagorikprotidin.com</a>
                <span>&bull;</span>
                <a href="tel:+8801734991111">+88 01734 991111</a>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>
    </>
  )
}
