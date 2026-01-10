export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css"
/>

<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css"
/>



<div className="footer-contact">
  <h4>Get In Touch</h4>

  <p className="contact-item">
    MASHCOLE PROPERTY MANAGEMENT, INC.
  </p>

  <p className="contact-item">
    <i className="bi bi-geo-alt"></i>
    26041 Agoura Road, Suite 250
  </p>

  <p className="contact-item">
    <i className="bi bi-geo"></i>
    Calabasas, CA 91302
  </p>

  <p className="contact-item">
    <i className="bi bi-telephone"></i>
    (818) 888-8052
  </p>

  <p className="contact-item">
    <i className="bi bi-envelope"></i>
    info@mashcole.com
  </p>
</div>

        <div>
          <h4>Home</h4>
          <a>Property Management</a>
          <a>Find Tenants</a>
          <a>Owners</a>
          <a>Blogs</a>
          <a>Contact</a>
        </div>

        {/* SOCIAL ICONS */}
        <div>
          <h4>Follow Us</h4>

          <a className="social-link">
            <i className="bi bi-facebook"></i> Facebook
          </a>

          <a className="social-link">
            <i className="bi bi-instagram"></i> Instagram
          </a>

          <a className="social-link">
            <i className="bi bi-tiktok"></i> Tiktok
          </a>

          <a className="social-link">
            <i className="bi bi-youtube"></i> Youtube
          </a>

          <a className="social-link">
            <i className="bi bi-linkedin"></i> LinkedIn
          </a>
        </div>

        <div>
          <h4>Subscribe To Our Newsletter</h4>
          <div className="newsletter-box">
            <input placeholder="Email" />
            <button>SUBSCRIBE</button>
          </div>
        </div>

      </div>


      

      <div className="footer-bottom">

        
        <span>© mashcole.com. All Rights Reserved.</span>
        <span>DRE# 01496371 | Privacy Policy</span>

        
      </div>


   
    </footer>
  );
}
