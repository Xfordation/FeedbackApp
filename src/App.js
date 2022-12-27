import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import "./index.css";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./components/pages/AboutPage";
import { FeedbackProvider } from "./context/FeedbackContext";
import AboutIconLink from "./components/AboutIconLink";

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header text={"FeedBack UI"} />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <React.Fragment>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </React.Fragment>
              }
            />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
          <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
