import React from 'react';
import { EscapeRoom } from '../types';

interface EscapeRoomItemProps {
  room: EscapeRoom;
}

const EscapeRoomItem: React.FC<EscapeRoomItemProps> = ({ room }) => {
  return (
    <div>
      <h2>{room.name} {room.isNew && <span>New!</span>}</h2>
      <p>Location: {room.location}</p>
      <p>Rating: {room.rating}</p>
      <p>Difficulty: {room.difficulty}</p>
      <p>Release: {room.releaseDate}</p>
    </div>
  );
};

export default EscapeRoomItem;
