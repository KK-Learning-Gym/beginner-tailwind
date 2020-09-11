import React from 'react'

import FaqBox from '../FaqBox'

export default {
	component: FaqBox,
	title: 'FAQ Box',
}

const Template = args => <FaqBox {...args} />

export const Default = Template.bind({})
Default.args = {
	title: 'What is this?',
	text: 'This is a FAQ Box. It contains a question with its answer.',
}
