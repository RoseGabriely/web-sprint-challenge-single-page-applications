import React from "react";

export default function Form() {
  return (
    <>
      <h1>Form Page</h1>
      <form id="pizza-form">
        <label>
          Name:
          <input id="name-input" type="text" name="name" />
          Select a size:
          <select id="size-dropdown" name="size">
            <option name=""></option>
            <option name="size1">Small</option>
            <option name="size2">Medium</option>
            <option name="size3">Large</option>
          </select>
          Select Toppings:
          <input type="checkbox" name="topping1" /> Corn
          <input type="checkbox" name="topping2" /> Olives
          <input type="checkbox" name="topping3" /> Extra Cheese
          <input type="checkbox" name="topping4" /> Peppers Special
          Instructions:
          <input id="special-text" type="text" name="special" />
          <button id="order-button">Add to Order</button>
        </label>
      </form>
    </>
  );
}
