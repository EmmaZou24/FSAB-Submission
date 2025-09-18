// Type definitions for Song data structure

export interface Song {
  id: string; //doc id
  title: string;
  artist: string;
  genre: string;
}

export type FilterOptions = {
  genre?: string;
  artist?: string;
}