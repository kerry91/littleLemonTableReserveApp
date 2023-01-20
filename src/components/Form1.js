import { NavLink } from "react-router-dom";

const Form1 = () => {
  return (
    <>
      <form>
        <input type="date" value="today" required />
        <br />
        <input type="time" id="appt" name="appt" required />
        <br />
        <select name="seats" id="seats" required>
          <option value="default">Number of diners</option>
          <option value="one">1</option>
          <option value="two">2</option>
          <option value="three">3</option>
          <option value="four">4</option>
        </select>
        <br />
        <select name="occasion" id="occasion" required>
          <option value="default">Occasion</option>
          <option value="birthday">Birthday</option>
          <option value="anniversary">Anniversary</option>
          <option value="engagement">Engagement</option>
        </select>
        <br />
        <h3>Seating options</h3>
        <label for="standard">Standard</label>{" "}
        <input
          type="radio"
          id="standard"
          name="seating-options"
          value="Standard"
          required
        />
        <br />
        <br />
        <label for="outside">Outside</label>
        <input
          type="radio"
          id="outside"
          name="seating-options"
          value="Outside"
          required
        />
        <br /> <br /> <br />
        <NavLink exact to="/form2">
          <button type="submit">Lets Go</button>
        </NavLink>
      </form>
    </>
  );
};
export default Form1;
