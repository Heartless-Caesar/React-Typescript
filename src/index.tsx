import React from 'react';
import ReactDOM from 'react-dom';
import Body from './Body';

const App : React.FC = () => {
    return(
        <>
         <Body />
        </>
    )
}

ReactDOM.render(<App/>,document.getElementById('root'))