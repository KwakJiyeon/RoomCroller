"use client"

import React, { useState, useEffect } from 'react';
import EscapeRoomItem from './EscapeRoomItem';
import FilterSortBar from './FilterSortBar';
import { EscapeRoom } from '../types';

const escapeRoomsData: EscapeRoom[] = [
  // Example data
  {
    id: 1,
    store: 'Escape Mania',
    name: 'Mystery Mansion',
    rating: 4.8,
    difficulty: 7,
    reviews: 152,
    area: '홍대',
    isNew: true,
    createdAt: new Date('2024-07-15'),
  },
  {
    id: 2,
    store: 'Escape Mania',
    name: 'Haunted House',
    rating: 4.5,
    difficulty: 6,
    reviews: 89,
    area: '부산',
    isNew: false,
    createdAt: new Date('2024-05-20'),
  },
  {
    id: 3,
    store: 'Puzzle Palace',
    name: 'Enigma Room',
    rating: 4.9,
    difficulty: 8,
    reviews: 200,
    area: '인천',
    isNew: true,
    createdAt: new Date('2024-06-25'),
  },
  {
    id: 4,
    store: 'Escape World',
    name: 'Treasure Hunt',
    rating: 4.7,
    difficulty: 5,
    reviews: 120,
    area: '대구',
    isNew: false,
    createdAt: new Date('2024-04-10'),
  },
  {
    id: 5,
    store: 'Mystery Escape',
    name: 'Lost Temple',
    rating: 4.6,
    difficulty: 9,
    reviews: 95,
    area: '제주',
    isNew: false,
    createdAt: new Date('2024-05-30'),
  },
  {
    id: 6,
    store: 'Escape King',
    name: 'Secret Lab',
    rating: 4.3,
    difficulty: 4,
    reviews: 70,
    area: '홍대',
    isNew: true,
    createdAt: new Date('2024-07-05'),
  },
  {
    id: 7,
    store: 'Escape Master',
    name: 'Pirate Ship',
    rating: 4.9,
    difficulty: 7,
    reviews: 110,
    area: '부산',
    isNew: false,
    createdAt: new Date('2024-06-01'),
  },
  {
    id: 8,
    store: 'Mystery Escape',
    name: 'Dungeon of Doom',
    rating: 4.7,
    difficulty: 6,
    reviews: 130,
    area: '홍대',
    isNew: true,
    createdAt: new Date('2024-07-10'),
  },
  {
    id: 9,
    store: 'Escape Zone',
    name: 'Alien Invasion',
    rating: 4.5,
    difficulty: 7,
    reviews: 85,
    area: '전주',
    isNew: false,
    createdAt: new Date('2024-03-15'),
  },
  {
    id: 10,
    store: 'Escape Land',
    name: 'Jungle Adventure',
    rating: 4.8,
    difficulty: 5,
    reviews: 100,
    area: '광주',
    isNew: false,
    createdAt: new Date('2024-04-20'),
  },
  // Add more data
];

const EscapeRoomList: React.FC = () => {
  const [filteredRooms, setFilteredRooms] = useState<EscapeRoom[]>(escapeRoomsData);
  const [filter, setFilter] = useState<string>('all');
  const [sort, setSort] = useState<string>('rating');

  const fetchEscapeRooms = async () => {
    try {
      const response = await fetch('/api/themes'); // API 엔드포인트를 여기에 입력
      const data: EscapeRoom[] = await response.json();
      setFilteredRooms(data);
    } catch (error) {
      console.error('Failed to fetch escape rooms:', error);
    }
  };

  useEffect(() => {
    fetchEscapeRooms(); // 컴포넌트가 마운트될 때 데이터 가져오기
  }, []);


  useEffect(() => {
    let rooms = [...escapeRoomsData]; // 더미데이터
    //let rooms = [...filteredRooms]; // 백엔드 적용

    if (filter !== 'all') {
      rooms = rooms.filter((room) => room.area === filter);
    }

    if (sort === 'rating') {
      rooms.sort((a, b) => b.rating - a.rating);
    } else if (sort === 'difficulty') {
      rooms.sort((a, b) => b.difficulty - a.difficulty);
    } else if (sort === 'new') {
      rooms = rooms.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
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
