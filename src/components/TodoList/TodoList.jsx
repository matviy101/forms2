
import { TodoItems, TodoItem } from './TodoList.styled';

const TodoList = ({ todos, onDeleteTodo, onToggleCompleted }) => {
  return (
    <TodoItems>
      {todos.map(({ id, text, completed }) => (
        <TodoItem key={id}>
          <label>
            <input
              type="checkbox"
              checked={completed}
              onChange={() => onToggleCompleted(id)}
            />

            <span>{text}</span>
          </label>

          <button
            type="button"
            onClick={() => onDeleteTodo(id)}
          >
            видалити
          </button>
        </TodoItem>
      ))}
    </TodoItems>
  );
};

export default TodoList;
