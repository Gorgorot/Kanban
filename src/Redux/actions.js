const AddItem = (text, index)=>{
    return {
        type: "ADD_ITEM",
        text,
        index
    }
}

const AddColumn = ()=>{
    return {
        type: "ADD_COLUMN"
    }
}

const SetTitle = (title, index)=>{
    return {
        type: "SET_TITLE",
        title,
        index
    }
}

const RemoveItem = (ColumnIndex, ItemIndex)=>{
    return {
        type: "REMOVE_ITEM",
        ColumnIndex,
        ItemIndex
    }
}

const InsertIntoColumn = (SourceColumn, DestinationColumn) => {
    return {
        type: "INSERT",
        SourceColumn,
        DestinationColumn
    }
}

export default { AddItem, AddColumn, SetTitle, RemoveItem, InsertIntoColumn };