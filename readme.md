Angular 17 + esbuild + Stencil + ng serve issue

- Run `npm --prefix ./esbuild-test install && npm --prefix ./test-compo install`
- Run `npm --prefix ./test-compo link`
- In `esbuild-test`, run `npm link test-compo`
- In `esbuild-test`, run `npm run start`

The `Failed to fetch dynamically imported module` error should appear in the console

The errors disappears when disabling the cache in angular.json (cli -> cache -> enabled -> false)

Everything seems to be ok when running `ng build` and then hosting the esbuild-test/dist/esbuild-test/browser folder on a server ([http-server](https://www.npmjs.com/package/http-server) for instance)
