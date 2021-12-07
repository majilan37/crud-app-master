export default (state, action) => {
    console.log(action);
    switch(action.type){
        case 'REMOVE_USER':
            return {
                users: state.users.filter((user) => user.id !== action.payload)
            }

        case 'ADD_USER':
            return {
                // users: state.users.push({
                //     id: Date.now(),
                //     name: action.payload
                // })
                ...state,
                users : [...state.users, action.payload]
            }

        case 'EDIT_USER':
            let updateUser = action.payload
            let updateUsers = state.users.map((user) => {
                if(user.id === updateUser.id){
                    return updateUser
                } 

                return user
            })
            return {
                users: updateUsers
            }

        default:
            return state
    }
}