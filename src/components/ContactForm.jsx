function ContactForm() {
  return (
    <form className="contact-form">

      <label htmlFor="name">Full Name</label>
      <input
        id="name"
        name="name"
        type="text"
        placeholder="John Doe"
        autoComplete="name"
        required
      />

      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        placeholder="john@example.com"
        autoComplete="email"
        required
      />

      <label htmlFor="subject">Subject</label>
      <input
        id="subject"
        name="subject"
        type="text"
        placeholder="Project Inquiry"
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
  );
}

export default ContactForm;