import { useState } from 'react';
import Header from './components/Header';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState('');

  // Add new Todo
  const addTodo = (newTodo) => {
    setTodos((prevTodo) => [...prevTodo, newTodo]);
  };

  // Delete Todo
  const deleteTodo = (indexToDelete) => {
    setTodos((prevTodos) =>
      prevTodos.filter((_, index) => index !== indexToDelete)
    );
  };

  // Edit Todo
  const editTodo = (indexToEdit) => {
    setEditIndex(indexToEdit);
    setEditValue(todos[indexToEdit]);
  };

  const saveEdit = () => {
    if (editValue.trim() === '') return; // Avoid empty todos
    setTodos((prevTodos) =>
      prevTodos.map((todo, index) => (index === editIndex ? editValue : todo))
    );
    setEditIndex(null);
    setEditValue('');
  };

  return (
    <main>
      <Header />
      <section className="max-w-7xl mx-auto my-8">
        <TodoForm onAdd={addTodo} />
      </section>
      <section className="max-w-7xl mx-auto py-2">
        <TodoList
          todos={todos}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
          editIndex={editIndex}
          editValue={editValue}
          setEditValue={setEditValue}
          saveEdit={saveEdit}
        />
      </section>
    </main>
  );
}

export default App;
