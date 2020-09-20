import React from 'react'
import ModuleListItem from './ModuleListItem'

export default function ModuleSection({ data }) {
	return (
		<div className="flex flex-col">
			{data.map(el => (
				<ModuleListItem
					title={el.title}
					noOfVideos={el.noOfVideos}
					duration={el.duration}
				/>
			))}
		</div>
	)
}
