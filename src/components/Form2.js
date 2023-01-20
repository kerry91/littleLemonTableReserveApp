import "../css/TableBooking.css";
import Hero from "./Hero";
import { NavLink } from "react-router-dom";

const Form2 = () => {
  return (
    <>
      <section>
        <Hero />
      </section>

      <section>
        <form id="form2">
          <h3>Sign in to earn points</h3>
          <input
            type="text"
            id="fname"
            name="firstname"
            placeholder="First Name"
            required
          />
          <br />
          <input
            type="text"
            id="lname"
            name="lastname"
            placeholder="Last Name"
            required
          />
          <br />
          <input
            type="tel"
            id="number"
            name="number"
            placeholder="Number"
            required
          />
          <br />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            required
          />
          <br />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            required
          />
          <br />
          <textarea
            rows="4"
            cols="50"
            form="form2"
            placeholder="Add a special request (Optional)"
            required
          />
          <br />
          <br /> <br /> <br />
          <NavLink exact to="/form3">
            <button>Lets Go</button>
          </NavLink>
        </form>
      </section>
    </>
  );
};

export default Form2;
