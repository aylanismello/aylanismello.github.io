export const ChannelConstants = {
	SET_LOADED_COUNT: 'SET_LOADED_COUNT',
	INIT_CHANNEL: 'INIT_CHANNEL',
	REPLACE_TRACK: 'REPLACE_TRACK',
	SELECT_TRACK: 'SELECT_TRACK'
};

export const setChannelsLoaded = (count) => ({
	type: ChannelConstants.SET_LOADED_COUNT,
	count
});

export const initChannel = (name, channel) => ({
	type: ChannelConstants.INIT_CHANNEL,
	name,
	channel
});

export const replaceTrack = (track, channel, idx) => ({
	type: ChannelConstants.REPLACE_TRACK,
	track,
	channel,
	idx
});

export const selectTrack = (channel, idx) => ({
	type: ChannelConstants.SELECT_TRACK,
	channel, idx
});
