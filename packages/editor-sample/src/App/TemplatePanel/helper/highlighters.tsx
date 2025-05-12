import hljs from 'highlight.js';
import prettierPluginBabel from 'prettier/plugins/babel';
import prettierPluginEstree from 'prettier/plugins/estree';
import prettierPluginHtml from 'prettier/plugins/html';
import { format } from 'prettier/standalone';

hljs.registerLanguage('json', require('highlight.js/lib/languages/json'));
hljs.registerLanguage('html', require('highlight.js/lib/languages/xml'));

export async function html(value: string): Promise<string> {
  const prettyValue = await format(value, {
    parser: 'html',
    plugins: [prettierPluginHtml],
  });
  return hljs.highlight(prettyValue, { language: 'html' }).value;
}

export async function json(value: string): Promise<string> {
  const prettyValue = await format(value, {
    parser: 'json',
    printWidth: 0,
    trailingComma: 'all',
    plugins: [prettierPluginBabel, prettierPluginEstree],
  });
  return hljs.highlight(prettyValue, { language: 'javascript' }).value;
}