'use strict';

const e = React.createElement;
const i18n = translations;


var cardFlow = {};
class Card extends React.Component {
  constructor(props) {
    super(props);
	
	this.state = {mouseover: false};
	this.setMouseOver = this.setMouseOver.bind(this);
	this.setMouseOut = this.setMouseOut.bind(this);
	
  }
  
  setMouseOver(){
	  this.setState({mouseover: true});
  }
   
  setMouseOut(){
	  this.setState({mouseover: false});
  }
  
  renderTitle(className) {
	 return e('h1', {className:className},this.props.name); 
  }
  
  renderDetails() {
	 
	//if (this.state.mouseover){
	let detailList = [];
	
	if (this.props.alert){
		return e(
      'h2',
      {className:"itemCard showOnHover"},
	  this.toFriendlyString(this.props.alert)
    ); 
	}
	if (this.props.summary){
		let details = this.props.summary;
		for (var field in details){
			if (Object.prototype.hasOwnProperty.call(details, field)) {
				let fieldName = e('td', {className:"itemCard "},(this.toFriendlyString(field) + ":"));
				let fieldValue = e('td', {className:"itemCard "},this.toFriendlyString(details[field]));
				let row = e('tr', {className:"itemCard"}, [fieldName, fieldValue]);
				detailList.push(row);
			}
		}
		
		const detailItem = this.props.summary;
	}
	  
	 
    return e("table",{className:"itemCard showOnHover"},e("tbody",{className:"itemCard"},detailList));  
	//} else {
	//	return null;
	//}
  }
  
  toFriendlyString(field) {
	  if (typeof field === "undefined"){
		  return null;
	  }
	  
	  if (typeof field !== "object"){
		  let lookup = i18n[field];
		  if (lookup == undefined){
			  lookup = field;
		  }
		  return lookup;
	  }
	  
	  if (Array.isArray(field)){
		  let returnValue = "";
		  for (let i = 0; i < field.length; i++){
			  let lookup = i18n[field[i]];
			  if (lookup == undefined){
				  lookup = field[i];
			  }
			  if (i+1 === field.length){
				returnValue += lookup;
			  } else {
				 returnValue += lookup + ", ";
			  }
		  }
		  
		  return returnValue;
	  }
  }
  
  renderImage() {
	 return e(
      'img',
      {src:this.props.imgUrl, className:"itemCard hideOnHover", key:(this.props.name + "-img")}
    ); 
  }

   render() {
	let className = "itemCard";
	if (this.props.availability !== undefined) {
		className += " " + this.props.availability;
	}
	
	  
    return e(
			'div',
			{key:this.props.key, className:className, onMouseOver:this.setMouseOver, onMouseOut:this.setMouseOut},
			[this.renderImage(), this.renderTitle(className), this.renderDetails()]
    );
  }
}


class CardFlow extends React.Component{
	
	constructor(props) {
    super(props);
	
	this.state = {data: data.planets};
  }
  
  setSelection(selection){
	  this.setState({data:data[field]});
  }
  
  componentDidMount(){
	cardFlow.updateSelection = (field) => {
    // `this` refers to our react component
    this.setState({data:data[field]});     
  };
}
  
  
	render(){
		
		let array = [];
		for(let item of this.state.data){
			item.key = item.name;
			array.push(e(Card,item));
		}
		return array;
	}
}

class NavigationBar extends React.Component {
	constructor(props) {
		super(props);
				
				
		this.state = {fields: this.getFieldsFromObject(data)};
		console.log(this.state.fields);
  }
  
  getFieldsFromObject(obj){
	let fields = [];
	  if (obj){
		for (var field in obj){
			if (Object.prototype.hasOwnProperty.call(obj, field)) {
				fields.push(field);
			}
		}
	  }
	  return fields;
  }
  
  setSelection(field){
	  cardFlow.updateSelection(field);
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

let domContainer = document.querySelector('#page_container');
ReactDOM.render(e(CardFlow), domContainer);
let domContainer2 = document.querySelector('.navigationBar');
ReactDOM.render(e(NavigationBar), domContainer2);