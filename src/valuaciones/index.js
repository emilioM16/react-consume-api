import React, { Component } from 'react';
import Tabla from '../componentes/Tabla';

class Valuaciones extends Component {


    constructor(props) {
        super(props);
        this.state = {
            vehiculos: [],
        }
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