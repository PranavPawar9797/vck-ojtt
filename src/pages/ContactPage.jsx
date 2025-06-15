import Header from "../components/Header/Header"; 

const ContactPage = () => {
  return (
    <>
      <Header />
      <div className="container">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you! Whether you have questions about admissions, programs, or campus life, our team is here to help.</p>

        <h2>General Enquiries</h2>
        <p>
          <strong>Vivekanand College Main Campus</strong><br />
          Mahatma Gandhi Road, Chembur, Mumbai, Maharashtra 400071<br />
          India
        </p>
        <p>
          Phone: <strong>+91 12345 67890</strong><br />
          Email: <strong>info@vivekanandcollege.edu</strong><br />
          Office Hours: Monday - Friday, 9:00 AM - 5:00 PM IST
        </p>

        <h2>Admissions Office</h2>
        <p>
          Phone: +91 98765 43210<br />
          Email: <strong>admissions@vivekanandcollege.edu</strong>
        </p>

        <h2>Student Support Services</h2>
        <p>
          Phone: +91 87654 32109<br />
          Email: <strong>studentsupport@vivekanandcollege.edu</strong>
        </p>

        <h2>Find Us on the Map</h2>
        <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer">View on Google Maps</a>

        <h2>Send Us a Message</h2>
        <form>
          <label>Name:</label><br />
          <input type="text" name="name" required /><br />

          <label>Email:</label><br />
          <input type="email" name="email" required /><br />

          <label>Subject:</label><br />
          <input type="text" name="subject" /><br />

          <label>Message:</label><br />
          <textarea name="message" rows="4" required></textarea><br />

          <button type="submit">Send</button>
        </form>
      </div>
    </>
  );
};

export default ContactPage;
