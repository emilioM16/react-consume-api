import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Route, Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import './App.css';
import Valuaciones from './valuaciones';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};


class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar color="primary" position="static">
          <Toolbar>
            <Typography variant="title" color="inherit" className={styles.flex}>
              Pistón - Agencia automotriz 
            </Typography>
            <Link to="./"><Button color="default">Inicio</Button></Link>
            <Link to="/valuaciones"><Button color="default">Valuaciones</Button></Link>
          </Toolbar>
        </AppBar>
        
 
        <Route path="/valuaciones" component={Valuaciones}/>

      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
