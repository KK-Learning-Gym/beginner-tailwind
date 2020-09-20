import React from 'react'

import ModuleListItem from '../ModuleListItem'

export default {
	component: ModuleListItem,
	title: 'Module List Item',
}

const Template = args => <ModuleListItem {...args} />

export const Default = Template.bind({})
Default.args = {
	title: 'Getting Started',
	noOfVideos: 5,
	duration: 44,
}
