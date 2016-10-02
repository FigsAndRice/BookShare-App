import React , { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { Drawer , MenuItem, FloatingActionButton } from 'material-ui';
import { yellow600, amber600, lightBlue900 } from 'material-ui/styles/colors';
import {receiveUser} from '../../actions/UserActions'
import ContentEdit from 'material-ui/svg-icons/editor/mode-edit';
import ContentFav from 'material-ui/svg-icons/action/favorite';
import { showFavorites } from '../../actions/FavoriteActions';

class UserProfile extends Component {
  constructor(props){
    super(props);

    this._showFavorites = this._showFavorites.bind(this);
  }

  componentDidMount() {
    let user = JSON.parse(localStorage.user)
    this.props.receiveUser(user);
  }

  _showFavorites() {
    if (!this.props.showFav) {
      this.props.showFavorites(true);
    } else {
      this.props.showFavorites(false);
    }
  }

  render(){
    if(!this.props.user) return (<div></div>)
    let { username , email , firstName , lastName , phone , picture , _id } = this.props.user;
    let imgURL = 'http://www.biglunchextras.com/sites/default/files/user-default.png';

    if (picture !== undefined){
        imgURL=picture;
    }
    return (
        <div style={drawerContext}>
          <div>
              <img style={imgstyle} src={imgURL} />
              <h3>{firstName}</h3>
              <h3>{lastName}</h3>
              <p>{email}</p>
              <div style={{paddingLeft:20}}>
                <Link to='/editProfile'>
                  <FloatingActionButton backgroundColor={lightBlue900} style={FloatingBtn}>
                    <ContentEdit/>
                  </FloatingActionButton>
                </Link>
                <FloatingActionButton onClick={this._showFavorites} backgroundColor={lightBlue900} style={FloatingBtn}>
                    <ContentFav />
                </FloatingActionButton>
              </div>
          </div>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    showFav: state.showFav
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    receiveUser: (user) => {dispatch(receiveUser(user))},
    showFavorites: (status) => {dispatch(showFavorites(status))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);

const FloatingBtn = {
  marginRight: 20,
};

const imgstyle = {
  border: '0px solid',
  borderRadius: 100,
  boxShadow: '0px 5px 15px #848484',
  height: 170,
  width: 170,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

const drawerContext = {
  textAlign : 'center',
  margin: 7,
  padding: 15,
  width : '95%',
};
