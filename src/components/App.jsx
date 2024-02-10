import { Component } from "react"
import { ToDoList } from "./WorkList/ToDoList";
import { nanoid } from "nanoid";
import { TaskForm } from "./TaskForm/TaskForm";
import {Modal} from "./Modal/Modal";

export class App extends Component{
  state={
    showModal:false,
    toDos:[]
  }
  componentDidMount(){
    const toDos=JSON.parse(localStorage.getItem('toDos'))
    this.setState({
      toDos:toDos
    })
  }
  addToDo=(text)=>{
    const newToDo={
      text:text,
      completed:false,
      id: nanoid()
    }
    this.setState((prevState)=>{
      return{
        toDos:[newToDo, ...prevState.toDos]
      }
    })
    console.log(this.state)
  }
  onDelete=(toDoId)=>{
    this.setState((prevState)=>{
      return{
        toDos: prevState.toDos.filter(toDo=>toDoId!==toDo.id)
      }
    })
  }
  toggleCompleted=(toDoId)=>{
    this.setState((prevState)=>{
      return{
        toDos: prevState.toDos.map(toDo=>
          toDo.id===toDoId?{...toDo, completed: !toDo.completed}: toDo)}
    })
  }
  componentDidUpdate(prevProps, prevState){
    if (prevState.todos !== this.state.toDos) {
      window.localStorage.setItem('toDos', JSON.stringify(this.state.toDos))
    }

  }
  togggleModal=()=>{
    this.setState(prev=>({showModal:!prev.showModal}))
  }
  render(){
    return (
      <>
        <TaskForm addToDo={this.addToDo}/>
        {this.state.toDos&&<ToDoList toDos={this.state.toDos} onDelete={this.onDelete} toggleCompleted={this.toggleCompleted}/>}
        {this.state.showModal&&<Modal>
          <p>abcdefghijklmnop</p>
          <button type='button' onClick={this.togggleModal}>Close</button>
        </Modal>}
        <button type='button' onClick={this.togggleModal}>Open</button>
      </>
    );
  }
};
