import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

import {RaisedButton, FontIcon, Snackbar} from 'material-ui';
import {yellow600, amber600, lightBlue900} from 'material-ui/styles/colors';

import axios from 'axios';
class Checkout extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Checkout';

        this.state = {
      		open: false,
    		};
        this.onToken = this.onToken.bind(this);
        this.showMessage = this.showMessage.bind(this);
        this.hideMesaage = this.hideMesaage.bind(this);
    }
    showMessage() {
    	this.setState({open: true});
    }
    hideMesaage() {
    	this.setState({open: false});
    }
    onToken(token) {
    	axios.post('/api/payments/charge', {token: token.id, amount: 10000})
    		.then(res => {
    			this.showMessage();
          this.props.bookIds.forEach(id => {
            axios.put(`/api/books/${id}/changeOwner/${this.props.userId}`)
              .then(res => console.log(res.data))
              .catch(console.error)
          })
    		})
    		.catch(error => console.error)
    }
    render() {
        if (this.props.checkoutStatus) {
          return (
            <RaisedButton
              disabled={true}
              label="Checkout"
              primary={false}
              style={{float: "right"}}
              labelColor={yellow600}
              backgroundColor={lightBlue900}
              icon={<FontIcon className="material-icons">check_circle</FontIcon>}
              />
          )
        }

        return (
        	<div>
        		<StripeCheckout
        			token={this.onToken}
        			image='http://www.clker.com/cliparts/A/3/i/C/H/E/koszyk-md.png'
        			stripeKey="pk_test_m7z72LK4NyWXZ6I1656lYP14"
        			currency="USD"
        			panelLabel="Total of"
        			amount={this.props.amount}
        			email={this.props.email}
        			zipCode={true}
              allowRemember={false}
        			triggerEvent="onTouchTap"
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

        		<Snackbar
		          open={this.state.open}
		          message= {"Payment has been posted."}
		          autoHideDuration={3000}
		          onRequestClose={this.hideMesaage}
		        />
        	</div>
        );
    }
}

export default Checkout;
