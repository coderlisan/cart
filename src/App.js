import React, { useState } from 'react';

import './App.css';

function App() {
	const [count, setCount] = useState(0);

	const countUp = () => {
		setCount(count + 1);
	};

	const countDown = () => {
		setCount(count - 1);
	};

	return (
		<div className="container">
			<h1>My Simple counter</h1>
			<button onClick={countUp}>+</button>
			<p>{count}</p>
			<button onClick={countDown}>-</button>
		</div>
	);
}
export default App;
