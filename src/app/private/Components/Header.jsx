import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  return (
    <header className="header">
      <div className="header__logo">
        <img 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStH2ydTOrNsyDIqTv_EztmmyhYO43Yt3hlig&s" 
          alt="Mashcole Property Management Logo"
        />
      </div>

      {/* Botón hamburguesa para móvil */}
      <button 
        className={`menu-toggle ${isMenuOpen ? 'open' : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Navegación principal */}
      <nav className={`header__nav ${isMenuOpen ? 'active' : ''}`}>
        <div 
          className={`nav-item dropdown ${openDropdown === 'management' ? 'open' : ''}`}
          onClick={() => toggleDropdown('management')}
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