import "../css/About.css";

import image1 from "../assets/restaurant.jpg";

const About = () => {
  return (
    <>
      <section class="wrapper">
        <div class="about">
        <div class="item">
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <p class="description">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's
          </p>
        </div>
        <div class="item">
          <img src={image1} alt="img" />
        </div>
        </div>
      </section>
    </>
  );
};

export default About;
