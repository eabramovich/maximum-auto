import { notFound } from 'next/navigation';
import styles from "./index.module.scss"

export default async function BrandCars({ params }) {
    const { brand } = params;

    const res = await fetch(`https://test2.maximum-haval.ru/public/test-task/v1/brand/${brand}`);

    if (!res.ok) {
        notFound(); // Если нет данных, показать 404
    }

    const cars = await res.json();
    console.log(cars);

    return (
        <div>
            <main className={`content ${styles.content}`}>
                <h1 className={styles.title}>Автомобили <span className={styles.brand}>{brand}</span> в СПб</h1>
                <ul>
                    {cars.map((car, index) => (
                        <li key={car.car_id}>
                            <h3>{car.modelName}</h3>
                            <p>Объем двигателя: {car.EngineSize}L</p>
                            <p>Комплектация: {car.configuration}</p>
                        </li>
                    ))}
                </ul>
            </main>
        </div>
    );
}