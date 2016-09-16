export const MetronomeConstants = {
	TICK: 'TICK'
};

export const tick = (quantization) => ({
	type: MetronomeConstants.TICK,
	quantization
});
