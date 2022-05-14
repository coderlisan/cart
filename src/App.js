import React, { useState } from 'react';

import './App.css';

function App() {
	const [state, setState] = useState({ quantity: 0, amount: 0 });

	const addQuantity = () => {
		setState({
			...state,
			quantity: state.quantity + 1,
		});
	};

	const removeQuantity = () => {
		setState({
			...state,
			quantity: state.quantity - 1,
		});
	};

	const addAmount = () => {
		setState({
			...state,
			amount: state.amount + 1,
		});
	};

	const removeAmount = () => {
		setState({
			...state,
			amount: state.amount - 1,
		});
	};

	console.log(state);

	return (
		<div className="container">
			<div className="quantity">
				<h1>Quantity</h1>
				<button onClick={addQuantity}>+</button>
				<p>{state.quantity}</p>
				<button onClick={removeQuantity}>-</button>
			</div>
			<div className="amount">
				<h1>Amount</h1>
				<button onClick={addAmount}>+</button>
				<p>{state.amount}</p>
				<button onClick={removeAmount}>-</button>
			</div>
			<div>
				<h1>Total Amount: {state.amount * state.quantity}</h1>
			</div>
		</div>
	);
}
export default App;
