import "../css/TableBooking.css";
import Hero from "./Hero";
import { NavLink } from "react-router-dom";

const Form3 = () => {
  return (
    <>
      <section>
        <Hero />
      </section>

      <section>
        <form>
          <h3>Booking Details</h3>
          <input
            type="text"
            id="result"
            name="result"
            placeholder="Date - Time - Number of Diners"
            required
          />
          <br />
          <h3>Credit card details</h3>
          <input
            type="text"
            id="cnumber"
            name="cardnumber"
            placeholder="Card Number"
            required
          />
          <br />
          <input
            type="text"
            id="cname"
            name="cardname"
            placeholder="First Name / Last Name"
            required
          />
          <br />
          <span>
            <br />
            <label for="expdate">Exp Date</label>
            <label for="cvv">CVV</label>
            <br />
            <input type="text" id="expdate" name="expdate" required />
            <input type="text" id="cvv" name="cvv" required />
            <input type="text" id="cvv" name="cvv" required />
          </span>
          <br /> <br />
          <label for="send-text">Send me booking details via text</label>
          <input type="radio" id="send-text" name="send" value="send-text" />
          <br />
          <br />
          <label for="send-email">send me booking via email</label>
          <input type="radio" id="send-email" name="send" value="send-email" />
          <br /> <br /> <br />
          <NavLink exact to="">
            <button>Continue</button>
          </NavLink>
        </form>
      </section>
    </>
  );
};

export default Form3;
