import React, { Component } from 'react';
import { TextField } from 'material-ui';
import {getResults} from '../actions/ResultsActions'
import {connect} from 'react-redux';
class SearchBar extends Component {
  constructor(props){
    super(props)
    this.state = {
      bookTitle: ''
    }
    this._searchSubmit = this._searchSubmit.bind(this)
    this._onChange = this._onChange.bind(this)
  }
  _searchSubmit(e){
    e.preventDefault();
    let query = this.state.bookTitle.replace(/\s/g, '+');
    this.setState({
      bookTitle: ''
    });
    this.props.getResults(query);
  }
  _onChange(e){
    this.setState({
      bookTitle: e.target.value
    })
  }
  render(){
    return(
      <form action="" onSubmit={this._searchSubmit}>
        <TextField
        hintText="Search Book Title"
        onChange={this._onChange}
        />
      </form>
    )
  }
}

export default connect(state => ({
  }),dispatch => {
    return {
      getResults : query => dispatch(getResults(query)),
    }
  })(SearchBar);