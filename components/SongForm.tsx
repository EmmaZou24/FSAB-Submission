'use client';

import { useState } from 'react';
import { Song } from '../types/song';
import styles from './SongForm.module.css';

interface SongFormProps {
  onSubmit: (songData: Omit<Song, 'id'>) => void; //handles submit
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

export default function SongForm({ onSubmit }: SongFormProps) {
  const [formData, setFormData] = useState({ title: '', artist: '', genre: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors(prev => ({ ...prev, [e.target.name]: '' }));
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};
    if (!formData.title) errors.title = 'Required';
    if (!formData.artist) errors.artist = 'Required';
    if (!formData.genre) errors.genre = 'Required';
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Song submitted:', formData);
      onSubmit(formData);
      setFormData({ title: '', artist: '', genre: '' });
      setErrors({});
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      {/* Song Title Input */}
      <div className={styles.field}>
        <label htmlFor="title" className={styles.label}>
          Song Title *
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
          className={styles.input}
        />
        {errors.title && <p>{errors.title}</p>}
      </div>

      {/* Artist Input */}
      <div className={styles.field}>
        <label htmlFor="artist" className={styles.label}>
          Artist *
        </label>
        <input
          type="text"
          id="artist"
          name="artist"
          value={formData.artist}
          onChange={handleInputChange}
          className={styles.input}
        />
        {errors.artist && <p>{errors.artist}</p>}
      </div>

      {/* Genre Dropdown */}
      <div className={styles.field}>
        <label htmlFor="genre" className={styles.label}>
          Genre *
        </label>
        <select
          id="genre"
          name="genre"
          value={formData.genre}
          onChange={handleInputChange}
          className={styles.select}
        >
          <option value="">Select a genre</option>
          {GENRES.map(genre => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>
        {errors.genre && <p>{errors.genre}</p>}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className={styles.submitButton}
      >
        Add Song
      </button>
    </form>
  );
}