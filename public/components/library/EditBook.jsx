import React, { Component } from 'react';
import { connect } from 'react-redux';
import RouteActions from '../../actions/RouteActions'

import { TextField, SelectField, MenuItem, RaisedButton } from 'material-ui'

import BookPicUploader from './BookPicUploader.jsx'
import { forSale } from '../../actions/BookActions'

class EditBook extends Component {
  constructor(props){
    super(props)

    let { books } = props;
    let thisBook = books.filter(book => {
      if(book._id === this.props.params.id){
        return book;
      } else {
        return;
      }
    })

    let { price, forSale, condition, picture } = thisBook[0];

    this.state = {
      price,
      forSale,
      condition,
      picture
    }
    this._onSubmit = this._onSubmit.bind(this);
    this._toggleSale = this._toggleSale.bind(this);
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
 _toggleSale(e, index, value){

   this.setState({
     forSale: value
   })

 }
 _onSubmit(){
   let obj = this.state;
   obj.picture = this.props.image.url;

   this.props.forSale(this.props.params.id, obj, this.props.user._id);
 }
 _goHome(){
   RouteActions.route('/')
 }
  render(){
    let { price, condition, forSale , picture} = this.state;

    let img = 'http://1615.info/images/red-book.jpg';
    if (picture !== undefined){
      img = picture;
    }

    return(
      <div className="container text-center">
        <div className="col-md-6">
          <BookPicUploader imgUrl={img}/>
        </div>
        <div className="col-md-6">
          <form>
            <div>
              <SelectField value={condition}
                onChange={this._conditionChange}
                floatingLabelText="Book Condition"
                floatingLabelFixed={true}
                data-statekey="condition">
                <MenuItem value={'excellent'} primaryText="Excellent" />
                <MenuItem value={'good'} primaryText="Good" />
                <MenuItem value={'fair'} primaryText="Fair" />
                <MenuItem value={'poor'} primaryText="Poor" />
                <MenuItem value={'veryPoor'} primaryText="Very Poor" />
              </SelectField><br />
              <SelectField value={forSale}
                floatingLabelText="Offer"
                floatingLabelFixed={true}
                onChange={this._toggleSale}>
                <MenuItem value={true} primaryText="For Sale" />
                <MenuItem value={false} primaryText="Not For Sale" />
              </SelectField><br />
              <TextField
                id="text-field-default"
                onChange={this._onInputChange}
                data-statekey="price"
                defaultValue={price}
                floatingLabelText="Price"
                floatingLabelFixed={true}
                type='number'
              />
            </div>
          </form>
        </div>
        <RaisedButton
         label='Edit Book'
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
    user: state.user,
    image: state.image,
    books: state.books.userBooks
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    forSale: (id, bookObj, userId) => { dispatch(forSale(id, bookObj, userId)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditBook)
