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
                <div>
                    <form onSubmit={this.handleUpdate}>
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
                <div>
                    <li
                        className={this.props.completed ? "completed" : ""}
                        onClick={toggleCompletion}
                    >{task}</li>
                    <button onClick={this.toggleForm}>Edit</button>
                    <button onClick={remove}>X</button>
                </div>
            )
        }
        return (
            result
        );
    }
}

export default Task;