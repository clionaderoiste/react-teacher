/**
 * Created by deroistec on 13/07/17.
 */
import React from 'react';

class ClassListComponent extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return (
            <ul>
                {
                    this.props.classes.map(
                        (item, index)=>{
                            return <li key={index}>{item.name}</li>
                        }
                    )
                }

            </ul>
        );
    }
}

export default ClassListComponent;
