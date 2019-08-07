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
        }));
    };

    updateTodo = (id, updatedTask) => {
        const updatedTodos = this.state.todos.map(todo => {
            if (todo.id === id) {
            return { ...todo, task: updatedTask };
          }
          return todo;
        });
        this.setState({ todos: updatedTodos });
    };

    toggleCompletion = (id) => {
        const updatedTodos = this.state.todos.map(todo => {
          if (todo.id === id) {
            return { ...todo, completed: !todo.completed };
          }
          return todo;
        });
        this.setState({ todos: updatedTodos });
    };

    render() {
        const todoList = this.state.todos.map(item => (
            <Task
                key={item.id}
                id={item.id}
                task={item.task}
                completed={item.completed}
                remove={() => this.removeTodo(item.id)}
                updateTodo={this.updateTodo}
                toggleCompletion={() => this.toggleCompletion(item.id)}
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