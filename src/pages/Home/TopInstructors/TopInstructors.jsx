import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import useInstructors from "../../../hooks/useInstructors";

const TopInstructors = () => {
  const [instructors] = useInstructors();

  return (
    <div>
      <h2 className="text-3xl font-bold text-amber-400 text-center mb-8 uppercase">
        Popular Instructors
      </h2>
      <div>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper mb-24"
        >
          {instructors &&
            instructors.map((instructor) => (
              <SwiperSlide key={instructor._id}>
                <img src={instructor.image} alt="" />
                <h3 className="text-2xl uppercase text-center -mt-16 text-black">
                  {instructor.name}
                </h3>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TopInstructors;
