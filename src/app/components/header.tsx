import { ChevronDown } from "lucide-react";
import ExpandDown from '../../../public/svgs/Expand_down.svg';
import User from '../../../public/svgs/user.svg'
import Cart from '../../../public/svgs/cart.svg'

// Header Component
const Header = () => (
  <header className="header">
    <div className="logo">
      <img src="https://i.ibb.co/WK2zGnz/chiksgold.png" alt="Chicks Gold" />
      <div className="nav-separator"></div>
    </div>
    <nav className="nav">
      <div className="nav-item">
        <select className="nav-select">
          <option>CURRENCY</option>
        </select>
        <ExpandDown alt="Expand" className="icon" />
      </div>
      <div className="nav-item">
        <select className="nav-select">
          <option>ITEMS</option>
        </select>
        <ExpandDown alt="Expand" className="icon" />
      </div>
      <div className="nav-item">
        <select className="nav-select">
          <option>ACCOUNTS</option>
        </select>
        <ExpandDown alt="Expand" className="icon" />
      </div>
      <div className="nav-item">
        <select className="nav-select">
          <option>SERVICES</option>
        </select>
        <ExpandDown alt="Expand" className="icon" />
      </div>
      <div className="nav-item">
        <select className="nav-select">
          <option>SWAP</option>
        </select>
        <ExpandDown alt="Expand" className="icon" />
      </div>
      <div className="nav-item">
        <select className="nav-select">
          <option>SELL</option>
        </select>
        <ExpandDown alt="Expand" className="icon" />
      </div>
    </nav>
    <div className="auth">
      <div className="currency-item">
        <select className="currency-select">
          <option>USD</option>
        </select>
        <ExpandDown alt="Expand" className="icon" />
      </div>
      <button className="cart-button">
        <Cart alt="Cart" className="cart-icon" />
        CART (5)
      </button>
      <button className="sign-in-button">
        SIGN IN
        <User alt="Sign In" className="sign-in-icon" />
      </button>
    </div>
  </header>
);

export default Header;
