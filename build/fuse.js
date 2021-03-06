'use strict'

require('./check-versions')()

const path = require('path');

const {
  FuseBox,
  VueComponentPlugin,
  QuantumPlugin,
  HTMLPlugin,
  SassPlugin,
  CSSPlugin,
  CSSResourcePlugin,
  WebIndexPlugin,
  Sparky,
  ConsolidatePlugin,
  BabelPlugin
} = require("fuse-box");

let fuse;
let app;

const DIRS = {
  src: '../src',
  dist: '../dist',
  assets: './assets',
  style: './style',
}


Sparky.task("clean", () => Sparky.src(DIRS.dist).clean("dist/"));
Sparky.task("watch-assets", () => Sparky.watch(`${DIRS.assets}/*.*`, { base: DIRS.src }).dest(DIRS.dist));
Sparky.task("watch-style", () => Sparky.watch(`${DIRS.style}/*.*`, { base: DIRS.src }).dest(DIRS.dist));
Sparky.task("copy-assets", () => Sparky.src(`${DIRS.assets}/*.*`, { base: DIRS.src }).dest(DIRS.dist));
Sparky.task("copy-style", () => Sparky.src(`${DIRS.style}/*.*`, { base: DIRS.src }).dest(DIRS.dist));

Sparky.task("config", () => {
  fuse = FuseBox.init({
    homeDir: DIRS.src,
    output: `${DIRS.dist}/$name.js`,
    sourceMaps: true,
    useTypescriptCompiler: true,
    polyfillNonStandardDefaultUsage: true,
    plugins: [
      VueComponentPlugin({
        template: ConsolidatePlugin({
          engine: 'pug'
        }),
        style: [
          CSSResourcePlugin(),
          CSSPlugin({
            group: 'components.css',
            inject: 'components.css'
          })
        ],
        script: BabelPlugin()
      }),
      CSSPlugin(),
      WebIndexPlugin({
        template: "../src/index.html"
      }),
    ]
  });

  const vendor = fuse.bundle("vendor")
    .instructions("~ main.js");

  app = fuse.bundle("app")
    .instructions("> [main.js]");

})

Sparky.task("serve", () => {
  fuse.dev({
    open: true,
    port: 4545
  });

  app.watch().hmr();
})

Sparky.task("default", ["clean", "watch-assets", "watch-style", "config", "serve"], () => {
  return fuse.run();
});

Sparky.task("dist", ["clean", "copy-assets", "copy-style", "config"], () => {
  return fuse.run();
});
