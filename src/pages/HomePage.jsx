// src/pages/HomePage.jsx
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Link } from "react-router-dom";
import "../styles/Pages.css";

const HomePage = () => {
  return (
    <>
      <Header />

      {/* Full-width wrapper with background */}
      <div className="page-background">
        <div className="page-container">
          <main>
            {/* Hero Banner */}
            <section className="page-section text-center banner-section">
              <div className="banner-container">
                <img
                  src="/Images/college-banner_720.png"
                  alt="Vivekanand College banner"
                  className="hero-image"
                  loading="lazy"
                />
                <div className="banner-text">
                  <h1 className="section-title-large">
                    Welcome to Vivekanand College!
                  </h1>
                  <p className="section-text">
                    Your journey to excellence starts here.
                  </p>
                  <Link to="/admission" className="apply-btn-green">
                    Apply Now!
                  </Link>
                </div>
              </div>
            </section>

            {/* About Section */}
            <section className="page-section fade-in">
              <div className="page-content-wrapper">
                <p className="section-text">
                  <strong>Vivekanand College</strong> is a premier educational
                  institution dedicated to fostering academic excellence,
                  innovation, and holistic development. Established in 1980, we
                  have proudly served generations of students, empowering them
                  to achieve their full potential.
                </p>
                <p className="section-text">
                  At Vivekanand College, we believe in a vibrant learning
                  environment that extends beyond textbooks. Our
                  state-of-the-art facilities, experienced faculty, and diverse
                  student community create a unique ecosystem where curiosity
                  thrives and future leaders are shaped.
                </p>
              </div>
            </section>

            {/* Why Choose Us */}
            <section className="page-section fade-in">
              <div className="page-content-wrapper">
                <h2 className="section-subtitle">
                  Why Choose Vivekanand College?
                </h2>
                <ul className="section-list">
                  <li>
                    <strong>Legacy of Excellence:</strong> Decades of quality
                    education.
                  </li>
                  <li>
                    <strong>Experienced Faculty:</strong> Renowned experts in
                    their fields.
                  </li>
                  <li>
                    <strong>Modern Facilities:</strong> Fully equipped labs,
                    library, and campus.
                  </li>
                  <li>
                    <strong>Holistic Development:</strong> Co-curricular
                    activities and sports.
                  </li>
                  <li>
                    <strong>Strong Placements:</strong> Opportunities in top
                    companies.
                  </li>
                </ul>
              </div>
            </section>

            {/* Campus Life */}
            <section className="page-section fade-in">
              <div className="page-content-wrapper">
                <h2 className="section-subtitle">Campus Life & Facilities</h2>
                <div className="grid-2">
                  <img
                    src="/Images/students-studying_720.jpg"
                    alt="Students studying in campus library"
                    className="campus-img"
                    loading="lazy"
                  />
                  <img
                    src="/Images/campus-life_360.jpg"
                    alt="View of college campus"
                    className="campus-img"
                    loading="lazy"
                  />
                </div>
                <p className="section-text" style={{ marginTop: "1.5rem" }}>
                  Explore our vibrant campus and state-of-the-art facilities
                  that support your academic and personal growth.
                </p>
              </div>
            </section>

            {/* Call to Action */}
            <section className="page-section text-center fade-in">
              <p className="section-text" style={{ marginBottom: "1rem" }}>
                Have questions about a specific course?
              </p>
              <Link to="/courses" className="inquire-button">
                Explore Courses
              </Link>
            </section>
          </main>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default HomePage;
