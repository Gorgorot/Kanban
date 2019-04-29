import React from "react";

export default class KanbanForm extends React.Component{
    constructor(props){
        super(props);
        this.Add = this.Add.bind(this);
        this.state = {
            title: ""
        }
    }

    Add(){
        this.props.SetTitle(this.state.title, this.props.ColumnIndex);
    }

    render(){
        return(
            <div>
                <p>
                    <input type="text" placeholder="Введите название колонки" value={ this.state.title } onChange = { (e)=> this.setState({ title: e.target.value }) }/>
                </p>
                <button onClick = { this.Add } disabled = { this.state.title.length>0 ? false : true }>Добавить колонку</button>              
            </div>
        )
    }
}