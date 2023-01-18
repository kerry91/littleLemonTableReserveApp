import logo from '../assets/Logo.svg'
import Nav from './Nav'

const Header = () => {
    return (
        <>
        <div>
            <img src={logo} alt="logo"/>
        </div>
        <div>
            <Nav/>
        </div>
        </>
    )
}

export default Header