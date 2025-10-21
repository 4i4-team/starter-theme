import { terser } from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import external from 'rollup-plugin-peer-deps-external';

const input = 'src/index.ts';

const bundleConfig = {
  input,
  output: [
    {
      dir: 'dist/esm',
      format: 'esm',
      sourcemap: true,
      preserveModules: true,
      preserveModulesRoot: 'src'
    },
    {
      dir: 'dist/cjs',
      format: 'cjs',
      sourcemap: true,
      exports: 'named',
      preserveModules: true,
      preserveModulesRoot: 'src'
    }
  ],
  plugins: [
    external(),
    typescript({ tsconfig: './tsconfig.json' }),
    terser()
  ]
};

const typesConfig = {
  input,
  output: [{ file: 'dist/index.d.ts', format: 'es' }],
  plugins: [dts()]
};

export default [bundleConfig, typesConfig];
