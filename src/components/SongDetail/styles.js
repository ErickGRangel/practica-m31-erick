 import styled from 'styled-components';

 const SongDetailContainer = styled.div`
    flex-direction: column;
    text-align: center;
    justify-content: center;
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    background-color: #1e1e1e;;
    border-radius: 8px;
  `;

  const SongTitle = styled.h2`
    font-size: 28px;
    color: #6be1ff;
    margin: 0 0 10px 0;
    `;
  
   const SongInfo = styled.div`
    margin: 5px 0;
    color: #ffff;
    text-align: center;
    strong {
        color: #ddd128ff;
    `;

    const SongDescription = styled.div`
    margin-top: 20px;
    padding-top: 15px;
    border-top: 1px solid #333;
`;

const SongDescriptionText = styled.p`
    color: #ffffff;
    text-align: justify;
    line-height: 1.6;
`;
    const SongScore = styled.p`
    display: inline-block;
    font-weight: bold;
    margin-left: 5px;
    color: ${({ score }) => {
        if (score >= 8 && score <= 10) return '#10B981'; 
        if (score >= 6 && score <= 7) return '#F59E0B'; 
        if (score >= 0 && score <= 5) return '#EF4444'; 
        return '#ccc'; 
    }};
`;

const SongLoading = styled.p`
    text-align: center;
    margin:auto 0;
    color: #fff;
`;


export { SongDetailContainer, SongTitle, SongInfo, SongDescription, SongScore, SongDescriptionText, SongLoading };