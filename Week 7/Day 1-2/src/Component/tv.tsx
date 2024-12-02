import { useEffect, useState } from 'react';
import axios from 'axios';

const TMDB_TV_API = () => {
  interface TVShow {
    id: number;
    name: string;
    overview: string;
    poster_path: string;
  }

  const [data, setData] = useState({
    tvShows: [] as TVShow[], // Store the list of TV shows
    trailerUrl: '',
    loading: true,
    error: null,
    selectedTrailer: '', // This will store the selected trailer URL
    showModal: false, // Show or hide the modal
  });

  const API_KEY = '2af93ce74a07db0adce9016fe1d60765'; // Replace with your actual API key from TMDB
  const BASE_URL = 'https://api.themoviedb.org/3';

  useEffect(() => {
    const fetchTVShows = async () => {
      try {
        // Fetch popular TV shows
        const popularTVShowsResponse = await axios.get(
          `${BASE_URL}/tv/popular`,
          {
            params: {
              api_key: API_KEY,
              language: 'en-US',
            },
          }
        );

        // Set the TV show list in state
        setData({
          tvShows: popularTVShowsResponse.data.results,
          trailerUrl: '',
          loading: false,
          error: null,
          selectedTrailer: '',
          showModal: false,
        });
      } catch (error: any) {
        setData({
          tvShows: [],
          trailerUrl: '',
          loading: false,
          error: error.message,
          selectedTrailer: '',
          showModal: false,
        });
      }
    };

    fetchTVShows();
  }, []); // Empty array means this will run only once when the component mounts

  // Function to fetch the trailer when a button is clicked
  const fetchTrailer = async (tvShowId: number) => {
    try {
      const trailerResponse = await axios.get(
        `${BASE_URL}/tv/${tvShowId}/videos`,
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
      <h1>Popular TV Shows</h1>

      {/* Displaying TV show list */}
      <div>
        {data.tvShows.map((tvShow) => (
          <div key={tvShow.id} style={{ marginBottom: '20px' }}>
            <h3>{tvShow.name}</h3>
            <p>{tvShow.overview}</p>
            <img
              src={`https://image.tmdb.org/t/p/w500${tvShow.poster_path}`}
              alt={tvShow.name}
              style={{ width: '200px', height: '300px' }}
            />
            <br />
            {/* Button to check if a trailer is available */}
            <button onClick={() => fetchTrailer(tvShow.id)}>Check Trailer</button>
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
              title="TV Show Trailer"
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

export default TMDB_TV_API;
