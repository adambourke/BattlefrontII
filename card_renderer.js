'use strict';

const e = React.createElement;



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
	console.log(this.props.name + ": " + this.props.availability);
	if (this.props.availability !== undefined) {
		className += " " + this.props.availability;
	}
    return e(
			'div',
			{key:this.props.key, className:className, onMouseOver:this.setMouseOver, onMouseOut:this.setMouseOut},
			[this.renderImage(), this.renderTitle(className)]
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