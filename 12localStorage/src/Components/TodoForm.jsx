import { useState } from "react";
import {
    FormGroup,
    Input,
    InputGroup,
    InputGroupText,
    Button,
    Form,
    Container
} from "reactstrap"
import { v4 } from "uuid";

const TodoForm = ({addTodos}) =>{

    const [todoString, setTodoString] = useState("");

    const handleSubmit = e=>{
        e.preventDefault();
        if(todoString == ""){
            return alert("Please fill some value");
        }

        const todo = {
            todoString,
            id: v4()
        }
        addTodos(todo);
        setTodoString("");
    }

    return(
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
    )
}

export default TodoForm;