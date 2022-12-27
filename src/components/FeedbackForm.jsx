import React from "react";
import { useState, useContext, useEffect } from "react";
import RatingSelect from "./RatingSelect";
import Card from "./shared/Card";
import Button from "./shared/Button";
import FeedbackContext from "../context/FeedbackContext";
function FeedbackForm() {
  // State
  const [text, setText] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [rating, setRating] = useState(10);
  const [message, setMessage] = useState("");

  // Context
  const { addFeedback, FeedbackEdit, updateFeedback } =
    useContext(FeedbackContext);

  useEffect(() => {
    if (FeedbackEdit.edit === true) {
      setBtnDisabled(false);
      setText(FeedbackEdit.item.text);
      setRating(FeedbackEdit.item.rating);
    }
  }, [FeedbackEdit]);

  const handelTextChange = (e) => {
    setText(e.target.value);
    if (text === "") {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== "" && text.trim().length <= 10) {
      setBtnDisabled(true);
      setMessage("Text must be at least 10 Characters ");
    } else {
      setBtnDisabled(false);
      setMessage(null);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      };
      if (FeedbackEdit.edit === true) {
        updateFeedback(FeedbackEdit.item.id, newFeedback);
      } else {
        addFeedback(newFeedback);
      }
      setText("");
    }
  };
  return (
    <div>
      <Card>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              name="review"
              id="review"
              placeholder="Write a review"
              onChange={handelTextChange}
              value={text}
            />
            <Button type={"submit"} isDisabled={btnDisabled}>
              Send
            </Button>
          </div>
          {message && <div className="message">{message}</div>}
        </form>
      </Card>
    </div>
  );
}

export default FeedbackForm;
