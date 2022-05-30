import React from "react";
import "./FollowerCard.css";
import { Followers } from "../../Data/FollowersData";

const FollowerCard = () => {
  return (
    <div className="FollowersCard">
      <h3>Who is Following You?</h3>
      {Followers.map((follower, id) => {
        return (
          <div className="follower">
            <div>
              <img src={follower.img} alt="" className="followerImage" />

              <div className="Name">
                <span>{follower.name}</span>
                <span>@{follower.username}</span>
              </div>
            </div>
            <button className="button fc-button">Follow</button>
          </div>
        );
      })}
    </div>
  );
};

export default FollowerCard;
