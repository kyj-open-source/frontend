import React from 'react'

interface PaginationProps {
	currentPage: number
	totalPages: number
	onPageChange: (page: number) => void
	siblingCount?: number
	boundaryCount?: number
}

const Pagination: React.FC<PaginationProps> = ({
	currentPage,
	totalPages,
	onPageChange,
	siblingCount = 1,
	boundaryCount = 1
}) => {
	const generatePageNumbers = (): (number | string)[] => {
		const pages: (number | string)[] = []

		const startPages = []
		for (let i = 1; i <= Math.min(boundaryCount, totalPages); i++) {
			startPages.push(i)
		}

		const endPages = []
		for (let i = Math.max(totalPages - boundaryCount + 1, boundaryCount + 1); i <= totalPages; i++) {
			endPages.push(i)
		}

		const siblingStart = Math.max(currentPage - siblingCount, boundaryCount + 2)
		const siblingEnd = Math.min(currentPage + siblingCount, totalPages - boundaryCount - 1)

		pages.push(...startPages)

		if (siblingStart > boundaryCount + 2) {
			pages.push('...')
		} else if (siblingStart === boundaryCount + 2) {
			pages.push(boundaryCount + 1)
		}

		for (let i = siblingStart; i <= siblingEnd; i++) {
			pages.push(i)
		}

		if (siblingEnd < totalPages - boundaryCount - 1) {
			pages.push('...')
		} else if (siblingEnd === totalPages - boundaryCount - 1) {
			pages.push(totalPages - boundaryCount)
		}


		pages.push(...endPages)

		return pages
	}

	const pages = generatePageNumbers();

	return (
		<nav className="flex items-center justify-center space-x-1 mt-4">
			<button
				onClick={() => onPageChange(currentPage - 1)}
				disabled={currentPage === 1}
				className={`px-3 py-1 rounded-md border ${currentPage === 1
					? 'bg-gray-300 text-gray-500'
					: 'bg-white text-gray-700 hover:bg-gray-100'
					}`}
			>
				Previous
			</button>

			{pages.map((page, index) =>
				typeof page === 'string' ? (
					<span key={index} className="px-3 py-1">
						{page}
					</span>
				) : (
					<button
						key={index}
						onClick={() => onPageChange(page)}
						className={`px-3 py-1 rounded-md border ${page === currentPage
							? 'bg-blue-500 text-white'
							: 'bg-white text-gray-700 hover:bg-gray-100'
							}`}
					>
						{page}
					</button>
				)
			)}

			<button
				onClick={() => onPageChange(currentPage + 1)}
				disabled={currentPage === totalPages}
				className={`px-3 py-1 rounded-md border ${currentPage === totalPages
					? 'bg-gray-300 text-gray-500'
					: 'bg-white text-gray-700 hover:bg-gray-100'
					}`}
			>
				Next
			</button>
		</nav>
	);
}

export default Pagination