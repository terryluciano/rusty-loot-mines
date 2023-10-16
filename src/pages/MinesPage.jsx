import PlaceBet from '../components/MinesGameMode/PlaceBet.jsx';
import GameBoard from '../components/MinesGameMode/GameBoard.jsx';
import PastGamesHistory from '../components/MinesGameMode/PastGamesHistory.jsx';
import MoneyGained from '../components/minesGameMode/MoneyGained.jsx';
import '../stylesheets/minesPage.css';

export default function MinesPage() {
	const element = (
		<div id='mines-page' class='flex flex-col gap-8 items-start'>
			<div id='mines-game'>
				<main class='flex flex-row justify-start items-center gap-32 h-full relative'>
					<div class='mines-bg absolute w-full h-full'></div>
					<PlaceBet />
					<GameBoard />
					<MoneyGained />
				</main>
			</div>
		</div>
	);
	return element;
}
