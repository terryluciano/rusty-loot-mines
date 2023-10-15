import { state } from '../../../store.js';

export default function BetAmountButton(props) {
	const incrementBetAmount = () => {
		const betAmountInputBox = document.getElementById(
			'bet-amount-input-box'
		);
		if (betAmountInputBox) {
			betAmountInputBox.value = (
				state.game.betAmount + props.value
			).toFixed(2);
			state.game.betAmount = state.game.betAmount + props.value;
		}
	};
	return (
		<button
			class='bet-amount-button h-6 rounded border-white/[.08] border flex-shrink-0'
			onClick={incrementBetAmount}
		>
			+{props.value}
		</button>
	);
}
