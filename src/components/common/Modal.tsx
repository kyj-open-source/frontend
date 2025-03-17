import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	title?: string;
	children?: React.ReactNode;
	contentClassName?: string;
}

const Modal: React.FC<ModalProps> = ({
	isOpen,
	onClose,
	title = 'Modal',
	children,
	contentClassName = 'bg-theme-l',
}) => {

	useEffect(() => {
		const handleEscape = (e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				onClose();
			}
		}

		if (isOpen) {
			document.addEventListener('keydown', handleEscape)
			document.body.style.overflow = 'hidden'
		}
		return () => {
			document.removeEventListener('keydown', handleEscape)
			document.body.style.overflow = ''
		}
	}, [isOpen, onClose])

	if (!isOpen) return null

	return ReactDOM.createPortal(
		<div
			className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
			onClick={onClose}
		>
			<div
				className={`bg-white rounded-lg shadow-lg p-6 relative ${contentClassName}`}
				onClick={(e) => e.stopPropagation()}
			>
				{title && (
					<div className='flex items-center justify-between mb-4'>
						<h2 className='text-2xl font-semibold'>{title}</h2>
						<button
							onClick={onClose}
							className="text-gray-500 hover:text-gray-700 focus:outline-none text-3xl leading-none"
						>
							&times;
						</button>
					</div>
				)}
				<div>{children}</div>
			</div>
		</div>,
		document.body
	)

}

export default Modal