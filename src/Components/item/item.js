import React from "react";
import { Draggable } from "react-beautiful-dnd";


class Item extends React.Component{
    StyleHandle(style, snapshot){   
        if(snapshot.isDragging && snapshot.draggingOver){    
            return{
                ...style,
                background: "lightgreen"
            }
        }      
        if (snapshot.isDropAnimating) {          
            const { moveTo, duration } = snapshot.dropAnimation;
            const translate = `translate(${moveTo.x}px, ${moveTo.y}px)`;
            return {
                ...style,
                transform: translate,
                transition: `transform ${"ease-in-out"} ${duration + 0.4}s`,
            };
        }
        return {
            ...style
        }
    }
    render(){
        return(
            <Draggable draggableId={ `item-${this.props.id}-${this.props.ColumnIndex}` } index={ this.props.id }>
                { (draggableProvided, draggableSnapshot) => (
                <div className="item" 
                    ref={draggableProvided.innerRef}
                    { ...draggableProvided.draggableProps }
                    { ...draggableProvided.dragHandleProps }
                    style={ this.StyleHandle(draggableProvided.draggableProps.style, draggableSnapshot) }
                >
                    <span>{ this.props.text }</span>
                </div>
                )}
            </Draggable>
        )
    }
}

export default Item;