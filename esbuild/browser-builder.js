// Build and bundle our react client app.
// ESBuild also ships in WASM so you can include `esbuild-wasm` to use it in
// browser which is pretty neat.
// Or you could even allow people to run their own code in the browser you
// could.
require('esbuild').buildSync({
    entryPoints: ['src/client.tsx'],
    bundle: true,
    minify: true,
    outdir: './public/dist',
    target: ['chrome58', 'firefox57', 'safari11', 'edge16'],
    sourcemap: true,
})

// There is also a plugin called `esbuild-register` that allows you to use the
// `-r` option in Node.js to just directly run your typescript files.
// `node -r esbuild-register index.ts` will just work like `ts-node`
//
//      -r, --require module
// Preload the specified module at startup.  Follows `require()`'s module resolution
// rules.  module may be either a path to a file, or a Node.js module name.
