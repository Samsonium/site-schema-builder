<script lang="ts">
	import type { SchemaNode } from '$lib/types/SchemaNode.js';
	import type { SchemaNodeProps } from '$lib/types/SchemaNodeProps.js';

	/** Node level */
	export let level: number;

	/** Name */
	export let name: string;

	/** Description */
	export let description: string;

	/** Content */
	export let content: string = '';

	/** Children */
	export let children: SchemaNode[];

	/** Properties */
	export let properties: Partial<SchemaNodeProps>;
	$: console.log(properties);

	// flex `align-items` property
	$: alignItems = (() => {
		const alignment = properties.alignItems ?? 'center';
		switch (alignment) {
			case 'start':
				return 'flex-start';

			case 'end':
				return 'flex-end';

			default:
				return alignment;
		}
	})();

	// flex `justify-content` property
	$: justifyContent = (() => {
		const alignment = properties.justifyContent ?? 'center';
		switch (alignment) {
			case 'start':
				return 'flex-start';

			case 'end':
				return 'flex-end';

			default:
				return alignment;
		}
	})();

	// CSS properties
	$: style = [
		'width:' + (properties.width?.fix ?? '100%'),
		'min-width:' + (properties.width?.min ?? '0'),
		'max-width:' + (properties.width?.max ?? 'none'),
		'height:' + (properties.height?.fix ?? 'auto'),
		'min-height:' + (properties.height?.min ?? '0'),
		'max-height:' + (properties.height?.max ?? 'none'),
		'flex-direction:' + (properties?.direction ?? 'row'),
		'flex-wrap:' + (properties?.wrap ? 'wrap' : 'nowrap'),
		'align-items:' + alignItems,
		'justify-content:' + justifyContent,
		'--block-level:' + `var(--block-level-${Math.min(level, 9)})`
	].join(';');
</script>

<div class="block" {style}>
	<div class="bg"></div>

	{#if children.length}
		{#each children as child}
			<svelte:self level={level + 1} {...child} />
		{/each}
	{:else if content}
		{content}
	{:else}
		{name}
	{/if}

	<!--	<button class="remove">Delete</button>-->
</div>

<style>
		* {
				--block-level-0: #EFEFEF;
				--block-level-1: #DCDCDC;
				--block-level-2: #D0D0D0;
				--block-level-3: #ACACAC;
				--block-level-4: #999999;
				--block-level-5: #888888;
				--block-level-6: #777777;
				--block-level-7: #666666;
				--block-level-8: #555555;
				--block-level-9: #444444;
		}

    .block {
        position: relative;
        padding: 8px;
        display: flex;
				/*background: var(--block-level);*/
				border-radius: 8px;
        font: 400 16px sans-serif;
        text-align: center;
    }

		.block .bg {
        position: absolute;
        z-index: -1;
        top: 2px;
        left: 2px;
        right: 2px;
        bottom: 2px;
				background: var(--block-level);
				border-radius: 8px;
		}

		.block button.remove {
        position: absolute;
        top: 4px;
        right: 4px;
				background: orangered;
				color: white;
				font: 500 14px sans-serif;
				padding: 4px;
				border-radius: 4px;
        border: none;
        opacity: 0;
        cursor: pointer;
		}

		.block:hover button.remove {
        opacity: 1;
		}
</style>
