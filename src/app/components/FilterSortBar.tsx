"use client"

import React from 'react';

interface FilterSortBarProps {
  onFilterChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  onSortChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const FilterSortBar: React.FC<FilterSortBarProps> = ({ onFilterChange, onSortChange }) => {
  return (
    <div>
      <select onChange={onFilterChange}>
        <option value="all">All Locations</option>
        <option value="seoul">Seoul</option>
        <option value="busan">Busan</option>
        <option value="incheon">Incheon</option>
      </select>
      <select onChange={onSortChange}>
        <option value="rating">Rating</option>
        <option value="difficulty">Difficulty</option>
        <option value="new">New</option>
      </select>
    </div>
  );
};

export default FilterSortBar;
