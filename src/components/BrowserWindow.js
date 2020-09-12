import React from 'react'

export default function BrowserWindow(props) {
	return (
		<div className="border-2 border-black rounded">
			<div className="flex justify-between items-center border-b-2 border-black">
				<div className="m-2 whitespace-no-wrap text-xl font-semibold">{props.title}</div>
				<div className="m-2 space-x-1 flex">
					<div className="rounded-full bg-red-500 w-3 h-3"></div>
					<div className="rounded-full bg-yellow-500 w-3 h-3"></div>
					<div className="rounded-full bg-green-500 w-3 h-3"></div>
				</div>
			</div>
			<div className="m-2">{props.children}</div>
		</div>
	)
}
