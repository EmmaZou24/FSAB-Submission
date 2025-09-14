# Song Collection Manager - Setup Instructions

This is a React + Firebase application for managing a collection of songs. The project is set up with frames and TODO comments for you to implement the functionality.

## Prerequisites

1. Node.js installed on your system
2. A Firebase project created at [Firebase Console](https://console.firebase.google.com/)

## Setup Steps

### 1. Install Dependencies

```bash
npm install
```

### 2. Firebase Setup

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project or select an existing one
3. Enable Firestore Database:
   - Go to "Firestore Database" in the left sidebar
   - Click "Create database"
   - Choose "Start in test mode" (for development)
   - Select a location for your database

4. Get your Firebase configuration:
   - Go to Project Settings (gear icon)
   - Scroll down to "Your apps" section
   - Click "Add app" and select Web (</>) icon
   - Register your app with a nickname
   - Copy the Firebase configuration object

5. Update Firebase configuration:
   - Open `lib/firebase.ts`
   - Replace the placeholder config with your actual Firebase config

### 3. Firestore Security Rules (Development)

For development, you can use these permissive rules. **DO NOT use these in production!**

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if true;
    }
  }
}
```

### 4. Project Structure

```
├── app/
│   └── page.tsx              # Main page component
├── components/
│   ├── SongForm.tsx          # Form for adding songs
│   ├── SongList.tsx          # List of songs with delete functionality
│   └── FilterControls.tsx    # Filter controls for songs
├── lib/
│   └── firebase.ts           # Firebase configuration
├── services/
│   └── songService.ts        # Firebase CRUD operations
└── types/
    └── song.ts               # TypeScript type definitions
```

## Implementation Guide

### Step 1: Complete Type Definitions
- Open `types/song.ts`
- Complete the `SongFormData` and `FilterOptions` types

### Step 2: Set up Firebase
- Open `lib/firebase.ts`
- Initialize Firebase app and Firestore
- Export the database instance

### Step 3: Implement Firebase Service
- Open `services/songService.ts`
- Implement CRUD operations for songs
- Test each function individually

### Step 4: Complete Main Page Logic
- Open `app/page.tsx`
- Add state management for songs and filters
- Implement the main functions (addSong, deleteSong, etc.)

### Step 5: Complete Components
- Open `components/SongForm.tsx`
- Implement form handling and validation
- Open `components/SongList.tsx`
- Implement song display and delete functionality
- Open `components/FilterControls.tsx`
- Implement filtering logic

### Step 6: Test the Application
- Run `npm run dev`
- Test adding, deleting, and filtering songs
- Verify data persistence in Firebase

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Features to Implement

1. **Song Form**: Add songs with title, artist, and genre
2. **Song List**: Display all songs with delete functionality
3. **Filtering**: Filter songs by genre and artist
4. **Real-time Updates**: List updates when songs are added/deleted
5. **Form Validation**: Validate required fields
6. **Error Handling**: Handle Firebase errors gracefully

## Tips

- Start with the Firebase setup and test basic CRUD operations
- Implement one component at a time
- Use browser dev tools to debug Firebase operations
- Check the Firebase Console to verify data is being saved
- Test error scenarios (network issues, invalid data, etc.)

## Next Steps (Optional Enhancements)

- Add user authentication
- Implement song editing functionality
- Add more filter options (year, album, etc.)
- Add search functionality
- Implement pagination for large song lists
- Add data export/import features
- Improve UI/UX with animations and better styling
