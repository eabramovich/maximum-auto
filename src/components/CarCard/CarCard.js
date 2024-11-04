'use client'

import { useEffect } from 'react';
import Slider from '../Slider/Slider';
import styles from './CarCard.module.scss';

const CarCard = ({ car }) => {
  const carPrice = String(car.price).replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  const slideImgs = car.photos.imgs;
  console.log(slideImgs);
  useEffect(() => {
    
  })

  return (
    <div className={styles.car}>
        <div className={styles.carInfo}>
          <div className={styles.param}>
            <span className={styles.price}>{carPrice} &#8381;</span>
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
          <Slider slides={slideImgs} title={car.modelName} />
        </div>

      </div>
  )
}

export default CarCard;