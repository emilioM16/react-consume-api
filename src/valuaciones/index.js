import React, { Component } from 'react';
import axios from 'axios';
import Tabla from '../componentes/Tabla';


class Valuaciones extends Component {


    constructor(props) {
        super(props);
        this.state = {
            vehiculos: [],
        }
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount(){
        axios.get('http://localhost:8080/vehiculos?expand=motor')
        .then(response => {
          this.setState({
            vehiculos: response.data,
          })
        })
        .catch(function(error){
          console.log(error);
        })
      }
    
    render() { 
        return (
            <div>
                <div>
                    <h2>Valuaciones</h2>
                </div>

                <div>
                    <Tabla vehiculos={this.state.vehiculos} />
                </div>

            </div>
        )
    }
}
 
export default Valuaciones;