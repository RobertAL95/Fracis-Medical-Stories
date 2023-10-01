import Link from 'next/link';
import styles from '../../styles/Navigation.module.css';

export default function Navigation() {
  return (
    <nav>
        <buttonLink className={styles.buttonlink}>
          <Link href="/Login" >
              Iniciar Sesión
          </Link>
        </buttonLink>
    </nav>
  );
}
