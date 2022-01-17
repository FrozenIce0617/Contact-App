import React from "react";
import "./style.css";

function Avatar({ url }: { url: string | undefined }) {
  return (
    <div className="avatar">
      <img src={url} alt="Preview" />
    </div>
  );
}

export default Avatar;
