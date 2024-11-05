import { notFound } from 'next/navigation';
import styles from "./index.module.scss";
import Header from '@/components/Header/Header';
import CarsList from '@/components/CarsList/CarsList';

//export default async function BrandCars({ params }) {
export default async function BrandCars({ params }) {
    const { brand } = await params;

    const res = await fetch(`https://test2.maximum-haval.ru/public/test-task/v1/brand/${brand}`);
    const cars = await res.json();
    const engineSizes = [...new Set(cars.map(car => car.EngineSize))];
    const complectations = [... new Set(cars.map(car => car.Complectation))];
    console.log(cars);
    console.log(engineSizes);

    return (
        <div>
            <Header />
            <main className={styles.content}>
                <h1 className={styles.title}>Автомобили <span className={styles.brand}>{brand}</span> в СПб</h1>
                <CarsList
                    carsInit={cars}
                    brandInit={brand}
                    engineSizesInit={engineSizes}
                    complectationsInit={complectations}
                />
            </main>

        </div>
    );
}