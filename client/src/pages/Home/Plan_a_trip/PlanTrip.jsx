import React from "react";
import "./PlanTrip.css";
const PlanTrip = () => {
  return (
    <>
     
    <div className="plan">
      <div className="plan_heading">
        <h1>Create Your <span>Trip</span></h1>
      </div>

      <div className="downSec">
      <div className="colOne">
      <div className="plan_form">
        <div className="form_item">
          
          <div className="form_heading">
            <h3>TripName</h3>
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
          <div className="dateD">
            <h3>From</h3>
            <h3>To</h3>
          </div>
          <div className="dates">
          <div className="item_input">
            <input type="date" name="" id="from_date" />
          </div>
          <div className="item_input">
            <input type="date" name="" id="to_date" />
          </div>
          </div>
        </div>
        
<button>
    Create
</button>
      </div>
      </div>
      <div className="colTwo"></div>
      </div>
    </div>
    </>
  );
};

export default PlanTrip;
