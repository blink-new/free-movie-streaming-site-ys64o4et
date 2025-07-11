export interface Movie {
  id: string;
  title: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  release_date: string;
  genre_ids: number[];
  vote_average: number;
  vote_count: number;
  adult: boolean;
  original_language: string;
  original_title: string;
  popularity: number;
  video: boolean;
  trailer_url?: string;
  duration?: number;
  genres?: Genre[];
}

export interface Genre {
  id: number;
  name: string;
}

export interface MovieCategory {
  id: string;
  name: string;
  movies: Movie[];
}