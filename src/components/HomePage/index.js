import React, { useState } from 'react';
import SearchBar from '../SearchBar';
import AlbumGrid from '../AlbumGrid';
import useFetch from '../../hooks/useFetch';

const HomePage = () => {
  const [artist, setArtist] = useState('');

  const url = artist.trim()
    ? `https://theaudiodb.com/api/v1/json/123/searchalbum.php?s=${encodeURIComponent(artist.trim())}`
    : null;

  const { data, loading, error } = useFetch(url);
  const albums = data?.album || [];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="homepage-container">
      <h1 className="hometitle">BIBLIOTECA MUSICAL</h1>
      <div className="homepage">
        <SearchBar
          value={artist}
          onChange={(val) => setArtist(val)}
          onSubmit={handleSubmit}
        />

        {loading && <p className="loading">Cargando álbumes...</p>}
        {error && <p className="error">Error al cargar los álbumes.</p>}

        {!loading && !error && <AlbumGrid albums={albums} />}
      </div>
    </div>
  );
};

export default HomePage;