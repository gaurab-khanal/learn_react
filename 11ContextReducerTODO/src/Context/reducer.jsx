/* eslint-disable react-refresh/only-export-components */
import {ADD_TODO, REMOVE_TODO} from "./action.types"


export default (state, action) =>{
    console.log(action.type)
    switch (action.type) {
        case ADD_TODO:
            console.log(action.payload)
            return [...state, action.payload]
            
        case REMOVE_TODO:
            console.log(action.payload)

            return state.filter((todo)=>todo.id !== action.payload)
    
        default:
            return state;
    }
}