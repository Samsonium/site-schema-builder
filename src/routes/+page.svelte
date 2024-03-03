<script lang="ts">
	import { onMount } from 'svelte';
	import { SchemaPage, type SchemaNode } from '$lib';
	import type { Writable } from 'svelte/store';

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

	let blocks: Writable<SchemaNode[]>;

	onMount(() => {
		blocks.set([
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
	})
</script>

<SchemaPage bind:blocks/>
