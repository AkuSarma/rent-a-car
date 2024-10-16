import first from "../images/courousel_images/first.png";
import second from "../images/courousel_images/second.png";
import third from "../images/courousel_images/third.png";
import fourth from "../images/courousel_images/fourth.png";
import fifth from "../images/courousel_images/fifth.png";
import { Carousel } from "flowbite-react";

const Courousel = () => {
    return(
    <div className="h-[50vh] sm:h-[70vh] xl:h-[80vh] 2xl:h-96 w-[70vw] mx-auto my-8">
      <Carousel slideInterval={1000}>
        <img className="w-full h-fit" src={first} alt="..." />
        <img className="w-full h-fit" src={second} alt="..." />
        <img className="w-full h-fit" src={third} alt="..." />
        <img className="w-full h-fit" src={fourth} alt="..." />
        <img className="w-full h-fit" src={fifth} alt="..." />
      </Carousel>
    </div>
  );
};

export default Courousel;
