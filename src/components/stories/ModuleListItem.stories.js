import React from 'react'

import ModuleListItem from '../ModuleListItem'

export default {
	component: ModuleListItem,
	title: 'Module List Item',
}

const Styled = props => {
	return <div className="bg-gray-700">{props.children}</div>
}

const Template = args => (
	<Styled>
		<ModuleListItem {...args} />
	</Styled>
)

export const Default = Template.bind({})
Default.args = {
	title: 'Getting Started',
	noOfVideos: 5,
	duration: 44,
}

