export type ListItem = {
        id : number,
        content : string,
}

export type ActionTypes = 
| {type : "ADD", id : number, content : string} 
| {type : "REMOVE", id : number, content : string}
| {type : "EDIT", id : number, content : string}
    