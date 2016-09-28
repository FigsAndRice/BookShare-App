import React from 'react';

const style = {
  // backgroundColor : '#f0f0f0',
  background : 'linear-gradient(#f0f0f0,#757575)',
  padding : '25px',
  margin: 'auto',
  height: '80%',
  width: '90%',
  marginTop: 20,
  textAlign: 'center',
  border : '0px solid',
  boxShadow : '0px 5px 25px #7e7e7e'
};

const h4 = {
  color : 'white',
  fontSize : '2.5vw'
}

const bfont = {
  color : '#01579B',
  fontSize : '20vw',
  textShadow : '6px 6px #FDD835',
}

const h1 = {
  fontSize : '2.5vw'
}

const h2 = {
  fontSize : '2vw'
}

export default class NotFound extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'NotFound';
    }
    render() {
        return (
          <div className="container">
            {/* <Paper style={style} zDepth={5}/> */}
            <div style={style}>
              <h1 style={h1}>OOPS!</h1>
              <h2 style={h2}> The page you are looking for does not exist! </h2>
              <hr/>
              <h1 style={bfont}>404</h1>
              <hr/>
              <h4 style={h4}>PAGE NOT FOUND</h4>
            </div>
          </div>
        )
    }
}
