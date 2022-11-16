module.exports = {
	globDirectory: 'public/',
	globPatterns: [
		'**/*.{png,json,html,js,xml}'
	],
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	],
	swDest: 'public/sw.js',
};
