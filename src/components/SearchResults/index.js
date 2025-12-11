import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addSong, removeSong } from '../../redux/libraryActions';
import { AlbumCardLink, AlbumImage, AlbumTitle, AlbumInfo, AddButton } from './styles';

const AlbumCard = ({ album }) => {
  const dispatch = useDispatch();

  const handleAddToLibrary = () => {
    const songItem = {
      id: album.idAlbum,           
      title: album.strAlbum,      
      artist: album.strArtist,
      album: album.strAlbum
    };
    dispatch(addSong(songItem));
  };

  return (
    <AlbumCardLink to={`/album/${album.idAlbum}`} state={{ album }}>
      {album.strAlbumThumb ? (
        <AlbumImage src={album.strAlbumThumb} alt={album.strAlbum} />
      ) : (
        <p>No image</p>
      )}
      <AlbumTitle>{album.strAlbum}</AlbumTitle>
      <AlbumInfo>{album.strArtist}</AlbumInfo>
      <AlbumInfo>{album.intYearReleased || 'Año desconocido'}</AlbumInfo>
      
      <AddButton type="button" onClick={(e) => {
        e.preventDefault();
        handleAddToLibrary();
      }}>
        Agregar a mi biblioteca
      </AddButton>
    </AlbumCardLink>
  );
};

export default AlbumCard;