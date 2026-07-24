function PricingCard({ title, price, features, buttonText }) {
  return (
    <div className="pricing-card">
      <h3>{title}</h3>

      <h2>{price}</h2>

      <ul>
        {features.map((feature, index) => (
          <li key={index}>✔ {feature}</li>
        ))}
      </ul>

      <button>{buttonText}</button>
    </div>
  );
}

export default PricingCard;