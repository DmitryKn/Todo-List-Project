import React, { Component } from 'react';

class NewTodoForm extends Component {
    state = {
        task: ""
    };

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    };

    handleSubmit = (e) => {
        e.preventDefault();
        if(this.state.task !== "") {
            this.props.addTodo({...this.state, completed: false});
        }
        this.setState({ task: "" });
    };

    render() {
        return (
            <div>
                <form className="NewTodoForm" onSubmit = {this.handleSubmit}>
                    <label htmlFor="task">New Todo: </label>
                    <input
                        id="task"
                        name="task"
                        type="text"
                        value={this.state.task}
                        onChange={this.handleChange}
                    />
                    <button>Add Todo</button>
                </form>
            </div>
        );
    }
}

export default NewTodoForm;