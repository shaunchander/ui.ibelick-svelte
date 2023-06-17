import { highlight } from '$lib/shiki.js';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { cwd } from 'node:process';

import { components } from '$lib/data.js';

export async function load({ params }) {
	const { slug } = params;
	const fileName = convertToFileName(slug);
	const componentName = convertToComponentName(slug);
	let twConfig;

	console.log(`Generating page for ${componentName}...`);

	components.map((component) => {
		if (component.slug === component.slug) {
			twConfig = JSON.stringify(component?.twConfig, null, 2);
		}
	});

	const fileContent = await readFile(
		join(cwd(), 'src', 'lib', 'components', fileName + '.svelte'),
		{
			encoding: 'utf-8'
		}
	);

	const htmlCode = highlight(fileContent, 'svelte', 'github-dark');

	let twCode;
	if (twConfig) {
		twCode = highlight(twConfig, 'json', 'github-dark');
	}

	return {
		name: componentName,
		code: htmlCode,
		twCode,
		slug
	};
}

function convertToFileName(slug: string) {
	return slug
		.split('-')
		.map((word) => word[0].toUpperCase() + word.slice(1))
		.join('');
}

function convertToComponentName(slug: string) {
	return slug
		.split('-')
		.map((word) => word[0].toUpperCase() + word.slice(1))
		.join(' ');
}
