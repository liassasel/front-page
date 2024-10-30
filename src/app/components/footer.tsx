// Footer Component
const Footer = () => (
    <footer className="footer">
      <div className="footer-content">
        <div className="payment-methods">
          <img src="/placeholder.svg?height=30&width=50" alt="Visa" className="payment-icon" />
          <img src="/placeholder.svg?height=30&width=50" alt="Mastercard" className="payment-icon" />
          <img src="/placeholder.svg?height=30&width=50" alt="American Express" className="payment-icon" />
          <img src="/placeholder.svg?height=30&width=50" alt="Skrill" className="payment-icon" />
          <div className="crypto-icons">
            <img src="/placeholder.svg?height=20&width=20" alt="Bitcoin" className="crypto-icon" />
            <img src="/placeholder.svg?height=20&width=20" alt="Ethereum" className="crypto-icon" />
            <span className="more-text">and 50+ more</span>
          </div>
        </div>
  
        <div className="social-links">
          <a href="#" className="social-link facebook">Facebook</a>
          <a href="#" className="social-link instagram">Instagram</a>
          <a href="#" className="social-link twitter">Twitter</a>
          <a href="#" className="social-link discord">Discord</a>
        </div>
  
        <div className="footer-grid">
          <div className="footer-company">
            <img src="/placeholder.svg?height=50&width=150" alt="Chicks Gold" className="footer-logo" />
            <a href="mailto:support@chicksgold.com" className="footer-email">support@chicksgold.com</a>
          </div>
  
          <div className="footer-section">
            <h3>Chicks Gold</h3>
            <ul>
              <li><a href="#">Games</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Sitemap</a></li>
            </ul>
          </div>
  
          <div className="footer-section">
            <h3>Support</h3>
            <ul>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>
  
          <div className="footer-section">
            <h3>Legal</h3>
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Copyright Policy</a></li>
            </ul>
          </div>
  
          <div className="footer-section">
            <img src="/placeholder.svg?height=50&width=150" alt="Trustpilot Reviews" className="trustpilot" />
          </div>
        </div>
  
        <div className="footer-copyright">
          © 2017 - 2020 Chicksgold.com. All Rights Reserved
        </div>
      </div>
    </footer>
  )

  export default  Footer;
