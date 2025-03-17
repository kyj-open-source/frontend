import React from "react";
import Image from "./Image";

interface CardProps {
	title?: string;
	description?: string;
	imageSrc?: string;
	imageAlt?: string;
	width?: string;
	height?: string;
	className?: string;
	children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({
	title,
	description,
	imageSrc,
	imageAlt = "Card Image",
	width = "w-full",
	height = 'h-auto',
	className = '',
	children
}) => {
	return (
		<div className={`bg-white rounded-lg shadow-md overflow-hidden ${width} ${height} ${className}`}>
			{imageSrc && (
				<Image src={imageSrc} alt={imageAlt} className="w-full object-cover" />
			)}
			<div className="p-4">
				{title && <h2 className="text-xl font-bold mb-2">{title}</h2>}
				{description && <p className="text-gray-700 mb-4">{description}</p>}
				{children}
			</div>
		</div>
	)
}

export default Card;