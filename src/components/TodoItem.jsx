import React from 'react';

function TodoItem({ todo, handleRemoveTodo }) {
  return (
    <div className="todo-item">
      <div className="todo-item-header">
        <input type="checkbox" id={todo.id} onClick={() => handleRemoveTodo(todo.id)} />
        <label htmlFor={todo.id} className="todo-title">{todo.title}</label>
       
      </div  >
      <p className="todo-description">{todo.description}</p>
    </div>
  );
}

export default TodoItem;
