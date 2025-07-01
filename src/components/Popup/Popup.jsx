import { useState, useEffect } from "react";
import "./Popup.css";

const Popup = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    let navType = null;

    if (window.performance && window.performance.getEntriesByType) {
      const navEntries = window.performance.getEntriesByType("navigation");
      navType = navEntries.length > 0 ? navEntries[0].type : null;
    }

    // Fallback for older browsers
    let legacyNavType = null;
    if (
      window.performance &&
      window.performance.navigation &&
      typeof window.performance.navigation.type !== "undefined"
    ) {
      legacyNavType = window.performance.navigation.type;
    }

    const isHardLoad =
      navType === "navigate" ||
      navType === "reload" ||
      legacyNavType === 1;

    if (isHardLoad) {
      const timer = setTimeout(() => {
        setShowPopup(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, []);

  const closePopup = () => {
    setShowPopup(false);
  };

  if (!showPopup) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-box">
        <button className="popup-close" onClick={closePopup} aria-label="Close popup">
          &times;
        </button>
        <img
          src="/Images/dev-profile.jpg"
          alt="Developer Pranav Pawar"
          className="popup-avatar"
          loading="lazy"
        />
        <h3>Developed & Deployed by:</h3>
        <h2 className="popup-name">Pranav Sanjay Pawar</h2>
        <p>
          Learned so much during this OJT! This app showcases my independent
          coding and deployment skills.
        </p>
        <button className="popup-button" onClick={closePopup}>
          Got it!
        </button>
      </div>
    </div>
  );
};

export default Popup;
