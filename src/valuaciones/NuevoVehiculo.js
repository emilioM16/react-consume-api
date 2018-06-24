import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';
import NumberFormat from 'react-number-format';
import PropTypes from 'prop-types';
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';
import SelectValidator from 'react-material-ui-form-validator/lib/SelectValidator';
import MenuItem from '@material-ui/core/MenuItem';
import axios from 'axios';

function NumberFormatCustom(props) {
    const { inputRef, onChange, ...other } = props;
  
    return (
      <NumberFormat
        {...other}
        ref={inputRef}
        onValueChange={values => {
          onChange({
            target: {
              value: values.value,
            },
          });
        }}
        thousandSeparator
        prefix="$"
      />
    );
  }
  
  NumberFormatCustom.propTypes = {
    inputRef: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
  };


export default class NuevoVehiculo extends React.Component {

    constructor(props){
        super(props);
        this.defaultState = {
            dominio:'',
            marca:'',
            modelo:'',
            tipo:'', 
            valor:'',
            version:'',
            anio:'',
            nroMotor:'',
            tipoMotor:'',
            cilindrada:'',
            open: false,
            noExiste:true,
          };
        this.state = this.defaultState;
        this.handleChange = this.handleChange.bind(this);
      }


  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState(this.defaultState);
  };
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  handleSubmit = event =>{
    event.preventDefault();

    let vehiculo = {
      dominio:this.state.dominio,
      marca:this.state.marca,
      modelo:this.state.modelo,
      tipo:this.state.tipo, 
      valor:this.state.valor,
      version:this.state.version,
      anio:this.state.anio,
      nro_serie_motor:this.state.nroMotor,
      tipoMotor:this.state.tipoMotor,
      cilindrada:this.state.cilindrada
    }

  var headers={
      'Access-Control-Request-Headers':'Content-Type',
      'Content-Type': 'application/json',
      'Access-Control-Request-Method':'*',
      // 'Content-Type': 'application/x-www-form-urlencoded'
    
  }

    axios
      .post('http://localhost:8080/vehiculos/crear',vehiculo,headers)
      .then(res => {
        this.setState({
          noExiste : res.data.status,
        });
      })
      .catch(error =>{
        this.setState({
          open:false,
        })
      })
  }

  render() {
    // const { classes } = this.props;
    // const { valor } = this.state;
    const errorStyle = {
      color:'red',
      textAlign:'center',
    }
    return (
      <div>
        <Button variant="fab" color="primary" aria-label="add" onClick={this.handleClickOpen}>
            <AddIcon />
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Registrar un nuevo vehículo</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Ingrese los datos del nuevo vehículo
            </DialogContentText>
           
           <ValidatorForm
                ref="form"
                onSubmit={this.handleSubmit}
           >
           <Grid container spacing={16}>
                <Grid item xs={4}>
                    <TextValidator
                        label="Dominio"
                        onChange={this.handleChange('dominio')}
                        name="dominio"
                        value={this.state.dominio}
                        validators={['required']}
                        errorMessages={['El campo es obligatorio']}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={4}>
                    <TextValidator
                        label="Marca"
                        onChange={this.handleChange('marca')}
                        name="marca"
                        value={this.state.marca}
                        validators={['required']}
                        errorMessages={['El campo es obligatorio']}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={4}>
                    <TextValidator
                        label="Modelo"
                        onChange={this.handleChange('modelo')}
                        name="modelo"
                        value={this.state.modelo}
                        validators={['required']}
                        errorMessages={['El campo es obligatorio']}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={4}>
                    <TextValidator
                        label="Versión"
                        onChange={this.handleChange('version')}
                        name="version"
                        value={this.state.modelo}
                        validators={['required']}
                        errorMessages={['El campo es obligatorio']}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={4}>
                    <SelectValidator
                        label="Tipo"
                        onChange={this.handleChange('tipo')}
                        name="tipo"
                        value={this.state.tipo}
                        validators={['required']}
                        errorMessages={['El campo es obligatorio']}
                        fullWidth
                    >
                        <MenuItem value="Sedán">Sedán</MenuItem>
                        <MenuItem value="Pick-up">Pick-up</MenuItem>
                        <MenuItem value="SUV">SUV</MenuItem>
                        <MenuItem value="Coupé">Coupé</MenuItem>
                    </SelectValidator>
                </Grid>
                <Grid item xs={4}>
                    <TextValidator
                        label="Año"
                        onChange={this.handleChange('anio')}
                        name="anio"
                        value={this.state.anio}
                        validators={['required','maxNumber:2018', 'matchRegexp:^[0-9]{1,4}$']}
                        errorMessages={['El campo es obligatorio','Ingrese un año válido']}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={4}>
                  <TextValidator
                    name="valor"
                    label="Valor"
                    value={this.state.valor}
                    onChange={this.handleChange('valor')}
                    validators={['required']}
                    errorMessages={['El campo es obligatorio']}
                    InputProps={{
                      inputComponent: NumberFormatCustom,
                    }}
                    fullWidth
                  />
                </Grid>
              </Grid>

              
              <DialogContentText><br/>
                Ingrese los datos del motor
              </DialogContentText>
              <Grid container spacing={16}>
                <Grid item xs={4}>
                  <TextValidator
                      label="Número de serie"
                      onChange={this.handleChange('nroMotor')}
                      name="nroMotor"
                      type="number"
                      value={this.state.nroMotor}
                      validators={['required', 'matchRegexp:^[0-9]{1,15}$']}
                      errorMessages={['El campo es obligatorio','Ingrese un número válido']}
                      fullWidth
                  />
                </Grid>

                <Grid item xs={4}>
                    <SelectValidator
                        label="Tipo"
                        onChange={this.handleChange('tipoMotor')}
                        name="tipoMotor"
                        value={this.state.tipoMotor}
                        validators={['required']}
                        errorMessages={['El campo es obligatorio']}
                        fullWidth
                    >
                        <MenuItem value="Naftero">Naftero</MenuItem>
                        <MenuItem value="Gasolero">Gasolero</MenuItem>
                        <MenuItem value="Híbrido">Híbrido</MenuItem>
                    </SelectValidator>
                </Grid>

                <Grid item xs={4}>
                  <TextValidator
                      label="Cilindrada"
                      onChange={this.handleChange('cilindrada')}
                      name="cilindrada"
                      value={this.state.cilindrada}
                      validators={['required']}
                      errorMessages={['El campo es obligatorio']}
                      fullWidth
                  />
                </Grid>
              </Grid>

              <br/>
              <Grid container spacing={16}>
                <Grid item xs={6}>
                  <Button type="submit" color="primary" fullWidth>
                      Añadir
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  <Button onClick={this.handleClose} color="primary" fullWidth>
                      Cancelar
                  </Button>
                </Grid>
              </Grid>

              <Grid container spacing={16}>
                  <Grid item>
                    {!this.state.noExiste &&
                      <p style={errorStyle}>
                        El vehículo ingresado ya existe
                      </p>
                    }
                  </Grid>
              </Grid>
           </ValidatorForm>

          </DialogContent>
          <DialogActions>

          </DialogActions>
        </Dialog>
      </div>
    );
  }
}


