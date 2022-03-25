import Header from './components/Header'
import Form from './components/Form';
import React, { useState } from 'react';
import List from './components/list'

function App() {
  const [todos, setTodos] = useState([{id:0, todo:<i>example</i>}])

  // const CompleteHandler = (todoId) => {
  //   const index = todos.findIndex((emp) => emp.id === todoId)
  //   const newTodo = [...todos]

  //   newTodo[index] = {
  //     id: todos[index].id,
  //     title: todos[index].title,
  //     done: !todos[index].done,
  //   }

  //   setTodos(newTodo)
  // }

  return (
    <div className="App">
      <Header/>
      <Form setTodo={setTodos} Len={todos.length}/>
      <List todoList={todos} setTodo={setTodos}/>
    </div>
  );
}

export default App;
