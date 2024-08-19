import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'My Docs',
			social: {
				github: 'https://github.com/withastro/starlight',
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
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
				
					
			],
		}),
	],
});
