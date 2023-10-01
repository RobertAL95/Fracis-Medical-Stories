// pages/Menu.js
import React from 'react';
import Link from 'next/link';
import styles from '../styles/Menu.module.css';
import ComponenteA from './Menu/ComponenteA';
import ComponenteB from './Menu/ComponenteB';

const Menu = () => {
  return (
    <div className={styles.dashboard}>
      <h1>Dashboard</h1>
      <div className={styles.scrollContainer}>
        <Link href="/Menu/ComponenteA">
            <ComponenteA/>
        </Link>
      </div>
      <div className="rectangulo-container">
        <Link href="/Menu/ComponenteB">
            <ComponenteB/>
        </Link>
      </div>
    </div>
  );
};

export default Menu;
