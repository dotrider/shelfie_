import React,{Component} from 'react';
import axios from 'axios';
import Header from './Component/Header/Header';
import Dashboard from './Component/Dashboard/Dashboard';
import Form from './Component/Form/Form';
import './App.css';



export default class App extends Component{
    constructor(){
        super();
        this.state = {
          inventory: []
        }
    }

      componentDidMount(){
      this.getInventory()
    }

    getInventory = () => {
      axios.get(`/api/inventory`).then( res => {
        console.log('getProducts',res.data)
        this.setState({
          inventory: res.data
        })
      })
    }

    componentDidUpdate(prevProps, prevState){
      if(prevState.inventory !== this.state.inventory){
        this.getInventory()
      }
    }

    postProduct = (product) => {
      axios.post(`/api/inventory`, product).then( res => {
        this.setState({
          inventory: res.data
        })
      })
    }

    editProduct = (id, updatedProduct) => {
      axios.put(`/api/inventory/${id}`, updatedProduct).then(res => {
        console.log('editProduct', res.data)
        this.setState({
          inventory: res.data
        })
      })
    }


    deleteProduct = (id) => {
      console.log('deleteProduct',this.deleteProduct)
      axios.delete(`/api/inventory/${id}`).then(res => {
        this.setState({
          inventory: res.data
        })
      })
    }


    render(){
      // console.log(this.state.inventory)
        return(
            <div>
              <Header />
              <Dashboard inventory={this.state.inventory} deleteProduct={this.deleteProduct} editProduct={this.editProduct}/>
              <Form postProduct={this.postProduct} editProduct={this.editProduct}/>
            </div>
        )
    }
}
