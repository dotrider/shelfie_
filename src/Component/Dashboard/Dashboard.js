import React from 'react';
import Product from '../Product/Product';

const Dashboard = (props) => {

const mappedData = props.inventory.map(product => {
    return <Product key={product.id} product={product} deleteProduct={props.deleteProduct}/>
})
    return(
        <div>
            Dashboard
            {mappedData}
        </div>
    )
}

export default Dashboard