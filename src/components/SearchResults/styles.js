import styled from "styled-components";
import { Link } from "react-router-dom";

const SearchResultsLink = styled(Link)`
  width: 90%; 
  text-decoration: none;
  background-color: #1e1e1e;
  border-radius: 8px;
  padding: 12px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  transition: transform 0.2s, background-color 0.2s;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  &:hover {
    transform: translateY(-5px);
    }
`;

  const AlbumImage = styled.img`
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 6px;
    margin-bottom: 5px;
`;
    
const AlbumTitle = styled.h3`
    color: #ffffff;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    margin: 0 0 5px 0;
`;

const AlbumInfo = styled.p`
    font-size: 14px;
    color: #fff;;
    text-align: center;
`;

 const AddButton = styled.button`
  margin-top: 8px;
  padding: 6px 12px;
  background: rgba(194, 148, 24, 1);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;

  &:hover {
    background: rgba(194, 149, 24, 0.72);
  }
`;

export { SearchResultsLink, AlbumImage, AlbumTitle, AlbumInfo, AddButton }; 