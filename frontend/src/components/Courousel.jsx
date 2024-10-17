import first from "../images/courousel_images/first.png";
import second from "../images/courousel_images/second.png";
import third from "../images/courousel_images/third.png";
import fourth from "../images/courousel_images/fourth.png";
import fifth from "../images/courousel_images/fifth.png";
import { Carousel } from "flowbite-react";

const Courousel = () => {
    return(
    <div className="h-[50vh] sm:h-[70vh] xl:h-[80vh] 2xl:h-96 w-full mx-auto bg-white">
      <Carousel slideInterval={1000}>
        <img className="max-w-full h-auto object-scale-down" src={second} alt="..." />
        <img className="max-w-full h-auto object-scale-down" src={third} alt="..." />
        <img className="max-w-full h-auto object-scale-down" src={fourth} alt="..." />
        <img className="max-w-full h-auto object-scale-down" src={fifth} alt="..." />
        <img className="max-w-full h-auto object-scale-down" src={first} alt="..." />
      </Carousel>
    </div>
  );
};

export default Courousel;
