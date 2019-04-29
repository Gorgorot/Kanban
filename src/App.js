import React from 'react';
import { connect } from "react-redux";
import Kanban from "./Components/kanban/kanban";
import { DragDropContext } from "react-beautiful-dnd";
import './App.css';
import './Libs/open-iconic-master/font/css/open-iconic-bootstrap.css';
import actions from "./Redux/actions";

class App extends React.Component{
  constructor(props){
    super(props);
    this.DragEndHandler = this.DragEndHandler.bind(this);
  }
  DragEndHandler(DragResult){
    if (!DragResult.destination) {
      return;
    }    
    this.props.InsertIntoColumn({
      droppableId: DragResult.source.droppableId.split("-")[1],
      index: DragResult.source.index
    }, {
      droppableId: DragResult.destination.droppableId.split("-")[1],
      index: DragResult.destination.index
    })
  }
  render(){    
    return (
      <div className="App">
      <DragDropContext onDragEnd={this.DragEndHandler}>
        {
          this.props.columns.map((column, index)=>
            <Kanban key={ index } { ...column } AddItem = { this.props.AddItem } SetTitle = { this.props.SetTitle } />
          )
        }    
        </DragDropContext>
        <div className="button-add" onClick = { this.props.AddColumn }>
          <span className="oi oi-plus"></span>
          <span>Добавить ещё одну колонку</span>
        </div>
      </div>
    );
  }
}

const PropsFromState = (state)=>{
  return{
    columns: state.get("columns")
  }
}

export default connect(PropsFromState, actions)(App);
