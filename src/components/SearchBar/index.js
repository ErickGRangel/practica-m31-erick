import React from 'react';
import { SearchBarForm, SearchInput, SearchButton,LibraryButton } from './styles';
import { Link } from 'react-router-dom';

const SearchBar = ({ value, onChange, onSubmit }) => {
  return (
    <SearchBarForm onSubmit={onSubmit}>
      <label htmlFor="artist-search"></label>
      <SearchInput
        id="artist-search"
        name="artist"
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Ej. Coldplay, Oasis..."
      />
      <SearchButton type="submit">Buscar</SearchButton>
        <LibraryButton as={Link} to="/library">
          Ver mi biblioteca
        </LibraryButton>
    </SearchBarForm>
  );
};

export default SearchBar;