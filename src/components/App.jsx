import { Component } from "react"
import { ToDoList } from "./WorkList/ToDoList";
import { nanoid } from "nanoid";
import { TaskForm } from "./TaskForm/TaskForm";
import {Modal} from "./Modal/Modal";
import { Filter } from "./Filter/Filter";

export class App extends Component{
  state={
    showModal:false,
    toDos:[],
    fillter:''
  }
  changeFillter=(e)=>{
    this.setState({
      fillter:e.currentTarget.value
    })
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
  visibleToDos=()=>{
    return this.state.toDos.filter(toDo=>toDo.text.toLowerCase().includes(this.state.fillter.toLowerCase()))
  }
  render(){
    return (
      <>
        <TaskForm addToDo={this.addToDo}/>
        <Filter value={this.state.fillter} onChange={this.changeFillter}/>
        {this.state.toDos&&<ToDoList toDos={this.visibleToDos()} allToDos={this.state.toDos} onDelete={this.onDelete} toggleCompleted={this.toggleCompleted}/>}
        {this.state.showModal&&<Modal onClose={this.togggleModal}>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Dolor animi dolore quam impedit facilis, nemo natus accusamus officiis?</p>
        </Modal>}
      </>
    );
  }
};
