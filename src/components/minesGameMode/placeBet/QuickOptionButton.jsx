import { state } from '../../../store.js';

export default function QuickOptionButton(props) {
	const updateBetAmount = () => {
		if (props.option == '1/2') {
			state.game.betAmount = state.game.betAmount / 2;
		} else if (props.option == 'x2') {
			state.game.betAmount = state.game.betAmount * 2;
		} else if (props.option == 'Clear') {
			state.game.betAmount = 0;
		}
	};

	return (
		<button
			class='bet-amount-button h-6 rounded border-white/[.08] border flex-shrink-0'
			onClick={updateBetAmount}
		>
			{props.option}
		</button>
	);
}
