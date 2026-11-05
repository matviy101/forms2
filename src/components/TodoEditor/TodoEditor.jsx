
import { useState } from 'react';
import { EditorForm, EditorInput, AddButton } from './TodoEditor.styled';

const TodoEditor = ({ onSubmit }) => {
  const [textValue, setTextValue] = useState('');

  const handleChange = event => {
    setTextValue(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    const trimmedValue = textValue.trim();

    if (!trimmedValue) {
      return;
    }

    onSubmit(trimmedValue);
    setTextValue('');
  };

  return (
    <EditorForm onSubmit={handleSubmit}>
      <EditorInput
        type="text"
        value={textValue}
        onChange={handleChange}
        placeholder="додати завдання"
      />

      <AddButton type="submit">
        додати завдвння
      </AddButton>
    </EditorForm>
  );
};

export default TodoEditor;
