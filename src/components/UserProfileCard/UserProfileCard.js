import React from "react";
import "./UserProfileCard.css";

const UserProfileCard = (props) => {
  return (
    <>
      {props.user !== null && (
        <div className="userProfileCard">
          <img src={props.user.avatar} alt="user_avatar" />
          <p className="cardUserName">
            {props.user.first_name + " " + props.user.last_name}
            <span className="userDot">&#729;</span>
          </p>
          <p className="cardUserEmail">{props.user.email}</p>
          <p className="cardUserPlan">Your Plan: Standard</p>
          <button>Active User</button>
          <label className="cardUserPlanUsage">Plan Uses</label>
          <div className="totalPlanUsage">
            <div className="currentPlanUsage"></div>
          </div> 
          <div className="clicksNumWrapper">
            <div className="clicksReviewed">
              <div className="clicksNum1">2,450</div>
              <div className="clicksNumText1">clicks reviewed</div>
            </div>
            <div className="clicksVerticleLine"></div>
            <div className="monthlyClicks">
              <div className="clicksNum2">5000</div>
              <div className="clicksNumText2">Monthly clicks</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UserProfileCard;
