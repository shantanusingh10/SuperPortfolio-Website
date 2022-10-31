import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/me.jpg'
import AVTR2 from '../../assets/me.jpg'
import AVTR3 from '../../assets/me.jpg'
import AVTR4 from '../../assets/me.jpg'

// Importing swiper js 

import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const testimonial = [
  {
    avatar: AVTR1,
    name: 'john snow',
    review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime unde commodi maiores soluta distinctio accusamus, fugiat sapiente quibusdam rerum, provident nisi fugit, dolore eum iure quae voluptatibus sed dolorum? Vel!'
  },
  {
    avatar: AVTR2,
    name: 'john ice',
    review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime unde commodi maiores soluta distinctio accusamus, fugiat sapiente quibusdam rerum, provident nisi fugit, dolore eum iure quae voluptatibus sed dolorum? Vel!'
  },{
    avatar: AVTR3,
    name: 'john water',
    review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime unde commodi maiores soluta distinctio accusamus, fugiat sapiente quibusdam rerum, provident nisi fugit, dolore eum iure quae voluptatibus sed dolorum? Vel!'
  },{
    avatar: AVTR4,
    name: 'john steam',
    review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime unde commodi maiores soluta distinctio accusamus, fugiat sapiente quibusdam rerum, provident nisi fugit, dolore eum iure quae voluptatibus sed dolorum? Vel!'
  },
]

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
    
      >
        {
          testimonial.map(({avatar, name , review},index)=>{
            return (
              <SwiperSlide key = {index} className='testimonial'>
          <div className="client__avatar">
            <img src = {avatar} alt = "Avatar"/>
          </div>
          <h5 className='client__name'>{name}</h5>
            <small className='client__review'>
             {review}
            </small>
        </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials