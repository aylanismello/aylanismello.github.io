export const TrackConstants = {
	SELECT_TRACK: 'SELECT_TRACK'
};

export const selectTrack = (channel, idx) => ({
	type: TrackConstants.SELECT_TRACK,
	channel, idx
});
