import React from 'react';
import Product from '../Product/Product';

const Dashboard = (props) => {

const mappedData = props.inventory.map(products => {
    return <Product products={products}/>
})
    return(
        <div>
            Dashboard
            {mappedData}
        </div>
    )
}

export default Dashboard