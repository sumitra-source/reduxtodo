import React from "react";
import PostShare from "../PostShared/PostShare";
import Posts from "../Posts/Posts";
import "./PostSide.css";
const PostSide = () => {
  return (
    <div className="PostSide">
      <PostShare />
      <Posts />
    </div>
  );
};

export default PostSide;
