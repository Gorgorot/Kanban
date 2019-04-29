import React from "react";
import KanbanForm from "../kanban-form/kanban-form";
import List from "../list/list";
import "./style.css";
import ScrollArea from 'react-scrollbar';

class Kanban extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            edits: false
        }
        this.Add = this.Add.bind(this);
        this.Form = React.createRef();
    }
    Add(){
        this.setState({ edits: true });
    }
    render(){
        return(
            <div className="kanban">
            {
                !this.props.title ? <KanbanForm SetTitle = { this.props.SetTitle } ColumnIndex = { this.props.index } /> : 
                <div>
                    <span className="title"> { this.props.title } </span>
                    <ScrollArea
                        className="area"
                        contentStyle={{marginRight: "20px"}}
                        verticalScrollbarStyle={{borderRadius: 5}}
                        verticalContainerStyle={{background: "gray"}}
                        smoothScrolling= {true}
                        minScrollSize={40}
                        horizontal={false}
                        >
                        <List items = { this.props.items } ColumnIndex = { this.props.index }  AddItem = {this.props.AddItem} />

                    </ScrollArea>
                    {
                        this.state.edits ? <div >
                            <div>
                                <p>
                                    <textarea rows={3} placeholder="Введите название карточки" ref= { this.Form }></textarea>
                                </p>
                                <div className="flex-sb">
                                    <button onClick={ ()=> { this.props.AddItem(this.Form.current.value, this.props.index); this.setState({ edits: false }); } }>Добавить карточку</button>   
                                    <span className="oi oi-x" onClick = { ()=> this.setState({ edits: false })}></span>
                                </div>           
                            </div>
                        </div>
                        : <div className="button-add">
                            <div  onClick = { ()=> this.Add() }>
                                <span className="oi oi-plus"></span>
                                <span>Добавить ещё одну карточку</span>
                            </div>
                        </div>
                    }                    
                </div>
            }                
            </div>
        )
    }
}

export default Kanban;