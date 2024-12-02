import axios from 'axios';
import { useEffect, useState } from 'react';

// Define Interfaces
interface Movie {
    id: number;
    title: string;
    overview: string;
    release_date: string;
    backdrop_path: string;
    poster_path: string;
}

interface TVShow {
    id: number;
    name: string;
    overview: string;
    first_air_date: string;
    backdrop_path: string;
    poster_path: string;
}

interface Image {
    file_path: string;
}

interface Video {
    id: string;
    key: string;
    name: string;
    site: string;
    type: string;
}

interface SearchResponse {
    results: Movie[];
}

interface MovieDetails extends Movie {}

interface PopularMoviesResponse {
    results: Movie[];
}

interface TVShowDetails extends TVShow {}

interface PopularTVShowsResponse {
    results: TVShow[];
}

interface ImagesResponse {
    backdrops: Image[];
    posters: Image[];
}

interface VideoResponse {
    results: Video[];
}

// API Configuration
const API_KEY = '2af93ce74a07db0adce9016fe1d60765'; // Replace with your actual TMDb API key.
const BASE_URL = 'https://api.themoviedb.org/3';

// Main Component
const TMDB_API = () => {
    const [data, setData] = useState<{
        searchResults: Movie[];
        movieDetails: MovieDetails | null;
        popularMovies: Movie[];
        popularTVShows: TVShow[];
        tvShowDetails: TVShowDetails | null;
        images: Image[];
        videos: Video[]; // New state for videos
    }>({
        searchResults: [],
        movieDetails: null,
        popularMovies: [],
        popularTVShows: [],
        tvShowDetails: null,
        images: [],
        videos: [], // Initialize videos array
    });

    // Fetch Data Function
    const fetchData = async () => {
        try {
            // Search for movies
            const searchResponse = await axios.get<SearchResponse>(`${BASE_URL}/search/movie`, {
                params: { api_key: API_KEY, query: 'Inception' },
            });

            // Get specific movie details
            const movieDetailsResponse = await axios.get<MovieDetails>(`${BASE_URL}/movie/550`, {
                params: { api_key: API_KEY },
            });

            // Get a list of popular movies
            const popularMoviesResponse = await axios.get<PopularMoviesResponse>(`${BASE_URL}/movie/popular`, {
                params: { api_key: API_KEY },
            });

            // Get specific TV show details
            const tvShowDetailsResponse = await axios.get<TVShowDetails>(`${BASE_URL}/tv/1399`, {
                params: { api_key: API_KEY },
            });

            // Get a list of popular TV shows
            const popularTVShowsResponse = await axios.get<PopularTVShowsResponse>(`${BASE_URL}/tv/popular`, {
                params: { api_key: API_KEY },
            });

            // Get images for a specific movie
            const imagesResponse = await axios.get<ImagesResponse>(`${BASE_URL}/movie/550/images`, {
                params: { api_key: API_KEY },
            });

            // Get videos for a specific movie
            const videoResponse = await axios.get<VideoResponse>(`${BASE_URL}/movie/550/videos`, {
                params: { api_key: API_KEY },
            });

            // Update State
            setData({
                searchResults: searchResponse.data.results,
                movieDetails: movieDetailsResponse.data,
                popularMovies: popularMoviesResponse.data.results,
                popularTVShows: popularTVShowsResponse.data.results,
                tvShowDetails: tvShowDetailsResponse.data,
                images: imagesResponse.data.backdrops,
                videos: videoResponse.data.results, // Store the videos in state
            });
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData(); // Fetch data on component mount
    }, []);

    return (
        <div>
            <h1>TMDb API Data</h1>

            {/* Search Results */}
            <h2>Search Results (Movies/TV Shows)</h2>
            {data.searchResults.map((result) => (
                <div key={result.id}>
                    <strong>Title:</strong> {result.title} <br />
                    <strong>Overview:</strong> {result.overview}
                    <hr />
                </div>
            ))}

            {/* Movie Details */}
            <h2>Movie Details</h2>
            {data.movieDetails && (
                <div>
                    <strong>Title:</strong> {data.movieDetails.title} <br />
                    <strong>Overview:</strong> {data.movieDetails.overview} <br />
                    <strong>Release Date:</strong> {data.movieDetails.release_date}
                    <hr />
                </div>
            )}

            {/* Popular Movies */}
            <h2>Popular Movies</h2>
            {data.popularMovies.map((movie) => (
                <div key={movie.id}>
                    <strong>Title:</strong> {movie.title} <br />
                    <strong>Overview:</strong> {movie.overview}
                    <hr />
                </div>
            ))}

            {/* Popular TV Shows */}
            <h2>Popular TV Shows</h2>
            {data.popularTVShows.map((show) => (
                <div key={show.id}>
                    <strong>Name:</strong> {show.name} <br />
                    <strong>Overview:</strong> {show.overview}
                    <hr />
                </div>
            ))}

            {/* TV Show Details */}
            <h2>TV Show Details</h2>
            {data.tvShowDetails && (
                <div>
                    <strong>Name:</strong> {data.tvShowDetails.name} <br />
                    <strong>Overview:</strong> {data.tvShowDetails.overview} <br />
                    <strong>First Air Date:</strong> {data.tvShowDetails.first_air_date}
                    <hr />
                </div>
            )}

            {/* Images */}
            <h2>Images (Posters and Backdrops)</h2>
            <div>
                {data.images.map((img, index) => (
                    <img
                        key={index}
                        src={`https://image.tmdb.org/t/p/w500${img.file_path}`}
                        alt="Movie/TV Show"
                        style={{ width: '200px', margin: '10px' }}
                    />
                ))}
            </div>

            {/* Videos */}
            <h2>Videos (Trailers)</h2>
            <div>
                {data.videos.length > 0 ? (
                    data.videos.map((video) => (
                        <div key={video.id}>
                            <strong>{video.name}</strong><br />
                            <iframe
                                width="560"
                                height="315"
                                src={`https://www.youtube.com/embed/${video.key}`}
                                title={video.name}
                                frameBorder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                            <hr />
                        </div>
                    ))
                ) : (
                    <p>No videos available</p>
                )}
            </div>
        </div>
    );
};

export default TMDB_API;









// import { useState, useEffect } from 'react';
// import axios from 'axios';

// const HomePage = () => {
//     // Movie type definition
//     interface Movie {
//         id: number;
//         title: string;
//         overview: string;
//         poster_path: string;
//         genres: { id: number; name: string }[];
//         runtime: number;
//         vote_average: number;
//     }

//     const [movies, setMovies] = useState<Movie[]>([]); // Store list of movies
//     const [trailerUrl, setTrailerUrl] = useState(''); // Store trailer URL
//     const [showModal, setShowModal] = useState(false); // Show or hide modal
//     const [d,setD]=useState([])

//     useEffect(() => {
//         const fetchMovies = async () => {
//             try {
//                 // Fetch popular movies
//                 const response = await axios.get('https://api.themoviedb.org/3/movie/popular', {
//                     params: {
//                         api_key: '2af93ce74a07db0adce9016fe1d60765', // Replace with your TMDb API key
//                     },
//                 });

//                 const moviesWithDetails = await Promise.all(
//                     response.data.results.map(async (movie: any) => {
//                         const details = await fetchMovieDetails(movie.id);
//                         return {
//                             id: movie.id,
//                             title: movie.title,
//                             overview: movie.overview,
//                             poster_path: movie.poster_path,
//                             genres: details.genres,
//                             runtime: details.runtime,
//                             vote_average: details.vote_average,
//                         };
//                     })
//                 );

//                 setMovies(moviesWithDetails);
//             } catch (error) {
//                 console.error('Error fetching movies:', error);
//             }
//         };

//         fetchMovies();
//     }, []);

//     const fetchTrailer = async (id: number) => {
//         try {
//             // Fetch trailer for a movie
//             const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}/videos`, {
//                 params: {
//                     api_key: '2af93ce74a07db0adce9016fe1d60765', // Replace with your TMDb API key
//                 },
//             });
//             const trailer = response.data.results.find(
//                 (video: any) => video.type === 'Trailer' && video.site === 'YouTube'
//             );
//             if (trailer) {
//                 setTrailerUrl(`https://www.youtube.com/embed/${trailer.key}`); // Set the trailer URL for YouTube embed
//                 setShowModal(true); // Show the modal
//             }
//         } catch (error) {
//             console.error('Error fetching trailer:', error);
//         }
//     };

//     const fetchMovieDetails = async (id: number) => {
//         try {
//             // Fetch movie details
//             const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
//                 params: {
//                     api_key: '2af93ce74a07db0adce9016fe1d60765',
//                 },
//             });
//             setD(response.data)
//             return response.data;
//         } catch (error) {
//             console.error(`Error fetching details for movie ${id}:`, error);
//             return {};
//         }
//     };

//     console.log('det',d);
    

//     const closeModal = () => {
//         setShowModal(false); // Close the modal
//         setTrailerUrl(''); // Clear the trailer URL
//     };

//     console.log(movies);

//     return (
//         <div className="container mx-auto p-6">
//             <h1 className="text-4xl text-center font-bold mb-6">Popular Movies</h1>
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//                 {movies.map((movie) => (
//                     <div key={movie.id} className="bg-gray-800 text-white p-4 rounded-lg">
//                         <img
//                             src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
//                             alt={movie.title}
//                             className="w-full h-64 object-cover rounded-t-lg"
//                         />
//                         <h2 className="text-xl font-semibold mt-4">{movie.title}</h2>
//                         <p className="text-sm mt-2">{movie.overview}</p>
//                         <p className="text-sm mt-2">
//                             <strong>Genres:</strong> {movie.genres.map((g) => g.name).join(', ')}
//                         </p>
//                         <p className="text-sm mt-2">
//                             <strong>Rating:</strong> {movie.vote_average}/10
//                         </p>
//                         <p className="text-sm mt-2">
//                             <strong>Duration:</strong> {movie.runtime} minutes
//                         </p>
//                         <button onClick={() => fetchTrailer(movie.id)}>watch</button>
//                     </div>
//                 ))}
//             </div>

//             {showModal && (
//                 <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//                     <div className="bg-gray-900 p-6 rounded-lg w-11/12 md:w-1/2">
//                         <button
//                             onClick={closeModal}
//                             className="absolute top-4 right-4 text-white font-bold text-xl"
//                         >
//                             ×
//                         </button>
//                         <iframe
//                             width="100%"
//                             height="400"
//                             src={trailerUrl}
//                             title="Movie Trailer"
//                             frameBorder="0"
//                             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                             allowFullScreen
//                         ></iframe>
//                     </div>
//                 </div>
//             )}
//         </div>

        
//     );
// };

// export default HomePage;