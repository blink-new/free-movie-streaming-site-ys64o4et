import { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { MovieRow } from './components/MovieRow';
import { MovieModal } from './components/MovieModal';
import { VideoPlayer } from './components/VideoPlayer';
import { featuredMovie, movieCategories } from './data/movies';
import { Movie } from './types/movie';

function App() {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [playingMovie, setPlayingMovie] = useState<Movie | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPlayerOpen, setIsPlayerOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Filter movies based on search query
  const filteredCategories = useMemo(() => {
    if (!searchQuery) return movieCategories;
    
    const filtered = movieCategories.map(category => ({
      ...category,
      movies: category.movies.filter(movie =>
        movie.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        movie.overview.toLowerCase().includes(searchQuery.toLowerCase())
      )
    })).filter(category => category.movies.length > 0);
    
    return filtered;
  }, [searchQuery]);

  const handlePlay = (movie: Movie) => {
    setPlayingMovie(movie);
    setIsPlayerOpen(true);
    setIsModalOpen(false);
  };

  const handleInfo = (movie: Movie) => {
    setSelectedMovie(movie);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedMovie(null);
  };

  const handleClosePlayer = () => {
    setIsPlayerOpen(false);
    setPlayingMovie(null);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <Header onSearch={handleSearch} searchQuery={searchQuery} />

      {/* Main Content */}
      <main>
        {/* Hero Section - Only show when not searching */}
        {!searchQuery && (
          <HeroSection
            movie={featuredMovie}
            onPlay={handlePlay}
            onInfo={handleInfo}
          />
        )}

        {/* Movie Categories */}
        <div className={`${!searchQuery ? 'mt-8' : 'mt-20'} pb-8`}>
          {searchQuery && (
            <div className="px-4 md:px-8 mb-8">
              <h2 className="text-2xl font-bold text-white">
                Search Results for "{searchQuery}"
              </h2>
            </div>
          )}
          
          {filteredCategories.map((category) => (
            <MovieRow
              key={category.id}
              title={category.title}
              movies={category.movies}
              onPlay={handlePlay}
              onInfo={handleInfo}
            />
          ))}
          
          {searchQuery && filteredCategories.length === 0 && (
            <div className="text-center py-16 px-4">
              <h2 className="text-2xl font-bold text-white mb-4">
                No movies found
              </h2>
              <p className="text-zinc-400 text-lg">
                Try searching for something else or browse our categories
              </p>
            </div>
          )}
        </div>
      </main>

      {/* Movie Details Modal */}
      <MovieModal
        movie={selectedMovie}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onPlay={handlePlay}
      />

      {/* Video Player */}
      <VideoPlayer
        movie={playingMovie}
        isOpen={isPlayerOpen}
        onClose={handleClosePlayer}
      />
    </div>
  );
}

export default App;