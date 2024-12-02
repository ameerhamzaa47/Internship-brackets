import { useEffect, useState } from 'react';
import axios from 'axios';

const TMDB_PTV_API = () => {
  interface TVShow {
    id: number;
    name: string;
    overview: string;
    poster_path: string;
  }

  const [data, setData] = useState({
    tvShows: [] as TVShow[],
    loading: true,
    error: null,
    showModal: false,
    selectedTrailer: '', // This will store the selected trailer URL
  });

  const API_KEY = '2af93ce74a07db0adce9016fe1d60765'; // Replace with your actual API key from TMDB
  const BASE_URL = 'https://api.themoviedb.org/3';

  // Fetch popular TV shows on component mount
  useEffect(() => {
    const fetchPopularTVShows = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/tv/popular`, {
          params: {
            api_key: API_KEY,
            language: 'en-US', // Language for results
          },
        });

        const popularTVShows = response.data.results;

        setData({
          tvShows: popularTVShows,
          loading: false,
          error: null,
          showModal: false,
          selectedTrailer: '',
        });
      } catch (error: any) {
        setData({
          tvShows: [],
          loading: false,
          error: error.message,
          showModal: false,
          selectedTrailer: '',
        });
      }
    };

    fetchPopularTVShows();
  }, []);

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
            <button>Check Trailer</button>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TMDB_PTV_API;
