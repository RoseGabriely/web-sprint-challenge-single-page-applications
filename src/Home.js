import { Route, Link } from "react-router-dom";
import Form from "./Form";

export default function Home() {
  return (
    <>
      <h1>Home Page</h1>
      <Link to="/pizza" id="order-pizza">
        <button>Order Pizza Form</button>
      </Link>
    </>
  );
}
