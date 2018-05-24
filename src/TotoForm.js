import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TodoForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: this.props.title
        };
    }

    handleTodo(e) {
        this.setState({ title: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
    }

    render() {
        return (
            <form onSubmit={(e) => this.handleSubmit(e).bind(this)}>
                <input type="text" value={this.state.title} onChange={this.handleTodo.bind(this)}/>
                <input type="submit" value="submit"/>
            </form>
        );
    }
}
