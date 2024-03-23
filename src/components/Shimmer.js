// Fake page
import React from "react";
export default function () {
  return (
    <div className="shimmer-container">
      {[...Array(16)].map((x, i) => (
        <div className="shimmer-box" key={i}>
          loding
        </div>
      ))}
    </div>
  );
}
