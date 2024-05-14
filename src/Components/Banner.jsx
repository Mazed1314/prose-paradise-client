import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Banner = () => {
  const img_1 = "/images/what-does-the-bible-say-about-parenting-header.jpeg";
  const img_2 = "/images/Welcome-to-a-fresh-week.jpg";
  const img_3 = "/images/1669132932650.jpg";
  const img_4 = "/images/54833611.jpg";
  // const img_5 = "/images/shutterstock_1008807274-scaled-e1580537536480.jpg";
  // const img_6 = "/images/54833611.jpg";

  return (
    <div className="bg-transparent my-8">
      <Swiper
        modules={[Autoplay, Navigation, Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <div className="flex flex-col md:flex-row">
            <div className="md:w-7/12 flex justify-center items-center">
              <img
                src={img_1}
                className="w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] rounded-full"
              />
            </div>
            <div className="md:w-5/12 my-auto p-2 mx-4">
              <h1 className="text-2xl text-center text-blue-400 lg:text-5xl font-bold [text-shadow:_0_1px_0_rgb(0_0_0_/_80%)]">
                Bonding Through Art: Creative Activities for Families
              </h1>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex flex-col md:flex-row md:w-10/12 mx-auto">
            <img
              src={img_2}
              className="w-60 mx-auto h-[300px] rounded-lg shadow-lg"
            />
            <div className=" my-auto">
              <h1 className="text-2xl text-center text-blue-400 lg:text-5xl font-bold [text-shadow:_0_1px_0_rgb(0_0_0_/_80%)]">
                The Power of Positivity: Cultivating a Growth Mindset
              </h1>
              <p className="py-6 text-lg text-center text-gray-500">
                Harness the power of positivity and cultivate a growth mindset.
                Embrace challenges as opportunities for growth and learning.
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex flex-col md:flex-row">
            <div className="md:w-7/12 flex justify-center items-center">
              <img
                src={img_3}
                className="w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] rounded-full"
              />
            </div>
            <div className="md:w-5/12 my-auto p-2 mx-4">
              <h1 className="text-2xl text-center text-blue-400 lg:text-5xl font-bold [text-shadow:_0_1px_0_rgb(0_0_0_/_80%)]">
                Mastering Your Money: Practical Strategies for Financial Success
              </h1>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="hero-content md:w-10/12 mx-auto flex-col md:flex-row-reverse">
            <img
              src={img_4}
              className="w-60 mx-auto h-[300px] rounded shadow-xl"
            />
            <div className="my-auto">
              <h1 className="text-2xl text-center text-blue-400 lg:text-5xl font-bold [text-shadow:_0_1px_0_rgb(0_0_0_/_80%)]">
                Beyond the Horizon
              </h1>
              <p className="py-6 text-lg text-center text-gray-500">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
