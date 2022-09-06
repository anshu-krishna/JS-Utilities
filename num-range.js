function* NumRange(start = 0, end = null, step = 1) {
	if(end === null) {
		end = start; start = 0;
	}
	if(start === end) { return; }
	if(!Number.isFinite(start) || !Number.isFinite(end) || !Number.isFinite(step)) {
		throw new TypeError('Function accepts [1,3] numbers');
	}
	const stepSign = Math.sign(step);
	if(Math.sign(end - start) !== stepSign) {
		throw new RangeError(`Infinite steps: ${start} -> ${end} is impossible with ${step} as increment`);
	}
	while(start !== end && Math.sign(end - start) === stepSign) {
		yield start;
		start += step;
	}
}
export default NumRange;