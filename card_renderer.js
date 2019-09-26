'use strict';

const e = React.createElement;
const i18n = translations;



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
	 return e(
      'h1',
      {className:className},
	  this.props.name
    ); 
  }
  
  renderDetails() {
	 
	if (this.state.mouseover){
	let detailList = [];
	
	if (this.props.alert){
		return e(
      'h1',
      {className:"itemCard"},
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
	  
	 
    return e("table",{className:"itemCard"},e("tbody",{className:"itemCard"},detailList));  
	} else {
		return null;
	}
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
	  if (!this.state.mouseover){
	 return e(
      'img',
      {src:this.props.imgUrl, className:"itemCard"}
    ); 
	  } else {
		  return null;
	  }
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
	
	this.state = {planets: planets};
	console.log(this.state.planets);
  }
  
	render(){
		
		let array = [];
		for(let planet of this.state.planets){
			planet.key = planet.name;
			array.push(e(Card,planet));
		}
		return array;
	}
}

const domContainer = document.querySelector('#page_container');
ReactDOM.render(e(CardFlow), domContainer);