/* @jsx createElement */
const hooks = [];
let currentComponent = 0;

export function useState(initValue){
	var position = currentComponent -1;
	if (!hooks[position]){
		hooks[position] = initValue;
	}
	const state = () => {
		console.log(hooks[position]);
		return hooks[position];
	}
	const modifier = nextValue => {
		console.log("modi"+ nextValue);
		console.log(hooks);
		hooks[position] = nextValue;
		// render();
	} 

	return [state, modifier];
} //modifier를 통해서만 값 수정이 가능한 구조

function makeProps(props, children){
	return {
		...props,
		children: children.length === 1 ? children[0] : children
	}
}

export function createElement(tag, props, ...children){
	props = props || {};
	if (typeof tag === 'function'){
		hooks[currentComponent] = null;
		currentComponent++;
		if (children.length > 0){
			return tag(makeProps(props, children))
		}
		
		return tag(props);
	}
	else {
		return ({tag, props, children});
	}
}



export function createDom(node) {
	if (typeof node === 'string'){
		return document.createTextNode(node);
	}
	if (typeof node === 'number'){
		return document.createTextNode(node.toString());
	}
	if (node && (typeof node.props === "undefined" || typeof node.props === "null")){
		node.props = {};
	}
	const element = document.createElement(node.tag);
	Object.entries(node.props)
	.forEach(([name, value]) => 
	element.setAttribute(name, value))

	if (node.children !== null && node.children !== undefined)
	{
		node.children
		.map(createDom)
		.forEach(element.appendChild.bind(element));
	}
	return element;
}

export function render(node, vdom){
	node.appendChild(createDom(vdom))
}

//vdom?
// const render = function() {
// 	let prevDom = null;
	
// 	return function(vdom, container) {
// 		if (prevDom === null){
// 			prevDom = vdom;
// 		}
// 		container.appendChild(createDom(vdom))
// 	}
// }


class myReact {

}