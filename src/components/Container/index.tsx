import React from "react";
import "./style.css";

export default function Container({ children }: { children: React.ReactNode }) {
  return <div className="container">{children}</div>;
}
