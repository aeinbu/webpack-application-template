# Framework neutral template for building apps with Webpack and Babel

## Features

- Builds clientside web applications with webpack and babel.
- Includes a cachebreaker hash to the output files.
- Treeshaking with webpack.
- Splits libraries from application code to improve build times. (Can be removed.)
- A webserver with hot reload when developing your app.
- Also builds seperate css, fonts and other files.
  (Either from seperate entry points for css, or from `require` statements in JavaScript code.)

## Goals
- This template will act as a starting point for creating web apps.
- The project template should include a development web server.
- The template should contain as few devDependencies as possible,
  so that it will be easy to evolve the build configuration as different packages are updated or made obsolete.

## How to use this template project

1. Copy the files and structure of this project.
   (If you use `git clone` you would probably want to remove the `.git` directory before initializing your new repo.)
2. Modify `package.json` to reflect the correct names.
3. Run `npm update` to load dependencies.
4. Create your app in the `source` folder.
5. Run `npm start` to start the dev-server. Navigate to (localhost:8080)[http://localhost:8080]
6. Build by running `npm run build` or `npm run build-release`

### ...or

1. Create a folder: `source`.
2. Copy five files: `webpack.*.config.js` (=3 files), and `.gitignore` and `package.json`.
3. Modify `package.json`.

## Adding loaders or plugins

- Loaders and plugins that are common to all build configuration should be added to `webpack.common.config.js`
- `webpack.serve.config.js` and `webpack.build.config.js` contain additional configuration that is specific for the different builds.

### Adding support for Typescript

Run on the commandline:
```bash
npm install -D typescript awesome-typescript-loader source-map-loader
```

Add the following object to `rules` in webpack.common.config:

```javascript
{
  test: /\.ts$/,
  use: "awesome-typescript-loader"
}
```

- Optionally, change the entry point (in webpack.common.config) to "index.ts"
- Optionally, add `.ts` extention to the `resolve` element so that typescript files can be required without the `.ts` extension:

```javascript
resolve: {
  extensions: ['.js', '.ts']
}
```

### Adding support for React JSX

Run on the commandline:

```bash
npm install -D babel-preset-react
npm install -S react react-dom
```

Add `"react"` to the presets array in the `.babelrc` file. If you haven't modified  `.babelrc` yet, it will look like this:

```javascript
{
	"presets": [["env", {"modules": false}], "react"],
	"plugins": ["transform-object-rest-spread", "angularjs-annotate"]
}
```

- Optionally, change the entry point (in webpack.common.config) to "index.jsx"
- Optionally, add `.jsx` extention to the `resolve` element so that jsx files can be required without the `.jsx` extension:

```javascript
resolve: {
  extensions: ['.js', '.jsx']
}
```

### Adding support for Angular 1.x

Adding the `ng-annotate-loader` saves you from doubly declaring your angular dependency injections.

Run on the commandline:

```bash
npm install -D babel-plugin-angularjs-annotate
npm install -S angular
```

Add `"angularjs-annotate"` to the plugins array in the `.babelrc` file. If you haven't modified  `.babelrc` yet, it will look like this:

```javascript
{
	"presets": [["env", {"modules": false}]],
	"plugins": ["transform-object-rest-spread", "angularjs-annotate"]
}
```
