import '../css/Testimonials.css';
import image1 from '../assets/greek salad.jpg'
import image2 from '../assets/lemon dessert.jpg'

const Testimonials = () => {
    return (
        <>
        <h4 id="testimonials-title">Testimonials</h4>
        <container class="testimonials-container">
            <div class="item">
                <p>Title</p>
                <img src={image1} alt="greek salad" />
                <p>Great</p>
            </div>
            <div class="item">
            <p>Title</p>
            <img src={image2} alt="lemon dessert" />
            <p>Great</p>
            </div>
            <div class="item">
            <p>Title</p>
            <img src={image2} alt="lamb kebabs" />
            <p>Great</p>
            </div>
            <div class="item">
            <p>Title</p>
            <img src={image2} alt="lemon dessert" />
            <p>Great</p>
            </div>
        </container>
        </>
    )
}

export default Testimonials