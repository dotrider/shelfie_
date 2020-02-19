import React from 'react';

const Product = (props) => {
const {name, price, imgUrl} = props.products
    return(
        <div>
            Products 
            {name}
            {price}
            {imgUrl}
        </div>
    )
}

export default Product