import React,{Component} from 'react';
import axios from 'axios';
import Header from './Component/Header/Header';
import Dashboard from './Component/Dashboard/Dashboard';
import Form from './Component/Form/Form';
import './App.css';

//STEP 5

export default class App extends Component{
    constructor(){
        super();
        this.state = {
          inventory: []
        }
    }

      componentDidMount(){
      axios.get(`/api/inventory`).then( res => {
        console.log(res.data)
        this.setState({
          inventory: res.data
        })
      })
    }

    render(){
        return(
            <div>
              <Header />
              <Dashboard inventory={this.state.inventory}/>
              <Form />
            </div>
        )
    }
}
