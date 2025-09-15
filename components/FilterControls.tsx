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
  // TODO: Add state for local filter values
  const [localFilters, setLocalFilters] = useState<FilterOptions>(currentFilters);
  // TODO: Add useEffect to sync local filters with currentFilters prop
  useEffect(() => { setLocalFilters(currentFilters); }, [currentFilters]);

  const handleFilterChange = (filterType: keyof FilterOptions, value: string) => {
    // TODO: Implement handleFilterChange
    // 1. Update local filter state
    // 2. If value is empty, remove that filter
    // 3. Call onFilterChange with updated filters
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
    // TODO: Implement clearAllFilters
    // 1. Reset all filters to empty
    // 2. Call onFilterChange with empty filters
    setLocalFilters({});
    onFilterChange({});
  };

  const hasActiveFilters = () => {
    // TODO: Implement hasActiveFilters
    // 1. Check if any filter has a value
    // 2. Return true if any filters are active, false otherwise
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

      {/* Artist Filter */}
      <div className={styles.field}>
        <label htmlFor="filter-artist" className={styles.label}>
          Filter by Artist
        </label>
        <input
          type="text"
          id="filter-artist"
          value={localFilters.artist || ''}
          onChange={(e) => handleFilterChange('artist', e.target.value)}
          className={styles.input}
        />
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