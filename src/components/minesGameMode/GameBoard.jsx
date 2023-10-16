import { For, Show } from 'solid-js';
import MineSpot from './MineSpot.jsx';
import '../../stylesheets/minesGameBoard.css';
import blueMine from '../../assets/blue-mine.png';
import bombFoundImg from '../../assets/bomb-bust.png';
import { state } from '../../store.js';

export default function GameBoard() {
	const element = (
		<div class='flex flex-col relative items-center gap-8 self-start h-full'>
			<div
				class='mines-game-count flex flex-row justify-center items-center gap-3 w-64 h-11 transition-all'
				style={{
					opacity: state.game.isActive || state.game.isBust ? 1 : 0,
					background: state.game.isBust
						? 'radial-gradient(50% 100% at 50% 0%, rgba(214, 51, 51, 0.24) 0%, rgba(214, 51, 51, 0.00) 100%)'
						: '',
				}}
			>
				<Show when={state.game.isActive}>
					<img class='w-7 h-7' src={blueMine} />
					<p class='text-white'>
						{state.game.numberOfSafeSpots} <span>Left</span>
					</p>
				</Show>
				<Show when={state.game.isBust}>
					<img src={bombFoundImg} class='w-7 h-7' />
					<p class='text-[#D63333]'>BUST</p>
				</Show>
			</div>
			<div
				id='mines-game-board'
				class='grid grid-rows-5 grid-cols-5 gap-3'
			>
				<For each={state.game.mines}>
					{(item, index) => (
						<MineSpot
							key={index}
							mineID={item.mineID}
							isBomb={item.isBomb}
							isChosen={item.isChosen}
							isGameActive={state.game.isActive}
						/>
					)}
				</For>
			</div>
		</div>
	);
	return element;
}
