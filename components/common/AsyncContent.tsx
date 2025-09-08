import React from 'react';

// We use TypeScript generics `<T>` to make this component work with any type of data array.
interface AsyncContentProps<T> {
	data: T[] | null | undefined;
	emptyState: React.ReactNode;
	children: React.ReactNode;
}

export default function AsyncContent<T>({ data, emptyState, children }: AsyncContentProps<T>) {
	// If the data is null, undefined, or an empty array, show the empty state.
	if (!data || data.length === 0) {
		return <>{emptyState}</>;
	}

	// Otherwise, render the children (the success UI).
	return <>{children}</>;
}