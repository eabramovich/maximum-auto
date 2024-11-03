'use client'
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import styles from './index.module.scss';

const carPage = ({ params }) => {
  const { id } = params;
  const [car, setCar] = useState({});
  const [slides, setSlides] = useState([])
  console.log(id);

  useEffect(() => {
    const cars = JSON.parse(localStorage.getItem("cars"));
    const currentCar = cars.filter(car => car.car_id === id)[0];
    console.log(cars);
    console.log(currentCar);
    console.log(currentCar.photos.imgs);
    setCar(currentCar);
    setSlides(currentCar.photos.imgs);
  }, [])


  return (
    <div>
      <h1>{car.brandName} {car.modelName} {car.modelYear} года</h1>
      <p className={styles.vin}>VIN {car.vin}</p>
      <div className={styles.car}>
        <div className={styles.carInfo}>
          <div className={styles.param}>
            <span className={styles.price}>{car.price} &#8381;</span>
          </div>
          <div className={styles.param}>
          </div>
        </div>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide._id}>
              <img src={slide.urlThumb} alt={car.modelName} />
              <h2>{slide.title}</h2>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </div>
  )
}

export default carPage;