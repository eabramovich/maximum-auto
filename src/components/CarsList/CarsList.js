'use client'
import { useEffect, useState } from "react";
import Link from "next/link";
import { carBrands } from "@/utils/constants";
import styles from './CarsList.module.scss'

const CarsList = ({ carsInit, brandInit, engineSizesInit, complectationsInit }) => {
  let [cars, setCars] = useState(carsInit);
  let [brandFilter, setBrandFilter] = useState(brandInit);
  const [filter, setFilter] = useState({
    brand: brandInit,
    engineSize: engineSizesInit,
    complectation: complectationsInit
  });
  localStorage.setItem("cars", JSON.stringify(cars));

  console.log(engineSizesInit);
  console.log(complectationsInit);


  const filterCarsByBrand = async (brand) => {
    setBrandFilter(brand);
  }

  const isBrandFilterActive = (name) => {
    return name.toLowerCase() === brandFilter.toLowerCase();
  }


  return (
    <div className={styles.carFinder}>
      <div className={styles.filter}>
        <h4>Бренд</h4>
        <ul className={styles.brands}>
          {
            carBrands.map((brand =>
            (
              <Link
                href={`/cars/${brand.name}`}
                key={brand.id}
                onClick={() => filterCarsByBrand(brand.name)}
                className={`${styles.brandName} ${isBrandFilterActive(brand.name) ? styles.brandNameActive : ""}`}
              >
                {brand.name}
              </Link>
            )
            ))}
        </ul>
        <button className={styles.resetButton}>Сбросить фильтр</button>
      </div>
      <ul className={styles.carsList}>
        {cars.map((car, index) => (
          <li key={car.car_id} className={styles.car}>
            <img src={car.photos.imgs[0].urlThumb} className={styles.image} />
            <h3>{car.brandName} {car.modelName}</h3>
            <p>Объем двигателя: {car.EngineSize} / {car.Power} Л.С</p>
            <Link href={`/car/${car.car_id}`}>Подробнее</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CarsList;