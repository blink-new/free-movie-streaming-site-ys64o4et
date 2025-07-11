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
  type?: 'movie' | 'series';
  seasons?: number;
  episodes?: number;
  duration?: number;
  trailer_url?: string;
  video_url?: string;
}

export interface MovieCategory {
  id: string;
  title: string;
  movies: Movie[];
}

export const movies: Movie[] = [
  // Korean Drama Series - Netflix Originals
  {
    id: '1',
    title: 'Squid Game',
    overview: 'Hundreds of cash-strapped players accept a strange invitation to compete in children\'s games. Inside, a tempting prize awaits — with deadly high stakes.',
    poster_path: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=450&fit=crop',
    backdrop_path: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=600&fit=crop',
    release_date: '2021-09-17',
    genre_ids: [18, 53, 80],
    vote_average: 8.0,
    vote_count: 15230,
    adult: false,
    original_language: 'ko',
    original_title: '오징어 게임',
    popularity: 98.5,
    video: false,
    type: 'series',
    seasons: 2,
    episodes: 17,
    trailer_url: 'https://www.youtube.com/embed/oqxAJKy0ii4',
    video_url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
  },
  {
    id: '2',
    title: 'Squid Game: Season 2',
    overview: 'Three years after winning Squid Game, Player 456 gave up going to the States and comes back with a new resolution in his mind.',
    poster_path: 'https://images.unsplash.com/photo-1615394475625-ccea913b3359?w=300&h=450&fit=crop',
    backdrop_path: 'https://images.unsplash.com/photo-1615394475625-ccea913b3359?w=1200&h=600&fit=crop',
    release_date: '2024-12-26',
    genre_ids: [18, 53, 80],
    vote_average: 8.2,
    vote_count: 8567,
    adult: false,
    original_language: 'ko',
    original_title: '오징어 게임 시즌2',
    popularity: 95.8,
    video: false,
    type: 'series',
    seasons: 1,
    episodes: 7,
    trailer_url: 'https://www.youtube.com/embed/oqxAJKy0ii4',
    video_url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'
  },
  {
    id: '3',
    title: 'Stranger Things',
    overview: 'When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl.',
    poster_path: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=450&fit=crop',
    backdrop_path: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&h=600&fit=crop',
    release_date: '2016-07-15',
    genre_ids: [18, 27, 878],
    vote_average: 8.7,
    vote_count: 12456,
    adult: false,
    original_language: 'en',
    original_title: 'Stranger Things',
    popularity: 94.2,
    video: false,
    type: 'series',
    seasons: 4,
    episodes: 42,
    trailer_url: 'https://www.youtube.com/embed/b9EkMc79ZSU',
    video_url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'
  },
  {
    id: '4',
    title: 'Wednesday',
    overview: 'Smart, sarcastic and a little dead inside, Wednesday Addams investigates a murder spree while navigating her new school at Nevermore Academy.',
    poster_path: 'https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=300&h=450&fit=crop',
    backdrop_path: 'https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=1200&h=600&fit=crop',
    release_date: '2022-11-23',
    genre_ids: [35, 18, 27],
    vote_average: 8.1,
    vote_count: 9876,
    adult: false,
    original_language: 'en',
    original_title: 'Wednesday',
    popularity: 92.4,
    video: false,
    type: 'series',
    seasons: 1,
    episodes: 8,
    trailer_url: 'https://www.youtube.com/embed/Di310WS8zLk',
    video_url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4'
  },
  {
    id: '5',
    title: 'Money Heist',
    overview: 'To carry out the biggest heist in history, a mysterious man called The Professor recruits a band of eight robbers who have a single characteristic: none of them has anything to lose.',
    poster_path: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&h=450&fit=crop',
    backdrop_path: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&h=600&fit=crop',
    release_date: '2017-05-02',
    genre_ids: [80, 18, 53],
    vote_average: 8.3,
    vote_count: 11234,
    adult: false,
    original_language: 'es',
    original_title: 'La Casa de Papel',
    popularity: 89.7,
    video: false,
    type: 'series',
    seasons: 5,
    episodes: 52,
    trailer_url: 'https://www.youtube.com/embed/htqXL94Rza4',
    video_url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4'
  },
  {
    id: '6',
    title: 'The Crown',
    overview: 'Follows the political rivalries and romance of Queen Elizabeth II\'s reign and the events that shaped the second half of the twentieth century.',
    poster_path: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=450&fit=crop',
    backdrop_path: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&h=600&fit=crop',
    release_date: '2016-11-04',
    genre_ids: [18, 36],
    vote_average: 8.6,
    vote_count: 8765,
    adult: false,
    original_language: 'en',
    original_title: 'The Crown',
    popularity: 87.3,
    video: false,
    type: 'series',
    seasons: 6,
    episodes: 60,
    trailer_url: 'https://www.youtube.com/embed/JWtnJjn6ng0',
    video_url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4'
  },
  {
    id: '7',
    title: 'Kingdom',
    overview: 'In this zombie thriller set in Korea\'s Joseon period, a crown prince is sent on a suicide mission to investigate a mysterious outbreak.',
    poster_path: 'https://images.unsplash.com/photo-1572108122646-25998eb53e49?w=300&h=450&fit=crop',
    backdrop_path: 'https://images.unsplash.com/photo-1572108122646-25998eb53e49?w=1200&h=600&fit=crop',
    release_date: '2019-01-25',
    genre_ids: [18, 27, 53],
    vote_average: 8.3,
    vote_count: 4521,
    adult: false,
    original_language: 'ko',
    original_title: '킹덤',
    popularity: 89.2,
    video: false,
    type: 'series',
    seasons: 2,
    episodes: 12,
    trailer_url: 'https://www.youtube.com/embed/4l-yByZpaaM',
    video_url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4'
  },
  {
    id: '8',
    title: 'Crash Landing on You',
    overview: 'A paragliding mishap drops a South Korean heiress in North Korea -- and into the life of an army officer, who decides he will help her hide.',
    poster_path: 'https://images.unsplash.com/photo-1565102598088-c27307f4420c?w=300&h=450&fit=crop',
    backdrop_path: 'https://images.unsplash.com/photo-1565102598088-c27307f4420c?w=1200&h=600&fit=crop',
    release_date: '2019-12-14',
    genre_ids: [18, 35, 10749],
    vote_average: 8.7,
    vote_count: 7890,
    adult: false,
    original_language: 'ko',
    original_title: '사랑의 불시착',
    popularity: 91.7,
    video: false,
    type: 'series',
    seasons: 1,
    episodes: 16,
    trailer_url: 'https://www.youtube.com/embed/GVQGWgeVc4k',
    video_url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4'
  },
  {
    id: '9',
    title: 'The Witcher',
    overview: 'Geralt of Rivia, a mutated monster-hunter for hire, journeys toward his destiny in a turbulent world where people often prove more wicked than beasts.',
    poster_path: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=450&fit=crop',
    backdrop_path: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&h=600&fit=crop',
    release_date: '2019-12-20',
    genre_ids: [18, 14, 28],
    vote_average: 8.2,
    vote_count: 9543,
    adult: false,
    original_language: 'en',
    original_title: 'The Witcher',
    popularity: 88.1,
    video: false,
    type: 'series',
    seasons: 3,
    episodes: 24,
    trailer_url: 'https://www.youtube.com/embed/ndl1W4ltcmg',
    video_url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4'
  },
  {
    id: '10',
    title: 'Ozark',
    overview: 'A financial adviser drags his family from Chicago to the Missouri Ozarks, where he must launder $500 million in five years to appease a drug boss.',
    poster_path: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&h=450&fit=crop',
    backdrop_path: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&h=600&fit=crop',
    release_date: '2017-07-21',
    genre_ids: [80, 18, 53],
    vote_average: 8.4,
    vote_count: 8765,
    adult: false,
    original_language: 'en',
    original_title: 'Ozark',
    popularity: 85.9,
    video: false,
    type: 'series',
    seasons: 4,
    episodes: 44,
    trailer_url: 'https://www.youtube.com/embed/5hAXVqrljbs',
    video_url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4'
  },
  {
    id: '11',
    title: 'All of Us Are Dead',
    overview: 'A high school becomes ground zero for a zombie virus outbreak. Trapped students must fight their way out — or turn into one of the rabid infected.',
    poster_path: 'https://images.unsplash.com/photo-1591389151663-982289201566?w=300&h=450&fit=crop',
    backdrop_path: 'https://images.unsplash.com/photo-1591389151663-982289201566?w=1200&h=600&fit=crop',
    release_date: '2022-01-28',
    genre_ids: [18, 27, 53],
    vote_average: 7.8,
    vote_count: 6789,
    adult: false,
    original_language: 'ko',
    original_title: '지금 우리 학교는',
    popularity: 82.1,
    video: false,
    type: 'series',
    seasons: 1,
    episodes: 12,
    trailer_url: 'https://www.youtube.com/embed/IN5TD4VRcSM',
    video_url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4'
  },
  {
    id: '12',
    title: 'Sweet Home',
    overview: 'As humans turn into savage monsters, one troubled teenager and his neighbors fight to survive and to hold onto their humanity.',
    poster_path: 'https://images.unsplash.com/photo-1556123724-9e42cc9ea1d4?w=300&h=450&fit=crop',
    backdrop_path: 'https://images.unsplash.com/photo-1556123724-9e42cc9ea1d4?w=1200&h=600&fit=crop',
    release_date: '2020-12-18',
    genre_ids: [18, 27, 53],
    vote_average: 7.9,
    vote_count: 5432,
    adult: false,
    original_language: 'ko',
    original_title: '스위트홈',
    popularity: 79.4,
    video: false,
    type: 'series',
    seasons: 3,
    episodes: 30,
    trailer_url: 'https://www.youtube.com/embed/pyaG6dKKh0I',
    video_url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
  },
  {
    id: '13',
    title: 'The Glory',
    overview: 'A woman lives for absolute revenge against her childhood bullies who destroyed her life. Her carefully planned revenge begins to unfold.',
    poster_path: 'https://images.unsplash.com/photo-1714717536988-d7d86090902e?w=300&h=450&fit=crop',
    backdrop_path: 'https://images.unsplash.com/photo-1714717536988-d7d86090902e?w=1200&h=600&fit=crop',
    release_date: '2022-12-30',
    genre_ids: [18, 53],
    vote_average: 8.1,
    vote_count: 4567,
    adult: false,
    original_language: 'ko',
    original_title: '더 글로리',
    popularity: 84.3,
    video: false,
    type: 'series',
    seasons: 2,
    episodes: 16,
    trailer_url: 'https://www.youtube.com/embed/qJGx_2CWLNw',
    video_url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'
  },
  {
    id: '14',
    title: 'Bridgerton',
    overview: 'The eight close-knit siblings of the Bridgerton family look for love and happiness in London high society.',
    poster_path: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=450&fit=crop',
    backdrop_path: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&h=600&fit=crop',
    release_date: '2020-12-25',
    genre_ids: [18, 10749, 36],
    vote_average: 7.3,
    vote_count: 6543,
    adult: false,
    original_language: 'en',
    original_title: 'Bridgerton',
    popularity: 81.7,
    video: false,
    type: 'series',
    seasons: 3,
    episodes: 24,
    trailer_url: 'https://www.youtube.com/embed/gpv7ayf_tyE',
    video_url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'
  },
  {
    id: '15',
    title: 'Dark',
    overview: 'A family saga with a supernatural twist, set in a German town, where the disappearance of two young children exposes the relationships among four families.',
    poster_path: 'https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=300&h=450&fit=crop',
    backdrop_path: 'https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=1200&h=600&fit=crop',
    release_date: '2017-12-01',
    genre_ids: [18, 878, 53],
    vote_average: 8.8,
    vote_count: 7890,
    adult: false,
    original_language: 'de',
    original_title: 'Dark',
    popularity: 86.4,
    video: false,
    type: 'series',
    seasons: 3,
    episodes: 26,
    trailer_url: 'https://www.youtube.com/embed/rrwycJ08PSA',
    video_url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4'
  },
  // Movies
  {
    id: '16',
    title: 'Red Notice',
    overview: 'When an Interpol-issued Red Notice goes out, the FBI\'s most wanted art thief finds himself on a globe-trotting adventure.',
    poster_path: 'https://images.unsplash.com/photo-1655367574486-f63675dd69eb?w=300&h=450&fit=crop',
    backdrop_path: 'https://images.unsplash.com/photo-1655367574486-f63675dd69eb?w=1200&h=600&fit=crop',
    release_date: '2021-11-12',
    genre_ids: [28, 35, 80],
    vote_average: 6.4,
    vote_count: 3456,
    adult: false,
    original_language: 'en',
    original_title: 'Red Notice',
    popularity: 78.9,
    video: false,
    type: 'movie',
    duration: 118,
    trailer_url: 'https://www.youtube.com/embed/Pj0wz7zu3Ms',
    video_url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4'
  },
  {
    id: '17',
    title: 'Extraction',
    overview: 'A black-market mercenary who has nothing to lose is hired to rescue the kidnapped son of an imprisoned international crime lord.',
    poster_path: 'https://images.unsplash.com/photo-1619164816991-22d393238d8f?w=300&h=450&fit=crop',
    backdrop_path: 'https://images.unsplash.com/photo-1619164816991-22d393238d8f?w=1200&h=600&fit=crop',
    release_date: '2020-04-24',
    genre_ids: [28, 53, 80],
    vote_average: 6.8,
    vote_count: 4567,
    adult: false,
    original_language: 'en',
    original_title: 'Extraction',
    popularity: 75.3,
    video: false,
    type: 'movie',
    duration: 116,
    trailer_url: 'https://www.youtube.com/embed/L6P3nI6VnlY',
    video_url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4'
  },
  {
    id: '18',
    title: 'The Adam Project',
    overview: 'A time-traveling pilot teams up with his younger self and his late father to come to terms with his past while saving the future.',
    poster_path: 'https://images.unsplash.com/photo-1679699316094-a74534381e22?w=300&h=450&fit=crop',
    backdrop_path: 'https://images.unsplash.com/photo-1679699316094-a74534381e22?w=1200&h=600&fit=crop',
    release_date: '2022-03-11',
    genre_ids: [28, 12, 35],
    vote_average: 7.0,
    vote_count: 5678,
    adult: false,
    original_language: 'en',
    original_title: 'The Adam Project',
    popularity: 72.6,
    video: false,
    type: 'movie',
    duration: 106,
    trailer_url: 'https://www.youtube.com/embed/IE8HIsIrq4o',
    video_url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4'
  },
  {
    id: '19',
    title: 'Don\'t Look Up',
    overview: 'Two astronomers go on a media tour to warn humankind of a planet-killing comet hurtling toward Earth.',
    poster_path: 'https://images.unsplash.com/photo-1708544483196-9e71da0c2b18?w=300&h=450&fit=crop',
    backdrop_path: 'https://images.unsplash.com/photo-1708544483196-9e71da0c2b18?w=1200&h=600&fit=crop',
    release_date: '2021-12-24',
    genre_ids: [35, 18, 878],
    vote_average: 7.2,
    vote_count: 6789,
    adult: false,
    original_language: 'en',
    original_title: 'Don\'t Look Up',
    popularity: 69.8,
    video: false,
    type: 'movie',
    duration: 138,
    trailer_url: 'https://www.youtube.com/embed/RbIxYm3mKzI',
    video_url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4'
  },
  {
    id: '20',
    title: 'Glass Onion: A Knives Out Mystery',
    overview: 'Tech billionaire Miles Bron invites his friends for a murder mystery game at his Greek island mansion.',
    poster_path: 'https://images.unsplash.com/photo-1623841305968-f85336594764?w=300&h=450&fit=crop',
    backdrop_path: 'https://images.unsplash.com/photo-1623841305968-f85336594764?w=1200&h=600&fit=crop',
    release_date: '2022-12-23',
    genre_ids: [35, 80, 9648],
    vote_average: 7.4,
    vote_count: 4321,
    adult: false,
    original_language: 'en',
    original_title: 'Glass Onion: A Knives Out Mystery',
    popularity: 67.5,
    video: false,
    type: 'movie',
    duration: 139,
    trailer_url: 'https://www.youtube.com/embed/C7aWz8q_IM4',
    video_url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4'
  }
];

export const movieGenres = {
  12: 'Adventure',
  14: 'Fantasy',
  16: 'Animation',
  18: 'Drama',
  27: 'Horror',
  28: 'Action',
  35: 'Comedy',
  36: 'History',
  37: 'Western',
  53: 'Thriller',
  80: 'Crime',
  99: 'Documentary',
  878: 'Science Fiction',
  9648: 'Mystery',
  10402: 'Music',
  10749: 'Romance',
  10751: 'Family',
  10752: 'War',
  10770: 'TV Movie'
};

export const getMoviesByGenre = (genreId: number): Movie[] => {
  return movies.filter(movie => movie.genre_ids.includes(genreId));
};

export const getMovieById = (id: string): Movie | undefined => {
  return movies.find(movie => movie.id === id);
};

export const getTrendingMovies = (): Movie[] => {
  return movies
    .sort((a, b) => b.popularity - a.popularity)
    .slice(0, 10);
};

export const getKoreanContent = (): Movie[] => {
  return movies.filter(movie => movie.original_language === 'ko');
};

export const getSeriesContent = (): Movie[] => {
  return movies.filter(movie => movie.type === 'series');
};

export const getMovieContent = (): Movie[] => {
  return movies.filter(movie => movie.type === 'movie');
};

export const getNetflixOriginals = (): Movie[] => {
  return movies.filter(movie => 
    ['1', '2', '3', '4', '5', '6', '9', '10', '14', '15', '16', '17', '18', '19', '20'].includes(movie.id)
  );
};

export const movieCategories: MovieCategory[] = [
  {
    id: 'trending',
    title: 'Trending Now',
    movies: getTrendingMovies()
  },
  {
    id: 'netflix-originals',
    title: 'Netflix Originals',
    movies: getNetflixOriginals()
  },
  {
    id: 'korean',
    title: 'K-Dramas & Korean Content',
    movies: getKoreanContent()
  },
  {
    id: 'series',
    title: 'TV Series',
    movies: getSeriesContent()
  },
  {
    id: 'movies',
    title: 'Movies',
    movies: getMovieContent()
  },
  {
    id: 'action',
    title: 'Action & Adventure',
    movies: getMoviesByGenre(28).concat(getMoviesByGenre(12))
  },
  {
    id: 'horror',
    title: 'Horror & Thriller',
    movies: getMoviesByGenre(27).concat(getMoviesByGenre(53))
  },
  {
    id: 'drama',
    title: 'Drama',
    movies: getMoviesByGenre(18)
  },
  {
    id: 'comedy',
    title: 'Comedy',
    movies: getMoviesByGenre(35)
  },
  {
    id: 'scifi',
    title: 'Sci-Fi & Fantasy',
    movies: getMoviesByGenre(878).concat(getMoviesByGenre(14))
  },
  {
    id: 'romance',
    title: 'Romance',
    movies: getMoviesByGenre(10749)
  },
  {
    id: 'crime',
    title: 'Crime & Mystery',
    movies: getMoviesByGenre(80).concat(getMoviesByGenre(9648))
  }
];

export const featuredMovie = movies.find(movie => movie.id === '1') || movies[0];