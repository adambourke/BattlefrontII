'use strict';
import {NavigationBar} from "./navigation-bar.mjs";
import {PageLayout} from "./page-layout.mjs";
import {e} from "./react-utils.mjs";
import {getFieldsFromObject} from "./utils.mjs";

let urlParams = new URLSearchParams(window.location.search);
let path = urlParams.get("path");


let fields = getFieldsFromObject(data);
let initialField = fields[0]

if (!fields.includes(path)){
	window.location.replace("./index.html?path=" + initialField);
}

let pagedata = data[path];

//-------Render the page!-------//
let domContainer = document.querySelector('#page_container');
ReactDOM.render(e(PageLayout, {data:pagedata}), domContainer);

let domContainer2 = document.querySelector('.navigationBar');
ReactDOM.render(e(NavigationBar, {fields, selectedField:path}), domContainer2);