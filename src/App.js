import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import './App.css';
import Valuaciones from './valuaciones';


class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar color="primary" position="static">
          <Toolbar>
            <Typography variant="title" color="inherit">
              Agencia automotriz 
            </Typography>
            <Link to="./"><Button color="default">Inicio</Button></Link>
            <Link to="/valuaciones"><Button color="default">Valuaciones</Button></Link>
          </Toolbar>
        </AppBar>
        <img className="fondo" alt="logo" src={require('./fondo.png')}/>
 
        <Route path="/valuaciones" component={Valuaciones}/>

      </div>
    );
  }
}



export default App;
