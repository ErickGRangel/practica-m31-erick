import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';

const SongDetail = () => {
  const { id } = useParams();
  const url = id
    ? `https://theaudiodb.com/api/v1/json/123/album.php?m=${id}`
    : null;

  const { data, loading, error } = useFetch(url);
  const album = data?.album?.[0];

  if (loading) {
    return <p className="loading">Cargando álbum...</p>;
  }

  if (error) {
    return (
      <p className="error">
        Error al cargar los detalles del álbum.
      </p>
    );
  }

  if (!album) {
    return <p>Álbum no encontrado.</p>;
  }

  return (
    <div className="song-detail">
      <div className="album-info">
        <h1>{album.strAlbum}</h1>
        <p><strong>Artista:</strong> {album.strArtist}</p>
        <p><strong>Año:</strong> {album.intYearReleased || 'Desconocido'}</p>
        <p><strong>Género:</strong> {album.strGenre || 'Desconocido'}</p>
        <p><strong>Disquera:</strong> {album.strLabel || 'Desconocida'}</p>

        {album.intScore && (
          <p><strong>Calificación:</strong> {album.intScore}/100</p>
        )}

        {album.strDescriptionEN && (
          <div className="album-description">
            <h3>Descripción</h3>
            <p>{album.strDescriptionEN}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SongDetail;