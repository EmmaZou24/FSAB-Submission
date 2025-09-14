'use client';

import { useState } from 'react';
import { Song } from '../types/song';

interface SongFormProps {
  onSubmit: (songData: Omit<Song, 'id'>) => void;
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
  // TODO: Add state for form data
  // Hint: const [formData, setFormData] = useState({ title: '', artist: '', genre: '' });
  const [formData, setFormData] = useState({ title: '', artist: '', genre: '' });
  
  // TODO: Add state for form validation errors
  // Hint: const [errors, setErrors] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    // TODO: Implement handleInputChange
    // 1. Update formData state with new input value
    // 2. Clear any existing errors for this field
    // Hint: setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    console.log('TODO: Implement handleInputChange', e.target.name, e.target.value);
  };

  const validateForm = () => {
    // TODO: Implement form validation
    // 1. Check that all required fields are filled
    // 2. Set appropriate error messages
    // 3. Return true if valid, false if invalid
    console.log('TODO: Implement validateForm');
    return true; // Placeholder
  };

  const handleSubmit = (e: React.FormEvent) => {
    // TODO: Implement handleSubmit
    // 1. Prevent default form submission
    // 2. Validate the form
    // 3. If valid, call onSubmit with form data
    // 4. Reset the form after successful submission
    // 5. Handle any errors
    e.preventDefault();
    console.log('TODO: Implement handleSubmit');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Song Title Input */}
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
          Song Title *
        </label>
        <input
          type="text"
          id="title"
          name="title"
          // TODO: Add value and onChange props
          // value={formData.title}
          // onChange={handleInputChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Enter song title"
          required
        />
        {/* TODO: Display error message if title has validation error */}
        {/* {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>} */}
      </div>

      {/* Artist Input */}
      <div>
        <label htmlFor="artist" className="block text-sm font-medium text-gray-700 mb-1">
          Artist *
        </label>
        <input
          type="text"
          id="artist"
          name="artist"
          // TODO: Add value and onChange props
          // value={formData.artist}
          // onChange={handleInputChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Enter artist name"
          required
        />
        {/* TODO: Display error message if artist has validation error */}
        {/* {errors.artist && <p className="text-red-500 text-sm mt-1">{errors.artist}</p>} */}
      </div>

      {/* Genre Dropdown */}
      <div>
        <label htmlFor="genre" className="block text-sm font-medium text-gray-700 mb-1">
          Genre *
        </label>
        <select
          id="genre"
          name="genre"
          // TODO: Add value and onChange props
          // value={formData.genre}
          // onChange={handleInputChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          required
        >
          <option value="">Select a genre</option>
          {/* TODO: Map through GENRES array to create options */}
          {GENRES.map(genre => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>
        {/* TODO: Display error message if genre has validation error */}
        {/* {errors.genre && <p className="text-red-500 text-sm mt-1">{errors.genre}</p>} */}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
      >
        Add Song
      </button>
    </form>
  );
}
