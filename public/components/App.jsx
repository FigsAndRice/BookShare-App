import React from 'react';
// import NavBar from './NavBar.jsx'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'App';
    }
    render() {
      return (
        <div>
          {/* <NavBar /> */}
          <div className="container" style={{ height: '100%'}}>
            {this.props.children}
          </div>
        </div>
      )
    }
}

export default App;
