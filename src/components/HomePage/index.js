import React, { useState } from 'react';
import SearchBar from '../SearchBar';
import AlbumGrid from '../AlbumGrid';
import useFetch from '../../hooks/useFetch';
import { HomeLoading, HomeTitle } from './styles';

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
    <>
      <HomeTitle>BIBLIOTECA MUSICAL</HomeTitle>
      <div>
        <SearchBar
          value={artist}
          onChange={(val) => setArtist(val)}
          onSubmit={handleSubmit}
        />

        {loading && <HomeLoading>Cargando álbumes...</HomeLoading>}
        {error && <p className="error">Error al cargar los álbumes.</p>}

        {!loading && !error && <AlbumGrid albums={albums} />}
      </div>
    </>
  );
};

export default HomePage;