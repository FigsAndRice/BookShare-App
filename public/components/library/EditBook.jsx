import React, { Component } from 'react';
import { connect } from 'react-redux'

import { forSale } from '../../actions/BookActions'

class EditBook extends Component {
  constructor(props){
    super(props)

    this.state = {
      price: 0,
      forSale: false,
      condition: '',
      image: ''
    }
    this._onInputChange = this._onInputChange.bind(this);
  }
  _onInputChange(e){
   let key = e.target.dataset.statekey;
   let value = e.target.value;

   this.setState({
       [key]: value
   });
 }
  render(){
    let { price, condition } = this.state
    return(
      <div>
      <ProfiePicUploader />
      <TextField
        id="text-field-default"
        onChange={this._onInputChange}
        data-statekey="price"
        defaultValue={price}
        floatingLabelText="Price"
      /><br />
      <TextField
        id="text-field-default"
        onChange={this._onInputChange}
        data-statekey="condition"
        defaultValue={condition}
        floatingLabelText="Condition"
      /><br />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return{
    forSale: (bookObj) => { dispatch(forSale(bookobj)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditBook)
