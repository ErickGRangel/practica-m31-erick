import React from 'react';
import AlbumCard from '../AlbumCard';
import { AlbumGridContainer } from './syles';

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
        <AlbumCard key={album.idAlbum} album={album} />
      ))}
    </AlbumGridContainer>
  );
};

export default AlbumGrid;