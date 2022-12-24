import Carousel from "react-bootstrap/Carousel";
import PhotoOne from "../assets/imgs/baksotest.jpg";
import PhotoTwo from "../assets/imgs/nasgortest.jpg";
import PhotoTree from "../assets/imgs/suptest.jpg";

function HeroSection() {
  return (
    <Carousel className="carousel">
      <Carousel.Item>
        <img className="d-block w-100 herosection-style" src={PhotoOne} alt="First slide" />
        <Carousel.Caption>
          <h3>Bakso</h3>
          <p>Bakso yang sangat enak</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 herosection-style" src={PhotoTwo} alt="Second slide" />
        <Carousel.Caption>
          <h3>Nasi goreng</h3>
          <p>Nasi goreng yang sangat sedap</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 herosection-style" src={PhotoTree} alt="Third slide" />
        <Carousel.Caption>
          <h3>Sup</h3>
          <p>Sup yang sangat hangat dan sedap</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HeroSection;
