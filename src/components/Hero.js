import '../css/Hero.css';

const Hero = (props) => {
    return (
        <>
        <container>
            <div>
                <h3>Little Lemon</h3>
                <h4>Chicago</h4>
                <p>{props.desc}</p>
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