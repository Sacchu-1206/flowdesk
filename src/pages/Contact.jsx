import { Helmet } from "react-helmet-async";

function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact | FlowDesk</title>

        <meta
          name="description"
          content="Contact the FlowDesk team for product demos, support, or sales."
        />
      </Helmet>

      <section className="page">

        <h1>Contact Us</h1>

        <p className="page-desc">
          We'd love to hear from you.
        </p>

        <form className="contact-form">

          <label htmlFor="name">Full Name</label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="John Doe"
            required
          />

          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="john@email.com"
            required
          />

          <label htmlFor="subject">Subject</label>
          <input
            id="subject"
            name="subject"
            type="text"
            placeholder="Subject"
            required
          />

          <label htmlFor="message">Message</label>

          <textarea
            id="message"
            name="message"
            rows="6"
            placeholder="Write your message..."
            required
          />

          <button type="submit">
            Send Message
          </button>

        </form>

      </section>
    </>
  );
}

export default Contact;