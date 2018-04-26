import React, {Component} from 'react';
import Todo from './todo';
import './todoList.css';

class TodoList extends Component {
	constructor(props) {
		super(props);
		this.state = { 
			todos: [],
			newTodo: '',
		};
		this.handleInput = this.handleInput.bind(this);
		this.handleAddClick = this.handleAddClick.bind(this);
		this.deleteTodo = this.deleteTodo.bind(this);
	}

	handleInput(event) {
		this.setState({ newTodo: event.target.value });
	}

	handleAddClick(event) {
		event.preventDefault();
		this.state.todos.push(this.state.newTodo);
		this.setState({
			newTodo: '',
		});
	}

	deleteTodo(index) {
		this.state.todos.splice(index, 1);
		console.log(this.state.todos);
		this.setState({ todos: this.state.todos });
	}

	render() {
		const todos = this.state.todos.map((todo, i) => <li>{<Todo key={i} index={i} todo={todo} deleteTodo={this.deleteTodo} />}</li>);
		return (
			<div>
				<div className="inputBox">
				    <h1 className="header">My ToDos</h1>
					<input
					    className="valueInput"
						text='text'
						onChange={this.handleInput}
						placeholder='please add Todo here...'
						value={this.state.newTodo}
					/>
					<button className="addBtn" onClick={this.handleAddClick}>Add Todo</button>
				</div>
				<ul>{todos}</ul>
			</div>
		);
	}

    
}

export default TodoList;