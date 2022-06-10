import React from "react";
import MenuItem from "../menu-items/menu-item.component";

import './container.css'
class Container extends React.Component{
    constructor(){
        super();

        this.state = {
            section : [{
                title : 'HATS',
                imageURL : 'https://images.unsplash.com/photo-1523380744952-b7e00e6e2ffa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80',
                id : 1,
                link : 'shop/hats'
            },{
                title : 'JACKETS',
                imageURL : 'https://images.unsplash.com/photo-1551537482-f2075a1d41f2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80',
                id : 2,
                link : 'shop/jackets'
            },{
                title : 'SNEAKERS',
                imageURL : 'https://images.unsplash.com/photo-1512374382149-233c42b6a83b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=735&q=80',
                id : 3,
                link : 'shop/sneakers'
            },{
                title : 'WOMEN',
                imageURL : 'https://images.unsplash.com/photo-1569830692854-08567c072602?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=735&q=80',
                id : 4,
                size : 'large',
                link : 'shop/womens'
            },{
                title : 'MEN',
                imageURL : 'https://images.unsplash.com/photo-1507253831417-37c43a944f51?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80',
                id : 5,
                size : 'large',
                link : 'shop/mens'
            }
        ]
        }
    }
    render(){
        return(
            <div className="container">
                {this.state.section.map(({id, ...otherProps}) =>(
                    <MenuItem key={id} {...otherProps} />
                ))}
            </div>
        )
    }
}

export default Container;