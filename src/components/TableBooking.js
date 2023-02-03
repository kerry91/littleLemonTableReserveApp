import "../css/TableBooking.css";

import HeroOther from "./HeroOther";
import heroImg1 from "../assets/restaurant chef B.jpg";

import Form1 from "./Form1";

const TableBooking = () => {
  return (
    <>
      <section>
        <HeroOther
          extraText="Find a table for any occasion"
          src={heroImg1}
          alt="chef B"
        />
      </section>
      <section>
        <Form1 />
      </section>
    </>
  );
};

export default TableBooking;
