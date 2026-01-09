export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div>
          <h4>Get In Touch</h4>
          <p>MASHCOLE PROPERTY MANAGEMENT, INC.</p>
          <p>26041 Agoura Road, Suite 250</p>
          <p>Calabasas, CA 91302</p>
          <p>(818) 888-8052</p>
          <p>info@mashcole.com</p>
        </div>

        <div>
          <h4>Home</h4>
          <a>Property Management</a>
          <a>Find Tenants</a>
          <a>Owners</a>
          <a>Blogs</a>
          <a>Contact</a>
        </div>

        <div>
          <h4>Follow Us</h4>
          <a>Facebook</a>
          <a>Instagram</a>
          <a>Tiktok</a>
          <a>Youtube</a>
          <a>LinkedIn</a>
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
