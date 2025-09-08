// Using your Spinner component for the loading state.
// Assuming it's located at '@/app/common/Spinner'

import Spinner from "@/components/common/Spinner";

export default function Loading() {
	return (
		<div className="flex items-center justify-center min-h-[60vh]">
			<Spinner size={8} color="indigo" />
		</div>
	);
}