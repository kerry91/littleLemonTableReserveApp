import "../css/Hero.css";

const HeroOther = (props) => {
  return (
    <>
      <section className="hero-wrapper">
        <div className="hero">
          <div className="hero-card">
            <h2>Little Lemon</h2>
            <h3>Chicago</h3>
            <h2>{props.extraText}</h2>
          </div>
          <div className="hero-card">
            <div>
              <img src={props.src} alt={props.alt} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroOther;
