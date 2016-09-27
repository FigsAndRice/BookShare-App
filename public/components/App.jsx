import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'App';
    }
    render() {
      return <div style={{ height: '100%'}}>
        {this.props.children}
      </div>
    }
}

export default App;
