'use client';

import { useState, useEffect } from 'react';

import { FilterOptions } from '../types/song';
import styles from './FilterControls.module.css';

interface FilterControlsProps {
  onFilterChange: (filters: FilterOptions) => void;
  currentFilters: FilterOptions;
}

const GENRES = [
  'Pop',
  'Rock',
  'Hip-Hop',
  'Jazz',
  'Classical',
  'Electronic',
  'Country',
  'R&B',
  'Folk',
  'Alt',
  'Other'
];

export default function FilterControls({ onFilterChange, currentFilters }: FilterControlsProps) {
  const [localFilters, setLocalFilters] = useState<FilterOptions>(currentFilters);
  useEffect(() => { setLocalFilters(currentFilters); }, [currentFilters]);

  const handleFilterChange = (filterType: keyof FilterOptions, value: string) => {
    setLocalFilters(prev => ({ ...prev, [filterType]: value }));
    if (value) {
      onFilterChange({ ...localFilters, [filterType]: value });
    }
    else {
      const { [filterType]: _, ...rest } = localFilters;
      onFilterChange(rest);
    }
  };

  const clearAllFilters = () => {
    setLocalFilters({});
    onFilterChange({});
  };

  const hasActiveFilters = () => {
    return Object.values(localFilters).some(value => value && value.trim() !== '');
  };

  return (
    <div className={styles.container}>
      {/* Genre Filter */}
      <div className={styles.field}>
        <label htmlFor="filter-genre" className={styles.label}>
          Filter by Genre
        </label>
        <select
          id="filter-genre"
          value={localFilters.genre || ''}
          onChange={(e) => handleFilterChange('genre', e.target.value)}
          className={styles.select}
        >
          <option value="">All Genres</option>
          {GENRES.map(genre => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>
      </div>


      {/* Clear Filters Button */}
      {hasActiveFilters() && (
        <button
          onClick={clearAllFilters}
          className={styles.clearButton}
        >
          Clear All Filters
        </button>
      )}
    </div>
  );
}