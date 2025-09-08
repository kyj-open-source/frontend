import React from 'react';
import NextImage, { ImageProps as NextImageProps } from 'next/image';

// Omit conflicting props from NextImageProps and add our custom ones
interface ImageProps extends Omit<NextImageProps, 'src' | 'alt' | 'width' | 'height'> {
	src: string;
	alt: string;
	width?: number;
	height?: number;
	className?: string;
	fallbackSrc?: string;
}

const Image: React.FC<ImageProps> = ({
	src,
	alt,
	width,
	height,
	className = '',
	fallbackSrc,
	...rest
}) => {
	const [imageSrc, setImageSrc] = React.useState(src);
	const [error, setError] = React.useState(false);

	const handleError = () => {
		if (fallbackSrc) {
			setImageSrc(fallbackSrc);
		} else {
			// If no fallback, we can hide the image or show a placeholder
			setError(true);
		}
	};

	if (error) {
		return null; // Or return a placeholder component
	}

	return (
		<NextImage
			src={imageSrc}
			alt={alt}
			width={width}
			height={height}
			onError={handleError}
			className={className}
			{...rest}
		/>
	);
};

export default Image;