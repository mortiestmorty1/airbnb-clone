import React from "react";
import "../App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
function Card(props){
    let badgespot
    if(props.item.spots === 0)
    {
        badgespot = "Sold Out"
    }
    else if(props.item.spots != 0)
    {
        badgespot = "Available"
    }
    return(
        <div className="product">
            <div className="badge">
                {badgespot}
            </div>
            <img src={props.item.img} className="ali" />
            <div className="product-info">
                <span >
                <FontAwesomeIcon icon={faStar} />
                </span>
                <span >
                  {props.item.rating1}
                </span> 
                <span >
                {props.item.rating2}
                </span>
                 <span>
                    {props.item.place}
                 </span>
            </div>
            <p>
                {props.item.paragraph}
            </p>
            <div className="pricing">
                <span className="dollar" >
                    From ${props.item.price}
                </span>
                <span>
                    /person
                </span>
            </div>
        </div>
    )
}

export default Card;