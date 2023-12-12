import React, { Component } from "react";
import './CardList.css'

export class CardList extends Component{
    render() {
        return(
            <div className="doorlist">
                {this.props.item.map(el => (
                    <img src={el.img} alt="" className="img-of-door"/>
                ))}
            </div>
        )
    }
}

export default CardList;