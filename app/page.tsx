'use client';

import { useState, useEffect } from 'react';
import SongForm from '../components/SongForm';
import SongList from '../components/SongList';
import FilterControls from '../components/FilterControls';
import { Song, FilterOptions } from '../types/song';
import { songService } from '../services/songService';

export default function Home() {
  const [songs, setSongs] = useState<Song[]>([]); // States for songs
  const [filteredSongs, setFilteredSongs] = useState<Song[]>([]); // States for filtered
  
  const [filters, setFilters] = useState<FilterOptions>({}); // States for filters

  const loadSongs = () => {
    // TODO: Implement loadSongs function
    // 1. Fetch all songs from Firebase Firestore
    // 2. Update local songs state
    // 3. Handle any errors
    console.log('TODO: Implement loadSongs');
  };

  const applyFilters = () => {
    // TODO: Implement applyFilters function
    // 1. Filter songs based on current filter options
    // 2. Update filteredSongs state
    // 3. If no filters are active, show all songs
    console.log('TODO: Implement applyFilters');
  };

  // TODO: Add useEffect to load songs from Firebase on component mount
  // Hint: useEffect(() => { loadSongs(); }, []);
  useEffect(() => { loadSongs(); }, []);
  useEffect(() => { applyFilters(); }, [songs, filters]);

  const addSong = async (songData: Omit<Song, 'id'>) => {
    try {
      const songId = await songService.addSong(songData);
      setSongs(prevSongs => [...prevSongs, { id: songId, ...songData }]);
    }
    catch (error) {
      console.error('Error adding song:', error);
      throw error;
    }
  };

  const deleteSong = async (songId: string) => {
    try {
      await songService.deleteSong(songId);
      setSongs(prevSongs => prevSongs.filter(song => song.id !== songId));
    }
    catch (error) {
      console.error('Error deleting song:', error);
      throw error;
    }
  };

  const updateFilters = (newFilters: any) => {
    try {
      setFilters(newFilters);
    }
    catch (error) {
      console.error('Error updating filters:', error);
      throw error;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Song Collection Manager
        </h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Song Form Card */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-700">Add New Song</h2>
            <SongForm onSubmit={addSong} />
          </div>

          {/* Filter Controls Card */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-700">Filter Songs</h2>
            <FilterControls 
              onFilterChange={updateFilters}
              currentFilters={filters}
            />
          </div>

          {/* Song List Card */}
          <div className="bg-white rounded-lg shadow-md p-6 lg:col-span-1">
            <h2 className="text-xl font-semibold mb-4 text-gray-700">Song Collection</h2>
            <SongList 
              songs={filteredSongs}
              onDeleteSong={deleteSong}
            />
          </div>
        </div>
      </div>
    </div>
  );
} 
