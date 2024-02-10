export function ToDo({text, completed, onDelete, toggleCompleted, id}){
    return(
        <li>
            <input type="checkbox" name="" id="" checked={completed} onChange={()=>{toggleCompleted(id)}}/>
            <p>{text}</p>
            <button type='button' onClick={()=>{onDelete(id)}}>DELETE</button>
        </li>
    )
}