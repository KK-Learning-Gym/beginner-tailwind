import ModuleSection from './ModuleSection'
import { modules } from '../data'

export default function Modules() {
	return (
		<div className="bg-gray-700 p-32">
			<div className="my-8 space-y-4 text-center text-white">
				<div className="text-6xl font-bold">The Modules/Videos</div>
				<div className="text-2xl">
					9.25 hours of Tailwind learning in 19 modules/75 videos.
				</div>
			</div>
			<ModuleSection data={modules} />
		</div>
	)
}
