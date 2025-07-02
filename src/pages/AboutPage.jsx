// src/pages/AboutPage.jsx
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "../styles/Pages.css";

const AboutPage = () => {
  return (
    <>
      <Header />

      {/* Full background wrapper */}
      <div className="page-background">
        <div className="page-container about-page">
          <main className="page-content-wrapper">
            <div className="page-section">
              <h1 className="section-title-large text-center">
                About Vivekanand College
              </h1>

              <p className="section-text">
                Vivekanand College stands as a beacon of knowledge and
                integrity, committed to delivering transformative education
                since its inception in <strong>1980</strong>. Located in the
                bustling heart of <strong>Kolhapur, Maharashtra</strong>, our
                college has consistently strived to uphold the highest
                standards of academic rigor and ethical values.
              </p>

              <p className="section-text">
                Our vision is to empower students with critical thinking skills,
                a global perspective, and a strong sense of social
                responsibility. We aim to nurture individuals who are not only
                successful in their careers but also contributing members of
                society.
              </p>

              <h2 className="section-subtitle">Our Mission</h2>
              <ul className="section-list">
                <li>
                  To provide high-quality, accessible education across various
                  disciplines.
                </li>
                <li>
                  To foster research, innovation, and creativity among students
                  and faculty.
                </li>
                <li>
                  To cultivate a diverse and inclusive learning environment.
                </li>
                <li>
                  To instill strong ethical values and leadership qualities.
                </li>
              </ul>

              <h2 className="section-subtitle">Our Values</h2>
              <p className="section-text">
                Integrity, Excellence, Innovation, Community, and Respect are
                the pillars upon which Vivekanand College is built. We encourage
                open dialogue, intellectual curiosity, and a relentless pursuit
                of knowledge.
              </p>

              <h2 className="section-subtitle">Our History</h2>
              <p className="section-text">
                Our journey began with a vision to make quality education
                available to all. Established in 1980 with a handful of courses,
                Vivekanand College has grown significantly over the years,
                introducing new disciplines, state-of-the-art facilities, and a
                dedicated faculty. We are proud of our alumni who have excelled
                in various fields, contributing to society nationally and
                globally. We continue to build upon this legacy of excellence
                and accessibility.
              </p>
            </div>
          </main>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AboutPage;
