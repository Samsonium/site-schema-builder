import type { SchemaNodeProps } from '$lib/types/SchemaNodeProps.js';

/** Schema node info */
export interface SchemaNode {

	/**
	 * Node name (displays if content
	 * string is not provided)
	 */
	name: string;

	/** Node description */
	description: string;

	/**
	 * Display content (replaces node
	 * name at display if provided)
	 */
	content: string | undefined;

	/** Node children */
	children: SchemaNode[];

	/** Schema node properties */
	properties: Partial<SchemaNodeProps>;
}
