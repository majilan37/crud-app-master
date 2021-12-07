import {createContext, useReducer} from 'react'
import AppReducer from './AppReducer'

const initialState = {
    users: [
        {id: 1, name:'User One'},
        {id: 2, name:'User Tow'},
        {id: 3, name:'User Tree'},
    ],
}

export const StateContext = createContext(initialState)


export default function StateProvider({children}) {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    // actions 
    const removeUser = (id) => {
        dispatch({
            type: 'REMOVE_USER',
            payload: id
        })
    }

    const addUser = (user) => {
        dispatch({
            type: 'ADD_USER',
            payload: user
        })
    }

    const editUser = (user) => {
        dispatch({
            type: 'EDIT_USER',
            payload: user
        })
    }

    return (
        <StateContext.Provider value={{
            users: state.users,
            removeUser,
            addUser,
            editUser
        }}>
            {children}
        </StateContext.Provider>
    )
}

