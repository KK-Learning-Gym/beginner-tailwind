import React from 'react'

export default function GrayLink({ to, label }) {
	return (
		<a href={to} className="text-gray-600 hover:text-gray-900">
			{label}
		</a>
	)
}
