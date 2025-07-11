import { Play, Info, Volume2, VolumeX } from 'lucide-react';
import { Button } from './ui/button';
import { Movie } from '../types/movie';
import { useState } from 'react';

interface HeroSectionProps {
  movie: Movie;
  onPlay: (movie: Movie) => void;
  onInfo: (movie: Movie) => void;
}

export function HeroSection({ movie, onPlay, onInfo }: HeroSectionProps) {
  const [isMuted, setIsMuted] = useState(true);

  return (
    <section className="relative h-[85vh] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={movie.backdrop_path}
          alt={movie.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
            {movie.title}
          </h1>
          
          <p className="text-lg md:text-xl text-zinc-300 mb-8 leading-relaxed">
            {movie.overview}
          </p>

          {/* Movie Info */}
          <div className="flex items-center space-x-4 mb-8 text-zinc-300">
            <span className="flex items-center">
              <span className="text-yellow-400 mr-1">★</span>
              {movie.vote_average.toFixed(1)}
            </span>
            <span>•</span>
            <span>{new Date(movie.release_date).getFullYear()}</span>
            <span>•</span>
            <span>{movie.duration}m</span>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <Button
              onClick={() => onPlay(movie)}
              size="lg"
              className="bg-white text-black hover:bg-zinc-300 transition-colors duration-200 px-8 py-3 text-lg font-semibold"
            >
              <Play className="w-5 h-5 mr-2 fill-current" />
              Play
            </Button>
            
            <Button
              onClick={() => onInfo(movie)}
              variant="outline"
              size="lg"
              className="border-zinc-400 text-white hover:bg-zinc-800 transition-colors duration-200 px-8 py-3 text-lg font-semibold"
            >
              <Info className="w-5 h-5 mr-2" />
              More Info
            </Button>
          </div>
        </div>

        {/* Volume Control */}
        <div className="absolute top-1/2 right-8 -translate-y-1/2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsMuted(!isMuted)}
            className="bg-zinc-800/50 text-white hover:bg-zinc-700/50 rounded-full p-2 border border-zinc-600"
          >
            {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
          </Button>
        </div>
      </div>
    </section>
  );
}