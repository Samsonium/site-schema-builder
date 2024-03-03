<script lang="ts">
	import { writable } from 'svelte/store';
	import type { SchemaNode } from '$lib/types/SchemaNode.js';
	import BlockRender from '$lib/BlockRender.svelte';

	/** Schema name */
	export let name = 'Untitled';

	function createBlock(props: Partial<SchemaNode>, ...children: SchemaNode[]): SchemaNode {
		return {
			name: 'Some name',
			description: 'Some description',
			content: '',
			children: children ?? [],
			properties: {},
			...props,
		};
	}

	/** Schema blocks */
	const blocks = writable<SchemaNode[]>([
		createBlock(
			{
				properties: {
					alignItems: 'stretch'
				}
			},
			createBlock({
				name: 'Logo',
				properties: {
					width: {
						fix: '100px'
					}
				}
			}),
			createBlock({
				name: 'Navbar'
			}),
			createBlock({
				name: 'Contacts',
				properties: {
					width: {
						max: '100px'
					}
				}
			})
		),
		createBlock({
			name: 'Menu bar'
		}),
		createBlock(
			{
				properties: {
					height: {
						fix: '300px'
					}
				}
			},
			createBlock({
				content: '<',
				properties: {
					width: {
						fix: '64px'
					},
					height: {
						fix: '64px'
					}
				}
			}),
			createBlock({
				name: 'Carousel content',
				properties: {
					height: {
						fix: '100%'
					}
				}
			}),
			createBlock({
				content: '>',
				properties: {
					width: {
						fix: '64px'
					},
					height: {
						fix: '64px'
					}
				}
			})
		),
		createBlock({
			name: 'Title (popular products)',
			properties: {
				height: {
					fix: '60px'
				}
			}
		}),
		createBlock(
			{
				properties: {
					wrap: true
				}
			},
			...new Array(10).fill(createBlock({
				name: 'Card',
				properties: {
					width: {
						fix: `calc(100% / 5)`
					},
					height: {
						fix: '300px'
					}
				}
			}))
		)
	]);
</script>

<header>
	<h1>Schema "{name}"</h1>
</header>
<div class="page-wrapper">
	{#each $blocks as block}
		<BlockRender level={0} {...block} />
	{/each}
</div>

<style>
		header {
        width: 100%;
				padding: 16px;
				background: #EFEFEF;
        margin-bottom: 32px;
		}

		header h1 {
        width: 100%;
        height: 100%;
				font: 700 16px sans-serif;
				color: #2D2D2D;
        text-align: center;
		}

    .page-wrapper {
        width: 100%;
        max-height: 100vh;
        max-width: 1200px;
				margin: 0 auto;
        height: max-content;
        overflow-x: hidden;
        overflow-y: auto;
        display: flex;
        flex-flow: column;
        align-items: stretch;
        justify-content: flex-start;
    }
</style>
