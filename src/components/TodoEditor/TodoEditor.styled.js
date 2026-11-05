
import styled from 'styled-components';

export const EditorForm = styled.form`
  display: flex;
  gap: 10px;
  margin: 20px 0;
`;

export const EditorInput = styled.input`
  flex: 1;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 16px;

  &:focus {
    outline: none;
  }
`;

export const AddButton = styled.button`
  padding: 12px 20px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
`;
