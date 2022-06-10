import React from "react";

import './header.style.css'
import { auth } from "../../firebase/firebase.utils"
import { Link, useHistory  } from "react-router-dom";
import NavLogo from '../../images/logo.png'
import CartIcon from "../cart-icon/cart.component";
import CartDropdown from "../cart-dropdown/cart-dropdown";
import { useSelector, useDispatch } from "react-redux";
import { removeUser } from "../../redux/action/actions";
const Header = () =>{
    const NavToogle = () =>{
        document.getElementById('navBar').classList.toggle('option-active')
        document.querySelector('.header').classList.toggle('bg-color')
    }
    const userState = useSelector(state => state.authReducer);
    const history = useHistory()
    const CartState = useSelector(state => state.cartReducer)
    const dispatch = useDispatch();
    return(
        <div className="header">
            <Link to="/"><img className="header-img" src={NavLogo} alt="header-img" /></Link>
            <div className="options" id="navBar">
            <Link className="option" onClick={NavToogle} to="/shop">Shop</Link>
            {
                userState.user ?
                <div className="option" onClick={() => {
                    auth.signOut()
                    dispatch(removeUser(null))
                    history.push('/')
                    NavToogle()
                }}>Sign Out</div>
                :
                <Link className="option" onClick={NavToogle} to="/signin">SignIn</Link>
            }
            <CartIcon />
            </div>
            <div className="menu-bar"  onClick={NavToogle}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            {
                CartState.hidden ? null : <CartDropdown />
            }
        </div>
    )
}


export default Header;