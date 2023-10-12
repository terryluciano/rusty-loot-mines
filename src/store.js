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
});
