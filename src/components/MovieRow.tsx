import { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';
import { MovieCard } from './MovieCard';
import { Movie } from '../types/movie';

interface MovieRowProps {
  title: string;
  movies: Movie[];
  onPlay: (movie: Movie) => void;
  onInfo: (movie: Movie) => void;
}

export function MovieRow({ title, movies, onPlay, onInfo }: MovieRowProps) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    
    const container = scrollContainerRef.current;
    const scrollAmount = container.clientWidth * 0.8;
    const newPosition = direction === 'left' 
      ? Math.max(0, scrollPosition - scrollAmount)
      : Math.min(container.scrollWidth - container.clientWidth, scrollPosition + scrollAmount);
    
    container.scrollTo({
      left: newPosition,
      behavior: 'smooth'
    });
    
    setScrollPosition(newPosition);
  };

  const canScrollLeft = scrollPosition > 0;
  const canScrollRight = scrollContainerRef.current 
    ? scrollPosition < scrollContainerRef.current.scrollWidth - scrollContainerRef.current.clientWidth
    : true;

  return (
    <div className="mb-8 relative group">
      <h2 className="text-2xl font-bold text-white mb-4 px-4 md:px-8">
        {title}
      </h2>
      
      <div className="relative">
        {/* Left Arrow */}
        <Button
          variant="ghost"
          className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-all duration-300 ${
            canScrollLeft ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          onClick={() => scroll('left')}
        >
          <ChevronLeft className="w-6 h-6" />
        </Button>

        {/* Movie Cards Container */}
        <div 
          ref={scrollContainerRef}
          className="flex space-x-4 px-4 md:px-8 overflow-x-auto scrollbar-hide"
          style={{ scrollBehavior: 'smooth' }}
        >
          {movies.map((movie) => (
            <div key={movie.id} className="flex-shrink-0 w-48 md:w-56">
              <MovieCard
                movie={movie}
                onPlay={onPlay}
                onInfo={onInfo}
              />
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <Button
          variant="ghost"
          className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-all duration-300 ${
            canScrollRight ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          onClick={() => scroll('right')}
        >
          <ChevronRight className="w-6 h-6" />
        </Button>
      </div>
    </div>
  );
}