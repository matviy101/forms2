import styled from 'styled-components';

export const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin: 20px 0;
  padding: 15px;
  background-color: #f5f5f5;
  border-radius: 8px;
`;

export const InfoText = styled.p`
  margin: 0;
  color: #333;
  font-size: 16px;

  strong {
    color: #3498db;
  }
`;