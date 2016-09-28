import React , { Component } from 'react'
import UserinfoDrawer from './UserinfoDrawer.jsx'
import RaisedButton from 'material-ui/RaisedButton'

export default class ShowBooks extends Component {
  render(){
    return (
      <div>
        <UserinfoDrawer />
        <div className="showbook">
          <div className="row">
            <div className="col-sm-4 col-md-4 col-lg-4 bookbox">
                <img width="150px" src="http://1615.info/images/red-book.jpg" alt="NO_IMG"/>
                <div>Book Name</div>
                <RaisedButton>Buy</RaisedButton>
                <RaisedButton>Edit</RaisedButton>
            </div>
            <div className="col-sm-4 col-md-4 col-lg-4 bookbox">
              <img width="150px" src="http://1615.info/images/red-book.jpg" alt="NO_IMG"/>
              <div>Book Name</div>
              <RaisedButton>Buy</RaisedButton>
              <RaisedButton>Edit</RaisedButton>
            </div>
            <div className="col-sm-4 col-md-4 col-lg-4 bookbox">
              <img width="150px" src="http://1615.info/images/red-book.jpg" alt="NO_IMG"/>
              <div>Book Name</div>
              <RaisedButton>Buy</RaisedButton>
              <RaisedButton>Edit</RaisedButton>
            </div>
            <div className="col-sm-4 col-md-4 col-lg-4 bookbox">
              <img width="150px" src="http://1615.info/images/red-book.jpg" alt="NO_IMG"/>
              <div>Book Name</div>
              <RaisedButton>Buy</RaisedButton>
              <RaisedButton>Edit</RaisedButton>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const sideBar = {
  paddding : 3,
  margin: 0,
  width : '25%',
  backgroundColor : '#f1f1f1' ,
  height : '100%' ,
  position: 'fixed' ,
  overflow: 'auto',
};
