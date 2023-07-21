// React Responsive Carousel
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import img1 from "/assets/images/Banner/banner01.webp";
import img2 from "/assets/images/Banner/banner02.webp";
import img3 from "/assets/images/Banner/banner03.webp";
import img4 from "/assets/images/Banner/banner04.webp";
import img5 from "/assets/images/Banner/banner05.webp";
const Banner = () => {
  return (
    <div className="px-1 md:px-0 text-center w-full">
      <Carousel>
        <div>
          <img src={img5} />
        </div>
        <div>
          <img src={img2} />
        </div>
        <div>
          <img src={img3} />
        </div>
        <div>
          <img src={img4} />
        </div>
        <div>
          <img src={img1} />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
