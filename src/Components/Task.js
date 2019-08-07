import React, { Component } from 'react';

class Task extends Component {
    render() {
        const {task, remove} = this.props
        return (
            <div>
                <li>{task}</li>
                <button>Edit</button>
                <button onClick={remove}>X</button>
            </div>
        );
    }
}

export default Task;