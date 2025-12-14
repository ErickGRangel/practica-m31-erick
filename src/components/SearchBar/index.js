import { SearchBarForm, SearchInput, SearchButton } from './styles';

const SearchBar = ({ value, onChange, onSubmit }) => {
  return (
    <SearchBarForm onSubmit={onSubmit}>
      <SearchInput
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