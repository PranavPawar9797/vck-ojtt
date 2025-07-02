import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Popup.css";

const Popup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const isInitialLoad = (() => {
      // Modern API
      if (window.performance && window.performance.getEntriesByType) {
        const navEntries = window.performance.getEntriesByType("navigation");
        if (navEntries.length > 0) {
          const navType = navEntries[0].type;
          return navType === "navigate" || navType === "reload";
        }
      }

      // Legacy fallback
      if (
        window.performance &&
        window.performance.navigation &&
        typeof window.performance.navigation.type !== "undefined"
      ) {
        return window.performance.navigation.type === 1; // 1 = reload
      }

      return false;
    })();

    if (isInitialLoad) {
      const timer = setTimeout(() => {
        setShowPopup(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, []); // empty dependency = only run once on app load

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
