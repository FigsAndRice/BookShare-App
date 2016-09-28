import React , { Component } from 'react'
import UserinfoDrawer from './UserinfoDrawer.jsx'
import RaisedButton from 'material-ui/RaisedButton'

export default class ShowBooks extends Component {
  render(){
    return (
      <div>
          <UserinfoDrawer />
        <div style={showbook}>
        {/* <RaisedButton label="toggle" onTouchTap={this.handleToggle}></RaisedButton> */}
          <div className="row">
            <div className="col-sm-4" style={bookbox}>
              <img width="150px" src="http://1615.info/images/red-book.jpg" alt="NO_IMG"/>
              <div>Book Name</div>
              <RaisedButton>Buy</RaisedButton>
              <RaisedButton>Sell</RaisedButton>
            </div>
            <div className="col-sm-4" style={bookbox}>
              <img width="150px" src="http://1615.info/images/red-book.jpg" alt="NO_IMG"/>
              <div>Book Name</div>
              <RaisedButton>Buy</RaisedButton>
              <RaisedButton>Sell</RaisedButton>
            </div>
            <div className="col-sm-4" style={bookbox}>
              <img width="150px" src="http://1615.info/images/red-book.jpg" alt="NO_IMG"/>
              <div>Book Name</div>
              <RaisedButton>Buy</RaisedButton>
              <RaisedButton>Sell</RaisedButton>
            </div>
            <div className="col-sm-4" style={bookbox}>
              <img width="150px" src="http://1615.info/images/red-book.jpg" alt="NO_IMG"/>
              <div>Book Name</div>
              <RaisedButton>Buy</RaisedButton>
              <RaisedButton>Sell</RaisedButton>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const bookbox = {
    margin : '2px',
    padding : '5px',
    textAlign : 'center',
    height : '200px',
    border : '1px solid #f1f1f1',
    borderRadius : '5px',
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

const showbook = {
  // paddingLeft: 3,
  marginLeft : '26%',
  // height : '1000px',
}
