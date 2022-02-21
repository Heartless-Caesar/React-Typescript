/*
TODO : IMPLEMENT AN EDIT FUNCTIONALITY -> TERNARY OPERATOR -> MAPPED IF EDIT FLASE, EDIT
WITH AN INPUT ELEMENT IF TRUE 
TODO : CHANGE ID TO NUMBER AND TEST THE TERNARY OPERATOR
*/

import React, { useState, useReducer } from 'react'
import reducer from './Reducer'
import { ListItem } from './interfaces'
import './index.css'

let defaultState: ListItem[] = [
  {
    id: 1,
    content: 'Tutorial note',
  },
]

const Body: React.FC = () => {
  const [input, setInput] = useState<string>('')
  const [editInput, setEditInput] = useState<string>('')
  const [edit, setEdit] = useState<number | null>(null)
  const [state, dispatch] = useReducer(reducer, defaultState)

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  return (
    <>
      <p id="header">Type some text</p>
      <div id="input-form">
        <input id="content-input" value={input} onChange={changeHandler} />
        <button
          id="add-button"
          type="button"
          onClick={() =>
            dispatch({
              type: 'ADD',
              id: new Date().getTime(),
              content: input,
            })
          }
        >
          Add
        </button>
      </div>
      {state.map((e) => {
        const { id, content } = e
        return (
          <article id="content-article" key={id}>
            {edit === id ? (
              <article id="editing-article">
                <input
                  id="edit-input"
                  type="text"
                  value={editInput}
                  onChange={(e) => setEditInput(e.target.value)}
                />
                <button
                  id="submit-edit-button"
                  type="button"
                  onClick={() => [
                    dispatch({
                      type: 'EDIT',
                      id: id,
                      content: editInput,
                    }),
                    setEdit(null),
                    setEditInput(''),
                  ]}
                >
                  Submit edit
                </button>
              </article>
            ) : (
              <>
                <div id="content-div">{content}</div>
                <button
                  id="remove-button"
                  type="button"
                  onClick={() =>
                    dispatch({
                      type: 'REMOVE',
                      id: id,
                      content: input,
                    })
                  }
                >
                  Delete
                </button>
                <button id="edit-button" type="button" onClick={() => setEdit(id)}>
                  Edit
                </button>
              </>
            )}
          </article>
        )
      })}
    </>
  )
}

export default Body
