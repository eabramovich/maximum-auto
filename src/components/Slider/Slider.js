import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './Slider.module.scss';

const Slider = ({ slides, title }) => {
  return (
    <div className={styles.slider}>
      <Swiper
        modules={[Pagination, Navigation]} // Подключаем модули для пагинации и навигации
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }} // Включаем кликабельную пагинацию
        navigation // Включаем кнопки навигации
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide._id} className={styles.slide}>
            <img src={slide.url} alt={title} className={styles.image} />
            <h2>{slide.title}</h2>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Slider;