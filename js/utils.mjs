export const e = React.createElement;

export const i18n = translations;

export function translate(field) {
	  if (typeof field === "undefined"){
		  return null;
	  }
	  
	  if (typeof field === "string"){
		  let lookup = getTranslationKey(field);
		  if (lookup == undefined){
			  lookup = field;
		  }
		  return lookup;
	  }
	  
	  if (Array.isArray(field)){
		  let returnValue = "";
		  for (let i = 0; i < field.length; i++){
			  let lookup = getTranslationKey(field[i]);
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
	  
	  return field;
  };
  
function getTranslationKey(path) {
	let elements = path.split("/");
	let currentElement = i18n[elements[0]];
	for (let i = 1; i < elements.length; i++){
		if (currentElement == undefined){
			return undefined;
		}
		currentElement = currentElement[elements[i]];
	}
	return currentElement;
}
  
 export function getFieldsFromObject(obj){
	let fields = [];
	  if (obj){
		for (var field in obj){
			if (Object.prototype.hasOwnProperty.call(obj, field)) {
				fields.push(field);
			}
		}
	  }
	  return fields;
  };