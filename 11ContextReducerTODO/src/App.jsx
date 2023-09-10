import { useReducer } from "react";
import {Container} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { TodoContext } from './Context/ToDoContext';
import todoReducer from "./Context/reducer";
import TodoForm from "./Components/TodoForm";
import Todos from "./Components/Todos";

const App = ()=>{
    const [todos, dispatch] = useReducer(todoReducer, [])
  return(
    <TodoContext.Provider value={{ todos, dispatch }}>
      <Container fluid className="d-flex flex-column min-vh-100">
        <h1 className="text-center">Todo APP with Context API</h1>
        <div className="mt-auto">
          <Todos/>
          <TodoForm />
        </div>
      </Container>
    </TodoContext.Provider>
  )
}

export default App;