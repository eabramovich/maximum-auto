import styles from './index.module.css';
import CarCard from '@/components/CarCard/CarCard';
import Header from '@/components/Header/Header';
import Banner from '@/components/Banner/Banner';


const car = async ({ params }) => {
  const { brand, id } = params;
  const res = await fetch(`https://test2.maximum-haval.ru/public/test-task/v1/brand/${brand}`);
  const cars = await res.json();
  const car = cars.filter(car => car.car_id === id)[0];

  return (
    <div>
      <Header />
      <main className={styles.content}>
        <h1 className={styles.title}>{car.brandName} {car.modelName} {car.modelYear} года</h1>
        <p className={styles.vin}>VIN {car.vin}</p>
        <CarCard car={car} />
      </main>
      <Banner />
    </div>
  )
}

export default car;