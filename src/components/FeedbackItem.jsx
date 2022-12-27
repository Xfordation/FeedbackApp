import React from "react";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";
import Card from "./shared/Card";
import PropTypes from "prop-types";
import { FaTimes, FaEdit } from "react-icons/fa";
function FeedbackItem({ item }) {
  const { rating, text, id } = item;
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext);

  return (
    <Card>
      <div className="num-display">{rating}</div>
      <button className="close" onClick={() => deleteFeedback(id)}>
        <FaTimes color="purple" />
      </button>
      <button className="edit" onClick={() => editFeedback(item)}>
        <FaEdit color="purple" />
      </button>
      <div className="text-display">{text}</div>
    </Card>
  );
}
FeedbackItem.propType = {
  item: PropTypes.object.isRequired,
};
export default FeedbackItem;
