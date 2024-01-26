import React, { useState } from "react";
import ReactFlipCard from "@holbech/react-flip-card";

function Card(props) {
  const [showBack, setShowBack] = useState(props.showBack);

  return (
    <div style={{ "--width": "500px", "--height": "500px" }}>
      <ReactFlipCard showBack={showBack}>
        <img
          src="https://source.unsplash.com/random"
          alt="Random Unsplash"
          style={{
            aspectRatio: "1/1",
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        <img
          src="https://source.unsplash.com/random?sig=1"
          alt="Random Unsplash"
          style={{
            aspectRatio: "1/1",
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </ReactFlipCard>
      <input
        type="checkbox"
        checked={showBack}
        onChange={() => setShowBack(!showBack)}
        style={{
          marginTop: "2rem",
          width: "2rem",
          height: "2rem",
        }}
      />
    </div>
  );
}

export default Card;
