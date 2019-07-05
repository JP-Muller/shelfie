import React, { Component } from 'react'

export class Product extends Component {
    render() {
        let { inventory, deleteProduct, updateCurrentProductId } = this.props

        let inventoryDisplay = inventory.map((product, i) => {
            return (
                <div key={i} id='display-box'>
                    <div>
                        <img src={product.image} alt='Product Imagery' />
                    </div>
                    <div id='product-details'>
                        <p id='name'><b>{product.name}</b></p>

                        <p id='price'>$<i>{product.price}</i></p>
                    </div>
                    <div id='product-btns'>
                        <button id='product-edit-btn' onClick={() => updateCurrentProductId(product.id)}>Edit</button>
                        <button id='product-delete-btn' onClick={() => deleteProduct(product.id)}>Delete</button>
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
