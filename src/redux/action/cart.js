export const toogleCart = () =>{
    return (dispatch) =>{
        dispatch({
            type : "TOOGLE_CART"
        })
    }
}


export const addtoCart = (items)=>{
    return (dispatch) =>{
        dispatch({
            type : "ADD_TO_CART",
            payload : items
        })
    }
}

export const decreaseCart = (items)=>{
    return (dispatch) =>{
        dispatch({
            type : "DECREASE_CART_QUANTITY",
            payload : items
        })
    }
}


export const removeItem = (items)=>{
    return (dispatch) =>{
        dispatch({
            type : "REMOVE_FROM_CART",
            payload : items
        })
    }
}

export const emptyCart = () =>{
    return (dispatch) =>{
        dispatch({
            type : "EMPTY_CART"
        })
    }
}