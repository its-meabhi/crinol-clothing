import React from "react";

import { toogleCart } from "../../redux/action/cart";
import { useDispatch, useSelector } from "react-redux";
import {ReactComponent as ShopingIcon} from "../../images/shopping-bag.svg"
import './cart.style.css'

const CartIcon = () =>{
    const dispatch = useDispatch();
    const data = useSelector(state => state.cartReducer.cartItems)
    return(
        <div className="cart-icon" onClick={() => {
            dispatch(toogleCart())
        }  }>
            <ShopingIcon className="shopping-icon" />
            <span className="item-count"> {data.length} </span>
        </div>
    )
}

export default CartIcon