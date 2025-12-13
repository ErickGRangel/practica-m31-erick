import SearchResults from '../SearchResults';
import { AlbumGridContainer } from './styles';

const AlbumGrid = ({ albums }) => {
  if (!albums || albums.length === 0) {
    return (
      <p
        style={{
          textAlign: 'center',
          margin: '20px 0',
          color: '#fff'
        }}
      >
        No se encontraron álbumes.
      </p>
    );
  }

  return (
    <AlbumGridContainer>
      {albums.map((album) => (
        <SearchResults key={album.idAlbum} album={album} />
      ))}
    </AlbumGridContainer>
  );
};

export default AlbumGrid;