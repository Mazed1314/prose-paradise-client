import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Banner = () => {
  const img_1 = "/images/9789814867962.jpg";
  const img_2 =
    "/images/erimage-9781666570625-coresourcedreamscape-2022-09-30t13-10.avif";
  const img_3 = "/images/54833611.jpg";

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
          <div className="hero-content md:w-7/12 mx-auto flex-col lg:flex-row">
            <img src={img_2} className="w-60 h-[300px] rounded-lg shadow-lg" />
            <div className="">
              <h1 className="text-5xl font-bold">Chronicles of Avonlea</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero-content  md:w-7/12 mx-auto flex-col lg:flex-row-reverse">
            <img src={img_3} className="w-60 h-[300px] rounded-lg shadow-lg" />
            <div className="">
              <h1 className="text-5xl font-bold">Whispers in the Wind</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero-content  md:w-7/12 mx-auto flex-col lg:flex-row-reverse">
            <img src={img_1} className="w-60 h-[300px] rounded-lg shadow-lg" />
            <div className="">
              <h1 className="text-5xl font-bold">Whispers in the Wind</h1>
              <p className="py-6">
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
