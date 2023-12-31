import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import useInstructors from "../../../hooks/useInstructors";

const TopInstructors = () => {
  const [instructors] = useInstructors();

  return (
    <div>
      <hr className="mb-14" />
      <h2 className="text-3xl font-bold text-gray-600 text-center mb-8 uppercase">
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
                <div className="mb-16 md:mb-28">
                  <img src={instructor.image} alt="" />
                  <h3 className="text-sm md:text-2xl uppercase text-center md:-mt-8 text-black">
                    {instructor.name}
                  </h3>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
      <hr className="mb-20 md:mb-32" />
    </div>
  );
};

export default TopInstructors;
