import React from 'react'

import PurchaseCard from '../PurchaseCard'

export default {
	component: PurchaseCard,
	title: 'Purchase Card',
}

const Template = args => <PurchaseCard {...args} />

export const Default = Template.bind({})
Default.args = {
	title: 'Start Tailwind-ing',
	price: 47,
	label: 'Buy the Course',
}
