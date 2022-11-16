import React from 'react';
import styles from './Button.module.css';
import google from '../../assets/goggle.png';

function Google() {
  return (
    <div className={styles.googlediv}>
      <button className={styles.google}>
        <div className={styles.googleDiv}>
          <img src={google} alt="google" />
        </div>
        <div className={styles.p3}>Sign in with Google</div>
      </button>
    </div>
  );
}

export default Google;
