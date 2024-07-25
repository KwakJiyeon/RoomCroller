// pages/index.tsx
import React from 'react';
import EscapeRoomList from './components/EscapeRoomList';
import styles from './page.module.css'

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1>Escape Room Finder</h1>
      <EscapeRoomList />
    </div>
  );
};

export default Home;
