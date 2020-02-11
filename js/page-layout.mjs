import {CardFlow} from "./card-flow.mjs";
import {e, Header} from "./react-utils.mjs";
import {getFieldsFromObject} from "./utils.mjs";

export class PageLayout extends React.Component{
	
	constructor(props) {
		super(props);
	}
  
	render(){
	
		if (Array.isArray(this.props.data)){	
			return e(CardFlow, this.props);
		} else {
			let content = [];
			let fields = getFieldsFromObject(this.props.data);
			for(const field of  fields){
				content.push(Header({value: field, className:"cardFlowHeader"}));
				content.push(e(CardFlow, {data:this.props.data[field]}));
			}
			return e("div", this.props, content);
		
		}
	}
}