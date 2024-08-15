import React from 'react';
import { EscapeRoom } from '../types';
import styles from './styles.module.css';

interface EscapeRoomItemProps {
  room: EscapeRoom;
}

const EscapeRoomItem: React.FC<EscapeRoomItemProps> = ({ room }) => {
  return (
    <div className={`${styles.escapeRoomItem} ${room.isNew ? styles.new : ''}`}>
      <h3>{room.name}</h3>
      <p>Location: {room.area}</p>
      <p>Rating: {room.rating}</p>
      <p>Difficulty: {room.difficulty}</p>
      <p>Release: `{room.createdAt.getFullYear()}-{room.createdAt.getMonth() + 1}-{room.createdAt.getDate()}`</p>
    </div>
  );
};

export default EscapeRoomItem;
