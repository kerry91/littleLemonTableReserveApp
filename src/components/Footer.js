import footerLogo from "../assets/footerLogo"

const Footer = () => {
    return (
        <>
            <div>
                <img src={footerLogo} alt="footer logo"/>
            </div>

            <div>
                <ul>
                    <li><a href="/home">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/menu">Menu</a></li>
                    <li><a href="/reservations">Reservations</a></li>
                    <li><a href="/order-online">Order Online</a></li>
                    <li><a href="/login">Login</a></li>
                </ul>
            </div>

            <div>
                <p>Contact</p>
                <p>lorem ipsum</p>
            </div>

            <div>
                <p>social media</p>
                <ul>
                    <li><a href="https://www.meta.com/">Meta</a></li>
                    <li><a href="https://twitter.com/">Twitter</a></li>
                    <li><a href="https://www.instagram.com/">Meta</a></li>
                </ul>
            </div>
        </>
    )
}

export default Footer