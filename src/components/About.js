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
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's
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
