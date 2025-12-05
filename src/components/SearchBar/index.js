import React from 'react';
import { SearchBarForm, SearchInput, SearchButton } from './styles';

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
    </SearchBarForm>
  );
};

export default SearchBar;