import { X, Play, Plus, ThumbsUp, ThumbsDown } from 'lucide-react';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogHeader } from './ui/dialog';
import { Movie } from '../types/movie';

interface MovieModalProps {
  movie: Movie | null;
  isOpen: boolean;
  onClose: () => void;
  onPlay: (movie: Movie) => void;
}

export function MovieModal({ movie, isOpen, onClose, onPlay }: MovieModalProps) {
  if (!movie) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl bg-zinc-900 border-zinc-800 text-white p-0 overflow-hidden">
        <div className="relative">
          {/* Hero Image */}
          <div className="relative aspect-video">
            <img
              src={movie.backdrop_path}
              alt={movie.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent" />
            
            {/* Close Button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="absolute top-4 right-4 bg-zinc-800/80 hover:bg-zinc-700/80 rounded-full p-2 text-white"
            >
              <X className="w-4 h-4" />
            </Button>

            {/* Play Button */}
            <div className="absolute bottom-6 left-6">
              <Button
                onClick={() => onPlay(movie)}
                size="lg"
                className="bg-white text-black hover:bg-zinc-300 px-8 py-3 text-lg font-semibold"
              >
                <Play className="w-5 h-5 mr-2 fill-current" />
                Play
              </Button>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <DialogHeader>
              <h2 className="text-3xl font-bold text-white mb-4">
                {movie.title}
              </h2>
            </DialogHeader>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Main Info */}
              <div className="lg:col-span-2">
                {/* Movie Stats */}
                <div className="flex items-center space-x-4 mb-4 text-zinc-300">
                  <span className="flex items-center">
                    <span className="text-yellow-400 mr-1">★</span>
                    {movie.vote_average.toFixed(1)}
                  </span>
                  <span>•</span>
                  <span>{new Date(movie.release_date).getFullYear()}</span>
                  <span>•</span>
                  <span>{movie.duration}m</span>
                  <span>•</span>
                  <span className="bg-zinc-700 px-2 py-1 rounded text-sm">HD</span>
                </div>

                {/* Overview */}
                <p className="text-zinc-300 text-lg leading-relaxed mb-6">
                  {movie.overview}
                </p>

                {/* Action Buttons */}
                <div className="flex items-center space-x-3">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-zinc-600 text-white hover:bg-zinc-800"
                  >
                    <Plus className="w-5 h-5 mr-2" />
                    My List
                  </Button>
                  
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-zinc-600 text-white hover:bg-zinc-800 p-3"
                  >
                    <ThumbsUp className="w-5 h-5" />
                  </Button>
                  
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-zinc-600 text-white hover:bg-zinc-800 p-3"
                  >
                    <ThumbsDown className="w-5 h-5" />
                  </Button>
                </div>
              </div>

              {/* Sidebar Info */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-zinc-400 font-semibold mb-2">Release Date</h3>
                  <p className="text-white">{new Date(movie.release_date).toLocaleDateString()}</p>
                </div>
                
                <div>
                  <h3 className="text-zinc-400 font-semibold mb-2">Language</h3>
                  <p className="text-white uppercase">{movie.original_language}</p>
                </div>
                
                <div>
                  <h3 className="text-zinc-400 font-semibold mb-2">Rating</h3>
                  <div className="flex items-center">
                    <span className="text-yellow-400 mr-2">★</span>
                    <span className="text-white font-semibold">{movie.vote_average.toFixed(1)}</span>
                    <span className="text-zinc-400 ml-2">({movie.vote_count} votes)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}