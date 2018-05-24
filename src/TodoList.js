import React, { Component } from 'react';
import TodoItem from "./TodoItem";

export default class TodoList extends React.Component {
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
            </div>
        );
    }
}
