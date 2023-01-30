import * as esbuild from 'esbuild';
import { commonConfig } from './esbuild.common.mjs';

let ctx = await esbuild.context({
  ...commonConfig,
  sourcemap: true,
});

await ctx.watch();
