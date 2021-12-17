import React, { useState } from "react";
import ReplySection from "./ReplySection";

export default function App() {
  const [name, setName] = useState("Donald Duck");

  return (
    <div>
      <p className="name-tag">Name: </p>
      <input
        className="name-input"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <hr />
      <ReplySection replies={[]} name={name} />
    </div>
  );
}
