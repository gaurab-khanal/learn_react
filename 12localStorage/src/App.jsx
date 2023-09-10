import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'


import Todos from "./Components/Todos";
import TodoForm from "./Components/TodoForm";
import { Container } from 'reactstrap';

const App = () =>{
  const [todos, setTodos] = useState([]);

  useEffect(()=>{
    const localTodos = localStorage.getItem("todos")
    console.log({localStorage});
    if(localTodos){
      setTodos(JSON.parse(localTodos))
    }
  },[]);

  const addTodos = async todo =>{
    setTodos([...todos, todo])
  }
  
  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])


  const removeTodo = (id)=>{
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return(
    <Container>
      <h1>Todo with local storage</h1>
      <Todos todos={todos} removeTodo={removeTodo}/>
      <TodoForm addTodos={addTodos}/>
    </Container>
  )
}

export default App
