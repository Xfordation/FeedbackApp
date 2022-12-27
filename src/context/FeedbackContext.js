import React from "react";
import { createContext } from "react";
import { useState, useEffect } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [feedback, setFeedback] = useState([]);
  const [FeedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  useEffect(() => {
    fetchFeedback();
  }, []);
  // Fetch Data From BackEnd
  const fetchFeedback = async () => {
    const response = await fetch(`http://localhost:5000/feedback`);
    const data = await response.json();
    setFeedback(data);
    setIsLoading(false);
  };

  // Add a New Feedback To the List
  const addFeedback = async (newFeedback) => {
    // newFeedback.id = Math.floor(Math.random() * 100 + 1);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    var urlencoded = new URLSearchParams();
    urlencoded.append("rating", newFeedback.rating);
    urlencoded.append("text", newFeedback.text);
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
    };

    const response = await fetch(
      `http://localhost:5000/feedback`,
      requestOptions
    );
    const data = await response.json();

    setFeedback([data, ...feedback]);
  };

  // Delete selected Feedback from the List
  const deleteFeedback = async (id) => {
    if (window.confirm("Are your sure you want to Delete this Feedback")) {
      await fetch(`http://localhost:5000/feedback/${id}`, { method: "DELETE" });
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  // Edit selected Feedback
  const editFeedback = (item) => {
    setFeedbackEdit({ item, edit: true });
  };

  // Update Currently Editing Feedback
  const updateFeedback = async (id, updtItem) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    console.log(updtItem);
    var urlencoded = new URLSearchParams();
    urlencoded.append("rating", updtItem.rating);
    urlencoded.append("text", updtItem.text);

    var requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
    };

    const response = await fetch(
      `http://localhost:5000/feedback/${id}`,
      requestOptions
    );

    const data = await response.json();

    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...data } : item))
    );
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        FeedbackEdit,
        isLoading,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
