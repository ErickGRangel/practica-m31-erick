import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeSong } from '../../redux/libraryActions';
import { LibraryContainer, LibraryItem, RemoveButton } from './styles';

const Library = () => {
  const library = useSelector((state) => state.library);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeSong(id));
  };

  if (library.length === 0) {
    return <p style={{ textAlign: 'center', color: '#fff' }}>Tu biblioteca está vacía.</p>;
  }

  return (
    <LibraryContainer>
      <h2>Mi Biblioteca</h2>
      {library.map((item) => (
        <LibraryItem key={item.id}>
          <div >
            <strong>{item.title}</strong> — {item.artist}
            <br />
            <em>Álbum: {item.album}</em>
          </div>
          <RemoveButton onClick={() => handleRemove(item.id)}>
            Eliminar
          </RemoveButton>
        </LibraryItem>
      ))}
    </LibraryContainer>
  );
};

export default Library;