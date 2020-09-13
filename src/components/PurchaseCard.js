import React from 'react'

export default function PurchaseCard({ title, price, label }) {
	return (
		<div className="p-6 space-y-4 bg-white border-4 border-purple-600 rounded-sm shadow-lg text-center text-gray-600 transition-transform duration-500 ease-in-out transform hover:scale-110">
			<div>{title}</div>
			<div className="text-4xl font-semibold">
				<span>$</span>
				<span className="text-gray-800">{price}</span>
			</div>
			<div>
				<button className="px-8 py-4 bg-yellow-500 rounded text-lg text-orange-900 shadow-sm transition-shadow duration-500 ease-in-out hover:shadow-lg">
					{label}
				</button>
			</div>
		</div>
	)
}
