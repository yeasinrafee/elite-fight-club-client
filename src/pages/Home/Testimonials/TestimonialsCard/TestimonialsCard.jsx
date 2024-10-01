import { FaQuoteLeft } from 'react-icons/fa';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';

const TestimonialsCard = ({ testimonial }) => {
  return (
    <div className='flex flex-col items-center mx-16 my-8 md:mx-24 md:my-10'>
      <div className='flex items-center space-x-4'>
        <img
          className='w-12 h-12 rounded-full border-2 border-indigo-400'
          src={testimonial.avatar}
          alt={testimonial.name}
        />
        <div className='text-center'>
          <h3 className='text-xl font-bold text-gray-500'>
            {testimonial.name}
          </h3>
          <Rating
            style={{ maxWidth: 80 }}
            value={testimonial.rating}
            readOnly
          />
        </div>
      </div>
      <p className='py-5 md:py-10 text-sm md:text-md md:px-28 text-center text-gray-700'>
        {testimonial.details}
      </p>
    </div>
  );
};

export default TestimonialsCard;
