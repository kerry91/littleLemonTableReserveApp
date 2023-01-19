import '../css/Hero.css';

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
            <div>
                <img src={props.src} alt={props.alt} height={props.height} width={props.width}/>
            </div>
            </container>
        </>
    )
}

export default Hero