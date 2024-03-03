/** Size CSS property value */
export type SizeValue = string;

/** Size properties reference */
export type Size = Partial<{
	min: SizeValue,
	max: SizeValue,
	fix: SizeValue
}>;
