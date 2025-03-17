import React from 'react'

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
	src: string;
	alt: string;
	widthClass?: string;
	heightClass?: string;
	className?: string;
	fallbackSrc?: string;
}

const Image: React.FC<ImageProps> = ({
	src,
	alt,
	widthClass = 'w-full',
	heightClass = 'h-auto',
	className = '',
	fallbackSrc,
	...rest
}) => {
	const [imageSrc, setImageSrc] = React.useState(src)

	const handleError = () => {
		if (fallbackSrc) {
			setImageSrc(fallbackSrc)
		}
	}

	return (
		<img
			src={imageSrc}
			alt={alt}
			onError={handleError}
			className={`${heightClass} ${widthClass} ${className}`}
			{...rest}
		/>
	)
}

export default Image