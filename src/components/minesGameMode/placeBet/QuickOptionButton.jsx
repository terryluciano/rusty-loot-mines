import { state } from '../../../store.js';

export default function QuickOptionButton(props) {
	const updateBetAmount = () => {
		const betAmountInputBox = document.getElementById(
			'bet-amount-input-box'
		);
		if (betAmountInputBox && state.game.isActive == false) {
			if (
				isNaN(parseFloat(betAmountInputBox.value)) == false &&
				parseFloat(betAmountInputBox.value) > 0
			)
				if (props.option == '1/2') {
					let newValue = state.game.betAmount / 2;
					state.game.betAmount = newValue;
					betAmountInputBox.value = newValue;
				} else if (props.option == 'x2') {
					let newValue = state.game.betAmount * 2;
					state.game.betAmount = newValue;
					betAmountInputBox.value = newValue;
				} else if (props.option == 'Clear') {
					betAmountInputBox.value = 0;
					state.game.betAmount = 0;
				}
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
