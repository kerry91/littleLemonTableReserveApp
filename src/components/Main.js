import Hero from "./Hero";
import heroImg1 from "../assets/restaurant chef B.jpg";

import Specials from "./Specials";
import Testimonials from "./Testimonials";
import About from "./About";
import { NavLink } from "react-router-dom";
const Main = () => {
  return (
    <>
      <section>
        <Hero
          desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"
          button={
            <NavLink exact to="/reserve-table">
              Reserve a table
            </NavLink>
          }
          src={heroImg1}
          alt="bruchetta"
        />
      </section>
      <section>
        <Specials />
      </section>
      <section>
        <Testimonials />
      </section>
      <section>
        <About />
      </section>
    </>
  );
};

export default Main;
