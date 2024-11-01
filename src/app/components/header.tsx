// Header Component
const Header = () => (
  <header className="header">
    <div className="logo">
      <img src="https://i.ibb.co/WK2zGnz/chiksgold.png" alt="Chicks Gold" />
      <div className="nav-separator"></div>
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
      <button className="cart-button">CART (5)</button>
      <button className="sign-in-button">SIGN IN</button>
    </div>
  </header>
);

export default Header;
