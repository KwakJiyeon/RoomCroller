"use client"

import React from 'react';

interface FilterSortBarProps {
  onFilterChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  onSortChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const regions: string[] = [
  'all', '홍대', '강남', '건대', '신촌', '대학로', '잠실', '신림', '노원',
  '서울(기타)', '인천', '수원', '성남', '일산', '부천', '의정부', 
  '평택', '안산', '동탄', '경기(기타)', '대전', '천안', '청주', '충청(기타)',
  '부산', '대구', '울산', '창원', '포항', '경상(기타)', '광주', '전주', 
  '전라(기타)', '강원', '제주'
];

const FilterSortBar: React.FC<FilterSortBarProps> = ({ onFilterChange, onSortChange }) => {
  return (
    <div>
      <select onChange={onFilterChange}>
        {regions.map((region) => (
          <option key={region} value={region}>
            {region.charAt(0).toUpperCase() + region.slice(1)}
          </option>
        ))}
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
