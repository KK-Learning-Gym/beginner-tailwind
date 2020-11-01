import React from 'react'

import SubscriptionForm from '../SubscriptionForm'

export default {
	component: SubscriptionForm,
	title: 'Components/Subscription Form',
}

const Template = args => <SubscriptionForm {...args} />

export const Default = Template.bind({})
Default.args = {
	placeholderText: 'somone@someplace.com',
	btnLabel: 'Subscribe',
}
