'use strict';
import {NavigationBar} from "./navigation-bar.mjs";
import {PageLayout} from "./page-layout.mjs";
import {e} from "./react-utils.mjs";
import {getFieldsFromObject} from "./utils.mjs";

let urlParams = new URLSearchParams(window.location.search);
let path = urlParams.get("path");


let fields = getFieldsFromObject(config.pages);
let initialField = fields[0]

if (!fields.includes(path)){
	window.location.replace("./index.html?path=" + initialField);
}

let pageconfig = config["pages"][path];

//-------Render the page!-------//
//NavigationBar
let domContainer2 = document.querySelector('.navigationBar');
ReactDOM.render(e(NavigationBar, {fields, selectedField:path}), domContainer2);

//PageLayout
if (pageconfig.pageType = "cardflow"){
	pagedata = data[path]);
	let domContainer = document.querySelector('#page_container');
	ReactDOM.render(e(PageLayout, {data:pagedata}), domContainer);
}
