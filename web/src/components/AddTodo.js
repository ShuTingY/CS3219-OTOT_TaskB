import React, { Component } from 'react'
import 'semantic-ui-css/semantic.min.css';
import PropTypes from 'prop-types'
export class AddTodo extends Component {
    state = {
        title: '',
        description: ''
    }
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title, this.state.description);
        this.setState({title: '', description: ''});
    }

    onChange = (e) => this.setState(
        {[e.target.name]: e.target.value}
    );

   
    render() {
        return (
            <form onSubmit= {this.onSubmit} style= {{display: 'flex' }}>
              
                <input 
                type='text' 
                name='title' 
                style={{ flex:'10', padding: '5px'}}
                placeholder='Add Todo...'
                    value={this.state.title}
                    onChange={this.onChange}
                />
                <input 
                type='text' 
                name='description' 
                style={{ flex:'10', padding: '5px'}}
                placeholder='Description...(optional)'
                    value={this.state.description}
                    onChange={this.onChange}
                />
                <input 
                    type='submit'
                    value='submit'
                    className='btn'
                    style={{flex:1}}
                />
            </form>
        )
    }
}

AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired
};

export default AddTodo
