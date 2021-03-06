import React from 'react'

export default function ModuleListItem({ title, noOfVideos, duration }) {
	return (
		<div className="flex items-center justify-between px-4 py-3 space-x-16 bg-gray-800 even:bg-opacity-75 first:rounded-t last:rounded-b">
			<div className="text-3xl text-gray-300">{title}</div>
			<div className="flex space-x-6">
				<div className="text-center">
					<div className="text-3xl font-bold text-gray-300">{noOfVideos}</div>
					<div className="text-gray-400">videos</div>
				</div>
				<div className="text-center">
					<div className="text-3xl font-bold text-gray-300">{duration}</div>
					<div className="text-gray-400">minutes</div>
				</div>
			</div>
		</div>
	)
}
