'use client';

import { useState } from 'react';

import { Swiper as SwiperObject } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode, Navigation, Thumbs } from 'swiper/modules';


import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import './slideshow.css';

import { ProductImage } from '../product-image/ProductImage';



interface Props {
  images: string[];
  title: string;
  className?: string;
}



export const ProductSlideshow = ({ images, title, className }: Props) => {

  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperObject>();

  return (
    <div className={className}>

      <Swiper
        style={{
          '--swiper-navigation-color': '#EA5823',
          '--swiper-pagination-color': '#EA5823',
          'width': '100%',
          'height': '500px'
        } as React.CSSProperties
        }
        spaceBetween={10}
        navigation={true}
        autoplay={{
          delay: 4000
        }}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null
        }}
        modules={[FreeMode, Navigation, Thumbs, Autoplay]}
        className=""
      >

        {
          images.map(image => (
            <SwiperSlide key={image} >
              <ProductImage
                width={600}
                height={400}
                src={image}
                alt={title}
                className="rounded-lg "
              />
            </SwiperSlide>

          ))
        }
      </Swiper>


      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper "
      >
        {
          images.map(image => (
            <SwiperSlide key={image}>
              <ProductImage
                width={300}
                height={300}
                src={image}
                alt={title}
                className="rounded-lg object-fill w-auto h-auto"
              />
            </SwiperSlide>

          ))
        }
      </Swiper>

    </div>
  );
};