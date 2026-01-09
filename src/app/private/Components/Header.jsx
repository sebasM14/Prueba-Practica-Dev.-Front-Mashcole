import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="header">
      <div className="header__logo">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStH2ydTOrNsyDIqTv_EztmmyhYO43Yt3hlig&s" />
      </div>

      {/* HAMBURGER */}
      <button
        className={`menu-toggle ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* NAV */}
      <nav className={`header__nav ${menuOpen ? "active" : ""}`}>
        <div
          className={`nav-item dropdown ${dropdownOpen ? "open" : ""}`}
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          Property Management
          <span className="arrow">▼</span>

          <div className="dropdown-menu">
            <a>The Mashcole Method</a>
            <a>Asset Operation</a>
            <a>Account Operations</a>
            <a>Due Diligence</a>
            <a>Newsletters</a>
          </div>
        </div>

        <a className="nav-item">For Rent</a>
        <a className="nav-item">Residents</a>
        <a className="nav-item">Owners</a>
        <a className="nav-item">Testimonials</a>
        <a className="nav-item">About Us</a>
        <a className="nav-item">Blog</a>
        <a className="nav-item">Contact Us</a>
      </nav>

      <div className="header__actions">
        <button className="btn btn-yellow">PAY ONLINE</button>
        <button className="btn btn-outline">EMPLOYEES</button>
        <button className="btn btn-blue">(818) 888-8052</button>
      </div>
    </header>
  );
}
