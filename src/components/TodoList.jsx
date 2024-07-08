import React, { useState } from 'react';
import TodoItem from './TodoItem';

function TodoList() {
  const [inputValue, setInputValue] = useState('');
  const [textareavalue, setTexteareavalue] = useState('');
  const [todos, setTodos] = useState([
    { id: 1, title: 'Primeira Tarefa', description: 'Descrição primeira tarefa' },
    { id: 2, title: 'Segunda Tarefa', description: 'Descrição Segunda tarefa' },
    { id: 3, title: 'Terceira Tarefa', description: 'Descrição Terceira tarefa' },
  ]);

  function handleAddNewTodo(event) {
    event.preventDefault();
    setTodos((todos) => [
      ...todos,
      { id: todos.length + 1, title: inputValue, description: textareavalue },
    ]);
    setInputValue('');
    setTexteareavalue('');
  }

  function handleRemoveTodo(id) {
    const newTodoList = todos.filter((todo) => todo.id !== id);
    setTodos(newTodoList);
  }

  return (
    <div className="todo-list-form-container">
      <form onSubmit={handleAddNewTodo} className="todo-form">
        
        <div className="form-group">
          <label htmlFor="title">Título</label>
          <input
            id="title"
            type="text"
            placeholder="Digite o título"
            className="todo-input"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Descrição</label>
          <textarea
            id="description"
            placeholder="Digite a descrição"
            className="todo-textarea"
            value={textareavalue}
            onChange={(event) => setTexteareavalue(event.target.value)}
          />
        </div>
        <button type="submit">Adicionar</button>
      </form>
      <div className="todo-list-container">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} handleRemoveTodo={handleRemoveTodo} />
        ))}
      </div>
    </div>
  );
}

export default TodoList;
