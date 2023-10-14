import { For, createEffect } from 'solid-js';
import MineSpot from './MineSpot.jsx';
import '../../stylesheets/minesGameBoard.css';
import blueMine from '../../assets/blue-mine.png';
import { state } from '../../store.js';

export default function GameBoard() {
	const element = (
		<div class='flex flex-col relative items-center gap-8 self-start h-full'>
			<div
				class='mines-game-count flex flex-row justify-center items-center gap-3 w-64 h-11 transition-all'
				style={{ opacity: state.game.isActive ? 1 : 0 }}
			>
				<img class='w-7 h-7' src={blueMine} />
				<p class='text-white'>
					{state.game.numberOfSafeSpots} <span>Left</span>
				</p>
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
