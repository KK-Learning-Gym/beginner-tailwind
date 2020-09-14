import React from 'react'

export default function SubscriptionForm({ placeholderText, btnLabel }) {
	return (
		<form className="flex">
			<input
				type="email"
				placeholder={placeholderText}
				className="min-w-full px-4 py-4 border-t-2 border-b-2 border-l-2 border-gray-500 rounded-l focus:border-purple-400 outline-none"
			/>
			<button
				type="submit"
				className="bg-purple-400 px-4 py-4 text-white border-2 border-purple-400 rounded-r"
			>
				{btnLabel}
			</button>
		</form>
	)
}
