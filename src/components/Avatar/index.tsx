import React from "react";

function Avatar({ url }: { url: string | undefined }) {
  return (
    <div className="avatar">
      <img src={url} alt="Preview" />
    </div>
  );
}

export default Avatar;
