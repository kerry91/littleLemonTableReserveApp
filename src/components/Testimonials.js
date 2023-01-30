import "../css/Testimonials.css";
import image2 from "../assets/lemon dessert.jpg";

const Testimonials = () => {
  return (
    <>
    <section class="testimonial-wrapper">
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
    <img src={image2} alt="image1"/>
    <p>Great</p>
  </div>
  <div class="testimonial-card">
  <p>Title</p>
    <img src={image2} alt="image1"/>
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
