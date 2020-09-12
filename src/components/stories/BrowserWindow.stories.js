import React from 'react'

import BrowserWindow from '../BrowserWindow'

export default {
	component: BrowserWindow,
	title: 'Browser Window',
}

const Template = args => (
	<BrowserWindow {...args}>
		<p>Some text goes here. The text can have many paragraphs.</p>
		<p>Some other text goes here. Then something else.</p>
	</BrowserWindow>
)

export const Default = Template.bind({})
Default.args = {
	title: 'This is a weird box',
}
