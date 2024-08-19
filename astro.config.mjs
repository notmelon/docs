import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'o7 Node',
			social: {
				github: 'https://github.com/o7node/docs',
			},
			sidebar: [
				{
					label: 'Node Connections',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Virginia Connection', slug: 'guides/virginia' }, 
						{ label: 'Frankfurt Connection', slug: 'guides/frankfurt'}
					],
					
				},
				{
					label: 'FAQs',
					items: [
						{ label: 'Frequently Asked Questions', slug: 'guides/faqs'}
					]
				},
				
					
			],
		}),
	],
});
