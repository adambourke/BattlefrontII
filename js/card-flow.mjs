import {Card} from "./card.mjs";
import {e} from "./react-utils.mjs";

export class CardFlow extends React.Component{
	
	constructor(props) {
		super(props);
	}
  
	render(){
		
		let array = [];
		for(let item of this.props.data){
			item.key = item.name;
			array.push(e(Card,item));
		}
		return array;
	}
}