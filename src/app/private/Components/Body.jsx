export default function Body() {
  return (
    <div className="body-container">

      <section className="top-section">
        <div className="hero-card">
          <div className="hero-overlay">
            <span className="hero-tag">
              SERVICE, INTEGRITY, & PROFITABILITY
            </span>

            <h1>
              Property Management <br /> in Los Angeles
            </h1>

            <p>
              We provide leasing and property management services in Los Angeles,
              Long Beach, Orange County, and throughout Southern California
            </p>

            <div className="hero-buttons">
              <button className="btn primary">CONTACT US</button>
              <button className="btn outline">OUR SERVICES</button>
            </div>
          </div>
        </div>

        <div className="side-cards">
          <div className="side-card blue">
            <h3>Request A Property Management Quote</h3>
            <p>
              Mashcole Property Management, Inc. enables property owners to
              increase the value and profitability of their assets.
            </p>
            <button className="btn small">REQUEST A TOUR</button>
          </div>

          <div className="side-card dark">
            <h3>Free Market Analysis</h3>
            <p>
              Let our experts analyze and provide insights into your current
              property management agreement for free.
            </p>
            <button className="btn small">REQUEST A TOUR</button>
          </div>
        </div>
      </section>

      <section className="bottom-section">
        <div className="office-card">
          <h3>Offices In California</h3>
          <p>📍 26901 Agoura Road, Suite 250, Calabasas, CA 91301</p>
          <p>📍 3846 E Anaheim St, Long Beach, CA 90804</p>
          <p>📞 (818) 888-8052</p>
        </div>

        <div className="rentals-card">
          <div className="rentals-content">
            <h3>Find Rentals</h3>
            <p>
              With more than 7000 units available in the Greater Los Angeles area,
              we can help you find the right one for you.
            </p>
            <button className="btn white">SEE ALL RENTAL LISTINGS</button>
          </div>

          <div className="rentals-images">
            <img src="https://www.mashcole.com/images/about/office.jpg" />
            <img src="https://www.mashcole.com/Pictures/large/Bcode/717-01.jpg" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGT602CEVMNqf6UIPb7_-RGZ7t8CyfDzQVgA&s" />
          </div>
        </div>
      </section>
      
      {/* STATISTICS SECTION */}
      <section className="stats-section">
        <h2>DATA THAT SPEAKS</h2>
        <div className="stats-grid">
          <div className="stat-item">
            <div className="stat-number">375+</div>
            <div className="stat-label">Properties Managed</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">7,000+</div>
            <div className="stat-label">Units Managed</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">20+</div>
            <div className="stat-label">Years of Experience</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">20K+</div>
            <div className="stat-label">Credit Report A Year</div>
          </div>
        </div>
      </section>

      {/* FEATURED RENTALS */}
      <section className="featured-section">
        <div className="featured-header">
          <h2>FEATURED RENTALS</h2>
          <p>
            Explore our most popular rental properties, offering great locations, quality living,
            <br />and professional management you can count on. <a href="#">SEE ALL</a>
          </p>
        </div>

        <div className="search-bar">
          <input type="text" placeholder="City, Neighborhood, Zip Or Address" />
          <button className="filters-btn">
            Filters <span>🎚️</span>
          </button>
          <button>🔍 SEARCH</button>
        </div>

        <div className="rental-cards">
          <div className="rental-card">
            <div className="rental-image">
              <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600" alt="Rental property" />
              <div className="rental-badges">
                <span className="badge new">NEW</span>
                <span className="badge featured">Featured</span>
                <span className="badge available">Available</span>
              </div>
            </div>
            <div className="rental-info">
              <div className="rental-price">$4,250</div>
              <div className="rental-address">
                732 E. Santa Clara St.,<br />
                Ventura, CA 93001
              </div>
              <div className="rental-features">
                <div className="feature">
                  <span className="feature-icon">🛏️</span> 3
                </div>
                <div className="feature">
                  <span className="feature-icon">🚿</span> 2
                </div>
              </div>
            </div>
          </div>

          <div className="rental-card">
            <div className="rental-image">
              <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600" alt="Rental property" />
            </div>
            <div className="rental-info">
              <div className="rental-price">$1,695</div>
              <div className="rental-address">
                6737 Denny Ave.,<br />
                North Hollywood, CA 91606
              </div>
              <div className="rental-features">
                <div className="feature">
                  <span className="feature-icon">🛏️</span> 3
                </div>
                <div className="feature">
                  <span className="feature-icon">🚿</span> 2
                </div>
              </div>
            </div>
          </div>

          <div className="rental-card">
            <div className="rental-image">
              <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600" alt="Rental property" />
              <div className="rental-badges">
                <span className="badge new">NEW</span>
                <span className="badge featured">Featured</span>
                <span className="badge available">Available</span>
              </div>
            </div>
            <div className="rental-info">
              <div className="rental-price">$3,183 - $4,250</div>
              <div className="rental-address">
                8742 Orion Avenue,<br />
                North Hills, CA 91343
              </div>
              <div className="rental-features">
                <div className="feature">
                  <span className="feature-icon">🛏️</span> 3
                </div>
                <div className="feature">
                  <span className="feature-icon">🚿</span> 2
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS SECTION */}
<section className="benefits-section">
  <div className="benefits-content">
    <div className="benefits-text">
      <h2>
        The <span className="highlight">benefits</span> of our<br />
        Property management<br />
        services
      </h2>
      <p>
        Mashcole Property Management, Inc. operates within standards
        of excellence that guarantee successful management of multi-
        family operations. These principles have been entitled S.P.A.R.C. ™
        and are defined as:
      </p>
      <div className="service-highlight">
        <h3>Personal, one on one service</h3>
        <p>For <strong>Owners</strong> or <strong>Renters</strong></p>
      </div>
    </div>
    
    <div className="benefits-list">
      <div className="benefit-item">
        <span>Staff</span>
        <span className="arrow">↗</span>
      </div>
      <div className="benefit-item">
        <span>Pricing</span>
        <span className="arrow">↗</span>
      </div>
      <div className="benefit-item">
        <span>Advertising</span>
        <span className="arrow">↗</span>
      </div>
      <div className="benefit-item">
        <span>Rent Ready Units</span>
        <span className="arrow">↗</span>
      </div>
      <div className="benefit-item">
        <span>Curb appeal</span>
        <span className="arrow">↗</span>
      </div>
    </div>
  </div>
</section>

    </div>



  );
}
