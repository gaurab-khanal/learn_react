import { useContext, useState } from "react";
import {
    FormGroup,
    Input,
    Button,
    Form,
    InputGroup,
    InputGroupText, // Import InputGroupText
    Container,
  } from "reactstrap";

import {v4} from "uuid";
import { TodoContext } from "../Context/ToDoContext";
import { ADD_TODO } from './../Context/action.types';

const TodoForm = ()=>{


    const [todoString, setTodoString] = useState("");
        const {dispatch} = useContext(TodoContext);

        const handleSubmit = e =>{
            e.preventDefault();
            if(todoString == ""){
                return alert("Please a Todo");
            }
            const todo = {
                todoString,
                id: v4()
            }

            dispatch({
                type: ADD_TODO,
                payload: todo
            })

            setTodoString("");
        }

    return(

        

        <>
            
    <Container className="d-flex justify-content-center align-items h-100">
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <InputGroup>
            <Input
              type="text"
              name="todo"
              id="todo"
              placeholder="Your next TODO"
              value={todoString}
              onChange={e => setTodoString(e.target.value)}


            />
            <InputGroupText addonType="prepend">
              <Button color="warning">
                Add
              </Button>
            </InputGroupText>
          </InputGroup>
        </FormGroup>
      </Form>
    </Container>

        </>
    )

}

export default TodoForm;
