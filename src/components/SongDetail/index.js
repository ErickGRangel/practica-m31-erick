import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import { SongDescription, SongDetailContainer, SongInfo, SongTitle, SongScore, SongDescriptionText,SongLoading} from './styles';

const SongDetail = () => {
  const { id } = useParams();
  const url = id
    ? `https://theaudiodb.com/api/v1/json/123/album.php?m=${id}`
    : null;

  const { data, loading, error } = useFetch(url);
  const album = data?.album?.[0];

  if (loading) {
    return <SongLoading>Cargando álbum...</SongLoading >;
  }

  if (error) {
    return (
      <SongLoading>
        Error al cargar los detalles del álbum.
      </SongLoading>
    );
  }

  if (!album) {
    return <SongLoading>Álbum no encontrado.</SongLoading>;
  }

  return (
    <>
      <SongDetailContainer>
        <SongTitle>{album.strAlbum}</SongTitle>
        <SongInfo><strong>Artista:</strong> {album.strArtist}</SongInfo>
        <SongInfo><strong>Año:</strong> {album.intYearReleased || 'Desconocido'}</SongInfo>
        <SongInfo><strong>Género:</strong> {album.strGenre || 'Desconocido'}</SongInfo>
        <SongInfo><strong>Disquera:</strong> {album.strLabel || 'Desconocida'}</SongInfo>

       {album.intScore !== undefined && (
        <SongInfo>
          <strong>Calificación:</strong>
          <SongScore score={Number(album.intScore)}>
            {album.intScore}/10
          </SongScore>
        </SongInfo>
      )}

        {album.strDescriptionEN && (
          <SongDescription>
            <SongTitle>Descripción</SongTitle>
            <SongDescriptionText>{album.strDescriptionEN}</SongDescriptionText>
          </SongDescription>
        )}
      </SongDetailContainer>
    </>
  );
};

export default SongDetail;