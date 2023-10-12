import '../../stylesheets/minesHistory.css';
import goldDiamond from '../../assets/gold-diamond.png';

export default function PastGamesHistory() {
	return (
		<div
			id='past-games-history'
			class='flex flex-row gap-2 justify-center items-center float-left'
		>
			<div class='huge-wins-history flex flex-column justify-start'>
				<h4 class='flex flex-row justify-center items-center gap-1'>
					<img src={goldDiamond} />
					<p>HUGE WINS</p>
				</h4>
				<div class='flex flex-row gap-2'></div>
			</div>
			<div class='live-bets-history flex flex-column justify-start'>
				<h4 class='flex flex-row justify-center items-center gap-1'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='16'
						height='17'
						viewBox='0 0 16 17'
						fill='none'
					>
						<g filter='url(#filter0_d_8_11492)'>
							<circle cx='8' cy='8.5' r='2' fill='#FF5858' />
						</g>
						<defs>
							<filter
								id='filter0_d_8_11492'
								x='0'
								y='0.5'
								width='16'
								height='16'
								filterUnits='userSpaceOnUse'
								color-interpolation-filters='sRGB'
							>
								<feFlood
									flood-opacity='0'
									result='BackgroundImageFix'
								/>
								<feColorMatrix
									in='SourceAlpha'
									type='matrix'
									values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
									result='hardAlpha'
								/>
								<feMorphology
									radius='1'
									operator='dilate'
									in='SourceAlpha'
									result='effect1_dropShadow_8_11492'
								/>
								<feOffset />
								<feGaussianBlur stdDeviation='2.5' />
								<feComposite in2='hardAlpha' operator='out' />
								<feColorMatrix
									type='matrix'
									values='0 0 0 0 1 0 0 0 0 0.345098 0 0 0 0 0.345098 0 0 0 0.15 0'
								/>
								<feBlend
									mode='normal'
									in2='BackgroundImageFix'
									result='effect1_dropShadow_8_11492'
								/>
								<feBlend
									mode='normal'
									in='SourceGraphic'
									in2='effect1_dropShadow_8_11492'
									result='shape'
								/>
							</filter>
						</defs>
					</svg>
					<p>LIVE BETS</p>
				</h4>
				<div class='flex flex-row gap-2'></div>
			</div>
		</div>
	);
}
