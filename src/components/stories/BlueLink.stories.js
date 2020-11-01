import React from 'react'

import BlueLink from '../BlueLink'

export default {
	component: BlueLink,
	title: 'Components/Links/Blue Link',
}

const Template = args => <BlueLink {...args} />

export const Default = Template.bind({})
Default.args = {
	to: '#nowhere',
	label: 'Goes nowhere',
}
