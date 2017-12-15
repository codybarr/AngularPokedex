const CARDS = require('./card-data.json');
const CARD_IDS = require('./ids.json');

for (let id of CARD_IDS) {
	let results = CARDS.filter( card => {
		return card.id === id
	});

	switch (results.length) {
		case results == 0:
			console.log(`Nothing found for "${id}"`);
			break;
		case results == 1:
			break;
		default:
			console.log(`More than one result for "${id}"`);
	}
}