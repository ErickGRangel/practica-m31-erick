import React from 'react';
import { Link } from 'react-router-dom';

const AlbumCard = ({ album }) => {
  return (
    <Link to={`/album/${album.idAlbum}`} state={{ album }} className="album-card">
      {album.strAlbumThumb ? (
        <img
          src={`${album.strAlbumThumb}/medium`}
          alt={album.strAlbum}
          className="album-cover"
        />
      ) : (
        <div className="album-noimage">No image</div>
      )}
      <h3 className="album-title">{album.strAlbum}</h3>
      <p className="album-artist">{album.strArtist}</p>
      <p className="album-year">{album.intYearReleased || 'Año desconocido'}</p>
    </Link>
  );
};

export default AlbumCard;