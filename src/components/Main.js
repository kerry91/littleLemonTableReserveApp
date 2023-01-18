import Hero from "./Hero"
import heroImg1 from '../assets/bruchetta.svg'

import Specials from "./Specials"

const Main = () => {
    return (
        <>
        <section>
          <Hero
          desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"
          button="reserve a table"
          src={heroImg1}
          alt="bruchetta"
          width="100%"
          height="100%"/>
        </section>
        <section>
            <Specials/>
        </section>
        </>
    )
}

export default Main