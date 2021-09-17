import React from "react";

export default function Form() {
  return (
    <>
      <h1>Form Page</h1>
      <form id="pizza-form">
        <label>
          Name:
          <input id="name-input" type="text" name="name" />
        </label>
      </form>
    </>
  );
}
