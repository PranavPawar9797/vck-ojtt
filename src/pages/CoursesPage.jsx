// src/pages/CoursesPage.jsx
import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "../styles/Pages.css";

const CoursesPage = () => {
  return (
    <>
      <Header />

      {/* Page background wrapper */}
      <div className="page-background">
        <div className="page-container">
          <main>
            {/* Introduction */}
            <section className="page-section text-center">
              <h1 className="section-title">Our Academic Programs</h1>
              <p className="section-text">
                Vivekanand College offers a comprehensive range of undergraduate
                and postgraduate programs designed to equip students with the
                knowledge and skills demanded by today's dynamic global
                landscape. Our curriculum is regularly updated to reflect
                industry trends and academic advancements.
              </p>
            </section>

            {/* Video Section */}
            <section className="page-section video-section">
              <div className="video-container">
                <video className="course-video" controls>
                  <source src="/Videos/college-tour.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="video-caption">
                  A glimpse into our vibrant campus life
                </div>
              </div>
            </section>

            {/* UG Programs */}
            <section className="page-section">
              <h2 className="section-subtitle">
                Undergraduate Programs (UG)
              </h2>
              <ul className="section-list">
                <li>
                  <strong>B.Sc.</strong>
                  <ul>
                    <li>Computer Science (3 years)</li>
                    <li>Information Technology (3 years)</li>
                    <li>Biotechnology (3 years)</li>
                  </ul>
                </li>
                <li>
                  <strong>B.Com.</strong>
                  <ul>
                    <li>Accounting & Finance (3 years)</li>
                    <li>Banking & Insurance (3 years)</li>
                  </ul>
                </li>
                <li>
                  <strong>B.A.</strong>
                  <ul>
                    <li>English Literature (3 years)</li>
                    <li>Psychology (3 years)</li>
                  </ul>
                </li>
              </ul>
            </section>

            {/* PG Programs */}
            <section className="page-section">
              <h2 className="section-subtitle">Postgraduate Programs (PG)</h2>
              <ul className="section-list">
                <li>
                  <strong>M.Sc.</strong>
                  <ul>
                    <li>Computer Science (2 years)</li>
                    <li>Information Technology (2 years)</li>
                  </ul>
                </li>
                <li>
                  <strong>M.Com.</strong> (2 years)
                </li>
                <li>
                  <strong>M.A.</strong> (2 years)
                </li>
              </ul>
            </section>

            {/* Table Section */}
            <section className="page-section">
              <h2 className="section-subtitle">
                Program Details & Fee Structure (Annual)
              </h2>
              <div className="table-responsive">
                <table className="admissions-table">
                  <thead>
                    <tr>
                      <th>Program Type</th>
                      <th>Course Name</th>
                      <th>Duration</th>
                      <th>Annual Fee (INR)</th>
                      <th>Eligibility</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>UG</td>
                      <td>B.Sc. Computer Science</td>
                      <td>3 Years</td>
                      <td>₹85,000</td>
                      <td>10+2 with PCM (50%)</td>
                    </tr>
                    <tr>
                      <td>UG</td>
                      <td>B.Com. Accounting & Finance</td>
                      <td>3 Years</td>
                      <td>₹70,000</td>
                      <td>10+2 Commerce (45%)</td>
                    </tr>
                    <tr>
                      <td>PG</td>
                      <td>M.Sc. Information Technology</td>
                      <td>2 Years</td>
                      <td>₹95,000</td>
                      <td>B.Sc. IT/CS (50%)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Vocational Courses */}
            <section className="page-section">
              <h2 className="section-subtitle">
                Specialized & Vocational Courses
              </h2>
              <p className="section-text">
                In addition to traditional degree programs, we offer various
                certificate and diploma courses in areas like Digital
                Marketing, Web Development, Data Analytics, and Soft Skills
                Development, providing specialized training for career
                enhancement.
              </p>
            </section>

            {/* CTA */}
            <section className="page-section call-to-action text-center">
              <p className="section-text">
                Have questions about a specific course?
              </p>
              <a href="/contact" className="button-primary">
                Inquire About Courses
              </a>
            </section>
          </main>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default CoursesPage;
