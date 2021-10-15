import React from 'react';

import styles from '../styles/BannerItem.module.css';

export const BannerItem = ({ item }) => {
  return (
    <div className={styles.container}>
      <img src={item.url} alt="banner item" />
    </div>
  );
};
