import React from "react";
import Item from "../item/item";
import { Droppable } from "react-beautiful-dnd";


class List extends React.Component{
    render(){
        return (
            <Droppable droppableId={ `list-${this.props.ColumnIndex}`}>
                {(droppableProvided) => (                    
                    <div className="list" ref={droppableProvided.innerRef}>
                        {
                            this.props.items.map((text, index)=>
                                <Item key={index} text={ text } id={index} ColumnIndex={ this.props.ColumnIndex } />
                            )
                        }                        
                        {droppableProvided.placeholder}
                    </div>
                )}
            </Droppable>          
        )
    }
}

export default List;