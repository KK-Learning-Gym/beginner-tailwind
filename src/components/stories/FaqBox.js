import React from 'react'

export default function FaqBox(props) {
	return (
		<>
			<div>{props.title}</div>
			<div>{props.children}</div>
		</>
	)
}
