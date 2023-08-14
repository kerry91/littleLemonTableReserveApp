import "../css/About.css";

import image1 from "../assets/restaurant.jpg";

const About = () => {
  return (
    <>
      <section className="wrapper">
        <div className="about">
        <div className="item">
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <p Name="description">
            We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
          </p>
        </div>
        <div className="item">
          <img src={image1} alt="img" />
        </div>
        </div>
      </section>
    </>
  );
};

export default About;
