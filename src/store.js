import { createMutable } from 'solid-js/store';

export const state = createMutable({
	user: {
		username: 'Test User',
		balance: 100,
	},
	game: {
		isActive: false, // bool
		betAmount: 0,
		profit: 0,
		numberOfBombs: 1,
		spotsChosen: 0,
		isBust: false,
		moneyGained: [],
		winner: false,
		cashoutAmount: 0,
		isFlipAnimation: false,
		mines: [
			{
				mineID: 0,
				isBomb: false,
				isChosen: false,
			},
			{
				mineID: 1,
				isBomb: false,
				isChosen: false,
			},
			{
				mineID: 2,
				isBomb: false,
				isChosen: false,
			},
			{
				mineID: 3,
				isBomb: false,
				isChosen: false,
			},
			{
				mineID: 4,
				isBomb: false,
				isChosen: false,
			},
			{
				mineID: 5,
				isBomb: false,
				isChosen: false,
			},
			{
				mineID: 6,
				isBomb: false,
				isChosen: false,
			},
			{
				mineID: 7,
				isBomb: false,
				isChosen: false,
			},
			{
				mineID: 8,
				isBomb: false,
				isChosen: false,
			},
			{
				mineID: 9,
				isBomb: false,
				isChosen: false,
			},
			{
				mineID: 10,
				isBomb: false,
				isChosen: false,
			},
			{
				mineID: 11,
				isBomb: false,
				isChosen: false,
			},
			{
				mineID: 12,
				isBomb: false,
				isChosen: false,
			},
			{
				mineID: 13,
				isBomb: false,
				isChosen: false,
			},
			{
				mineID: 14,
				isBomb: false,
				isChosen: false,
			},
			{
				mineID: 15,
				isBomb: false,
				isChosen: false,
			},
			{
				mineID: 16,
				isBomb: false,
				isChosen: false,
			},
			{
				mineID: 17,
				isBomb: false,
				isChosen: false,
			},
			{
				mineID: 18,
				isBomb: false,
				isChosen: false,
			},
			{
				mineID: 19,
				isBomb: false,
				isChosen: false,
			},
			{
				mineID: 20,
				isBomb: false,
				isChosen: false,
			},
			{
				mineID: 21,
				isBomb: false,
				isChosen: false,
			},
			{
				mineID: 22,
				isBomb: false,
				isChosen: false,
			},
			{
				mineID: 23,
				isBomb: false,
				isChosen: false,
			},
			{
				mineID: 24,
				isBomb: false,
				isChosen: false,
			},
		],
		get numberOfSafeSpots() {
			return 25 - this.numberOfBombs - this.spotsChosen;
		},
		get nextMoneyGained() {
			return this.profit + this.betAmount;
		},
		addMoneyGained(newValue) {
			if (this.spotsChosen > 1) {
				const newMoneyGained = { value: newValue - this.betAmount };
				this.moneyGained.unshift(newMoneyGained);
			}
			if (this.spotsChosen > 8) {
				this.moneyGained.pop();
			}
		},
		setGameDefault() {
			this.betAmount = 0;
			this.isActive = false;
			this.spotsChosen = 0;
			this.profit = 0;
		},
		mineChosen(index, isSafe) {
			if (this.mines[index].isChosen == false) {
				this.mines[index].isChosen = true;
				this.spotsChosen++;

				if (isSafe) {
					this.profit += this.betAmount;
					this.addMoneyGained(this.profit);
					console.log(this.profit);
				} else {
					this.isBust = true;
					this.gameEnd(true);
				}
			}
		},
		generateNewGame() {
			if (
				this.betAmount >= 0.25 &&
				this.numberOfBombs >= 1 &&
				this.numberOfBombs <= 24 &&
				this.isActive == false
			) {
				// list of availble mine spots
				let nonChosenMines = [
					0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
					17, 18, 19, 20, 21, 22, 23, 24,
				];

				// select bombs spots
				for (let i = 0; i < this.numberOfBombs; i++) {
					// choose a random postion that hasn't been chosen yet
					let nonChosenLength = nonChosenMines.length;

					let randomPosition = Math.floor(
						Math.random() * nonChosenLength
					);

					// get the number of the chosen position
					let selectedMineIndex = nonChosenMines[randomPosition];

					// set mine spot to being a bomb
					this.mines[selectedMineIndex].isBomb = true;

					// get index
					let chosenMineIndex =
						nonChosenMines.indexOf(selectedMineIndex);

					nonChosenMines.splice(chosenMineIndex, 1);
				}

				console.log(this.mines);
				this.profit = this.betAmount;
				this.winner = false;
				this.cashoutAmount = 0;
				this.isActive = true;
			} else {
				console.log('Error when creating new game');
			}
		},
		gameEnd(isLoss) {
			// show all the bomb spots
			this.mines.forEach((mine, index) => {
				if (mine.isBomb) {
					console.log(`${index + 1}: Bomb`);
				}
			});

			// reset mines
			this.mines.forEach((mine) => {
				mine.isBomb = false;
				mine.isChosen = false;
			});

			// display winnings or losses
			if (isLoss) {
				let totalLoss = 0;
				totalLoss -= this.betAmount;
				console.log('Profit:' + totalLoss);
				state.user.balance += totalLoss;
			} else {
				console.log('Profit: ' + this.profit);
				state.user.balance += this.profit;
				this.winner = true;
				const cashVal = this.profit;
				this.cashoutAmount = cashVal;
			}

			this.profit = 0;
			this.spotsChosen = 0;
			this.isActive = false;
			this.moneyGained = [];
		},
	},
	minesAmountButton: [
		{ value: 1 },
		{ value: 5 },
		{ value: 10 },
		{ value: 24 },
	],
});
