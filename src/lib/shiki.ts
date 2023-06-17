import type { Lang, Theme } from 'shiki';
import { renderToHtml, getHighlighter } from 'shiki';

export async function highlight(code: string, lang: Lang, theme: Theme) {
	const highlighter = await getHighlighter({
		langs: [lang],
		theme: theme
	});

	const tokens = highlighter.codeToThemedTokens(code, lang, theme, {
		includeExplanation: false
	});
	const html = renderToHtml(tokens, { bg: 'transparent' });
	return html;
}
