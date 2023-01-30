import "../css/Testimonials.css";
import image1 from "../assets/pasta.jpg";
import image2 from "../assets/lemon dessert.jpg";
import image3 from "../assets/greek salad.jpg";

const Testimonials = () => {
  return (
    <>
    <section class="wrapper">
    <div class="testimonial-title">
      <h3>Testimonials</h3>
    </div>
   <div class="testimonials">
  <div class="testimonial-card">
    <p>Title</p>
    <img src={image2} alt="image1"/>
    <p>Great</p>
    </div>
  <div class="testimonial-card">
  <p>Title</p>
    <img src={image1} alt="image1"/>
    <p>Great</p>
  </div>
  <div class="testimonial-card">
  <p>Title</p>
    <img src={image3} alt="image1"/>
    <p>Great</p>
  </div>
  <div class="testimonial-card">
  <p>Title</p>
    <img src={image2} alt="image1"/>
    <p>Great</p>
  </div>
</div>
</section>
    </>
  );
};

export default Testimonials;
