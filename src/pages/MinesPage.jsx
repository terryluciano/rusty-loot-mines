import PlaceBet from '../components/MinesGameMode/PlaceBet.jsx';
import GameBoard from '../components/MinesGameMode/GameBoard.jsx';
import PastGamesHistory from '../components/MinesGameMode/PastGamesHistory.jsx';
import MoneyGained from '../components/minesGameMode/MoneyGained.jsx';

export default function MinesPage() {
	const element = (
		<div id='mines-page'>
			<main class='flex flex-row justify-center items-center gap-32 h-full bg-black absolute'>
				<PlaceBet />
				<GameBoard />
				<MoneyGained />
			</main>
			<PastGamesHistory />
		</div>
	);
	return element;
}
