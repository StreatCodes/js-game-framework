import {
  rollup
} from 'rollup';
import nodeResolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';

rollup({
  entry: 'src/test-game.js',
  plugins: [
    nodeResolve({
      module: true, // Default: true
      jsnext: true, // Default: false
      main: true, // Default: true
      browser: true, // Default: false
      preferBuiltins: false // Default: true
    })
  ]
}).then(bundle => bundle.write({
  dest: 'js/bundle.js',
  format: 'iife'
}));

// alongside rollup-plugin-commonjs, for using non-ES6 third party modules
import commonjs from 'rollup-plugin-commonjs';

rollup({
  entry: 'src/test-game.js',
  plugins: [
    nodeResolve({
      jsnext: true,
      main: true
    }),
    commonjs()
  ]
}).then(bundle => bundle.write({
  dest: 'js/bundle.js',
  moduleName: 'MyModule',
  format: 'iife'
})).catch(err => console.log(err.stack));

export default {
  entry: 'src/test-game.js',
  plugins: [babel()],
  targets: [{
      dest: 'js/bundle.js',
      format: 'es'
    }
  ]
};
