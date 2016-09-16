export const PlayConstants = {
	TOGGLE_PLAY: 'TOGGLE_PLAY',
	START: 'START'
};

export const togglePlay = () => ({
	type: PlayConstants.TOGGLE_PLAY
});

export const start = () => ({
	type: PlayConstants.START
});
