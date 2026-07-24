import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-about">
          <h2>FlowDesk</h2>

          <p>
            FlowDesk is a modern SaaS platform that helps businesses manage
            projects, collaborate with teams, and improve productivity.
          </p>
        </div>

        <div className="footer-links">

          <h3>Quick Links</h3>

          <Link to="/">Home</Link>
          <Link to="/product">Product</Link>
          <Link to="/pricing">Pricing</Link>
          <Link to="/contact">Contact</Link>

        </div>

        <div className="footer-contact">

          <h3>Contact</h3>

          <p>support@flowdesk.com</p>
          <p>+91 9876543210</p>
          <p>Indore, Madhya Pradesh</p>

        </div>

      </div>

      <div className="footer-bottom">

      <p>
         © {new Date().getFullYear()} FlowDesk. All Rights Reserved.
      </p>

        <p>
          <a
            href="https://digitalheroesco.com"
            target="_blank"
            rel="noreferrer"
          >
            Built for Digital Heroes Training Task
          </a>
        </p>

      </div>

    </footer>
  );
}

export default Footer;