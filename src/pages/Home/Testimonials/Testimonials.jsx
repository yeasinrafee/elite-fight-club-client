import { Swiper, SwiperSlide } from "swiper/react";
import { FaScribd } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://elite-fight-club-server.vercel.app/testimonials")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className="my-24 px-1 md:px-0">
      <hr className="mb-12" />
      <h2 className="text-3xl font-bold text-amber-400 text-center mb-8 uppercase">
        Testimonials
      </h2>
      <div>
        <Swiper
          navigation={true}
          modules={[Navigation]}
          slidesPerView={"auto"}
          className="mySwiper"
        >
          {reviews.map((review, i) => (
            <SwiperSlide key={i}>
              <div className="flex flex-col items-center mx-16 my-8 md:mx-24 md:my-10">
                <FaScribd className="text-5xl text-amber-400" />
                <p className="py-5 md:py-10 text-sm md:text-md md:px-28 text-center">
                  {review.details}
                </p>
                <h3 className="text-2xl text-amber-400">{review.name}</h3>
                <Rating
                  style={{ maxWidth: 180 }}
                  value={review.rating}
                  readOnly
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <hr className="mt-14" />
    </div>
  );
};

export default Testimonials;
