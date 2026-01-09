

export default function Body() {
  return (
    <div className="body-container">

      {/* TOP SECTION */}
      <section className="top-section">

        {/* HERO */}
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

        {/* SIDE CARDS */}
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

      {/* BOTTOM SECTION */}
      <section className="bottom-section">

        <div className="office-card">
          <h3>Offices in California</h3>
          <p>📍 26901 Agoura Road, Suite 250, Calabasas, CA 91301</p>
          <p>📍 3846 E Anaheim St, Long Beach, CA 90804</p>
          <p>📞 (818) 888-8052</p>
        </div>

        <div className="rentals-card">
          <div className="rentals-info">
            <h3>Find Rentals</h3>
            <p>
              With more than 7000 units available in the Greater Los Angeles area,
              we can help you find the right one for you.
            </p>
            <button className="btn white">
              SEE ALL RENTAL LISTINGS
            </button>
          </div>

          <div className="rentals-images">
            <img src="https://picsum.photos/300/200?1" alt="Rental" />
            <img src="https://picsum.photos/300/200?2" alt="Rental" />
            <img src="https://picsum.photos/300/200?3" alt="Rental" />
          </div>
        </div>

      </section>

    </div>
  );
}
