import { Link } from "react-router-dom";
import React from 'react';
import HomeCards from "./HomeCards/HomeCards";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import { motion } from "framer-motion";
import "./Events.css";
import items from "../Home/HomeCards/eventsDetails"
import SwiperCore, {EffectCoverflow,Pagination,Navigation} from "swiper/core";

SwiperCore.use([EffectCoverflow, Pagination, Navigation]);

const itemss = [
  {
    id: 1,
    name: 'Poppins',
    image: 'ppt.jpg'},
  {
    id: 2,
    name: 'Code++',
    image: 'debug.jpeg',
  },
  {
    id: 3,
    name: 'StyleStack',
    image: 'web.jpeg',
  },
  {
    id: 4,
    name: 'Gnidoc',
    image: 'engineer.jpeg',
  },
  {
    id: 5,
    name: 'MindFest',
    image: 'fest.jpg',
  },
  {
    id: 6,
    name: 'Mystery Chase',
    image: 'treas.webp',
  },
  {
    id: 7,
    name: 'MemeBuzz',
    image: 'photo.jpeg',
  }
  ,
  {
    id: 8,
    name: 'GameScape',
    image: 'stumble.jpg',
  }
]

export default function Events() {
  
  return (
    <div className="container">
     
     <div className="card-wrapper">
        <div className="events_hero">
            <h2 className="events_title">Events</h2>
            <Swiper
            navigation={true}
            effect={"coverflow"}
            centeredSlides={true}
            slidesPerView={window.innerWidth < 768 ? 1 : "auto"}
            loop={true}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true
            }}
            pagination={{
              clickable: true
            }}
            className="mySwiper"
          >
              <div className="card">
                
              {itemss.map((item,index)=>{
                const image = require(`../../Images/Events/${item.image}`);
                return(
                  <div key={index}>
                  <SwiperSlide >
                    <div className="image">
                        <img src= {image} alt="loading"/>
                    </div>
                    <div className="title">
                        <h4>{item.name} </h4>
                        <Link to={`/event/${item.id}`} state={items}> 
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="save-button">
                          Read More
                        </motion.button>
                        </Link>   
                    </div>
                  </SwiperSlide> 
                </div> 
                )
                })}
            
            </div>
            
          </Swiper>

          <div className="area" >
                <ul className="circles">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                </ul>
        </div >
        </div>
        <div>
           <HomeCards/>
        </div>        
      </div>
    </div>
   
  );
}
  
