'use strict';

import {Card} from "./card.mjs";
import {e} from "./react-utils.mjs";
import {getFieldsFromObject} from "./utils.mjs";

var cardFlow = {};


class CardFlow extends React.Component{
	
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

class NavigationBar extends React.Component {
	constructor(props) {
		super(props);
				
				
		this.state = {fields: getFieldsFromObject(data)};
		console.log(this.state.fields);
  }
  

  
  setSelection(field){
	  window.location.href = "./index.html?path=" + field;
  }
  
  render(){
	  let headerElements = []
	  
	  for (let field in this.state.fields){
		  headerElements.push(e('h2', {href:"null", key:field, className:"headerValue", onClick:function(){this.setSelection(this.state.fields[field])}.bind(this)}, this.state.fields[field]));
		  headerElements.push(e('h2', {key:(field+"div")}, '|'));
	  }
	  headerElements.pop();
	  return e('div', {className:"horizontal-layout"},headerElements);
  }
	
}

export {NavigationBar, CardFlow};