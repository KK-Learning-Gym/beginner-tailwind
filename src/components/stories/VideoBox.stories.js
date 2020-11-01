import React from 'react'

import VideoBox from '../VideoBox'

export default {
	component: VideoBox,
	title: 'Components/Video Box',
}

const Template = args => <VideoBox {...args} />

export const Default = Template.bind({})
Default.args = {
	caption: 'This is some video from YouTube. Watch it.',
	link: 'https://www.youtube-nocookie.com/embed/6zIuAyLZPH0',
	title: 'Chris on Youtube'
}
