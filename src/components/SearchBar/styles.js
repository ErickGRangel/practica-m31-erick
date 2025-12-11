import styled from 'styled-components';

const SearchBarForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
`;

const SearchInput = styled.input`
    padding: 12px;
    background-color: #1e1e1e;
    border: 1px solid #ffff;;
    border-radius: 4px;
    color:#ffffff; 
    font-size: 16px;
        &:placeholder {
            color: #ffffffbc
        }
`; 

const LibraryButton= styled.button`
    padding: 10px 20px;
    background: rgba(51, 53, 117, 1);
    color: #fff;
    border: none;
    font-size: 1rem;
    cursor: pointer;
    text-decoration: none;
  &:hover {
    background: #4a307a41;
  }
`;

  const SearchButton = styled.button`
    padding: 12px 20px;
    background-color: rgb(194, 148, 24);
    color: #ffffff; ;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.2s;
    &:hover {
        background-color: rgba(194, 149, 24, 0.38);
    }
`;

export { SearchBarForm, SearchInput, SearchButton, LibraryButton};