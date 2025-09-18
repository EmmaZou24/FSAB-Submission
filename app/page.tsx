'use client';

import { useState, useEffect } from 'react';
import SongForm from '../components/SongForm';
import SongList from '../components/SongList';
import FilterControls from '../components/FilterControls';
import { Song, FilterOptions } from '../types/song';
import { songService } from '../services/songService';
import styles from './page.module.css';

export default function Home() {
  const [songs, setSongs] = useState<Song[]>([]); // States for songs
  const [filteredSongs, setFilteredSongs] = useState<Song[]>([]); // States for filtered
  
  const [filters, setFilters] = useState<FilterOptions>({}); // States for filters

  const loadSongs = async () => {
    try {
      const allSongs = await songService.getAllSongs();
      setSongs(allSongs);
    } catch (error) {
      console.error('Error loading songs:', error);
    }
  };

  const applyFilters = () => {
    let filtered = [...songs];
    
    if (filters.genre) {
      filtered = filtered.filter(song => song.genre === filters.genre);
    }
    
    setFilteredSongs(filtered);
  };

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
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>
          Music Manager!
        </h1>
        
        <div className={styles.grid}>
          {/* Song Form Card */}
          <div className={styles.card}>
            <h2 className={styles.cardTitle}>Add a New Song!</h2>
            <SongForm onSubmit={addSong} />
          </div>

          {/* Filter Controls Card */}
          <div className={styles.card}>
            <h2 className={styles.cardTitle}>Filter Songs</h2>
            <FilterControls 
              onFilterChange={updateFilters}
              currentFilters={filters}
            />
          </div>

          {/* Song List Card */}
          <div className={styles.songListCard}>
            <h2 className={styles.cardTitle}>Songs</h2>
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
