import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
/*
TODO : UTILIZE useReducer TO ADD THE APOPRIATE DISPATCHES,
TODO : UPLOAD TO GH WHEN AT A DECENT LEVEL
*/
import { useState, useReducer } from 'react';
const reducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            let newNode = { id: action.id, task: action.task, edit: action.edit, remove: action.remove };
            return ([
                ...state,
                newNode
            ]);
        case "EDIT":
            return ([
                ...state
            ]);
        case "REMOVE":
            return ([
                ...state
            ]);
    }
};
let defaultState;
const Body = () => {
    const [input, setInput] = useState("");
    const [state, dispatch] = useReducer(reducer, defaultState);
    const changeHandler = (e) => {
        setInput(e.target.value);
    };
    const submitHandler = () => {
        if (input) {
        }
    };
    return (_jsxs(_Fragment, { children: [_jsxs("div", { children: [_jsx("input", { type: "text", value: input, onChange: changeHandler }, void 0),
                    _jsx("div", { children: _jsx("button", Object.assign({ type: "button", onClick: () => dispatch({ type: "ADD", task: input, id: 1, edit: false, remove: false }) }, { children: " + " }), void 0) }, void 0)] }, void 0),
            _jsx("form", {}, void 0)] }, void 0));
};
export default Body;
