import React , {Component} from 'react'
import ProfileForm from './ProfileForm.jsx'
import { connect } from 'react-redux'


class EditProfile extends Component {
  render(){
    return (
      <div>
        <ProfileForm user={this.props.user}/>
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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);
