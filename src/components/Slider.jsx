import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { useSwiper } from 'swiper/react';
import 'swiper/css/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import avatar1 from "../assets/i1.JPG"
import avatar2 from "../assets/i2.JPG"
import avatar3 from "../assets/i3.JPG"
import avatar4 from "../assets/i4.JPG"


// import required modules
import { Navigation, EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';


function Slider() {


  return (
    <>
      <section className="my-15">
        <div className="grid grid-cols-2">
          <p className="text-4xl font-bold">What Past Attendees Say</p>
          <div className="flex gap-5 justify-end pr-15 pb-15">
            <button className="custom-next cursor-pointer border-1 border-white text-white rounded-full hover:bg-gray-300 hover:text-myBlue transition">
              <FontAwesomeIcon icon={faArrowRight} className="text-lg p-5 rotate-180 "/>
            </button>
            <button className="custom-prev cursor-pointer border-1 border-white text-white rounded-full hover:bg-gray-300 hover:text-myBlue transition">
              <FontAwesomeIcon icon={faArrowRight} className="text-lg p-5"/>
            </button>  
          </div>

        </div>

        <div>
      <Swiper
        
        slidesPerView={3}
        spaceBetween={15}
        loop={true}
        slidesPerGroup={1}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        speed={500}
        autoplay={{
          delay: 2500, // 👉 هر ۲.۵ ثانیه یک بار اسلاید عوض بشه
          disableOnInteraction: false, // با کلیک کاربر متوقف نشه
        }}
        
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide className="perspective-dramatic">
          <div className="slide-item grid grid-rows-3 py-9 px-8 rounded-4xl transition">
            <p className="text-2xl font-bold text-left">UNMATCHED OPPORTUNITIES</p>
            <p className="text-base pt-2 text-left">"From hands-on workshops to visionary talks, this summit is a must-attend for AI professionals."</p>
            <div className="flex pt-7">
              <div className="w-11 content-center">
              <img className="rounded-full" src={avatar1} />
              </div>
              <div className="text-left content-center pl-3">
                <p className="text-sm">David Laurent</p>
                <p className="text-sm">CEO, FutureAI Labs</p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="perspective-dramatic">
          <div className="slide-item grid grid-rows-3 py-9 px-8 rounded-4xl transition">
            <p className="text-2xl font-bold text-left">THE BEST AI EVENT!</p>
            <p className="text-base pt-2 text-left">"Incredible speakers, top-tier networking, and cutting-edge discussions all in one place."</p>
            <div className="flex pt-7">
              <div className="w-11 content-center">
              <img className="rounded-full" src={avatar2} />
              </div>
              <div className="text-left content-center pl-3">
                <p className="text-sm">Elena Rojas</p>
                <p className="text-sm">AI Researcher, DeepMind</p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="perspective-dramatic">
          <div className="slide-item grid grid-rows-3 py-9 px-8 rounded-4xl transition">
            <p className="text-2xl font-bold text-left">UNMATCHED OPPORTUNITIES</p>
            <p className="text-base pt-2 text-left">"From hands-on workshops to visionary talks, this summit is a must-attend for AI professionals."</p>
            <div className="flex pt-7">
              <div className="w-11 content-center">
              <img className="rounded-full" src={avatar3} />
              </div>
              <div className="text-left content-center pl-3">
                <p className="text-sm">David Laurent</p>
                <p className="text-sm">CEO, FutureAI Labs</p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="perspective-dramatic">
          <div className="slide-item grid grid-rows-3 py-9 px-8 rounded-4xl">
            <p className="text-2xl font-bold text-left">THE BEST AI EVENT!</p>
            <p className="text-base pt-2 text-left">"Incredible speakers, top-tier networking, and cutting-edge discussions all in one place."</p>
            <div className="flex pt-7">
              <div className="w-11 content-center">
              <img className="rounded-full" src={avatar4} />
              </div>
              <div className="text-left content-center pl-3">
                <p className="text-sm">Elena Rojas</p>
                <p className="text-sm">AI Researcher, DeepMind</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>  
      </div>

      </section>  
    </>
  )
}

export default Slider