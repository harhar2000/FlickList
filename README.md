# FlickList 🎬

FlickList is a React application allowing users to discover popular movies, search for their favorite films and create a personalised list of favourites. Built with React and powered by The Movie Database (TMDB) API, it offers a seamless movie browsing experience.

## Features ✨

- Browse popular movies from TMDB
- Search functionality to find specific movies
- Add/remove movies to favourites
- Persistent favourites storage using localStorage
- Responsive movie grid layout
- Real-time search results
- Clean and intuitive user interface

## Technologies Used 🛠️

- React
- React Router for navigation
- Context API for state management
- TMDB API for movie data
- Vite as the build tool
- CSS for styling

## Getting Started 🚀

### Prerequisites

- Node.js (v14 or higher)
- npm
- TMDB API key

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/flicklist.git
cd flicklist
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory and add your TMDB API key:

```env
VITE_API_KEY=your_tmdb_api_key_here
```

4. Start the development server:

```bash
npm run dev
```

## Project Structure 📁

```
flicklist/
├── src/
│   ├── components/
│   │   ├── MovieCard.jsx
│   │   └── NavBar.jsx
│   ├── contexts/
│   │   └── MovieContext.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   └── Favourites.jsx
│   ├── services/
│   │   └── api.js
│   ├── css/
│   ├── App.jsx
│   └── main.jsx
```

## Features in Detail 🔍

### Home Page

- Displays a grid of popular movies on initial load
- Search functionality to find specific movies
- Responsive movie cards with poster images and basic information

### Favorites

- Add/remove movies to your favourites list
- Persistent storage using localStorage
- Dedicated favorites page to view all saved movies
- Toggle favorite status directly from movie cards

### Movie Cards

- Display movie poster
- Show movie title and release year
- Interactive favorite button
- Hover effects for better user experience

## API Integration 🌐

The application uses the TMDB API to fetch:

- Popular movies
- Search results
- Movie posters and details

## Issues

- [Vite API Issues](https://medium.com/@hmsh2000/the-hidden-complexity-of-env-in-vite-react-projects-67b6a481437b) How I solved npm not finding my API call
