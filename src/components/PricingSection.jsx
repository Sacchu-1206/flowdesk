import PricingCard from "./PricingCard";

function PricingSection() {
  return (
    <section className="pricing-section">

      <div className="section-title">
        <h2>Simple Pricing</h2>
        <p>Choose the plan that fits your team.</p>
      </div>

      <div className="pricing-grid">

        <PricingCard
          title="Starter"
          price="Free"
          features={[
            "Up to 5 Projects",
            "Basic Analytics",
            "Email Support",
          ]}
          buttonText="Start Free"
        />

        <PricingCard
          title="Pro"
          price="$19/mo"
          features={[
            "Unlimited Projects",
            "Advanced Analytics",
            "Priority Support",
          ]}
          buttonText="Choose Plan"
        />

        <PricingCard
          title="Enterprise"
          price="Custom"
          features={[
            "Unlimited Team Members",
            "Dedicated Manager",
            "Custom Integrations",
          ]}
          buttonText="Contact Sales"
        />

      </div>
    </section>
  );
}

export default PricingSection;