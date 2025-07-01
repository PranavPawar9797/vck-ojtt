// src/pages/AdmissionPage.jsx
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "../styles/Pages.css"; // Ensure this is imported for page-container styles

const AdmissionPage = () => {
  return (
    <> {/* Use a React Fragment here */}
      <Header /> {/* Header is now outside page-container */}

      <div className="page-container admission-page"> {/* The rest of your page content remains within page-container */}
        <main className="page-content-wrapper">
          <section className="page-section">
            <h1 className="section-title-large text-center">
              Admission Information
            </h1>

            <p className="section-text text-center">
              Welcome to Vivekanand College! We are delighted that you are considering joining our vibrant academic community.
              Our admission process is designed to be simple, transparent, and student-friendly.
            </p>

            <h2 className="section-subtitle">Admission Process</h2>
            <ol className="section-list">
              <li>Fill out the online application form.</li>
              <li>Submit required academic documents and ID proof.</li>
              <li>Pay the application fee online or at the office.</li>
              <li>Attend counseling/interview if applicable.</li>
              <li>Confirm admission by paying the program fees.</li>
            </ol>

            <h2 className="section-subtitle">Eligibility Criteria</h2>
            <ul className="section-list">
              <li><strong>Undergraduate Programs:</strong> 10+2 pass with minimum 45% (varies by program)</li>
              <li><strong>Postgraduate Programs:</strong> Relevant Bachelor's degree with minimum 50%</li>
              <li><strong>Diploma/Certificate Courses:</strong> Open to all with basic qualification</li>
            </ul>

            <h2 className="section-subtitle">Documents Required</h2>
            <ul className="section-list">
              <li>10th & 12th Marksheet</li>
              <li>Graduation Marksheet (for PG applicants)</li>
              <li>Aadhar Card or Valid Photo ID</li>
              <li>Passport-size Photographs</li>
            </ul>

            <div className="text-center">
              <a href="/admission-form" className="button-primary">
                Apply Online
              </a>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default AdmissionPage;