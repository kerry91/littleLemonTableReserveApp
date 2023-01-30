import "../css/Specials.css";
import image1 from "../assets/pasta.jpg";
import image2 from "../assets/lemon dessert.jpg";
import image3 from "../assets/greek salad.jpg";

const Specials = () => {
  return (
    <>
      <section class="wrapper">
      <div class="special-title">
            <h3>Specials</h3>
            <button>Online Menu</button>
          </div>
        <div class="specials">
          <div class="special-card">
            <img src={image1} alt="image1" />
            <p>
              Pasta <span>$6.99</span>
            </p>
            <p>
              Lorem ipsum dolum sum Lorem ipsum dolum sum Lorem ipsum dolum sum
              Lorem ipsum dolum sum Lorem ipsum dolum sum
            </p>
            <p>Order to deliver</p>
          </div>
          <div class="special-card">
            <img src={image2} alt="image2" />
            <p>
              Lemon Cake <span>$10.99</span>
            </p>
            <p>
              Lorem ipsum dolum sum Lorem ipsum dolum sum Lorem ipsum dolum sum
              Lorem ipsum dolum sum Lorem ipsum dolum sum
            </p>
            <p>Order to deliver</p>
          </div>
          <div class="special-card">
            <img src={image3} alt="image3" />
            <p>
              Greek Salad <span>$6.99</span>
            </p>
            <p>
              Lorem ipsum dolum sum Lorem ipsum dolum sum Lorem ipsum dolum sum
              Lorem ipsum dolum sum Lorem ipsum dolum sum
            </p>
            <p>Order to deliver</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Specials;
