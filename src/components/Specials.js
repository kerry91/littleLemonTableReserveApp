import '../css/Specials.css';
import image1 from '../assets/greek salad.jpg'
import image2 from '../assets/lemon dessert.jpg'
import image3 from '../assets/restauranfood.jpg'

const Specials = () => {
    return (
        <>
        <h4 id="specials-title">Specials</h4>
            <container class="specials-container">
                <div class="item">
                    <img src={image1} alt="greek salad"/>
                    <p><span>Greek Salad</span><span class="price"> $12.99</span></p>
                    <p>nunc. Nam hendrerit sollicitudin ex, vitae aliquam purus pharetra sed. 
                        Fusce ut elit mollis, blandit risus a, malesuada dolor.</p>
                    <p>Order a Deliver</p>
                </div>
                <div class="item">
                <img src={image2} alt="lemon dessert"/>
                <p><span>Lemon Dessert</span><span class="price"> $12.99</span></p>
                <p>nunc. Nam hendrerit sollicitudin ex, vitae aliquam purus pharetra sed. 
                        Fusce ut elit mollis, blandit risus a, malesuada dolor.</p>
                        <p>Order a Deliver</p>
                </div>
                <div class="item">
                <img src={image3} alt="lamb kebabs"/>
                <p><span>Lamb Kebabs</span><span class="price"> $12.99</span></p>
                <p>nunc. Nam hendrerit sollicitudin ex, vitae aliquam purus pharetra sed. 
                        Fusce ut elit mollis, blandit risus a, malesuada dolor.</p>
                        <p>Order a Deliver</p>
                </div>
            </container>
        </>
    )
}

export default Specials