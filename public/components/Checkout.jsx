import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

import {RaisedButton, FontIcon} from 'material-ui';
import {yellow600, amber600, lightBlue900} from 'material-ui/styles/colors';
class Checkout extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Checkout';

        this.onToken = this.onToken.bind(this);
    }

    onToken(token) {
    	console.log('Here is the token ', token);
    }
    render() {
        return (
        	<StripeCheckout 
        		token={this.onToken}
        		stripeKey="pk_test_m7z72LK4NyWXZ6I1656lYP14"
        		currency="USD"
        	>
	        	<RaisedButton
		          label="Checkout"
		          primary={false}
		          style={{float: "right"}}
		          labelColor={yellow600}
		          backgroundColor={lightBlue900}
		          icon={<FontIcon className="material-icons">check_circle</FontIcon>}
		        />
        	</StripeCheckout>
        );
    }
}

export default Checkout;
