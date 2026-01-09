
export default function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <img src="../../assets/images/logo.png" alt="Mashcole Property Management" />
      </div>

      <nav className="header__nav">
        <div className="nav-item dropdown">
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
  )
}
