import { Helmet } from "react-helmet-async";

function Pricing() {
  return (
    <>
      <Helmet>
        <title>Pricing | FlowDesk</title>
        <meta
          name="description"
          content="Choose the perfect FlowDesk pricing plan for your business."
        />
      </Helmet>

      <section className="page">

        <h1>Pricing Plans</h1>

        <p className="page-desc">
          Flexible pricing for startups, growing teams, and enterprises.
        </p>

        <div className="page-grid">

          <div className="page-card">
            <h2>Starter</h2>
            <h3>Free</h3>

            <ul>
              <li>✔ 5 Projects</li>
              <li>✔ Basic Analytics</li>
              <li>✔ Email Support</li>
            </ul>

            <button>Get Started</button>
          </div>

          <div className="page-card">
            <h2>Pro</h2>
            <h3>$19/month</h3>

            <ul>
              <li>✔ Unlimited Projects</li>
              <li>✔ Team Collaboration</li>
              <li>✔ Priority Support</li>
            </ul>

            <button>Choose Plan</button>
          </div>

          <div className="page-card">
            <h2>Enterprise</h2>
            <h3>Custom</h3>

            <ul>
              <li>✔ Unlimited Users</li>
              <li>✔ Custom Integration</li>
              <li>✔ Dedicated Manager</li>
            </ul>

            <button>Contact Sales</button>
          </div>

        </div>

      </section>
    </>
  );
}

export default Pricing;