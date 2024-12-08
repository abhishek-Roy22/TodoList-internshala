import { CheckCircle2, Edit2, Save, Trash2 } from 'lucide-react';
import React, { useState } from 'react';

const TodoItem = ({
  todo,
  deleteTodo,
  index,
  editTodo,
  editIndex,
  editValue,
  setEditValue,
  saveEdit,
}) => {
  const [check, setCheck] = useState(false);

  return (
    <div className="flex items-center justify-between w-full shadow-md border-b-2 border-green-500 py-4 px-2 rounded-md">
      {editIndex === index ? (
        <input
          type="text"
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
          className="border-2 border-gray-300 rounded-md px-2 py-1 w-full sm:w-2/3"
        />
      ) : (
        <h3 className={`font-bold ${check && 'line-through opacity-75'}`}>
          {todo}
        </h3>
      )}

      <div className="flex items-center gap-2">
        <CheckCircle2
          onClick={() => setCheck(!check)}
          className="cursor-pointer"
        />

        {editIndex === index ? (
          <Save className="cursor-pointer" onClick={() => saveEdit()} />
        ) : (
          <Edit2
            color="green"
            className="cursor-pointer"
            onClick={() => editTodo(index)}
          />
        )}

        <Trash2
          color="red"
          className="cursor-pointer"
          onClick={() => deleteTodo(index)}
        />
      </div>
    </div>
  );
};

export default TodoItem;
