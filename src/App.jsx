import React from 'react';
import './App.css';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <div className="content-wrapper">
        <header>
          <h1>ToDoList</h1>
        </header>
        <main>
          <TodoList />
        </main>
      </div>
      <footer>
        <p>&copy; todos os direitos reservados</p>
      </footer>
    </div>
  );
}

export default App;
