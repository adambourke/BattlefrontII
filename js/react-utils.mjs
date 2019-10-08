import {translate} from "./utils.mjs";

export const e = React.createElement;

export function Header(props) {
	return e('h1', props, translate(props.value)); 
}
  
export function Image(props) {
	 return e(
      'img',
      props
    ); 
}