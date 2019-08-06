import React, { Component } from 'react';

class Task extends Component {
    render() {
        const {task} = this.props
        return (
            <div>
                <li>{task}</li>
                <button>Edit</button>
                <button>X</button>
            </div>
        );
    }
}

export default Task;