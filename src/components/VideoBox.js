import React from 'react'

export default function VideoBox({ caption, link }) {
	return (
		<div className="border-2 border-gray-900 rounded">
			<div className="p-4">{caption}</div>
			<iframe
				width="560"
				height="315"
				src={link}
				frameborder="0"
				allow="accelerometer; encrypted-media; gyroscope"
				allowfullscreen
			></iframe>
		</div>
	)
}
