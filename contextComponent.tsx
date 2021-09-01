import { createContext } from "react"

const initialState = [
    {
    id : 1,
    name : "John",
    },{
    id : 2,
    name : "Caesar"
    }
];

const contextComponent = createContext<typeof initialState>(initialState)

export default contextComponent