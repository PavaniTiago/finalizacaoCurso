import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import Image from "next/image";
import img14 from "public/assets/img14.webp";
import img25 from "public/assets/img25.jpg";
import img21 from "public/assets/img21.jpg";
import img15 from "public/assets/img15.webp";
import img20 from "public/assets/img20.webp";
import img23 from "public/assets/img23.jpg";
import img40 from "public/assets/img40.webp";
import img32 from "public/assets/img32.webp";


export function Carousel() {
  return (
    <div className="flex mt-12">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={5}
        pagination={{ clickable: true }}
        loop={true}
        className="w-[65rem] h-fit 3xl:w-[80rem]"
      >
        <SwiperSlide>
          <Image
            decoding="async"
            src={img25}
            alt="foto de cabelos cacheados"
            className="rounded-lg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            decoding="async"
            src={img14}
            alt="foto de cabelos cacheados"
            className="rounded-lg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            decoding="async"
            src={img21}
            alt="foto de cabelos cacheados"
            className="rounded-lg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            decoding="async"
            src={img20}
            alt="foto de cabelos cacheados"
            className="rounded-lg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            decoding="async"
            src={img15}
            alt="foto de cabelos cacheados"
            className="rounded-lg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            decoding="async"
            src={img40}
            alt="foto de cabelos cacheados"
            className="rounded-lg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            decoding="async"
            src={img23}
            alt="foto de cabelos cacheados"
            className="rounded-lg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            decoding="async"
            src={img32}
            alt="foto de cabelos cacheados"
            className="rounded-lg"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
