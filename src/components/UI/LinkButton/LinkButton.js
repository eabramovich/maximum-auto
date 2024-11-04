import styles from './LinkButton.module.scss';
import Link from 'next/link';

const LinkButton = ({ children, ...props }) => {
  return (
    <Link className={styles.linkButton} {...props}>{children}</Link>
  )
}

export default LinkButton;