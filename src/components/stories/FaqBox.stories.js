import React from 'react'

import FaqBox from './FaqBox'

export default {
	component: FaqBox,
	title: 'FAQ Box',
}

const Template = args => <FaqBox {...args} />

export const Default = Template.bind({})
Default.args = {
	title: 'What is this?',
	children: <div>This is some FAQ component.</div>,
}
