import React, { Component } from 'react';
import axios from 'axios';



class Valuaciones extends Component {

    componentDidMount() {
        axios
        .get("http://localhost:8080/vehiculos")
        .then(function(response){
            console.log(response);
        })
        .catch(function(error){
            console.log(error);
        })
    }

    
    state = {}
    render() { 
        return (
            <div>
                Valuaciones
            </div>
        )
    }
}
 
export default Valuaciones;