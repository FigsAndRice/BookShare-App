import React , { Component } from 'react'
import { RaisedButton } from 'material-ui'

export default class Book extends Component{
  render(){

    let { title, cover, author, forSale } = this.props.book
    let picUrl = (cover === undefined) ? 'http://1615.info/images/red-book.jpg' : cover;

    return(
    <div className="col-sm-4 col-md-4 col-lg-4 bookbox">
      <img width="150px" className="img-rounded fixedBookHeight center-block" src={picUrl} alt="NO_IMG"/>

      <RaisedButton>Sell</RaisedButton>
      <RaisedButton>Delete</RaisedButton>
    </div>
    )
  }
}
