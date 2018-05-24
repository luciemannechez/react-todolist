import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TodoItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isDone: this.props.todo.isDone
        };
    }

    handleIsDone(e) {
        this.setState({ isDone: e.target.checked });
    }

    render() {
        return (
            <li className={(this.state.isDone ? 'isChecked' : '')}>{this.props.todo.title.toUpperCase()} - <input type="checkbox" checked={this.state.isDone} onChange={this.handleIsDone.bind(this)} /></li>
        );
    }
}

TodoItem.propTypes = {
    todo: PropTypes.shape({
        title: PropTypes.string.isRequired,
        isDone: PropTypes.bool.isRequired
    })
};
