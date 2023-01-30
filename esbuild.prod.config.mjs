import * as esbuild from 'esbuild';
import { commonConfig } from './esbuild.common.mjs';

await esbuild.build({
  ...commonConfig,
  minify: true,
  sourcemap: true,
});
