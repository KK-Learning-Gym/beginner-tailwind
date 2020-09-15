import React from 'react'

import GrayLink from '../GrayLink'

export default {
	component: GrayLink,
	title: 'Gray Link',
}

const Template = args => <GrayLink {...args} />

export const Default = Template.bind({})
Default.args = {
	to: '#nowhere',
	label: 'Goes nowhere',
}
