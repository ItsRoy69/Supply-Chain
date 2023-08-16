import React, { useState } from "react";
import "./feedcard.css";
import feed_avatar from "../../assets/avatar2.png";
import heart_filled from "../../assets/heart_filled.png";
import { TeamFinderCard } from "./TeamFinderCard";

export const FeedCard = () => {
  const [modal, setModal] = useState(false);

  return (
    <div className="feed-card" id={modal ? "blurr" : null}>
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
      <div className="feed-cardbottom">
        <div className="feed-cardbtn" onClick={() => setModal(true)}>
          {modal && <TeamFinderCard setModal={setModal} />}
          <p>Connect</p>
        </div>

        <div className="feed-cardlike">
          <img src={heart_filled} alt="liked" />

          <p className="likes">10</p>
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
