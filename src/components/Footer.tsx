import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer__inner">
        <div className="footer__brand">
          <div className="footer__logo-shell">
            <img
              src="assets/img/logo-dark.png"
              alt="ITT Expo 2026"
              className="footer__logo-img"
              width="176"
              loading="lazy"
            />
          </div>
          <p className="footer__brand-desc">
            The premier international event connecting nations through tourism, trade, and cultural exchange. August 21-22, Aloki, Tejgaon, Dhaka, Bangladesh.
          </p>
          <div className="footer__organizers">
            <span className="footer__org-label">Organized by</span>
            <div className="footer__org-logos">
              <img
                src="assets/img/organizers/nagorik-protidin-white.webp"
                alt="Nagorik Protidin"
                width="140"
                loading="lazy"
              />
              <img
                src="assets/img/organizers/bloodman-white.webp"
                alt="Bloodman"
                width="100"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <div className="footer__col">
          <h4 className="footer__col-title">Quick Links</h4>
          <ul>
            <li><Link to="/">Event Details</Link></li>
            <li><Link to="/sponsors">Sponsor Opportunities</Link></li>
            <li><Link to="/register">Book a Stall</Link></li>
          </ul>
        </div>

        <div className="footer__col">
          <h4 className="footer__col-title">Event Info</h4>
          <ul>
            <li>Date: Aug 21-22, 2026</li>
            <li>Time: 10 AM - 10 PM</li>
            <li>Venue: Aloki, Tejgaon, Dhaka</li>
          </ul>
        </div>

        <div className="footer__col">
          <h4 className="footer__col-title">Contact</h4>
          <ul>
            <li>Nagorik Protidin</li>
            <li><a href="mailto:sameer@nagorikprotidin.com">sameer@nagorikprotidin.com</a></li>
            <li><a href="tel:+8801734991111">+88 01734 991111</a></li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <span>&copy; 2026 International Trade & Tourism Expo. All rights reserved.</span>
        <span>Organized by Nagorik Protidin & Bloodman</span>
      </div>
    </footer>
  )
}
