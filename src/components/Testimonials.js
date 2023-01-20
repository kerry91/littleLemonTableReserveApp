import "../css/Testimonials.css";
import image2 from "../assets/lemon dessert.jpg";

const Testimonials = () => {
  return (
    <>
      <section class="testimonials-container">
        <section class="testimonials-wrapper">
          <div class="title">
            <h3 id="testimonials-title">Testimonials</h3>
          </div>
          <div class="item1">
            <p>Title</p>
            <img src={image2} alt="greek salad" />
            <p>Great</p>
          </div>
          <div class="item2">
            <p>Title</p>
            <img src={image2} alt="lemon dessert" />
            <p>Great</p>
          </div>
          <div class="item3">
            <p>Title</p>
            <img src={image2} alt="lamb kebabs" />
            <p>Great</p>
          </div>
          <div class="item4">
            <p>Title</p>
            <img src={image2} alt="lemon dessert" />
            <p>Great</p>
          </div>
        </section>
      </section>
    </>
  );
};

export default Testimonials;
