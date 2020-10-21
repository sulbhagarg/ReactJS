import React from 'react';
import './App.css';
// importing components
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Sulbha's Todo List :P</h1>
      </header>
      <Form />
      <TodoList />
    </div>
  );
}

export default App;
