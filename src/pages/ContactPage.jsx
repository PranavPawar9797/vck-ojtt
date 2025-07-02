// src/pages/ContactPage.jsx
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "../styles/Pages.css";

const ContactPage = () => {
  return (
    <>
      <Header />

      {/* Page background wrapper */}
      <div className="page-background">
        <div className="page-container contact-page">
          <main className="page-content-wrapper">
            {/* Intro Section */}
            <section className="page-section text-center">
              <h1 className="section-title-large">Contact Us</h1>
              <p className="section-text">
                We'd love to hear from you! Whether you have questions about
                admissions, programs, or campus life, our team is here to help.
              </p>
            </section>

            {/* General Enquiries */}
            <section className="page-section">
              <h2 className="section-subtitle">General Enquiries</h2>
              <p className="section-text">
                <strong>Vivekanand College, Tarabai Park</strong>
                <br />
                2130, E Ward, Tarabai Park, Kolhapur, Maharashtra 416003
                <br />
                Phone: +91-9876543210
                <br />
                Email: info@vivekanandcollege.ac.in
              </p>
            </section>

            {/* Admissions Office */}
            <section className="page-section">
              <h2 className="section-subtitle">Admissions Office</h2>
              <p className="section-text">
                For all admission-related queries regarding undergraduate or
                postgraduate programs:
                <br />
                Phone: +91 98765 43210
                <br />
                Email: admissions@vivekanandcollege.edu
              </p>
            </section>

            {/* Student Support */}
            <section className="page-section">
              <h2 className="section-subtitle">Student Support Services</h2>
              <p className="section-text">
                For current student support, academic advising, or general
                assistance:
                <br />
                Phone: +91 87654 32109
                <br />
                Email: studentsupport@vivekanandcollege.edu
              </p>
            </section>

            {/* Map Section */}
            <section className="page-section">
              <h2 className="section-subtitle">Find Us on Map</h2>
              <div className="map-container">
                <iframe
                  title="Vivekanand College Kolhapur Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.2905156357306!2d74.23603477514976!3d16.712350184064235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc100664ad0e191%3A0x4b2af9253659bbec!2sVivekanand%20College!5e0!3m2!1sen!2sin!4v1750577171252!5m2!1sen!2sin"
                  width="100%"
                  height="350"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  style={{ border: 0 }}
                ></iframe>
              </div>
            </section>

            {/* Message Box */}
            <section className="page-section">
              <h2 className="section-subtitle">Send Us a Message</h2>
              <p className="section-text">
                [A contact form with fields for Name, Email, Subject, Message
                can be added here.]
              </p>
            </section>
          </main>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ContactPage;
