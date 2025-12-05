import { AlbumCardLink, AlbumImage, AlbumTitle, AlbumInfo } from './styles';

const AlbumCard = ({ album }) => {
  return (
    <AlbumCardLink to={`/album/${album.idAlbum}`} state={{ album }}>
      {album.strAlbumThumb ? (
        <AlbumImage
          src={`${album.strAlbumThumb}`}
          alt={album.strAlbum}
        />
      ) : (
        <p>No image</p>
      )}
      <AlbumTitle>{album.strAlbum}</AlbumTitle>
      <AlbumInfo>{album.strArtist}</AlbumInfo>
      <AlbumInfo>{album.intYearReleased || 'Año desconocido'}</AlbumInfo>
    </AlbumCardLink>
  );
};

export default AlbumCard;  