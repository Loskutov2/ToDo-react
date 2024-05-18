import { ToDo } from "./ToDo";
import { Copmleted, List } from "./ToDo.styled";
export function ToDoList({toDos, allToDos, onDelete, toggleCompleted}){
    
    return(
        <List>
            <Copmleted>{allToDos.filter(toDo=>toDo.completed).length}/{allToDos.length} Completed</Copmleted>
            {toDos.map((toDo)=>(
                <ToDo
                    text={toDo.text}
                    completed={toDo.completed}
                    key={toDo.id}
                    onDelete={onDelete}
                    toggleCompleted={toggleCompleted}
                    id={toDo.id}
                />
            ))}
        </List>
    )
}