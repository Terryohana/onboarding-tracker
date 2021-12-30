import styled from 'styled-components';

export const TaskStyle = styled.div<{isClickable: boolean}>`
  display: flex;
  align-items: center;
  padding: 5px;
  cursor: ${(p) => p.isClickable ? 'pointer' : 'default'};
`;
