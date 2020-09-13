import React from 'react'

export default function EmojiCard({ name, bg }) {
	return (
		<div className="flex items-center bg-white rounded overflow-hidden">
			<div className={bg + ' py-4 px-8 text-2xl'}>
				<span role="img" aria-label="heart-eyes">
					😍
				</span>
			</div>
			<div className="text-gray-600 py-4 px-6">{name}</div>
		</div>
	)
}
