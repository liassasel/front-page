

// Header Component
const Header = () => (
  <header className="header">
    <div className="logo">
      <img src="/placeholder.svg?height=40&width=120" alt="Chicks Gold" />
    </div>
    <nav className="nav">
      <select className="nav-select">
        <option>CURRENCY</option>
      </select>
      <select className="nav-select">
        <option>ITEMS</option>
      </select>
      <select className="nav-select">
        <option>ACCOUNTS</option>
      </select>
      <select className="nav-select">
        <option>SERVICES</option>
      </select>
      <select className="nav-select">
        <option>SWAP</option>
      </select>
      <select className="nav-select">
        <option>SELL</option>
      </select>
    </nav>
    <div className="auth">
      <select className="currency-select">
        <option>USD</option>
      </select>
      <button className="cart-button">CART (0)</button>
      <button className="sign-in-button">SIGN IN</button>
    </div>
  </header>
);

export default Header;
