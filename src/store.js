import { createMutable } from 'solid-js/store';

export const state = createMutable({
	user: {
		username: 'Test User',
		balance: 100,
	},
	game: {
		isActive: false, // bool
		betAmount: 0.5,
		profit: 0,
		numberOfBombs: 1,
		mines: [
			{
				isBomb: false,
				isChosen: false,
			},
			{
				isBomb: false,
				isChosen: false,
			},
			{
				isBomb: false,
				isChosen: false,
			},
			{
				isBomb: false,
				isChosen: false,
			},
			{
				isBomb: false,
				isChosen: false,
			},
			{
				isBomb: false,
				isChosen: false,
			},
			{
				isBomb: false,
				isChosen: false,
			},
			{
				isBomb: false,
				isChosen: false,
			},
			{
				isBomb: false,
				isChosen: false,
			},
			{
				isBomb: false,
				isChosen: false,
			},
			{
				isBomb: false,
				isChosen: false,
			},
			{
				isBomb: false,
				isChosen: false,
			},
			{
				isBomb: false,
				isChosen: false,
			},
			{
				isBomb: false,
				isChosen: false,
			},
			{
				isBomb: false,
				isChosen: false,
			},
			{
				isBomb: false,
				isChosen: false,
			},
			{
				isBomb: false,
				isChosen: false,
			},
			{
				isBomb: false,
				isChosen: false,
			},
			{
				isBomb: false,
				isChosen: false,
			},
			{
				isBomb: false,
				isChosen: false,
			},
			{
				isBomb: false,
				isChosen: false,
			},
			{
				isBomb: false,
				isChosen: false,
			},
			{
				isBomb: false,
				isChosen: false,
			},
			{
				isBomb: false,
				isChosen: false,
			},
			{
				isBomb: false,
				isChosen: false,
			},
		],
		get numberOfSafeSpots() {
			return 25 - this.numberOfBombs;
		},
	},
	minesAmountButton: [
		{ value: 1 },
		{ value: 5 },
		{ value: 10 },
		{ value: 24 },
	],
	generateNewGame() {
		if (
			this.game.betAmount >= 0.25 &&
			this.game.numberOfBombs >= 1 &&
			this.game.numberOfBombs <= 24 &&
			this.game.isActive == false
		) {
			// list of availble mine spots
			let nonChosenMines = [
				0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
				18, 19, 20, 21, 22, 23, 24,
			];

			// select bombs spots
			for (let i = 0; i < this.game.numberOfBombs; i++) {
				// choose a random postion that hasn't been chosen yet
				let nonChosenLength = nonChosenMines.length;

				let randomPosition = Math.floor(
					Math.random() * nonChosenLength
				);

				// get the number of the chosen position
				let selectedMineIndex = nonChosenMines[randomPosition];

				// set mine spot to being a bomb
				this.game.mines[selectedMineIndex].isBomb = true;

				// get index
				let chosenMineIndex = nonChosenMines.indexOf(selectedMineIndex);

				nonChosenMines.splice(chosenMineIndex, 1);
			}

			console.log(this.game.mines);

			this.game.isActive = true;
		} else {
			console.log('Error when creating new game');
		}
	},
	gameEnd() {},
});
