import TodoItem from './TodoItem';

const TodoList = ({
  todos,
  deleteTodo,
  editTodo,
  editIndex,
  editValue,
  setEditValue,
  saveEdit,
}) => {
  return (
    <div className="w-full flex items-center justify-center">
      <ul className="w-full sm:w-1/2 h-96 p-4 overflow-y-scroll flex flex-col gap-3">
        {todos.map((todo, index) => (
          <TodoItem
            key={index}
            todo={todo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            index={index}
            editIndex={editIndex}
            editValue={editValue}
            setEditValue={setEditValue}
            saveEdit={saveEdit}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
