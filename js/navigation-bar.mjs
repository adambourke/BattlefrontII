'use strict';
import {e} from "./react-utils.mjs";
import {translate} from "./utils.mjs";

export class NavigationBar extends React.Component {
	constructor(props) {
		super(props);
		console.log(this.props.selectedField);
  }
  
  render(){
	  let headerElements = []
	  
	  for (let field in this.props.fields){
		  let className = "headerValue";
		  console.log(field + " - " + this.props.selectedField);
		  
		  if (this.props.fields[field] == this.props.selectedField){
			  className += " selected";
		  }
		  
		  headerElements.push(e(
								'h2',
								{
									href:"null",
									key:field,
									className,
									onClick:function(){window.location.href = "./index.html?path=" + this.props.fields[field]}.bind(this)
								},
								translate("navigation/" + this.props.fields[field])
							 ));
		  headerElements.push(e('h2', {key:(field+"div")}, '|'));
	  }
	  headerElements.pop();
	  return e('div', {className:"horizontal-layout"},headerElements);
  }
	
}