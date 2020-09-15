import React from 'react'

export default function BlueLink({ to, label }) {
	return (
		<a href={to} className="text-blue-500 hover:underline">
			{label}
		</a>
	)
}
