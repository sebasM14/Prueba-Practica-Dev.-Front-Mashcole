

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-col">
          <h4>Get In Touch</h4>
          <p>MASHCOLE PROPERTY MANAGEMENT, INC.</p>
          <p>26041 Agoura Road, Suite 250</p>
          <p>Calabasas, CA 91302</p>
          <p>ABA at Anthem St., Long Beach</p>

          <p>(818) 888-8052</p>
          <p>info@mashcole.com</p>
        </div>

        <div className="footer-col">
          <h4>Home</h4>
          <a>Property Management</a>
          <a>Find Tenants</a>
          <a>About</a>
          <a>Owners</a>
          <a>Blogs</a>
          <a>Contact</a>
        </div>

        <div className="footer-col">
          <h4>Follow Us</h4>
          <a>Facebook</a>
          <a>Instagram</a>
          <a>Tiktok</a>
          <a>Youtube</a>
          <a>LinkedIn</a>
        </div>

        <div className="footer-col newsletter">
          <h4>Subscribe To Our Newsletter</h4>
          <div className="newsletter-box">
            <input type="email" placeholder="Email" />
            <button>SUBSCRIBE</button>
          </div>

          <div className="certificates">
            <span>ADA</span>
            <span>REALTOR</span>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>Copyright © mashcole.com. All Rights Reserved.</p>
        <p>Full Service Property Management | DRE# 01496371 | Privacy Policy | Terms of Service</p>
      </div>

    </footer>
  );
}
