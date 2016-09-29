import React , { Component } from 'react'
import { RaisedButton } from 'material-ui'

export default class Book extends Component{
  render(){
    return(
    <div className="col-sm-4 col-md-4 col-lg-4 bookbox">
      <img width="150px" src="http://1615.info/images/red-book.jpg" alt="NO_IMG"/>
      <div>Book Name</div>
      <RaisedButton>Sell</RaisedButton>
      <RaisedButton>Edit</RaisedButton>
    </div>
    )
  }
}
