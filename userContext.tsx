import { createContext } from "react"

const initialState : {id : number, name : string}[]= [
    {
    "id" : 1,
    "name" : "John",
    },
];


const userContext = createContext<typeof initialState>(initialState)

export default userContext
export type UserType = typeof initialState