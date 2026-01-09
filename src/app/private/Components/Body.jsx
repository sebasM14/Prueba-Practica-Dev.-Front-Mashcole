
export default function Body() {
  return (
    <section className="body">
      <section className="stats">
        <div className="stat"><strong>375+</strong><span>Properties Managed</span></div>
        <div className="stat"><strong>7,000+</strong><span>Units Managed</span></div>
        <div className="stat"><strong>20+</strong><span>Years of Experience</span></div>
        <div className="stat"><strong>20K+</strong><span>Credit Reports / Year</span></div>
      </section>

      <section className="featured">
        <h2>FEATURED RENTALS</h2>
        <div className="rentals">
          <div className="rental-card"></div>
          <div className="rental-card"></div>
          <div className="rental-card"></div>
        </div>
      </section>

      <section className="benefits">
        <div className="benefits-left">
          <h2>The benefits of our<br />Property management services</h2>
          <p>Personal, one on one service<br />For Owners or Renters</p>
        </div>
        <div className="benefits-right">
          <ul>
            <li>Staff</li>
            <li>Pricing</li>
            <li>Advertising</li>
            <li>Rent Ready Units</li>
            <li>Curb appeal</li>
          </ul>
        </div>
      </section>

      <section className="blogs">
        <h2>BLOGS AND ARTICLES</h2>
        <div className="blog-grid">
          <div className="blog-card"></div>
          <div className="blog-card"></div>
          <div className="blog-card"></div>
          <div className="blog-card"></div>
        </div>
      </section>

      <section className="cta">
        <h2>Ready to Experience Stress-Free Property Management?</h2>
        <button>REQUEST A QUOTE</button>
      </section>
    </section>
  )
}
