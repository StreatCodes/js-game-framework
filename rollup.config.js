import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import globals from "rollup-plugin-node-globals";
import babel from "rollup-plugin-babel";

export default{
  entry: 'src/test-game.js',
  format: 'iife',
  plugins: [
    nodeResolve({
      browser: true,  // Default: false
      preferBuiltins: false  // Default: true

    }),
    commonjs({
      ignoreGlobal: true,
    }),
    globals(),
    babel({
      exclude: "node_modules/**",
      // plugins appears to be ignored. use .babelrc
    })
  ],
  dest: 'js/bundle.js'
};
