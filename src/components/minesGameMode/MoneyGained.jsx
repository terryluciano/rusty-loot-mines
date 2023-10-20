import '../../stylesheets/minesMoneyGained.css';
import { state } from '../../store.js';
import CurrentProfit from './moneyGained/CurrentProfit.jsx';
import NextProfit from './moneyGained/NextProfit.jsx';
import PastProfit from './moneyGained/PastProfit.jsx';
import LossProfit from './moneyGained/LossProfit.jsx';
import { For } from 'solid-js';

export default function MoneyGained() {
	return (
		<div class='money-gained flex flex-col justify-start items-end self-center mt-56 gap-3 overflow-x-hidden'>
			<NextProfit />
			<Show when={state.game.isBust} fallback={<CurrentProfit />}>
				<LossProfit />
			</Show>
			<For each={state.game.moneyGained}>
				{(item) => <PastProfit value={item.value} />}
			</For>
		</div>
	);
}
