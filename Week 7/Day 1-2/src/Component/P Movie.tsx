import { useEffect, useState } from 'react';
import axios from 'axios';

const TMDB_API = () => {
  interface Movie {
    id: number;
    title: string;
    overview: string;
    poster_path: string;
  }

  const [data, setData] = useState({
    movies: [] as Movie[],
    trailerUrl: '',
    loading: true,
    error: null,
    selectedTrailer: '', // This will store the selected trailer URL
    showModal: false, // Show or hide the modal
  });

  const API_KEY = '2af93ce74a07db0adce9016fe1d60765'; // Replace with your actual API key from TMDB
  const BASE_URL = 'https://api.themoviedb.org/3';

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch popular movies
        const popularMoviesResponse = await axios.get(
          `${BASE_URL}/movie/popular`,
          {
            params: {
              api_key: API_KEY,
              language: 'en-US',
            },
          }
        );

        // Set the movie list in state
        setData({
          movies: popularMoviesResponse.data.results,
          trailerUrl: '',
          loading: false,
          error: null,
          selectedTrailer: '',
          showModal: false,
        });
      } catch (error: any) {
        setData({
          movies: [],
          trailerUrl: '',
          loading: false,
          error: error.message,
          selectedTrailer: '',
          showModal: false,
        });
      }
    };

    fetchData();
  }, []); // Empty array means this will run only once when the component mounts

  // Function to fetch the trailer when a button is clicked
  const fetchTrailer = async (movieId: number) => {
    try {
      const trailerResponse = await axios.get(
        `${BASE_URL}/movie/${movieId}/videos`,
        {
          params: {
            api_key: API_KEY,
            language: 'en-US',
          },
        }
      );

      // Get the YouTube trailer URL (if exists)
      const trailer = trailerResponse.data.results.find(
        (video: { site: string; type: string }) =>
          video.site === 'YouTube' && video.type === 'Trailer'
      );

      if (trailer) {
        // Store the trailer URL and show the modal
        setData((prevData) => ({
          ...prevData,
          selectedTrailer: `https://www.youtube.com/embed/${trailer.key}`,
          showModal: true,
        }));
      } else {
        alert('Trailer not available.');
      }
    } catch (error) {
      console.error('Error fetching trailer:', error);
    }
  };

  // Function to close the modal
  const closeModal = () => {
    setData((prevData) => ({
      ...prevData,
      showModal: false,
      selectedTrailer: '',
    }));
  };

  // Check loading state
  if (data.loading) {
    return <div>Loading...</div>;
  }

  // Handle errors if any
  if (data.error) {
    return <div>Error: {data.error}</div>;
  }

  return (
    <div>
      <h1>Popular Movies</h1>

      {/* Displaying movie list */}
      <div>
        {data.movies.map((movie) => (
          <div key={movie.id} style={{ marginBottom: '20px' }}>
            <h3>{movie.title}</h3>
            <p>{movie.overview}</p>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              style={{ width: '200px', height: '300px' }}
            />
            <br />
            {/* Button to check if a trailer is available */}
            <button onClick={() => fetchTrailer(movie.id)}>Check Trailer</button>
            <hr />
          </div>
        ))}
      </div>

      {/* Modal for playing the trailer */}
      {data.showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-gray-900 p-6 rounded-lg w-11/12 md:w-1/2">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white font-bold text-xl"
            >
              ×
            </button>
            <iframe
              width="100%"
              height="400"
              src={data.selectedTrailer}
              title="Movie Trailer"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default TMDB_API;
