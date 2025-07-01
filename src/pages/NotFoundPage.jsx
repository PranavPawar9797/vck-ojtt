// src/pages/NotFoundPage.jsx
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer"; // Import the Footer component
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="page-container not-found-page"> {/* Apply 'page-container' and 'not-found-page' classes */}
      <Header />

      <main className="content"> {/* Specific content class for 404 page layout */}
        <h1 className="not-found-heading">404</h1> {/* Specific class for 404 number */}
        <h2 className="not-found-subheading">
          Page Not Found
        </h2>
        <p className="not-found-text">
          Oops! The page you’re looking for doesn’t exist.
        </p>
        <Link
          to="/"
          className="button-secondary" /* Apply secondary button style */
        >
          Go to Home
        </Link>
      </main>

      <Footer /> {/* Include the Footer component */}
    </div>
  );
};

export default NotFoundPage;
