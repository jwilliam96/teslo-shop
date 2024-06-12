'use client';

import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode, Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import './slideshow.css';

interface Props {
  images: string[];
  title: string;
  className?: string;
}

export const ProductMobileSlideshow = ({ images, title, className }: Props) => {

  return (
    <div className={className}>
      <Swiper
        style={{
          '--swiper-navigation-color': '#EA5823',
          '--swiper-pagination-color': '#EA5823',
          width: "100%",
          height: "500px"
        } as React.CSSProperties}
        pagination
        autoplay={{
          delay: 4500
        }}
        modules={[FreeMode, Autoplay, Pagination]}
      >

        {
          images.map(image => (
            <SwiperSlide key={image}>
              <Image
                priority
                width={600}
                height={500}
                src={`/products/${image}`}
                alt={title}
                className="object-fill w-auto h-auto"
              />
            </SwiperSlide>

          ))
        }
      </Swiper>
    </div>
  );
};
