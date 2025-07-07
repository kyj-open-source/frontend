import React from 'react';

interface ButtonProps {
	onClick?: () => void;
	text?: string;
	type?: 'button' | 'submit' | 'reset';
	className?: string;
}

const Button: React.FC<ButtonProps> = ({
	onClick,
	text = 'Button',
	type = 'button',
	className = '',
}) => {
	return (
		<button
			type={type}
			onClick={onClick}
			className={`${className} py-2 px-3 rounded-md bg-theme text-white hover:bg-hover-theme focus:outline-none disabled:bg-[#cccccc] disabled:cursor-not-allowed active:bg-theme-d active:scale-98 transition-colors duration-200 ease-in-out`}
		>
			{text}
		</button>
	);
};

export default Button;
