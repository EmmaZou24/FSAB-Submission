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
              <svg
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}