import React from 'react';

interface SpinnerProps {
	size?: number;
	color?: string;
	className?: string;
}

const Spinner: React.FC<SpinnerProps> = ({
	size = 40,
	color = 'text-blue-500',
	className = '',
}) => {
	return (
		<div className={`flex items-center justify-center ${className}`}>
			<svg
				className={`animate-spin ${color}`}
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				style={{ width: size, height: size }}
			>
				<circle
					className="opacity-25"
					cx="12"
					cy="12"
					r="10"
					stroke="currentColor"
					strokeWidth="4"
				/>
				<path
					className="opacity-75"
					fill="currentColor"
					d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
				/>
			</svg>
		</div>
	);
};

export default Spinner;
