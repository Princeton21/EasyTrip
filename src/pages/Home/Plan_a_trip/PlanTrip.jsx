import React from "react";
import "./PlanTrip.css";
const PlanTrip = () => {
  return (
    <div className="plan_bg">
      <div className="plan_heading">
        <h1>Create Your Trip</h1>
      </div>
      <div className="plan_form">
        <div className="form_item">
          <div className="form_heading">
            <h3>Trip Name</h3>
          </div>
          <div className="item_input">
            <input type="text" name="trip_name" id="trip_name" />
          </div>
        </div>
        <div className="form_item">
          <div className="form_heading">
            <h3>Destination</h3>
          </div>
          <div className="item_input">
            <input type="text" name="" id="destination" />
          </div>
        </div>
        <div className="form_item_special">
          <div className="form_heading">
            <h3>From</h3>
          </div>
          <div className="item_input">
            <input type="date" name="" id="from_date" />
          </div>
          <div className="form_heading">
            <h3>To</h3>
          </div>
          <div className="item_input">
            <input type="date" name="" id="to_date" />
          </div>
        </div>
        <div className="plan_button">
          <button type="submit">Create</button>
        </div>
      </div>
    </div>
  );
};

export default PlanTrip;
