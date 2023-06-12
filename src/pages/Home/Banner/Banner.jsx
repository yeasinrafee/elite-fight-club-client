import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

import img1 from "./../../../../public/assets/images/Banner/banner-1.webp";
import img2 from "./../../../../public/assets/images/Banner/banner-2.webp";
import img3 from "./../../../../public/assets/images/Banner/banner-3.webp";
import img4 from "./../../../../public/assets/images/Banner/banner-4.webp";
import img5 from "./../../../../public/assets/images/Banner/banner-5.webp";
const Banner = () => {
  return (
    <div className=" min-h-screen opacity-60">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <img className="h-1/2" src={img1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
