// import {createElement} from "./createElement.js"

function createElement(tag, props, ...children){
	return ({tag, props, children});
}

const vdom = createElement('div', {}, 
	createElement('p', {}, 
		createElement('h1', {style: "color: red"}, "제목" ),
		createElement('ul', {}, 
			createElement('li', {style: "color: blue"}, "node1"),
			createElement('li', {style: "color: blue"}, "node2"),
			createElement('li', {style: "color: blue"}, "node3"),
			)));

function createDom(vdom) {
	if (typeof vdom === 'string'){
		return document.createTextNode(vdom);
	}
	const element = document.createElement(vdom.tag);
	Object.entries(vdom.props)
	.forEach(([name, value]) => element.setAttribute(name, value))
	// element.setProperty(vdom.props.map(key, value));

	vdom.children
	.map(createDom)
	.forEach(element.appendChild.bind(element));
	
	return element;
}

document.querySelector("#app").appendChild(createDom(vdom));