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
					<div class='flex flex-col gap-0'>
						<div
							class='mines-game-count flex flex-row justify-center items-center gap-3 w-64 h-11 transition-all'
							style={{
								opacity:
									state.game.isActive || state.game.isBust
										? 1
										: 0,
								background: state.game.isBust
									? 'radial-gradient(50% 100% at 50% 0%, rgba(214, 51, 51, 0.24) 0%, rgba(214, 51, 51, 0.00) 100%)'
									: '',
							}}
						>
							<img class='w-7 h-7' src={blueMine} />
							<p class='text-white'>
								{state.game.numberOfSafeSpots} <span>Left</span>
							</p>
						</div>
						<div
							class='w-full h-[2px]'
							style='background: radial-gradient(50% 100% at 50% 0%, rgba(74, 147, 255, 0.24) 0%, rgba(74, 147, 255, 0.00) 100%);'
						></div>
					</div>
				</Show>
				<Show when={state.game.isBust}>
					<div class='flex flex-col gap-0'>
						<div
							class='mines-game-count flex flex-row justify-center items-center gap-3 w-64 h-11 transition-all'
							style={{
								opacity:
									state.game.isActive || state.game.isBust
										? 1
										: 0,
								background: state.game.isBust
									? 'radial-gradient(50% 100% at 50% 0%, rgba(214, 51, 51, 0.24) 0%, rgba(214, 51, 51, 0.00) 100%)'
									: '',
							}}
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								width='32'
								height='32'
								viewBox='32 32 32 32'
							>
								{' '}
								<g filter='url(#filter0_ddi_8_7176)'>
									{' '}
									<path
										fill-rule='evenodd'
										clip-rule='evenodd'
										d='M64 48L57.9222 50.4463L58.7541 52.4544L56.7459 53.2862L58.4757 58.4756L53.2863 56.7458L52.4545 58.754L50.4463 57.9222L48 64L45.5537 57.9222L43.5455 58.7541L42.7138 56.7459L37.5244 58.4757L39.2542 53.2863L37.246 52.4545L38.0778 50.4463L32 48L38.0778 45.5538L37.246 43.5456L39.2542 42.7138L37.5244 37.5244L42.7137 39.2541L43.5455 37.2459L45.5537 38.0778L48 32L50.4463 38.0778L52.4545 37.2459L53.2863 39.2541L58.4757 37.5243L56.7459 42.7137L58.7541 43.5455L57.9222 45.5537L64 48Z'
										fill='#D63333'
									></path>{' '}
									<path
										fill-rule='evenodd'
										clip-rule='evenodd'
										d='M64 48L57.9222 50.4463L58.7541 52.4544L56.7459 53.2862L58.4757 58.4756L53.2863 56.7458L52.4545 58.754L50.4463 57.9222L48 64L45.5537 57.9222L43.5455 58.7541L42.7138 56.7459L37.5244 58.4757L39.2542 53.2863L37.246 52.4545L38.0778 50.4463L32 48L38.0778 45.5538L37.246 43.5456L39.2542 42.7138L37.5244 37.5244L42.7137 39.2541L43.5455 37.2459L45.5537 38.0778L48 32L50.4463 38.0778L52.4545 37.2459L53.2863 39.2541L58.4757 37.5243L56.7459 42.7137L58.7541 43.5455L57.9222 45.5537L64 48Z'
										fill='url(#paint0_radial_8_7176)'
										fill-opacity='0.36'
									></path>{' '}
									<path
										d='M34.3845 42.6667L35.678 42.1965L36.1481 40.9029L34.4007 40.3205C34.2425 40.2677 34.052 40.2993 33.9163 40.4346C33.7898 40.5615 33.7453 40.749 33.8021 40.9191L34.3845 42.6667Z'
										fill='#D63333'
									></path>{' '}
									<path
										d='M34.3845 42.6667L35.678 42.1965L36.1481 40.9029L34.4007 40.3205C34.2425 40.2677 34.052 40.2993 33.9163 40.4346C33.7898 40.5615 33.7453 40.749 33.8021 40.9191L34.3845 42.6667Z'
										fill='url(#paint1_radial_8_7176)'
										fill-opacity='0.36'
									></path>{' '}
									<path
										d='M34.3845 53.3333L35.678 53.8035L36.1481 55.0971L34.4007 55.6795C34.2425 55.7323 34.052 55.7007 33.9163 55.5654C33.7898 55.4385 33.7453 55.251 33.8021 55.0809L34.3845 53.3333Z'
										fill='#D63333'
									></path>{' '}
									<path
										d='M34.3845 53.3333L35.678 53.8035L36.1481 55.0971L34.4007 55.6795C34.2425 55.7323 34.052 55.7007 33.9163 55.5654C33.7898 55.4385 33.7453 55.251 33.8021 55.0809L34.3845 53.3333Z'
										fill='url(#paint2_radial_8_7176)'
										fill-opacity='0.36'
									></path>{' '}
									<path
										d='M60.322 53.8035L61.6155 53.3333L62.1979 55.0809C62.2547 55.251 62.2102 55.4385 62.0837 55.5654C61.948 55.7007 61.7575 55.7323 61.5993 55.6795L59.8519 55.0971L60.322 53.8035Z'
										fill='#D63333'
									></path>{' '}
									<path
										d='M60.322 53.8035L61.6155 53.3333L62.1979 55.0809C62.2547 55.251 62.2102 55.4385 62.0837 55.5654C61.948 55.7007 61.7575 55.7323 61.5993 55.6795L59.8519 55.0971L60.322 53.8035Z'
										fill='url(#paint3_radial_8_7176)'
										fill-opacity='0.36'
									></path>{' '}
									<path
										d='M61.6155 42.6667L60.322 42.1965L59.8519 40.9029L61.5993 40.3205C61.7575 40.2677 61.948 40.2993 62.0837 40.4346C62.2102 40.5615 62.2547 40.749 62.1979 40.9191L61.6155 42.6667Z'
										fill='#D63333'
									></path>{' '}
									<path
										d='M61.6155 42.6667L60.322 42.1965L59.8519 40.9029L61.5993 40.3205C61.7575 40.2677 61.948 40.2993 62.0837 40.4346C62.2102 40.5615 62.2547 40.749 62.1979 40.9191L61.6155 42.6667Z'
										fill='url(#paint4_radial_8_7176)'
										fill-opacity='0.36'
									></path>{' '}
								</g>{' '}
								<path
									d='M51.6909 43.824L47.7031 45.6849L43.7153 43.824C43.5764 43.7591 43.4118 43.7881 43.3033 43.8965C43.1949 44.005 43.1659 44.1696 43.2308 44.3086L45.0917 48.2963L43.2308 52.2841C43.1659 52.4231 43.1949 52.5877 43.3033 52.6961C43.4118 52.8045 43.5764 52.8335 43.7153 52.7687L47.7031 50.9078L51.691 52.7687C51.8299 52.8335 51.9945 52.8045 52.1029 52.6961C52.2113 52.5877 52.2403 52.4231 52.1755 52.2841L50.3145 48.2963L52.1755 44.3085C52.2403 44.1696 52.2113 44.005 52.1029 43.8965C51.9945 43.7881 51.8299 43.7591 51.6909 43.824Z'
									fill='black'
									fill-opacity='0.56'
								></path>{' '}
								<defs>
									<radialGradient
										id='paint0_radial_8_7176'
										cx='0'
										cy='0'
										r='1'
										gradientUnits='userSpaceOnUse'
										gradientTransform='translate(48 32) rotate(90) scale(32)'
									>
										<stop
											stop-color='#EFF6FF'
											stop-opacity='0.881019'
										/>
										<stop
											offset='1'
											stop-color='#79B7FF'
											stop-opacity='0'
										/>
									</radialGradient>
									<radialGradient
										id='paint1_radial_8_7176'
										cx='0'
										cy='0'
										r='1'
										gradientUnits='userSpaceOnUse'
										gradientTransform='translate(48 32) rotate(90) scale(32)'
									>
										<stop
											stop-color='#EFF6FF'
											stop-opacity='0.881019'
										/>
										<stop
											offset='1'
											stop-color='#79B7FF'
											stop-opacity='0'
										/>
									</radialGradient>
									<radialGradient
										id='paint2_radial_8_7176'
										cx='0'
										cy='0'
										r='1'
										gradientUnits='userSpaceOnUse'
										gradientTransform='translate(48 32) rotate(90) scale(32)'
									>
										<stop
											stop-color='#EFF6FF'
											stop-opacity='0.881019'
										/>
										<stop
											offset='1'
											stop-color='#79B7FF'
											stop-opacity='0'
										/>
									</radialGradient>
									<radialGradient
										id='paint3_radial_8_7176'
										cx='0'
										cy='0'
										r='1'
										gradientUnits='userSpaceOnUse'
										gradientTransform='translate(48 32) rotate(90) scale(32)'
									>
										<stop
											stop-color='#EFF6FF'
											stop-opacity='0.881019'
										/>
										<stop
											offset='1'
											stop-color='#79B7FF'
											stop-opacity='0'
										/>
									</radialGradient>
									<radialGradient
										id='paint4_radial_8_7176'
										cx='0'
										cy='0'
										r='1'
										gradientUnits='userSpaceOnUse'
										gradientTransform='translate(48 32) rotate(90) scale(32)'
									>
										<stop
											stop-color='#EFF6FF'
											stop-opacity='0.881019'
										/>
										<stop
											offset='1'
											stop-color='#79B7FF'
											stop-opacity='0'
										/>
									</radialGradient>
								</defs>{' '}
							</svg>
							<p class='text-[#D63333]'>BUST</p>
						</div>
						<div
							class="class='w-full h-[2px]"
							style='background: radial-gradient(50% 100% at 50% 0%, rgba(214, 51, 51, 0.24) 0%, rgba(214, 51, 51, 0.00) 100%);'
						></div>
					</div>
				</Show>
				<Show when={state.game.isBust}></Show>
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
