function isSeqArray(entries) {
	let i = 0;
	for(const e of entries) {
		if(e[0] !== String(i++)) { return false; }
	}
	return true;
}
function* keyValStr(key, value) {
	if(value === null) { yield key; return; }
	switch(typeof value) {
		case 'string': {
			yield `${key}=${encodeURIComponent(value)}`; return;
		}
		case 'boolean':
		case 'number':
		case 'bigint': {
			yield `${key}=${encodeURIComponent(String(value))}`; return;
		}
		case 'object': {
			const entries = Object.entries(value);
			if(Array.isArray(value) && isSeqArray(entries)) {
				const kArr = key + encodeURIComponent('[]');
				for(const [k, v] of entries) {
					yield* keyValStr(kArr, v);
				}
			} else {
				for(const [k, v] of entries) {
					yield* keyValStr(key + encodeURIComponent(`[${k}]`), v);
				}
			}
			return;
		}
		case 'undefined': { yield key; return; }
		// case 'symbol': return; // No output
		// case 'function': { return; } // Already handled
	}
}
function* genItems(data) {
	const entries = Object.entries(data);
	if(entries.length === 0) { yield ''; return; }

	for(const [key, value] of entries) {
		const eKey = encodeURIComponent(key);
		if(typeof value === 'function') {
			try {
				yield* keyValStr(eKey, value.apply(data));
			} catch (error) {}
		} else {
			yield* keyValStr(eKey, value);
		}
	}
}

function PHPQueryBuilder(data) {
	if(typeof data !== 'object') {
		throw new TypeError('Expected a object|null as a parameter');
	}
	if(data === null) { return ''; }
	
	return Array.from(genItems(data)).join('&');
}

export default PHPQueryBuilder;