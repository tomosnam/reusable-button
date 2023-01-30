export const commonConfig = {
  entryPoints: ['src/main.tsx'],
  bundle: true,
  target: ['chrome58', 'firefox57', 'safari11'],
  splitting: true,
  outdir: 'public',
  format: 'esm',
  loader: { '.svg': 'text' }
};
