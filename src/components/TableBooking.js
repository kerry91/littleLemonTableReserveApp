import "../css/TableBooking.css";

import Hero from "./Hero";
import heroImg1 from "../assets/restaurant.jpg";
import heroImg2 from "../assets/restaurant chef B.jpg";

import Form1 from "./Form1";

const TableBooking = () => {
  return (
    <>
      <section>
        <Hero
          extraText="Find a table for any occasion"
          src={heroImg1}
          alt="bruchetta"
          src2={heroImg2}
          alt2="chef B"
        />
      </section>
      <section>
        <Form1 />
      </section>
    </>
  );
};

export default TableBooking;
