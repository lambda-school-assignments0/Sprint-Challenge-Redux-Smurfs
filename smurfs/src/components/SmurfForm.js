import React, { Component } from 'react';

const initialState = {
    name: '',
    age: '',
    height: ''
}

export default class SmurfForm extends Component {
    constructor(props) {
        super(props)

        this.state = initialState;
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleAddSmurf = e => {
        e.preventDefault();
        this.props.addSmurfs(this.state);
    }

    render() {
        return (
            <form className='smurf-form' onSubmit={this.handleAddSmurf}>
                <input
                    type='text'
                    name='name'
                    placeholder='name...'
                    onChange={this.handleChange}
                />
                <input
                    type='text'
                    name='age'
                    placeholder='age...'
                    onChange={this.handleChange}
                />
                <input
                    type='text'
                    name='height'
                    placeholder='height...'
                    onChange={this.handleChange}
                />
                <button>Submit</button>
            </form>
        )
    }
}