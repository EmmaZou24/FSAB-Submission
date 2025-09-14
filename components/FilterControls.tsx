'use client';

import { useState, useEffect } from 'react';

// TODO: Import FilterOptions type from types/song.ts
// import { FilterOptions } from '../types/song';

interface FilterControlsProps {
  onFilterChange: (filters: any) => void; // TODO: Replace 'any' with FilterOptions
  currentFilters: any; // TODO: Replace 'any' with FilterOptions
}

// TODO: Define available genres - should match the ones in SongForm
const GENRES = [
  'Pop',
  'Rock',
  'Hip-Hop',
  'Jazz',
  'Classical',
  'Electronic',
  'Country',
  'R&B',
  'Reggae',
  'Blues',
  'Folk',
  'Alternative'
];

export default function FilterControls({ onFilterChange, currentFilters }: FilterControlsProps) {
  // TODO: Add state for local filter values
  // Hint: const [localFilters, setLocalFilters] = useState<FilterOptions>(currentFilters);

  // TODO: Add useEffect to sync local filters with currentFilters prop
  // Hint: useEffect(() => { setLocalFilters(currentFilters); }, [currentFilters]);

  const handleFilterChange = (filterType: string, value: string) => {
    // TODO: Implement handleFilterChange
    // 1. Update local filter state
    // 2. If value is empty, remove that filter
    // 3. Call onFilterChange with updated filters
    console.log('TODO: Implement handleFilterChange', filterType, value);
  };

  const clearAllFilters = () => {
    // TODO: Implement clearAllFilters
    // 1. Reset all filters to empty
    // 2. Call onFilterChange with empty filters
    console.log('TODO: Implement clearAllFilters');
  };

  const hasActiveFilters = () => {
    // TODO: Implement hasActiveFilters
    // 1. Check if any filter has a value
    // 2. Return true if any filters are active, false otherwise
    console.log('TODO: Implement hasActiveFilters');
    return false; // Placeholder
  };

  return (
    <div className="space-y-4">
      {/* Genre Filter */}
      <div>
        <label htmlFor="filter-genre" className="block text-sm font-medium text-gray-700 mb-1">
          Filter by Genre
        </label>
        <select
          id="filter-genre"
          // TODO: Add value and onChange props
          // value={localFilters.genre || ''}
          // onChange={(e) => handleFilterChange('genre', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="">All Genres</option>
          {/* TODO: Map through GENRES array to create options */}
          {GENRES.map(genre => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>
      </div>

      {/* Artist Filter */}
      <div>
        <label htmlFor="filter-artist" className="block text-sm font-medium text-gray-700 mb-1">
          Filter by Artist
        </label>
        <input
          type="text"
          id="filter-artist"
          // TODO: Add value and onChange props
          // value={localFilters.artist || ''}
          // onChange={(e) => handleFilterChange('artist', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Enter artist name"
        />
      </div>

      {/* TODO: Add more filter options as needed */}
      {/* Examples: Year range, Title search, etc. */}

      {/* Clear Filters Button */}
      {hasActiveFilters() && (
        <button
          onClick={clearAllFilters}
          className="w-full bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors"
        >
          Clear All Filters
        </button>
      )}

      {/* Filter Status */}
      <div className="text-sm text-gray-600">
        {/* TODO: Display current filter status */}
        {/* Example: "Showing X songs" or "Filtered by: Genre, Artist" */}
        <p>Filter status will be displayed here</p>
      </div>
    </div>
  );
}
