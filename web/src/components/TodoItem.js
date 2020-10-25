import React, { Component } from 'react';
import { Segment, Button, Item, Checkbox, Grid } from 'semantic-ui-react'
import PropTypes from 'prop-types';

//rec TAB
export class TodoItem extends Component {
    render() {
        const {id, title, description, isCompleted, createdAt} = this.props.todo;
        return (
            <Segment color={isCompleted? 'green' :'yellow'}>
                
                <Grid columns={3}>
                  <Grid.Row>
                    <Grid.Column width={1}>
                      <Checkbox
                      onChange={this.props.markComplete.bind(this, id)}
                      checked={isCompleted}
                      />
                    </Grid.Column>
                    <Grid.Column width={12}>
                    <Item.Group>
                    <Item>
                
                    <Item.Content>
                      <Item.Header 
                      style={{textDecoration: isCompleted ?'line-through' : 'none'}}
                      content={title}/>
                    
                      <Item.Meta style={{textDecoration: isCompleted ?'line-through' : 'none'}}
                      >Create at {new Date(createdAt).toLocaleDateString()}</Item.Meta>
                      {description 
                      ? <Item.Description style={{textDecoration: isCompleted ?'line-through' : 'none'}}> 
                        
                      Additional notes: <br/> {description} </Item.Description>
                      : null
                      } 
                      </Item.Content>
                      </Item>
                    </Item.Group>
                    </Grid.Column>
                    <Grid.Column width={3}>
                      <Button.Group icon attached='right'  floated='right'>
                          <Button basic color='green'
                                  icon='edit' 
                                  attached='right' />

                          <Button basic color='red' 
                                  icon='delete' 
                                  attached='right'
                                  onClick={this.props.delTodo.bind(this,id)}
                                  /> 
                      </Button.Group>
                    </Grid.Column>
                  </Grid.Row>
                  </Grid>
                  
                
                  
                 
                  
            </Segment>
        )
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
};

const btnStyle = {
    background:'#ff0000',
    color: "#fff",
    border: 'none',
    padding: '5px 9px',
    cursor: 'pointer',
    float: 'right'

}



export default TodoItem
