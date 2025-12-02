import React from 'react';
import AlbumCard from '../AlbumCard';

const AlbumGrid = ({ albums }) => {
  if (!albums || albums.length === 0) {
    return <p className="no-results">No se encontraron álbumes.</p>;
  }

  return (
    <div className="album-grid">
      {albums.map((album) => (
        <AlbumCard key={album.idAlbum} album={album} />
      ))}
    </div>
  );
};

export default AlbumGrid;