import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Films(props) {
  const [films, setFilms] = useState({
    loading: true,
    data: [],
    error: ''
  });

  const getFilms = async () => {
    const filmsResult = await axios
      .get('https://swapi.co/api/films')
      .then(({ data: { results } }) => {
        return results;
      })
      .catch(err => {
        setFilms(prevState => ({
          ...prevState,
          loading: false,
          error: 'Error getting films from SWAPI'
        }));
      });

    setFilms(prevState => ({
      ...prevState,
      loading: false,
      data: filmsResult
    }));
  };

  useEffect(() => {
    getFilms();
  }, []);

  const filmData = films.data.map(film => {
    return (
      <li key={film.episode_id}>
        <Link to={`/film/${film.title}`}>{film.title}</Link>
      </li>
    );
  });
  return (
    <div>
      <h1>Film List Page</h1>
      {films.loading ? 'Loading...' : <ul>{filmData}</ul>}
      {films.error && <div>{films.error}</div>}
    </div>
  );
};


