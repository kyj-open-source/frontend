import React, { useEffect, useState } from 'react'

interface ToastProps {
	message: string;
	duration?: number;
	onClose?: () => void;
	type?: 'info' | 'success' | 'error' | 'warning';
}

const Toast: React.FC<ToastProps> = ({
	message,
	duration = 3000,
	onClose,
	type = 'info'
}) => {

	const [visible, setVisible] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setVisible(false);
			if (onClose) onClose();
		}, duration);

		return () => clearTimeout(timer);
	}, [duration, onClose]);

	if (!visible) return null;

	let bgColor = 'bg-blue-500'; // info (default)
	if (type === 'success') bgColor = 'bg-green-500';
	else if (type === 'warning') bgColor = 'bg-yellow-500';
	else if (type === 'error') bgColor = 'bg-red-500';

	return (
		<div
			className={`fixed bottom-4 right-4 z-50 p-4 rounded shadow-lg text-white ${bgColor} transition-opacity duration-300`}
		>
			{message}
		</div>
	);
}

export default Toast