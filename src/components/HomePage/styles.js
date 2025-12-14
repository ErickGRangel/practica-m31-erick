import styled from 'styled-components';

export const HomeTitle = styled.h1`
  text-align: center;
  color: white;
  margin: 20px 0;
`;

export const HomeLoading = styled.p`
  text-align: center;
  color: #ccc;
  margin: 20px 0;
`;

export const HomeButton = styled.button`
  display: block;
  margin: 0 auto 24px;
  padding: 10px 20px;
  background: #5d409b;
  color: white;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  text-decoration: none;
  width: fit-content;

  &:hover {
    background: #4a307a;
  }
`;

export const ControlContainer = styled.div`
  display: flex;
  justify-content: center;
`;
