'use client'

import { useEffect } from 'react';
import Slider from '../Slider/Slider';
import styles from './CarCard.module.scss';
import Image from 'next/image';
import guaranteeSign from "../../../public/guarantee.svg";
import modelYearIcon from "../../../public/modelYear.svg";
import fuelIcon from "../../../public/fuel.svg";
import transmissionIcon from "../../../public/transmission.svg";

const CarCard = ({ car }) => {
  const carPrice = String(car.price).replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  const slideImgs = car.photos.imgs;
  useEffect(() => {

  })

  return (
    <div className={styles.car}>
      <div className={styles.carInfo}>
        <div className={styles.params}>
          <div className={styles.item}>
            <span className={styles.price}>{carPrice} &#8381;</span>
          </div>
          <div className={styles.item}>
            <Image src={guaranteeSign} alt="Значок гарантии"/>
            <p className={styles.value}>Гарантия юр. чистоты</p>
          </div>
          </div>
        <div className={styles.characteristics}>
          <h2 className={styles.title}>Характеристики</h2>
          <div className={styles.content}>
            <div className={`${styles.item} ${styles.year}`}>
              <Image src={modelYearIcon} className={styles.icon} alt="Год выпуска"/>
              {car.modelYear}
            </div>
            <div className={`${styles.item} ${styles.fuelType}`}>
              <Image src={fuelIcon} className={styles.icon} alt="Топливо" />
              {car.EngineSize ? car.EngineSize + ' л / ' : ""}
              {car.Power ? car.Power + ' л.с / ' : ""}
              {car.FuelType ? car.FuelType : ""}
            </div>
            <div className={`${styles.item} ${styles.variator}`}>
              <Image src={transmissionIcon} className={styles.icon} alt="Коробка передач" />
              КП - {car.transmissionRu}
            </div>
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