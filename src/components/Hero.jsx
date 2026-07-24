import dashboard from "../assets/images/dashboard.png";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">

        <span className="badge">
          Trusted by 10,000+ Teams
        </span>

        <h1>
          Manage Your Projects with
          <span> FlowDesk</span>
        </h1>

        <p>
          FlowDesk is an all-in-one project management platform that helps
          teams organize tasks, collaborate efficiently, and deliver projects
          on time.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">
            Start Free Trial
          </button>
        </div>

      </div>

      <div className="hero-image">
        <img
          src={dashboard}
          alt="FlowDesk Dashboard"
        />
      </div>
    </section>
  );
}

export default Hero;