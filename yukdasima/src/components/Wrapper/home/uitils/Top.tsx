// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

type HeroItemType = {
     id: number,
     image: string,
}


const Top = () => {

     const Heros:HeroItemType[] = [
          {id: 1, image: '../homepagebackground.svg'},
          {id: 2, image: '../topimg2.svg'},
     ]

  return (
    <div className='top-swiper-content'>
     <Swiper 
     autoplay={{
      delay: 2000
     }}
     pagination={true} modules={[Pagination, Autoplay]} className="mySwiper">
        {Heros.map((item:HeroItemType, i:number) => (
          <SwiperSlide key={i}>
               <img src={item.image} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Top