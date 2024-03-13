function createDiv(props){
	return [document.createElement('div')]
	.map(element => {
		Object
			.entries({ ...props})
			.forEach(([name, value]) => element.setAttribute(name, value))
		return element;
	})[0];
}

function createH1(props){
	return [document.createElement('h1')]
	.map(element => {
		Object
			.entries({ ...props})
			.forEach(([name, value]) => element.setAttribute(name, value))
		return element;
	})[0];
}

function createUl(props){
	return [document.createElement('ul')]
	.map(element => {
		Object
			.entries({ ...props})
			.forEach(([name, value]) => element.setAttribute(name, value))
		return element;
	})[0];
}

function createLi(props){
	return [document.createElement('Li')]
	.map(element => {
		Object
			.entries({ ...props})
			.forEach(([name, value]) => element.setAttribute(name, value))
		return element;
	})[0];
}


const creatorMap = {
	div : createDiv,
	h1 : createH1,
	ul : createUl,
	li : createLi,
}


// const coupler = map = (type, props) => map[type](props);
// export const createElement = (type, props) => coupler(creatorMap);

export function createElement(type, props) { return creatorMap[type](props)};


const app = document.querySelector("#app");
app.appendChild(createElement('h1', {value: "apple"}));
app.appendChild(createElement('h1', {id: "header"}));