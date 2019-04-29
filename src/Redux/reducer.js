import immutable from "immutable";
import Column from "./column";

var reducer = (state = immutable.Map(), action)=>{  
    switch(action.type){
        case "INIT": {
            return state.merge({
                columns: []
            });
        }
        case "ADD_ITEM":{
            return state.update("columns", (columns)=>{
                columns[action.index].items.push(action.text);
                return [...columns];
            })
        }
        case "ADD_COLUMN":{
            return state.update("columns", (columns)=> { return [...columns, new Column(columns.length)] });
        }
        case "SET_TITLE":{
            return state.update("columns", (columns)=> { 
                return columns.map((column, index)=>{
                    return index===action.index ? new Column(index, action.title) : column;
                })
            });
        }
        case "REMOVE_ITEM":{
            return state.update("columns", (columns)=>{
                columns[action.ColumnIndex].items = columns[action.ColumnIndex].items.filter((value, index)=>{
                    return index!==action.ItemIndex;
                });
                return [...columns];
            })
        }
        case "INSERT":{
            return state.update("columns", (columns)=>{
                var item = columns[action.SourceColumn.droppableId].items[action.SourceColumn.index];
                columns[action.SourceColumn.droppableId].items.splice(action.SourceColumn.index, 1);
                columns[action.DestinationColumn.droppableId].items.splice(action.DestinationColumn.index, 0, item); 
                return [...columns];
            })
        }
    }
    return state;
}

export default reducer;