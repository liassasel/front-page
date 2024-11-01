import VisaIcon from '../../../public/svgs/iconvisa.svg'
import  MastercardIcon from '../../../public/svgs/mastercardsvg.svg'
import AmexIcon from  '../../../public/svgs/american.svg'
import SkrillIcon from  '../../../public/svgs/skrill.svg'
import BitcoinY from   '../../../public/svgs/yellow.svg'
import BitcoinG from   '../../../public/svgs/green.svg'
import EthereumIcon from   '../../../public/svgs/ethereum.svg'
import  LitecoinIcon from   '../../../public/svgs/litecoin.svg'
import DiscordIcon from '../../../public/svgs/discord.svg'
import FacebookIcon from   '../../../public/svgs/facebook.svg'
import InstagramIcon  from   '../../../public/svgs/instagram.svg'
import TwitterIcon from   '../../../public/svgs/twitter.svg'
import FiveStars from    '../../../public/svgs/stars-5-1.svg'
import ChicksGold from '../../../public/images/chiksgold.png'







// Footer Component
const Footer = () => (
    <footer className="footer">
      <div className="footer-content">
        <div className="payment-methods">
        <VisaIcon className="payment-icon" />
        <MastercardIcon className="payment-icon" />
        <AmexIcon className="payment-icon" />
        <SkrillIcon className="payment-icon" />
          <div className="crypto-icons">
            <BitcoinG className="crypto-icons" />
            <EthereumIcon className="crypto-icons" />
            <BitcoinY className="crypto-icons" />
            <LitecoinIcon className="crypto-icons" />
            <span className="more-text">and 50+ more</span>
          </div>
        </div>
  
        <div className="social-links">
        <a href="#" className="social-link facebook"><FacebookIcon /></a>
          <a href="#" className="social-link instagram"><InstagramIcon /></a>
          <a href="#" className="social-link twitter"><TwitterIcon /></a>
          <a href="#" className="social-link discord"><DiscordIcon /></a>   
        </div>

        <div className='footer-line' />
  
        <div className="footer-grid">
          <div className="footer-company">
            <img src='https://i.ibb.co/WK2zGnz/chiksgold.png' alt="Chicks Gold" className="footer-logo" />
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
  
          <div className="footer-sections">
            <FiveStars alt="Trustpilot Reviews" className="trust-pilot"  /><span className='trust-class'>Trustpilot Reviews</span>
          </div>
        </div>
  
        <div className="footer-copyright">
          © 2017 - 2020 Chicksgold.com. All Rights Reserved
        </div>
      </div>
    </footer>
  )

  export default  Footer;
