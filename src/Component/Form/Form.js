import React,{Component} from 'react'

export default class Form extends Component{
    constructor(){
        super();
        this.state = {
            name: '',
            price: 0,
            imgUrl: ''
        }
    }

    handleChange = (e) => {
        console.log(e.target.value)
        this.setState({
           [e.target.name]:e.target.value 
        })
    }

    handleReset = () => {
        this.setState({
            name: '',
            price: 0,
            imgUrl: ''
        })
    }


    render(){
        const{name, price, imgUrl} = this.state
        return(
            <section>
                Form
                <h3>Image Url:</h3>
                <input name='imgUrl' value={imgUrl} onChange={this.handleChange}/>
                <h3>Product Name:</h3>
                <input name='name' value={name} onChange={this.handleChange}/>
                <h3>Price:</h3>
                <input name='price' value={price} onChange={this.handleChange}/>

                <button onClick={this.handleReset}>Cancel</button>
                <button>Add to Inventory</button>
            </section>
        )
    }
}