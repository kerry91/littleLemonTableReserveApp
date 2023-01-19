import Hero from "./Hero"
import heroImg1 from '../assets/bruchetta.svg'

import Specials from "./Specials"
import Testimonials from "./Testimonials"

import About from "./About"
const Main = () => {
    return (
        <>
        <section>
          <Hero
          desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'ss"
          button="reserve a table"
          src={heroImg1}
          alt="bruchetta"
          width="100%"
          height="100%"/>
        </section>
        <section>
            <Specials/>
        </section>
        <section>
            <Testimonials/>
        </section>
        <section>
            <About/>
        </section>
        </>
    )
}

export default Main