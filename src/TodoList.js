import React, { Component } from 'react';
import TodoItem from "./TodoItem";
import PropTypes from 'prop-types';

export default class TodoList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const items = [
            {
                id: 1,
                title : 'Send a mail',
                isDone: true
            },
            {
                id: 2,
                title: 'Learn React',
                isDone: false
            },
            {
                id: 3,
                title: 'Create a Todo List',
                isDone: false
            },
            {
                id: 4,
                title: 'Master React',
                isDone: false
            }
        ];

        //if (this.props.todo.length > 0)
            const array = this.props.todo.concat(items);

        console.log(array);

        const todoItems = array.map((todo, index) =>
            <TodoItem key={index} todo={todo}></TodoItem>
        );
        return (
            <div>
                <ul>{todoItems}</ul>
            </div>
        );
    }
}


TodoItem.propTypes = {
    items: PropTypes.array
};
