import { Component } from "react";
import { Btn, TextArea } from "./TaskForm.styled";

export class TaskForm extends Component{
    state={
        goal:''
    }
    onFormSubmit=(e)=>{
        e.preventDefault();
        this.props.addToDo(e.currentTarget.elements.goal.value)
    }
    onFormChange=(e)=>{
        this.setState({
            goal:e.currentTarget.value
        })
    }
    render(){
        return(
            <form onSubmit={this.onFormSubmit}>
                <TextArea name="goal" value={this.state.goal}
                onChange={this.onFormChange}
                />
                <Btn type="submit">CREATE</Btn>
            </form>
        )
    }
}