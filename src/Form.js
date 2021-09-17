import React, { useEffect, useState } from "react";
import * as yup from "yup";
import axios from "axios";

const initialValues = {
  name: "",
  size: "",
  topping1: false,
  topping2: false,
  topping3: false,
  topping4: false,
  special: "",
};

const schema = yup.object().shape({
  name: yup
    .string()
    .required("Name is required!")
    .min(2, "name must be at least 2 characters"),
  size: yup.string().oneOf(["1", "2", "3"], "You must pick a size!"),
  topping1: yup.boolean(),
  topping2: yup.boolean(),
  topping3: yup.boolean(),
  topping4: yup.boolean(),
  special: yup.string(),
});

export default function Form() {
  const [inputs, setInputs] = useState(initialValues);
  const [disabled, setDisabled] = useState(true);
  const [errors, setErrors] = useState({
    name: "",
    size: "",
  });

  useEffect(() => {
    schema.isValid(inputs).then((valid) => setDisabled(!valid));
  }, [inputs]);

  const setInputErrors = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => setErrors({ ...errors, [name]: "" }))
      .catch((err) => setErrors({ ...errors, [name]: err.errors[0] }));
  };

  const onChange = (event) => {
    const { name, value, checked, type } = event.target;
    const updatedInputs = type === "checkbox" ? checked : value;
    setInputErrors(name, updatedInputs);
    setInputs({ ...inputs, [name]: updatedInputs });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const newOrder = {
      name: inputs.name.trim(),
      size: inputs.size,
      topping1: inputs.topping1,
      topping2: inputs.topping2,
      topping3: inputs.topping3,
      topping4: inputs.topping4,
      special: inputs.special.trim(),
    };
    axios
      .post("https://reqres.in/api/orders", newOrder)
      .then((res) => {
        setInputs(initialValues);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <h1>Form Page</h1>
      <p style={{ color: "red" }}>{errors.name}</p>
      <p style={{ color: "red" }}>{errors.size}</p>
      <form id="pizza-form" onSubmit={onSubmit}>
        <label>
          Name:
          <input
            onChange={onChange}
            id="name-input"
            type="text"
            name="name"
            value={inputs.name}
          />
          <br />
          Select a size:
          <select
            onChange={onChange}
            id="size-dropdown"
            name="size"
            value={inputs.size}
          >
            <option value=""></option>
            <option value="1">Small</option>
            <option value="2">Medium</option>
            <option value="3">Large</option>
          </select>
          Select Toppings: <br />
          Peppers
          <input
            onChange={onChange}
            type="checkbox"
            name="topping1"
            checked={inputs.topping1}
          />{" "}
          Corn
          <input
            onChange={onChange}
            type="checkbox"
            name="topping2"
            checked={inputs.topping2}
          />{" "}
          Olives
          <input
            onChange={onChange}
            type="checkbox"
            name="topping3"
            checked={inputs.topping3}
          />{" "}
          Extra Cheese
          <input
            onChange={onChange}
            type="checkbox"
            name="topping4"
            checked={inputs.topping4}
          />{" "}
          <br />
          Peppers Special Instructions:
          <input
            onChange={onChange}
            id="special-text"
            type="text"
            name="special"
            value={inputs.special}
          />
          <br />
          <button id="order-button" disabled={disabled}>
            Add to Order
          </button>
        </label>
      </form>
    </>
  );
}
