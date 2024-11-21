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
    <div className="py-12">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={4}
        pagination={{ clickable: true }}
        loop={true}
        className="w-full max-w-6xl mx-auto"
      >
        {[img25, img14, img21, img20, img15, img40, img23, img32].map((img, idx) => (
          <SwiperSlide key={idx}>
            <Image
              decoding="async"
              src={img}
              alt={`Imagem ${idx + 1}`}
              className="rounded-lg w-full h-auto"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
