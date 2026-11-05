import Info from './components/Info/Info';
import { useState } from 'react';
import initialAll from './todo.json';
import TodoList from './components/TodoList/TodoList';
import TodoEditor from './components/TodoEditor/TodoEditor';
import Filter from './components/Filter/Filter';
import './App.css';

function App() {
  const [all, setAll] = useState(initialAll);
  const [filter, setFilter] = useState('');

  const handleAddTodo = text => {
    const newTodo = {
      id: Date.now(),
      text: text,
      completed: false,
    };

    setAll(prev => [...prev, newTodo]);
  };

  const completedTodos = all.filter(todo => todo.completed).length;

  
  const handleDeleteTodo = id => {
    setAll(prev => prev.filter(todo => todo.id !== id));
  };

  const handleToggleCompleted = id => {
    setAll(prev =>
      prev.map(todo =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };

  const visibleTodos = all.filter(todo =>
    todo.text.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="app">
      <h1>Todo List</h1>

      <TodoEditor onSubmit={handleAddTodo} />

      <Filter
        value={filter}
        onChange={setFilter}
      />

      <TodoList
        todos={visibleTodos}
        onDeleteTodo={handleDeleteTodo}
        onToggleCompleted={handleToggleCompleted}
      />
      <Info
        total={all.length}
        completed={completedTodos}
      />
    </div>
  );
}

export default App;
