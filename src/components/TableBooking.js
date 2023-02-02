import "../css/TableBooking.css";

import Hero from "./Hero";
import heroImg1 from "../assets/restaurant chef B.jpg";

import Form1 from "./Form1";

const TableBooking = () => {
  return (
    <>
      <section>
        <Hero
          extraText="Find a table for any occasion"
          src2={heroImg1}
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
