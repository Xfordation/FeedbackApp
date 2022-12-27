import React from "react";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";
import PropTypes from "prop-types";
function FeedbackStats() {
  const { feedback } = useContext(FeedbackContext);
  // Calculate Average Rating
  let average =
    feedback.reduce((acc, cur) => acc + cur.rating, 0) / feedback.length;
  average = average.toFixed(1).replace(/[.,]0$/, "");
  return (
    <div className="feedback-stats">
      <h4>Total Feedbacks: {feedback.length}</h4>
      <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  );
}

FeedbackStats.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    })
  ),
};

export default FeedbackStats;
