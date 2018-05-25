import React, { Component } from 'react';
import TodoItem from "./TodoItem";
import PropTypes from 'prop-types';
import TodoForm from "./TodoForm";

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

        const todoItems = items.map((todo) =>
            <TodoItem key={todo.id} todo={todo}></TodoItem>
        );
        return (
            <div>
                <ul>{todoItems}</ul>
                <TodoForm items={items}/>
            </div>
        );
    }
}


TodoItem.propTypes = {
    items: PropTypes.array
};
