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

    </div>
  );
}
