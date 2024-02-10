import { ToDo } from "./ToDo";
export function ToDoList({toDos, onDelete, toggleCompleted}){
    return(
        <ul>
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
        </ul>
    )
}