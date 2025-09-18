// Firebase Firestore operations for songs
import { 
  collection, 
  addDoc, 
  getDocs, 
  deleteDoc, 
  doc, 
  query, 
  where,
  orderBy 
} from 'firebase/firestore';
import { db } from '../lib/firebase';
import { Song } from '../types/song';

const COLLECTION_NAME = 'songs';

export const songService = {

  // Add song
  async addSong(songData: Omit<Song, 'id'>): Promise<string> {
    try {const songCollection = collection(db, COLLECTION_NAME);
    const songDoc = await addDoc(songCollection, songData);
    return songDoc.id;}
    catch (error) {
      console.error('Error adding song:', error);
      throw error;
    }
  },

  // Get all songs
  async getAllSongs(): Promise<Song[]> {
    try {const songCollection = collection(db, COLLECTION_NAME);
    const songDocs = await getDocs(songCollection);
    return songDocs.docs.map((doc) => ({
      id: doc.id,
      title: doc.data().title,
      artist: doc.data().artist,
      genre: doc.data().genre
    }));}
    catch (error) {
      console.error('Error getting songs:', error);
      throw error;
    }
  },

  // Delete song
  async deleteSong(songId: string): Promise<void> {
    try {const songCollection = collection(db, COLLECTION_NAME);
    await deleteDoc(doc(songCollection, songId));
  }
    catch (error) {
      console.error('Error deleting song:', error);
      throw error;
    }
  },

  // Filter via genre
  async getSongsByGenre(genre: string): Promise<Song[]> {
    try {const songCollection = collection(db, COLLECTION_NAME);
    const songDocs = await getDocs(query(songCollection, where('genre', '==', genre)));
    return songDocs.docs.map((doc) => ({
      id: doc.id,
      title: doc.data().title,
      artist: doc.data().artist,
      genre: doc.data().genre
    }));}
    catch (error) {
      console.error('Error getting songs by genre:', error);
      throw error;
    }
  },


  async searchSongs(searchTerm: string): Promise<Song[]> {
    try {const songCollection = collection(db, COLLECTION_NAME);
    const songDocs = await getDocs(query(songCollection, where('title', '==', searchTerm)));
    return songDocs.docs.map((doc) => ({
      id: doc.id,
      title: doc.data().title,
      artist: doc.data().artist,
      genre: doc.data().genre
    }));}
    catch (error) {
      console.error('Error getting songs by search term:', error);
      throw error;
    }
  }
};
