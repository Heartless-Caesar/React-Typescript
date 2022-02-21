import React, { Reducer } from 'react'
import { ActionTypes, ListItem } from './interfaces'

const reducer: Reducer<ListItem[], ActionTypes> = (state, action) => {
  switch (action.type) {
    case 'ADD':
      if (action.content.length > 0) {
        const newItem: ListItem = { id: action.id, content: action.content }
        return [...state, newItem]
      }
      return [...state]
    case 'REMOVE':
      const filteredState = state.filter((e) => e.id !== action.id)
      return [...filteredState]
    case 'EDIT':
      if (action.content) {
        const updatedList = state.filter((e) => {
          if (e.id === action.id) {
            e.content = action.content
          }
          return e
        })
        return [...updatedList]
      }

      return [...state]
    default:
      return [...state]
  }
}

export default reducer
