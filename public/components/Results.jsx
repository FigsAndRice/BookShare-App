import React from 'react';
import {List, ListItem, FloatingActionButton, FontIcon} from 'material-ui';
import {yellow600, amber600, lightBlue900} from 'material-ui/styles/colors';
class Results extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Results';
    }
    render() {
    		let actionStyle = {
    			marginTop: "45px"
    		}
    		let img = <img className="img-responsive" src="http://books.google.com/books/content?id=RJxWIQOvoZUC&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE71ema0EayCQkQ7HS2nqnUVvLP_t80kSWA011JCg8atZRt7cG3cN8Sxm-fB3eA5di9GXySS2MWFHKbEnz4yBmjFJOnaVykxstmbqPKuNqTccj1GRCaj4wcAy5bPIy6dyvy6RItY8&source=gbs_api" />
        return (
        	<List>
        		<ListItem style={{borderStyle: "solid", borderRadius: "15px", borderWidth: "1px", borderColor: amber600, marginBottom: "10px"}}>
        			<div className="row">
        				<div className="col-xs-2">{img}</div>
  							<div className="col-xs-8">
  								<h2>Title: Flowers</h2>
  								<h3>Author: Somebody</h3>
  								<h3>ISBN: 1234456</h3>
  							</div>
  							<div className="col-xs-2">
  								<FloatingActionButton style={actionStyle} iconStyle={{color: "#FBC02D "}}>
      							<FontIcon className='material-icons'>arrow_forward</FontIcon>
    							</FloatingActionButton>
  							</div>
        			</div>
        		</ListItem><ListItem style={{borderStyle: "solid", borderWidth: "1px", borderColor: amber600, marginBottom: "10px"}}>
        			<div className="row">
        				<div className="col-xs-2">{img}</div>
  							<div className="col-xs-8">
  								<h2>Title: Flowers</h2>
  								<h3>Author: Somebody</h3>
  								<h3>ISBN: 1234456</h3>
  							</div>
  							<div className="col-xs-2">
  								<FloatingActionButton style={actionStyle} iconStyle={{color: "#FBC02D "}}>
      							<FontIcon className='material-icons'>arrow_forward</FontIcon>
    							</FloatingActionButton>
  							</div>
        			</div>
        		</ListItem><ListItem style={{borderStyle: "solid", borderWidth: "1px", borderColor: amber600, marginBottom: "10px"}}>
        			<div className="row">
        				<div className="col-xs-2">{img}</div>
  							<div className="col-xs-8">
  								<h2>Title: Flowers</h2>
  								<h3>Author: Somebody</h3>
  								<h3>ISBN: 1234456</h3>
  							</div>
  							<div className="col-xs-2">
  								<FloatingActionButton style={actionStyle} iconStyle={{color: "#FBC02D "}}>
      							<FontIcon className='material-icons'>arrow_forward</FontIcon>
    							</FloatingActionButton>
  							</div>
        			</div>
        		</ListItem>
        	</List>
        );
    }
}

export default Results;
