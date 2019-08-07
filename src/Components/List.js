import React, { Component } from 'react';
import Task from './Task';
import NewTodoForm from './NewTodoForm';
import uuid from 'uuid/v4';

class List extends Component {
    state = {
        todos: []
    };

    addTodo = (newTodo) => {
        let newId = {...newTodo, id: uuid()};
        this.setState(prev => ({
            todos: [...prev.todos, newId]
        }))
    };

    removeTodo = (id) => {
        this.setState(prev => ({
            todos: prev.todos.filter(elem => elem.id !== id)
        }))
    }

    render() {
        const todoList = this.state.todos.map(item => (
            <Task
                key={item.id}
                id={item.id}
                task={item.task}
                remove={() => this.removeTodo(item.id)}
            />
        ));

        return (
            <div>
                <h1>Todo List:</h1>
                <NewTodoForm addTodo={this.addTodo}/>
                <ul>
                    {todoList}
                </ul>
            </div>
        );
    }
}

export default List;