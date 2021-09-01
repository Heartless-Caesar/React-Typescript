import React,{useContext, useState, useReducer} from 'react';
import userContext, {UserType} from './userContext';
import './index.css';

const ContextConsumer : React.FC = () => {
    const user = useContext(userContext); 
    
    return(
        <div>
            <p>Values : {user.map((e)=>{return(
                <>
                    <div>
                      {e.id}
                    </div>
                    <div>
                      {e.name}  
                    </div>
                </>)
              }
             )
            }
            </p>
        </div>
    )
}

const UseContextComponent = () => {
    const [user, setUser] = useState<UserType>([{
        id : 0,
        name : "Caesar"
    }])

    return(
        <userContext.Provider value={user}>
            <ContextConsumer />
            <button type="button" onClick={() => setUser([{
                "id" : 3,
                "name" : "jack"}
            ])}>Change</button>
        </userContext.Provider>
    )
}

export default UseContextComponent