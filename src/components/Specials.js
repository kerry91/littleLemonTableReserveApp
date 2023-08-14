import "../css/Specials.css";
import image1 from "../assets/pasta.jpg";
import image2 from "../assets/lemon dessert.jpg";
import image3 from "../assets/greek salad.jpg";

const Specials = () => {
  return (
    <>
      <section className="wrapper">
      <div className="special-title">
            <h3>This weeks specials!</h3>
            <button>Online Menu</button>
          </div>
        <div className="specials">
          <div className="special-card">
            <img src={image1} alt="image1" />
            <p>
              Pasta <span>$6.99</span>
            </p>
            <p>
            House-made pasta in our signature house-made ragu’
            </p>
            <p>Order to deliver</p>
          </div>
          <div className="special-card">
            <img src={image2} alt="image2" />
            <p>
              Lemon Cake <span>$10.99</span>
            </p>
            <p>
            This lemon cake uses both the zest and a hefty amount of fresh lemon juice to give the cake its tart, bright edge. 
            </p>
            <p>Order to deliver</p>
          </div>
          <div className="special-card">
            <img src={image3} alt="image3" />
            <p>
              Greek Salad <span>$6.99</span>
            </p>
            <p>
            A traditional Greek salad consists of sliced cucumbers, tomatoes, green bell pepper, red onion, olives, and feta cheese. 
            </p>
            <p>Order to deliver</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Specials;
