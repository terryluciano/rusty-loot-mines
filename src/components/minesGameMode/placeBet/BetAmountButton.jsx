export default function BetAmountButton(props) {
	return (
		<button class='bet-amount-button h-6 rounded border-white/[.08] border flex-shrink-0'>
			{props.value}
		</button>
	);
}
