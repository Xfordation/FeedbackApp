import React from "react";
import Card from "../shared/Card";
import { Link } from "react-router-dom";
import Button from "../shared/Button";
function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h3>AboutPage</h3>
        <Link to="/">
          <Button>Home</Button>
        </Link>
      </div>
    </Card>
  );
}

export default AboutPage;
