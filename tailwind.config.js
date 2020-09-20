module.exports = {
	purge: ['./src/**/*.js'],
	theme: {},
	variants: {
		backgroundOpacity: ({ after }) => after(['even', 'odd']),
		borderRadius: ({ after }) => after(['first', 'last']),
	},
	plugins: [],
	future: {
		removeDeprecatedGapUtilities: true,
		purgeLayersByDefault: true,
	},
}
