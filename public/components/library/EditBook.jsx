/* eslint-disable import/extensions */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-children-prop */
/* eslint-disable react/prop-types */
/* eslint-disable arrow-body-style */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/jsx-boolean-value */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TextField, SelectField, MenuItem, RaisedButton } from 'material-ui';

import RouteActions from '../../actions/RouteActions';
import BookPicUploader from './BookPicUploader.jsx';
import { forSale } from '../../actions/BookActions';

const styles = {
  button: {
    margin: 12
  }
};

class EditBook extends Component {
  constructor(props) {
    super(props);

    const { books } = props;
    const thisBook = books.filter((book) => {
      if (book._id === this.props.params.id) {
        return book;
      }
      return;
    });

    const { price, forSale, condition, picture } = thisBook[0];

    this.state = {
      price,
      forSale,
      condition,
      picture
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.toggleSale = this.toggleSale.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.conditionChange = this.conditionChange.bind(this);
  }

  onInputChange(e) {
    const key = e.target.dataset.statekey;
    const value = e.target.value;

    this.setState({
      [key]: value
    });
  }

  onSubmit() {
    const obj = this.state;
    obj.picture = this.props.image.url;
    this.props.forSale(this.props.params.id, obj, this.props.user._id);
  }

  toggleSale(e, index, value) {
    this.setState({
      forSale: value
    });
  }

  conditionChange(e, index, value) {
    this.setState({
      condition: value
    });
  }

  goHome() {
    RouteActions.route('/');
  }

  render() {
    const { price, condition, forSale, picture } = this.state;

    let img = 'http://1615.info/images/red-book.jpg';
    if (picture !== undefined) {
      img = picture;
    }

    return (
      <div className="container text-center">
        <div className="col-md-6">
          <BookPicUploader imgUrl={img} />
        </div>
        <div className="col-md-6">
          <form>
            <div>
              <SelectField
                value={condition}
                onChange={this.conditionChange}
                floatingLabelText="Book Condition"
                floatingLabelFixed={true}
                data-statekey="condition"
              >
                <MenuItem value={'excellent'} primaryText="Excellent" />
                <MenuItem value={'good'} primaryText="Good" />
                <MenuItem value={'fair'} primaryText="Fair" />
                <MenuItem value={'poor'} primaryText="Poor" />
                <MenuItem value={'veryPoor'} primaryText="Very Poor" />
              </SelectField><br />
              <SelectField
                value={forSale}
                floatingLabelText="Offer"
                floatingLabelFixed={true}
                onChange={this.toggleSale}
              >
                <MenuItem value={true} primaryText="For Sale" />
                <MenuItem value={false} primaryText="Not For Sale" />
              </SelectField><br />
              <TextField
                id="text-field-default"
                onChange={this.onInputChange}
                data-statekey="price"
                defaultValue={price}
                floatingLabelText="Price"
                floatingLabelFixed={true}
                type="number"
              />
            </div>
          </form>
        </div>
        <RaisedButton
          label="Edit Book"
          style={styles.button}
          onClick={this.onSubmit}
        />
        <RaisedButton
          label="Cancel"
          onClick={this.goHome}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    image: state.image,
    books: state.books.userBooks
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    forSale: (id, bookObj, userId) => { dispatch(forSale(id, bookObj, userId)); }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditBook);
