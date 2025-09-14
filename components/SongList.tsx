'use client';

import { Song } from '../types/song';

interface SongListProps {
  songs: Song[];
  onDeleteSong: (songId: string) => void;
}

export default function SongList({ songs, onDeleteSong }: SongListProps) {
  const handleDelete = (songId: string) => {
    // TODO: Add confirmation dialog before deleting
    // Hint: Use window.confirm() or a more sophisticated modal
    // if (window.confirm('Are you sure you want to delete this song?')) {
    //   onDeleteSong(songId);
    // }
    console.log('TODO: Add delete confirmation', songId);
    onDeleteSong(songId);
  };

  if (songs.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        <p>No songs found.</p>
        <p className="text-sm mt-1">Add a song using the form above!</p>
      </div>
    );
  }

  return (
    <div className="space-y-3 max-h-96 overflow-y-auto">
      {/* TODO: Map through songs array to display each song */}
      {songs.map((song) => (
        <div
          key={song.id}
          className="bg-gray-50 rounded-lg p-4 border border-gray-200 hover:shadow-md transition-shadow"
        >
          <div className="flex justify-between items-start">
            <div className="flex-1">
              {/* TODO: Display song title */}
              <h3 className="font-semibold text-gray-800 text-lg">
                {song.title}
              </h3>
              
              {/* TODO: Display artist */}
              <p className="text-gray-600 text-sm mt-1">
                by {song.artist}
              </p>
              
              {/* TODO: Display genre with a styled badge */}
              <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mt-2">
                {song.genre}
              </span>
            </div>
            
            {/* TODO: Add delete button */}
            <button
              onClick={() => handleDelete(song.id)}
              className="ml-4 text-red-500 hover:text-red-700 focus:outline-none focus:text-red-700 transition-colors"
              title="Delete song"
            >
              <svg
                className="w-5 h-5"
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
