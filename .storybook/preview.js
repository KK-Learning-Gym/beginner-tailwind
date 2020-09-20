import React from 'react'
import '../src/tailwind.generated.css'
import './preview.css'

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	backgrounds: {
		default: 'light',
		values: [
			{
				name: 'light',
				value: '#EDF2F7',
			},
			{
				name: 'dark',
				value: '#4A5568',
			},
		],
	},
}

export const decorators = [Story => <Story />]
