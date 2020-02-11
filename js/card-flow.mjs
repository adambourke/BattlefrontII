import {Card} from "./card.mjs";
import {e, Header} from "./react-utils.mjs";

export class CardFlow extends React.Component{
	
	constructor(props) {
		super(props);
	}
  
	render(){
		
		let array = [];
		array.push(e(CardFlowHeader,null));
		for(let item of this.props.data){
			item.key = item.name;
			array.push(e(Card,item));
		}
		return e("div", {className:"cardflow"}, array);
	}
}

export class CardFlowHeader extends React.Component {
		constructor(props) {
		super(props);
	}
	
	render(){
		
		return e("div", {className:"cardFlowHeader"},
				[Header({value: "Test"}),
				e("hr")]
			);
	}
}