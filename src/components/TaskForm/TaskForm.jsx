import { Component } from "react";

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
                <textarea name="goal" value={this.state.goal}
                onChange={this.onFormChange}
                />
                <button type="submit">CREATE</button>
            </form>
        )
    }
}