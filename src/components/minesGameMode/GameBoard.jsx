import { For, createSignal } from 'solid-js';
import MineSpot from './MineSpot.jsx';
import '../../stylesheets/mineGameBoard.css';
import blueMine from '../../assets/blue-mine.png';

export default function GameBoard() {
	const mines = [
		1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
		21, 22, 23, 24, 25,
	];

	const minesLeft = 15;

	const element = (
		<div class='flex flex-col'>
			<div class='flex flex-row justify-center items-center gap-2'>
				<img class='w-10 h-10' src={blueMine} />
				<p class='text-white'>{minesLeft} Left</p>
			</div>
			<div
				id='mines-game-board'
				class='grid grid-rows-5 grid-cols-5 gap-3'
			>
				<MineSpot />
				<MineSpot />
				<MineSpot />
				<MineSpot />
				<MineSpot />
				<MineSpot />
				<MineSpot />
				<MineSpot />
				<MineSpot />
				<MineSpot />
				<MineSpot />
				<MineSpot />
				<MineSpot />
				<MineSpot />
				<MineSpot />
				<MineSpot />
				<MineSpot />
				<MineSpot />
				<MineSpot />
				<MineSpot />
				<MineSpot />
				<MineSpot />
				<MineSpot />
				<MineSpot />
				<MineSpot />
			</div>
		</div>
	);
	return element;
}
