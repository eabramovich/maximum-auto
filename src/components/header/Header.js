import Image from 'next/image';
import logo from '../../../public/logo.svg';
import styles from './Header.module.scss'

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={`content ${styles.content}`}>
        <Image
          src={logo}
          alt="Логотип"
        />
        <p className={styles.description}>Официальный дилер Максимум</p>
      </div>
    </div>
  )
}

export default Header;