"use client"

import React, { useState, useEffect } from 'react';
import EscapeRoomItem from './EscapeRoomItem';
import FilterSortBar from './FilterSortBar';
import { EscapeRoom } from '../types';

const escapeRoomsData: EscapeRoom[] = [
  // Example data
  { id: '1', name: 'Mystery Room', location: 'seoul', rating: 4.5, difficulty: 3, isNew: true, releaseDate: '2024-07-01' },
  { id: '2', name: 'Adventure Room', location: 'busan', rating: 4.8, difficulty: 4, isNew: false, releaseDate: '2024-05-15' },
  { id: '3', name: 'Adventure Room2', location: 'busan', rating: 5.0, difficulty: 5, isNew: false, releaseDate: '2024-05-10' },
  { id: '4', name: 'Adventure Room3', location: 'busan', rating: 4.5, difficulty: 8, isNew: false, releaseDate: '2024-05-01' },
  { id: '5', name: 'Adventure Room4', location: 'busan', rating: 4.7, difficulty: 6, isNew: false, releaseDate: '2024-06-15' },
  // Add more data
];

const EscapeRoomList: React.FC = () => {
  const [filteredRooms, setFilteredRooms] = useState<EscapeRoom[]>(escapeRoomsData);
  const [filter, setFilter] = useState<string>('all');
  const [sort, setSort] = useState<string>('rating');

  useEffect(() => {
    let rooms = [...escapeRoomsData]; // Deep copy to prevent mutation of the original data

    if (filter !== 'all') {
      rooms = rooms.filter(room => room.location === filter);
    }

    if (sort === 'rating') {
      rooms.sort((a, b) => b.rating - a.rating);
    } else if (sort === 'difficulty') {
      rooms.sort((a, b) => b.difficulty - a.difficulty);
    } else if (sort === 'new') {
      rooms.sort((a, b) => new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime());
    }

    setFilteredRooms(rooms);
  }, [filter, sort]);

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(event.target.value);
  };

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSort(event.target.value);
  };

  return (
    <div>
      <FilterSortBar onFilterChange={handleFilterChange} onSortChange={handleSortChange} />
      <div>
        {filteredRooms.map(room => (
          <EscapeRoomItem key={room.id} room={room} />
        ))}
      </div>
    </div>
  );
};

export default EscapeRoomList;
