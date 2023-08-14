import "../css/Hero.css";

const Hero = (props) => {
  return (
    <>
      <section className="hero-wrapper">
      <section className="wrapper">
        <div className="hero">
          <div className="hero-card">
            <h2>Little Lemon</h2>
            <h3>Chicago</h3>
            <p className="description">{props.desc}</p>
            <p className="button">{props.button}</p>
            <h2>{props.extraText}</h2>
          </div>
          <div className="hero-card">
            <div>
              <img src={props.src} alt={props.alt} />
            </div>
          </div>
        </div>
      </section>
      </section>
    </>
  );
};

export default Hero;
