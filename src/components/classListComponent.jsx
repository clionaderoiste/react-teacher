/**
 * Created by deroistec on 13/07/17.
 */
import React from 'react';
import {ListGroup} from 'react-bootstrap';
import {ListGroupItem} from 'react-bootstrap';

class ClassListComponent extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return (
            <ListGroup>
                {
                    this.props.classes.map(
                        (item, index)=>{
                            return <ListGroupItem key={index}>{item.name}</ListGroupItem>
                        }
                    )
                }

            </ListGroup>
        );
    }
}

export default ClassListComponent;
