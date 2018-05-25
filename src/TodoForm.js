import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TodoList from "./TodoList";

export default class TodoForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            item: {
                title: '',
                isDone: false
            },
            todo: []
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleTodo(e) {
        this.setState({item : {
            title: e.target.value,
            isDone: false
        }});
    }

    handleSubmit(e) {
        this.addItem();

        console.log(this.state.todo);

        e.preventDefault();
    }

    addItem() {
        const items = this.state.todo;
        items.unshift(this.state.item);

        this.setState({
            todo: items
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <label>Add todo :
                        <input type="text" value={this.state.title} onChange={this.handleTodo.bind(this)}/>
                    </label>
                    <input type="submit" value="submit"/>
                </form>
            </div>
        );
    }
}
