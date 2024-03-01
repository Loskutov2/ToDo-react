import { DelBtn, ListItem } from "./ToDo.styled"

export function ToDo({text, completed, onDelete, toggleCompleted, id}){
    return(
        <ListItem>
            <input type="checkbox" name="" id="" checked={completed} onChange={()=>{toggleCompleted(id)}}/>
            <p>{text}</p>
            <DelBtn type='button' onClick={()=>{onDelete(id)}}>DELETE</DelBtn>
        </ListItem>
    )
}