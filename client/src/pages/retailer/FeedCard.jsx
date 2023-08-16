import React from "react";
import "./feedcard.css";
import feed_avatar from "../../assets/avatar2.png";

export const FeedCard = () => {
  return (
    <div className="feed-card">
      <div className="delete-card"></div>

      <div className="feed-cardleft">
        <img src={feed_avatar} alt="Avatar" className="feed_avatar" />
      </div>
      <div className="feed-cardright">
        <p className="feed-name">post.name</p>
        <p className="feed-time">12.43.415</p>
        <div className="feed-description">
          <p className="feed-title">title</p>
          <div className="feedskills">
            <p>Skills Required: </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
