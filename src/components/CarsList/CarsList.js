'use client'
import { useEffect, useState, useMemo } from "react";
import Link from "next/link";
import { carBrands } from "@/utils/constants";
import LinkButton from "../UI/LinkButton/LinkButton";
import styles from './CarsList.module.scss'

const CarsList = ({ carsInit, brandInit, engineSizesInit, complectationsInit }) => {
  const [engineSizeFilter, setEngineSizeFilter] = useState(null);
  const [complectationsFilter, setСomplectationsFilter] = useState(null);
  const cars = useMemo(() => carsInit
    .filter(car => engineSizeFilter === null || car.EngineSize === engineSizeFilter)
    .filter(car => complectationsFilter === null || car.Complectation.toLowerCase() === complectationsFilter.toLowerCase()),
    [engineSizeFilter, complectationsFilter],
  );

  const filterCarsByEngineSize = (value) => {
    setEngineSizeFilter(value);
  }

  const filterCarsByComplectations = (value) => {
    setСomplectationsFilter(value.toLowerCase());
  }

  const resetFilter = () => {
    setEngineSizeFilter(null);
    setСomplectationsFilter(null);
  }

  const isBrandFilterActive = (name) => {
    return name.toLowerCase() === brandInit.toLowerCase();
  }


  return (
    <div className={styles.carFinder}>
      <div className={styles.filter}>
        <div>
          <h4 className={`hide-on-mobile ${styles.groupTitle}`}>Бренд</h4>
          <ul className={styles.group}>
            {
              carBrands.map((brand =>
              (
                <Link
                  href={`/cars/${brand.name}`}
                  key={brand.id}
                  // classnames = (...args) => args.filter(Boolean).join(" ");
                  className={`${styles.param} ${isBrandFilterActive(brand.name) ? styles.paramActive : ""}`}
                >
                  {brand.name}
                </Link>
              )
              ))}
          </ul>
        </div>
        <div className="hide-on-mobile">
          <h4 className={`{styles.groupTitle}`}>Объем двигателя</h4>
          <ul className={styles.group}>
            {
              engineSizesInit.map(((value, index) =>
              (
                <div
                  key={value}
                  onClick={() => filterCarsByEngineSize(value)}
                  className={`${styles.param} ${value === engineSizeFilter ? styles.paramActive : ""}`}
                >
                  {value}
                </div>
              )
              ))}
          </ul>
        </div>
        <div className="hide-on-mobile">
          <h4 className={styles.groupTitle}>Комплектация</h4>
          <ul className={styles.group}>
            {
              complectationsInit.map(((value, index) =>
              (
                <div
                  key={value}
                  onClick={() => filterCarsByComplectations(value)}
                  className={`${styles.param} ${complectationsFilter !== null && value.toLowerCase() === complectationsFilter.toLocaleLowerCase() ? styles.paramActive : ""}`}
                >
                  {value}
                </div>
              )
              ))}
          </ul>
        </div>
        <button className={`hide-on-mobile ${styles.resetButton}`} onClick={() => resetFilter()}>Сбросить фильтр</button>
      </div>
      <ul className={styles.carsList}>
        {cars.map((car, index) => (
          <li key={car.car_id} className={styles.car}>
            <img src={car.photos.imgs[0].urlThumb} className={styles.image} />
            <h3 className={styles.brandName}>{car.brandName} {car.modelName}</h3>
            <p className={styles.params}>{car.EngineSize} / {car.Power} Л.С / {car.transmissionRu}  </p>
            <LinkButton href={`${brandInit}/${car.car_id}`}>Подробнее</LinkButton>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CarsList;