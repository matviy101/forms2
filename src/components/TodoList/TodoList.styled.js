
import styled from 'styled-components';

export const TodoItems = styled.ul`
  list-style: none;
  padding: 0;
  margin: 20px 0;

  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const TodoItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: white;

  label {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  input {
    cursor: pointer;
    width: 17px;
    height: 17px;
  }

  span {
    color: #333;
  }

  input:checked + span {
    text-decoration: line-through;
    color: #999;
  }

  button {
    background-color: #e74c3c;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 7px 12px;
    cursor: pointer;
  }

  button:hover {
    background-color: #c0392b;
  }
`;
