import './Catalog.css'
import React, { Component } from 'react';
import CardList from '../components/CardList'
import d1 from '../catalog/indoor/1.jpg'
import { d10, d11, d2, d3, d4, d5, d6, d7, d8, d9 } from '../catalog';

class Catalog extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            items :[
                {
                    id: 1,
                    img: d1,
                    price: 0
                },
                {
                    id: 2,
                    img: d2,
                    price: 0
                },
                {
                    id: 1,
                    img: d3,
                    price: 0
                },
                {
                    id: 1,
                    img: d4,
                    price: 0
                },
                {
                    id: 1,
                    img: d5,
                    price: 0
                },
                {
                    id: 1,
                    img: d6,
                    price: 0
                },
                {
                    id: 1,
                    img: d7,
                    price: 0
                },
                {
                    id: 1,
                    img: d8,
                    price: 0
                },
                {
                    id: 1,
                    img: d9,
                    price: 0
                },
                {
                    id: 1,
                    img: d10,
                    price: 0
                },
                {
                    id: 1,
                    img: d11,
                    price: 0
                },
            ]
        }
    }
    render() {
        return(
            <div className='catalog'>
                <img src='/1.jpg' alt="" />
                <CardList item = {this.state.items}/>
            </div>
        )
    }
}

export default Catalog;