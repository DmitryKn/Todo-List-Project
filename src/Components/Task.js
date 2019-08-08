import React, { Component } from 'react';

class Task extends Component {
    state = {
        isEditing: false,
        task: this.props.task
    };

    toggleForm = () => {
        this.setState({
            isEditing: !this.state.isEditing
        })
    };

    handleUpdate = (e) => {
        e.preventDefault();
        this.props.updateTodo(this.props.id, this.state.task);
        this.setState({ isEditing: false });
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };
    render() {
        const {task, remove, toggleCompletion} = this.props;
        let result;
        if(this.state.isEditing) {
            result = (
                <div className="Todo">
                    <form className="Todo-edit-form" onSubmit={this.handleUpdate}>
                        <input
                            type="text"
                            value={this.state.task}
                            name="task"
                            onChange={this.handleChange}
                            />
                        <button>Save</button>
                    </form>
                </div>
            )
        } else {
            result = (
                <div className="Todo">
                    <li
                        className={this.props.completed ? "Todo-task completed" : "Todo-task"}
                        onClick={toggleCompletion}
                    >{task}</li>
                    <div className="Todo-buttons">
                        <button onClick={this.toggleForm}><i className='fas fa-pen' /></button>
                        <button onClick={remove}><i className='fas fa-trash' /></button>
                    </div>
                </div>
            )
        }
        return (
            result
        );
    }
}

export default Task;