import React from 'react'

import ModuleSection from '../ModuleSection'

export default {
	component: ModuleSection,
	title: 'Sections/Module Section',
}

const Template = args => <ModuleSection {...args} />

const modules = [
	{
		title: 'Getting Started',
		noOfVideos: 6,
		duration: 33,
	},
	{
		title: 'Main Concepts',
		noOfVideos: 11,
		duration: 67,
	},
	{
		title: 'Layout',
		noOfVideos: 4,
		duration: 37,
	},
	{
		title: 'Card Components',
		noOfVideos: 3,
		duration: 34,
	},
]

export const Default = Template.bind({})
Default.args = {
	data: modules,
}
Default.parameters = {
	backgrounds: { default: 'dark' },
}
