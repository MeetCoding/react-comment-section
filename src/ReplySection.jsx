import React, { useState } from "react";
import Comment from "./Comment";
import CommentComp from "./CommentComp";

export default function ReplySection({ replies, name }) {
  const [message, setMessage] = useState("");
  const [_replies, _setReplies] = useState(replies);

  const handleChange = (e) => setMessage(e.target.value);

  const handleClick = () => {
    if (message === "") return;
    const comment = new Comment(name, message);
    _setReplies([..._replies, comment]);
    setMessage("");
  };

  return (
    <div className="replies">
      <h3 className="reply-heading">Replies</h3>
      <div className="reply-form">
        <input
          type="text"
          placeholder="Type your reply"
          value={message}
          onChange={handleChange}
        />
        <button onClick={handleClick}>Reply</button>
      </div>
      {_replies.map((reply) => (
        <CommentComp comment={reply} name={name} />
      ))}
    </div>
  );
}
