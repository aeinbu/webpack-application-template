# Template for creating a CommonJS library

## Features

- Builds clientside web applications with webpack and babel.
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
2. Create your app in the `source` folder.
3. Modify `package.json` to reflect the correct names.
4. Run `npm start` to start the dev-server. Navigate to (localhost:8080)[http://localhost:8080]
5. Build by running `npm run build` or `npm run build-release`

### ...or

1. Create two folders: `source`.
2. Copy five files: `webpack.*.config.js` (=3 files), and `.gitignore` and `package.json`.
3. Modify `package.json`.

## Adding loaders or plugins

- Loaders and plugins that are common to all build configuration should be added to `webpack.common.config.js`
- `webpack.serve.config.js` and `webpack.build.config.js` contain additional configuration that is specific for the different builds.

