import HeroOther from "./HeroOther"
import heroImg1 from "../assets/restaurant chef B.jpg";

const FormSuccess = () => {
    return (
        <>
        <section>
            <HeroOther
            src={heroImg1}
            alt="chef B"/>
        </section>
        <h1>Your form has been submitted thank you.</h1>
        </>
    )
}

export default FormSuccess