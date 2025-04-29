import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import CarosolSlide from './CarosolSlide';
import boot from '../../../assets/image/boot.png'
import bag from '../../../assets/image/bag.png'

const HeroCarosoul = () => {
    const slides = [
        {
            title : "New Travel Boots",
            subtitle: "New Collection Boots for man travel.",
            image: boot,
        },
        {
            title: "Stylish Backpack",
            subtitle: "Trendy and Comfortable for All Ages.",
            image: bag,
          },
        {
            title: "Hollyland Lark M2 Wireless Lavalier Microphone",
            subtitle: "LARK M2 is a lightweight wireless microphone weighing only 9 grams.",
            image: 'https://i.ibb.co.com/0pTNy3VG/71-MTZ6-Oqb-L-AC-SL1500-removebg-preview.png',
          },
    ]

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {slides.map(
            (item, index) => (
                <SwiperSlide key={index}> 
                <CarosolSlide title ={item.title} subtitle={item.subtitle} image={item.image} />
              </SwiperSlide>
    
            )       
        )}

       
     
      </Swiper>
    </>
  );
}
export default HeroCarosoul;