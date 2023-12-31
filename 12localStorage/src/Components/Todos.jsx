import {ListGroup, ListGroupItem} from  "reactstrap"
import {FaCheckDouble} from "react-icons/fa"

const Todos = ({todos, removeTodo})=>{

    return(
        <ListGroup className="mt-5 mb-2 items ">
            {todos.map((todo)=>{
                return <ListGroupItem key={todo.id}>
                    {todo.todoString}
                    <span  style={{ float: "right" }}
                    onClick={()=> removeTodo(todo.id)}
                    ><FaCheckDouble/></span>
                </ListGroupItem>
            })}
        </ListGroup>

        
    )
}

export default Todos