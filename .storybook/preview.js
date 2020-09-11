import React from 'react'
import '../src/tailwind.generated.css'

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
}

export const decorators = [
	Story => (
		<div style={{ display: 'grid', placeItems: 'center' }}>
			<Story />
		</div>
	),
]
