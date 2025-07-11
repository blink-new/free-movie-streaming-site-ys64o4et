import { useState } from 'react';
import { Play, Plus, ThumbsUp, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import { Movie } from '../types/movie';

interface MovieCardProps {
  movie: Movie;
  onPlay: (movie: Movie) => void;
  onInfo: (movie: Movie) => void;
}

export function MovieCard({ movie, onPlay, onInfo }: MovieCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group relative bg-zinc-900 rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Poster Image */}
      <div className="aspect-[2/3] relative overflow-hidden">
        <img
          src={movie.poster_path}
          alt={movie.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          loading="lazy"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button
            onClick={() => onPlay(movie)}
            size="lg"
            className="bg-white/90 text-black hover:bg-white rounded-full p-4 shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-300"
          >
            <Play className="w-6 h-6 fill-current" />
          </Button>
        </div>
      </div>

      {/* Movie Info - Expanded on Hover */}
      <div 
        className={`absolute bottom-0 left-0 right-0 bg-zinc-900 transition-all duration-300 ${
          isHovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
        }`}
      >
        <div className="p-4">
          <h3 className="text-white font-semibold text-lg mb-2 line-clamp-2">
            {movie.title}
          </h3>
          
          {/* Rating and Year */}
          <div className="flex items-center space-x-2 mb-3 text-sm text-zinc-400">
            <span className="flex items-center">
              <span className="text-yellow-400 mr-1">★</span>
              {movie.vote_average.toFixed(1)}
            </span>
            <span>•</span>
            <span>{new Date(movie.release_date).getFullYear()}</span>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-2">
            <Button
              onClick={() => onPlay(movie)}
              size="sm"
              className="bg-white text-black hover:bg-zinc-300 rounded-full p-2"
            >
              <Play className="w-4 h-4 fill-current" />
            </Button>
            
            <Button
              variant="outline"
              size="sm"
              className="border-zinc-600 text-white hover:bg-zinc-800 rounded-full p-2"
            >
              <Plus className="w-4 h-4" />
            </Button>
            
            <Button
              variant="outline"
              size="sm"
              className="border-zinc-600 text-white hover:bg-zinc-800 rounded-full p-2"
            >
              <ThumbsUp className="w-4 h-4" />
            </Button>
            
            <Button
              onClick={() => onInfo(movie)}
              variant="outline"
              size="sm"
              className="border-zinc-600 text-white hover:bg-zinc-800 rounded-full p-2 ml-auto"
            >
              <ChevronDown className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}