'use client';

import { Song } from '../types/song';
import styles from './SongList.module.css';

interface SongListProps {
  songs: Song[];
  onDeleteSong: (songId: string) => void;
}

export default function SongList({ songs, onDeleteSong }: SongListProps) {

  if (songs.length === 0) {
    return (
      <div className={styles.emptyState}>
        <p className={styles.emptyStateTitle}>No songs found.</p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      {songs.map((song) => (
        <div
          key={song.id}
          className={styles.songItem}
        >
          <div className={styles.songContent}>
            <div className={styles.songInfo}>
              <h3 className={styles.songTitle}>
                {song.title}
              </h3>
              
              <p className={styles.songArtist}>
                Artist: {song.artist}
              </p>
              
              <span className={styles.genreBadge}>
                {song.genre}
              </span>
            </div>
            
            <button
              onClick={() => onDeleteSong(song.id)}
              className={styles.deleteButton}
              title="Delete song"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}