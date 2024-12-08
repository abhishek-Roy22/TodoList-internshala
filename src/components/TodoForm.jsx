import React, { useState } from 'react';

const TodoForm = ({ onAdd }) => {
  const [item, setItem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (item.trim() === '') return;
    onAdd(item);
    setItem('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full flex flex-col sm:flex-row items-center justify-center gap-3"
    >
      <input
        type="text"
        value={item}
        onChange={(e) => setItem(e.target.value)}
        placeholder="Add Item..."
        required
        aria-label="Add new todo item"
        className="w-full sm:w-2/3 border-2 border-green-700 outline-none px-3 py-3 rounded-md font-bold caret-green-700"
      />
      <button
        type="submit"
        className="bg-green-700 text-white border-none rounded-md p-3 cursor-pointer w-full sm:w-28 font-bold shadow-sm hover:bg-green-800"
      >
        Add
      </button>
    </form>
  );
};

export default TodoForm;
