import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAlbums, resetResults } from '../../redux/slices/searchSlice';
import AlbumGrid from '../AlbumGrid';
import SearchBar from '../SearchBar';
import { HomeLoading, HomeTitle, HomeButton, ControlContainer } from './styles';

const HomePage = () => {
  const [artist, setArtist] = useState('');
  const dispatch = useDispatch();
  const { results, loading, error } = useSelector((state) => state.search);

  useEffect(() => {
    return () => {
      dispatch(resetResults());
    };
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (artist.trim()) {
      dispatch(fetchAlbums(artist.trim()));
    }
  };

  return (
    <>
      <HomeTitle>BIBLIOTECA MUSICAL</HomeTitle>
      
      <ControlContainer>
        <HomeButton as={Link} to="/library">
          Ver mi biblioteca
        </HomeButton>
      </ControlContainer>

      <SearchBar
        value={artist}
        onChange={(val) => setArtist(val)}
        onSubmit={handleSubmit}
      />

      {loading && <HomeLoading>Cargando álbumes...</HomeLoading>}
      {error && <p style={{ textAlign: 'center', color: 'red' }}>{error}</p>}
      
      {!loading && !error && <AlbumGrid albums={results} />}
    </>
  );
};

export default HomePage;