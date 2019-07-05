import React, { Component } from 'react'
import Product from '../Product/Product'
import axios from 'axios';

export class Dashboard extends Component {
    deleteProduct = (id) => {
        axios.delete(`http://localhost:4200/api/inventory/${id}`)
        .then(() => this.props.getInventory())
        .catch(() => console.log(`Couldn't delete...`))
    }
    render() {
        return (
            <div>
                <Product inventory={this.props.inventory}
                deleteProduct ={this.deleteProduct}/>
            </div>
        )
    }
}

export default Dashboard
