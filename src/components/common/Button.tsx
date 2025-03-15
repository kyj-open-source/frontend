import React from 'react';

interface ButtonProps {
	onClick?: () => void;
	text?: string;
	type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
	onClick,
	text = 'Button',
	type = 'button',
}) => {
	return (
		<button
			type={type}
			onClick={onClick}
			className="py-2 px-3 rounded-md bg-theme text-white hover:bg-hover-theme focus:outline-none disabled:bg-[#cccccc] disabled:cursor-not-allowed active:bg-theme-d active:scale-98"
		>
			{text}
		</button>
	);
};

export default Button;
