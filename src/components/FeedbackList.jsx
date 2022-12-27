import React from "react";
import { useContext } from "react";
import FeedbackItem from "./FeedbackItem";
import Spinner from "./shared/Spinner";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackList({ handleDelete }) {
  const { feedback, isLoading } = useContext(FeedbackContext);

  if (!isLoading && (!feedback || feedback.length === 0)) {
    return <p>No Feedback is Present</p>;
  }

  return isLoading ? (
    <Spinner />
  ) : (
    <div className="feedback-list">
      {feedback.map((item) => (
        <FeedbackItem item={item} key={item.id} />
      ))}
    </div>
  );
}

export default FeedbackList;
