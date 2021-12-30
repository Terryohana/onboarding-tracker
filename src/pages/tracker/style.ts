import styled from 'styled-components';

export const TrackerStyle = styled.div`
  margin: 0 auto;
  padding: 20px;
  max-width: 800px;
  font-family: Tahoma sans-serif;
  background: #f9f9f9;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 40px;
`;

export const Subtitle = styled.h2`
  font-size: 24px;
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Block = styled.div`
  flex: 1;
  min-width: 200px;
  padding: 0 10px;
  max-height: 1000px;
  overflow: auto;
  a {
    text-decoration: none;
  }
`;
