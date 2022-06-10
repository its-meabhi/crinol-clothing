
// Actions 

export const setUser = (user) =>{
    return (dispatch)=>{
        dispatch({
            type : "SET_AUTH_USER",
            payload : user
        })
    }
}

export const removeUser = (user) =>{
    return (dispatch)=>{
        dispatch({
            type : "REMOVE_AUTH_USER",
            payload : null
        })
    }
}


