import { Movie, MovieCategory } from '../types/movie';

// Mock movie data with free movie content
const movies: Movie[] = [
  {
    id: '1',
    title: 'The Art of Self-Defense',
    overview: 'A man is attacked at random on his way home from work. He enlists in a local dojo, led by a charismatic and mysterious Sensei, in an effort to learn how to defend himself.',
    poster_path: 'https://images.unsplash.com/photo-1655367574486-f63675dd69eb?w=300&h=450&fit=crop',
    backdrop_path: 'https://images.unsplash.com/photo-1655367574486-f63675dd69eb?w=1200&h=600&fit=crop',
    release_date: '2019-07-12',
    genre_ids: [35, 80, 18],
    vote_average: 6.6,
    vote_count: 1234,
    adult: false,
    original_language: 'en',
    original_title: 'The Art of Self-Defense',
    popularity: 45.2,
    video: false,
    trailer_url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    duration: 104
  },
  {
    id: '2',
    title: 'Cosmic Journey',
    overview: 'A breathtaking journey through the cosmos, exploring the mysteries of space and time. This documentary takes viewers on an incredible adventure beyond our solar system.',
    poster_path: 'https://images.unsplash.com/photo-1619164816991-22d393238d8f?w=300&h=450&fit=crop',
    backdrop_path: 'https://images.unsplash.com/photo-1619164816991-22d393238d8f?w=1200&h=600&fit=crop',
    release_date: '2021-03-15',
    genre_ids: [99, 878],
    vote_average: 8.1,
    vote_count: 2156,
    adult: false,
    original_language: 'en',
    original_title: 'Cosmic Journey',
    popularity: 67.8,
    video: false,
    trailer_url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    duration: 92
  },
  {
    id: '3',
    title: 'Urban Legends',
    overview: 'A thrilling anthology of urban legends come to life. Each story explores the dark side of modern folklore and the fears that lurk in our cities.',
    poster_path: 'https://images.unsplash.com/photo-1679699316094-a74534381e22?w=300&h=450&fit=crop',
    backdrop_path: 'https://images.unsplash.com/photo-1679699316094-a74534381e22?w=1200&h=600&fit=crop',
    release_date: '2020-10-31',
    genre_ids: [27, 53],
    vote_average: 7.2,
    vote_count: 1876,
    adult: false,
    original_language: 'en',
    original_title: 'Urban Legends',
    popularity: 54.3,
    video: false,
    trailer_url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    duration: 118
  },
  {
    id: '4',
    title: 'Digital Dreams',
    overview: 'In a near-future world where technology and humanity collide, a young programmer discovers a digital realm that challenges everything she knows about reality.',
    poster_path: 'https://images.unsplash.com/photo-1708544483196-9e71da0c2b18?w=300&h=450&fit=crop',
    backdrop_path: 'https://images.unsplash.com/photo-1708544483196-9e71da0c2b18?w=1200&h=600&fit=crop',
    release_date: '2022-05-20',
    genre_ids: [878, 18],
    vote_average: 7.8,
    vote_count: 3241,
    adult: false,
    original_language: 'en',
    original_title: 'Digital Dreams',
    popularity: 72.1,
    video: false,
    trailer_url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    duration: 126
  },
  {
    id: '5',
    title: 'The Last Garden',
    overview: 'A post-apocalyptic tale of survival and hope, where the last remaining garden on Earth holds the key to humanity\'s future.',
    poster_path: 'https://images.unsplash.com/photo-1623841305968-f85336594764?w=300&h=450&fit=crop',
    backdrop_path: 'https://images.unsplash.com/photo-1623841305968-f85336594764?w=1200&h=600&fit=crop',
    release_date: '2021-09-10',
    genre_ids: [18, 878],
    vote_average: 8.3,
    vote_count: 2847,
    adult: false,
    original_language: 'en',
    original_title: 'The Last Garden',
    popularity: 89.4,
    video: false,
    trailer_url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    duration: 134
  },
  {
    id: '6',
    title: 'Ocean Mysteries',
    overview: 'Dive deep into the unknown depths of our oceans and discover the incredible creatures and phenomena that exist in the abyss.',
    poster_path: 'https://images.unsplash.com/photo-1711479898431-9031deb4ff0e?w=300&h=450&fit=crop',
    backdrop_path: 'https://images.unsplash.com/photo-1711479898431-9031deb4ff0e?w=1200&h=600&fit=crop',
    release_date: '2020-06-05',
    genre_ids: [99],
    vote_average: 7.9,
    vote_count: 1956,
    adult: false,
    original_language: 'en',
    original_title: 'Ocean Mysteries',
    popularity: 61.7,
    video: false,
    trailer_url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    duration: 98
  }
];

export const movieCategories: MovieCategory[] = [
  {
    id: 'trending',
    name: 'Trending Now',
    movies: movies.slice(0, 4)
  },
  {
    id: 'action',
    name: 'Action & Adventure',
    movies: movies.filter(movie => movie.genre_ids.includes(28) || movie.genre_ids.includes(12))
  },
  {
    id: 'documentary',
    name: 'Documentaries',
    movies: movies.filter(movie => movie.genre_ids.includes(99))
  },
  {
    id: 'scifi',
    name: 'Sci-Fi',
    movies: movies.filter(movie => movie.genre_ids.includes(878))
  },
  {
    id: 'drama',
    name: 'Drama',
    movies: movies.filter(movie => movie.genre_ids.includes(18))
  },
  {
    id: 'horror',
    name: 'Horror & Thriller',
    movies: movies.filter(movie => movie.genre_ids.includes(27) || movie.genre_ids.includes(53))
  }
];

export const featuredMovie = movies[0];
export { movies };