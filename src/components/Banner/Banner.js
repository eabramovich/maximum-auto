import Image from "next/image";
import LinkButton from "../UI/LinkButton/LinkButton";
import carImg from "../../../public/car.png"
import styles from "./Banner.module.scss";

const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.advertOffer}>
        <h2 className={styles.title}>Кредит на новый Chery Tiggo</h2>
        <div className={styles.content}>
          <p className={styles.description}>
            Оформите кредит на любой автомобиль асортимента дилерского центра
            &laquo;Максимум&raquo;
          </p>
          <LinkButton href="#">Оформить</LinkButton>

        </div>
      </div>
      <Image src={carImg} className={styles.image}/>
    </div>
  )
}

export default Banner;