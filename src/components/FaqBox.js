import React from 'react'

export default function FaqBox({ title, text }) {
	return (
		<div className="p-5 rounded border-2 border-gray-300">
			<div className="text-lg font-semibold">{title}</div>
			<div>{text}</div>
		</div>
	)
}
