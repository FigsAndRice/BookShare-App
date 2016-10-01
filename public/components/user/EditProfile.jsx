import React , {Component} from 'react'
import { connect } from 'react-redux'

import ProfileForm from './ProfileForm.jsx'
import { receiveUser } from '../../actions/UserActions';

class EditProfile extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let user = JSON.parse(localStorage.user)
    this.props.receiveUser(user)
  }

  render(){
    return (
      <div>
        <ProfileForm />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    receiveUser: (user) => {dispatch(receiveUser(user))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);
