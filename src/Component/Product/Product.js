import React from 'react';

const Product = (props) => {
const {name, price, imageurl, id} = props.product
    return(
        <div>
            Products 
            <h4>Image Url: <img alt='product' src={imageurl}/></h4> 
            <h4>Product Name: {name}</h4> 
            <h4>Price: {price}</h4>
            <button onClick={()=>props.deleteProduct(id)}>Delete</button>
            <button>Edit</button>
        </div>
    )
}

export default Product