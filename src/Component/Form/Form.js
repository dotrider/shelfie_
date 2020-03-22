import React,{Component} from 'react'

export default class Form extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            price: 0,
            imageurl: ''
        }
    }



    handleChange = (e) => {
        console.log('handleChange',e.target.value)
        this.setState({
           [e.target.name]:e.target.value 
        })
    }

    handleReset = () => {
        this.setState({
            name: '',
            price: 0,
            imageurl: ''
        })
    }


    addProduct = () => {
        const {name, price, imageurl} = this.state

        let newProduct = {
            name,
            price,
            imageurl
        }

    this.props.postProduct(newProduct)
        this.setState({
            name: '',
            price: 0,
            imageurl: ''
        })

    }
//Working on this fuction
    updateProduct = (id) => {
        const {name, price, imageurl} = this.state;

        let updatedProduct = {
            name,
            price,
            imageurl
        }
    this.props.editProduct(id ,updatedProduct)    

    }   


    render(){
        const{name, price, imageurl} = this.state
        return(
            <section>
                Form
                <h3>Image Url:</h3>
                <input name='imageurl' value={imageurl} onChange={this.handleChange}/>
                <h3>Product Name:</h3>
                <input name='name' value={name} onChange={this.handleChange}/>
                <h3>Price:</h3>
                <input name='price' value={price} onChange={this.handleChange}/>

                <button onClick={this.handleReset}>Cancel</button>
                <button onClick={this.addProduct}>Add to Inventory</button>
            </section>
        )
    }
}