import React from "react";
import ReplySection from "./ReplySection";

export default function CommentComp({ comment, name }) {
  return (
    <div className="comment">
      <p className="name">{comment.name}: </p>
      <p className="message">{comment.message}</p>
      <ReplySection replies={comment.replies} name={name} />
    </div>
  );
}
