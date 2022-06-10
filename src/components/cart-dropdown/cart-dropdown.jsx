import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import CartItem from "../cart-items/cart-item.component";

import CustomButton from '../custombutton/Custombutton.component'

import './cart.style.css'

function CartDropdown() {
    const data = useSelector(state => state.cartReducer.cartItems)
    const history = useHistory();
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                    data.length 
                    ?
                    <>
                    {data.map(items =>{
                        return <CartItem key={items.id} item={items} />
                    })}
                    </>
                    :
                    <p className="CartEmpty">Your Cart is Empty</p>
                }
            </div>
            <CustomButton onClick={() => history.push("/checkout")} >GO TO CHECKOUT</CustomButton>
        </div>
    )
}

export default CartDropdown
