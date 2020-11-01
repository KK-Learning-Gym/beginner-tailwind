import React from 'react'

import EmojiCard from '../EmojiCard'

export default {
	component: EmojiCard,
	title: 'Components/Emoji Card',
}

const Template = args => <EmojiCard {...args} />

export const Default = Template.bind({})
Default.args = {
	name: 'Component',
	bg: 'bg-red-400',
}
