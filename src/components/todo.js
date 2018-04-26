import React, {Component} from 'react';
import './todo.css';

class Todo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			completed: false,
		};
		this.handleClick = this.handleClick.bind(this);
		this.handleDeleteTodo = this.handleDeleteTodo.bind(this);
	}

	handleClick = () => {
		this.setState({ completed: !this.state.completed });
	}

	handleDeleteTodo = () => { 
		const index = this.props.index;
		this.props.deleteTodo(index);
	}

	

	render() {
		const style = this.state.completed ? {textDecoration: 'line-through'} : {textDecoration: 'none'};
		
		return(
			<div >
				<span className="list" style={style} onClick={this.handleClick}>
					<input id="checkBox" type="checkbox" checked={this.state.completed}/>
					<span className="todo">{this.props.todo}</span>
				</span>
				<button className="delete" onClick={this.handleDeleteTodo}>X</button>
			</div>
		);
	}
}

export default Todo;