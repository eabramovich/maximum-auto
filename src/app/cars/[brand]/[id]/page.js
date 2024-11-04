//import Slider from '@/components/Slider/Slider';
import Header from '@/components/Header/Header';
import styles from './index.module.css';
import CarCard from '@/components/CarCard/CarCard';
//import Slider from '@/components/Slider/Slider';

const car = async ({ params }) => {
  // console.log('!!!!!!!!!!!!!!!!!!!!!!!!');
  // console.log(params);
  const { brand, id } = params;
  const res = await fetch(`https://test2.maximum-haval.ru/public/test-task/v1/brand/${brand}`);
  const cars = await res.json();
  const car = cars.filter(car => car.car_id === id)[0];
  
  // console.log(brand, id);
  // console.log(car);
  
  return (
    <div>
      <h1>{car.brandName} {car.modelName} {car.modelYear} года</h1>
      <p className={styles.vin}>VIN {car.vin}</p>
      <CarCard car={car} />
      {/* <div className={styles.car}>
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

      </div> */}
    </div>
  )
}

export default car;