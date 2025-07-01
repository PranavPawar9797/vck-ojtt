// src/App.jsx
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import AdmissionPage from "./pages/AdmissionPage";
import CoursesPage from "./pages/CoursesPage";
import NotFoundPage from "./pages/NotFoundPage";
import ContactPage from "./pages/ContactPage";
import ChatbotComponent from "./components/Chatbot/ChatbotComponents";
import Popup from "./components/Popup/Popup"; // ✅ Add this

import './App.css';
import './styles/Pages.css';

const App = () => {
  return (
    <Router>
      <Popup /> {/* ✅ Popup rendered ONCE on initial load */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/admission" element={<AdmissionPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/notfound" element={<NotFoundPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <ChatbotComponent />
    </Router>
  );
};

export default App;
