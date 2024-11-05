import Image from 'next/image';
import logo from '../../../public/logo.svg';
import Link from 'next/link';
import styles from './Header.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <Link href="/">
          <Image
            src={logo}
            alt="Логотип"
            className={styles.logo}
          />
        </Link>
        <p className={styles.description}>Официальный дилер Максимум</p>
      </div>
    </header>
  )
}

export default Header;