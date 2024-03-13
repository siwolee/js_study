/* @jsx createElement */
import {createElement, useState, render} from './component.js'

const Title = (props) => {
	return <h1 style="color:red" id={props.id}>{props.children}</h1>
}

const Counter = () => {
	var [count, setCount] = useState(0);
	function countUp (){setCount(count() + 1)};

	// const props = {countUp};
	
	return <div>
		<p>counter is counting</p>
		<p>{count()}</p>
		<button onClick={countUp()}>+</button>
	</div>
}

const App = () => 
<div>
	<p>
		<Title id="react">nono
		</Title>
		<ul>
			<li>아이템1</li>
			<li>아이템2</li>
			<li>아이템3</li>
		</ul>
		<Counter></Counter>
	</p>
</div>

render(document.querySelector("#app"), <App />)