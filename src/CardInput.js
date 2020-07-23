import React from "react";

export default function CardInput(props) {
  return (
    <form>
      <label htmlFor="card-input">Card number</label>
      <input
        type="text"
        id="card-input"
      />
    </form>
  );
}