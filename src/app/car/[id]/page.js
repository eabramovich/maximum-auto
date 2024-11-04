'use client'
import { useEffect, useState } from "react";
import Slider from "@/components/Slider/Slider";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination, Navigation } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
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
    console.log({ ...currentCar, price: String(currentCar.price).replace(/\B(?=(\d{3})+(?!\d))/g, " ") });
    setCar({ ...currentCar, price: String(currentCar.price).replace(/\B(?=(\d{3})+(?!\d))/g, " ") });
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
          <div className={styles.characteristics}>
            <h2>Характеристики</h2>
            <div className={styles.content}>
              <ul className={styles.list}>
                <li className={`${styles.item} ${styles.year}`}>
                  {car.modelYear}
                </li>
                <li className={`${styles.item} ${styles.fuelType}`}>
                  { car.EngineSize ?  car.EngineSize + ' л / ' : "" }
                  { car.Power ?  car.Power + ' л.с / ' : "" }  
                  { car.FuelType ?  car.FuelType : ""}
                </li>
                <li className={`${styles.item} ${styles.variator}`}>
                  КП - { car.transmissionRu}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.slider}>
          <Slider slides={slides} title={car.modelName} />
        </div>

      </div>
    </div>
  )
}

export default carPage;