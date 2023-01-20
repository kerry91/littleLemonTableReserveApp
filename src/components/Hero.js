import "../css/Hero.css";

const Hero = (props) => {
  return (
    <>
      <container class="hero-container">
        <div>
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <p class="description">{props.desc}</p>
          <p class="button">{props.button}</p>
        </div>
        <h2>{props.extraText}</h2>
        <div>
          <img src={props.src} alt={props.alt} />
        </div>

        <div>
          <img src={props.src2} alt={props.alt2} />
        </div>
      </container>
    </>
  );
};

export default Hero;
