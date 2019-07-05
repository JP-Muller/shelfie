import React, { Component } from 'react'

export class Product extends Component {
    render() {
        let {inventory, deleteProduct} = this.props

        let inventoryDisplay = inventory.map((product, i) => {
            return (
                <div key={i}id='display-box'>
                    <div>
                        <img src={product.image} alt='Product Imagery'/>
                    </div>
                    <div id='product-details'>
                            <p id='name'>{product.name}</p>
                            <p id='price'>${product.price}</p>
                    </div>
                    <div id='product-btns'>
                        <button>Edit</button>
                        <button onClick={() => deleteProduct(product.id)}>Delete</button>
                    </div>
                </div>
            )
        })
        return (
            <div>
                {inventoryDisplay}
            </div>
        )
    }
}

export default Product
