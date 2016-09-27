import React from 'react';
import {List, ListItem, Avatar} from 'material-ui';
class Results extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Results';
    }
    render() {
    		let img = <img src="http://books.google.com/books/content?id=RJxWIQOvoZUC&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE71ema0EayCQkQ7HS2nqnUVvLP_t80kSWA011JCg8atZRt7cG3cN8Sxm-fB3eA5di9GXySS2MWFHKbEnz4yBmjFJOnaVykxstmbqPKuNqTccj1GRCaj4wcAy5bPIy6dyvy6RItY8&source=gbs_api" />
        return (
        	<List>
        		<ListItem leftIcon={img} primaryText={"Title: Flowers"} 
        		secondaryText={"Author: Something \n\n ISBN:3435435345"}> </ListItem>
        	</List>
        );
    }
}

export default Results;
