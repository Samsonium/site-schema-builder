import type { Size } from '$lib/types/Size.js';

/** Properties list for schema node */
export interface SchemaNodeProps {

	/** Content direction */
	direction: 'row' | 'column' | 'row-reverse' | 'column-reverse';

	/** Should content wrap to a new line */
	wrap: boolean;

	/** Alignment on cross axis */
	alignItems: 'start' | 'end' | 'center' | 'stretch';

	/** Alignment on main axis */
	justifyContent: 'start' | 'end' | 'center' | 'space-between' | 'space-around';

	/** Width properties (width, min- and max-width) */
	width: Size;

	/** Height properties (height, min- and max-height) */
	height: Size;
}
