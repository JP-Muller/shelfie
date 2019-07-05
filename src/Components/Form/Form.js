import React, { Component } from 'react'
import axios from 'axios';

export class Form extends Component {
    constructor(props){
        super(props)
        this.state ={
            image: 'https://getuikit.com/v2/docs/images/placeholder_600x400.svg',
            name: '',
            price: 0,

        }
    }
    addProduct = () => {
    let {name, price, image} = this.state
    axios.post('http://localhost:4200/api/product', {'name': name, 'price': price, 'image': image})
    .then(() => this.props.getInventory() )
    .catch(() => console.log(`Couldn't add product...`))
    }

    handleImage = (image) => {
        console.log(`Image State: ${image}`)
        this.setState({
            image
        })
    }

    handleName = (name) => {
        console.log(`Name State: ${name}`)
        this.setState({
            name
        })
    }
    handlePrice = (price) => {
        console.log(`Price State: ${price}`)
        this.setState({
            price
        })
    }
    handleCancel = () => {
        this.setState({
            image: '',
            name: '',
            price: 0
        })
    }

    render() {
        return (
            <div id='form-container'>
                <div id='form-img'>
                    <img src={this.state.image} alt='Preview Imagery'/>
                </div>
               <form action='' id='form-inputs'>
                   <p>Image URL:</p>
                   <input type='text' onChange={ (e) => this.handleImage(e.target.value)} />
                   <p>Product Name:</p>
                   <input type='text' onChange={ (e) => this.handleName(e.target.value)} />
                   <p>Price:</p>
                   <input type='number' step='0.01' onChange={ (e) => this.handlePrice(e.target.value)} />
                   <div id='form-btns'>
                       <button id='form-cancel-btn' onClick={ () => this.handleCancel()}>Cancel</button>
                       {
                       <button id='form-add-btn' onClick={() => this.addProduct()}>Add to Inventory</button>
                       }
                   </div>
                </form> 
            </div>
        )
    }
}

export default Form
