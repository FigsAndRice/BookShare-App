import React, { Component } from 'react';
import { connect } from 'react-redux';
import RouteActions from '../../actions/RouteActions'

import { TextField, SelectField, MenuItem, RaisedButton } from 'material-ui'

import BookPicUploader from './BookPicUploader.jsx'
import { forSale } from '../../actions/BookActions'

class EditBook extends Component {
  constructor(props){
    super(props)

    this.state = {
      price: 0,
      forSale: false,
      condition: '',
      image: this.props.image._id
    }
    this._onSubmit = this._onSubmit.bind(this);
    this._onInputChange = this._onInputChange.bind(this);
    this._conditionChange = this._conditionChange.bind(this);
  }
  _onInputChange(e){
   let key = e.target.dataset.statekey;
   let value = e.target.value;

   this.setState({
       [key]: value
   });
 }
 _conditionChange(e, index, value){

   this.setState({
     condition: value
   })

 }
 _onSubmit(){
   console.log('this.state:', this.state)
 }
 _goHome(){
   RouteActions.route('/')
 }
  render(){
    let { price, condition } = this.state
    return(
      <div className='container'>
        <div className="col-xs-6">
          <BookPicUploader />
        </div>
        <div className="col-xs-6">
          <TextField
            id="text-field-default"
            onChange={this._onInputChange}
            data-statekey="price"
            defaultValue={price}
            type='number'
          /><br />
          <SelectField value={condition}
            onChange={this._conditionChange}
            data-statekey="condition">
           <MenuItem value={'excellent'} primaryText="Excellent" />
           <MenuItem value={'good'} primaryText="Good" />
           <MenuItem value={'fair'} primaryText="Fair" />
           <MenuItem value={'poor'} primaryText="Poor" />
           <MenuItem value={'veryPoor'} primaryText="Very Poor" />
          </SelectField><br />
        </div>
        <RaisedButton
         label='Sell Book'
         style={styles.button}
         onClick={this._onSubmit} />
        <RaisedButton
         label='Cancel'
         onClick={this._goHome} />
      </div>
    )
  }
}

const styles = {
  button: {
    margin: 12
  }
}

const mapStateToProps = (state) => {
  return {
    image: state.image
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    forSale: (bookObj) => { dispatch(forSale(bookobj)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditBook)
