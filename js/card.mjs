import {translate} from "./utils.mjs";
import {e, Header, Subheader, Image} from "./react-utils.mjs";

export class Card extends React.Component {
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
  
  renderDetails() {
	 
	let detailList = [];
	
	if (this.props.alert){
		return e(
      'h2',
      {className:"itemCard showOnHover"},
	  translate("alert/" + this.props.alert)
    ); 
	}
	if (this.props.summary){
		let details = this.props.summary;
		for (var field in details){
			if (Object.prototype.hasOwnProperty.call(details, field)) {
				let fieldName = e('td', {className:"itemCard "},(translate("field/" + field) + ":"));
				let fieldValue = e('td', {className:"itemCard "},translate(details[field]));
				let row = e('tr', {className:"itemCard"}, [fieldName, fieldValue]);
				detailList.push(row);
			}
		}
		
		const detailItem = this.props.summary;
	}
	  
	 
    return e("table",{className:"itemCard showOnHover"},e("tbody",{className:"itemCard"},detailList));
  }

   render() {
	let className = "itemCard";
	if (this.props.availability !== undefined) {
		className += " " + this.props.availability;
	}
	
	  
    return e(
			'div',
			{key:this.props.key, className:className, onMouseOver:this.setMouseOver, onMouseOut:this.setMouseOut},
			[ Image({
					src:this.props.imgUrl,
					className:"itemCard hideOnHover",
					key:(this.props.name + "-img"
				)})
			, Header({
					className:className,
					value:this.props.name
				})
			, (this.props.subHeader != null ? Subheader({
					className:className,
					value:this.props.subHeader
				}) : null)
			, this.renderDetails()]
    );
  }
}