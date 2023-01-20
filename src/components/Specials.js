import "../css/Specials.css";
import image1 from "../assets/pasta.jpg";
import image2 from "../assets/lemon dessert.jpg";
import image3 from "../assets/greek salad.jpg";

const Specials = () => {
  return (
    <>
      <container class="specials-container">
        <div class="title">
          <h3 id="specials-title">Specials</h3>
        </div>
        <div class="item1">
          <img src={image1} alt="Pasta" />
          <p>
            <span>Pasta</span>
            <span class="price"> $6.99</span>
          </p>
          <p>
            nunc. Nam hendrerit sollicitudin ex, vitae aliquam purus pharetra
            sed. Fusce ut elit mollis, blandit risus a, malesuada dolor.
          </p>
          <p>Order a Deliver</p>
        </div>
        <div class="item2">
          <img src={image2} alt="lemon dessert" />
          <p>
            <span>Lemon Dessert</span>
            <span class="price"> $12.99</span>
          </p>
          <p>
            nunc. Nam hendrerit sollicitudin ex, vitae aliquam purus pharetra
            sed. Fusce ut elit mollis, blandit risus a, malesuada dolor.
          </p>
          <p>Order a Deliver</p>
        </div>
        <div class="item3">
          <img src={image3} alt="greek salad" />
          <p>
            <span>Greek Salad</span>
            <span class="price"> $12.99</span>
          </p>
          <p>
            nunc. Nam hendrerit sollicitudin ex, vitae aliquam purus pharetra
            sed. Fusce ut elit mollis, blandit risus a, malesuada dolor.
          </p>
          <p>Order a Deliver</p>
        </div>
      </container>
    </>
  );
};

export default Specials;
