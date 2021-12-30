import styled from 'styled-components';

export const UserStyle = styled.div<{isActive: boolean}>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  margin: 10px 0;
  padding: 15px;
  box-sizing: border-box;
  font-size: 20px;
  background: white;
  color: black;
  :hover {
    background: #f0f0ff;
  }
  :after {
    content: ${(p) => p.isActive ? '\'≫\'' : 'none'};
    font-size: 26px;
  }
`;
