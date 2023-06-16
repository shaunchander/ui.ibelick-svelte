import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { cwd } from 'node:process';
import { components } from '$lib/components';

export async function load({ params }) {
	const { slug } = params;
	const fileName = convertToFileName(slug);

	console.log(join(cwd(), 'src', 'components', fileName + '.svelte'));

	const fileContent = await readFile(
		join(cwd(), 'src', 'lib', 'components', fileName + '.svelte'),
		{
			encoding: 'utf-8'
		}
	);

	return {
		code: fileContent
	};
}

function convertToFileName(slug: string) {
	return slug
		.split('-')
		.map((word) => word[0].toUpperCase() + word.slice(1))
		.join('');
}
