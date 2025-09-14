// Type definitions for Song data structure

export interface Song {
  id: string; // Document ID from Firestore
  title: string;
  artist: string;
  genre: string;
  // TODO: Add any additional fields you want for songs
  // Examples: year, album, duration, etc.
}

// TODO: Define types for form data (without the id field)
// Hint: Create a type that has all Song fields except 'id'
// export type SongFormData = ...

export type SongData = {
  title: string;
  artist: string;
  genre: string;
}

// TODO: Define types for filter options
// Hint: Create an interface for filter state
// export interface FilterOptions {
//   genre?: string;
//   artist?: string;
//   // Add other filter fields as needed
// }
export type FilterOptions = {
  genre?: string;
  artist?: string;
}