import "../css/Hero.css";

const Hero = (props) => {
  return (
    <>
      {/*
      <section class="hero-container">
        <article>
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <p class="description">{props.desc}</p>
          <p class="button">{props.button}</p>
        </article>
        
        <article>
        <div>
          <img src={props.src} alt={props.alt} />
        </div>
        <div>
          <img src={props.src2} alt={props.alt2} />
        </div>
        </article>
      </section>
  */}
      <section class="hero-wrapper">
        <div class="hero">
          <div class="hero-card">
            <h2>Little Lemon</h2>
            <h3>Chicago</h3>
            <p class="description">{props.desc}</p>
            <p class="button">{props.button}</p>
          </div>
          <div class="hero-card">
          <h2>{props.extraText}</h2>
            <div>
              <img src={props.src} alt={props.alt} />
            </div>
            <div>
              <img src={props.src2} alt={props.alt2} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
