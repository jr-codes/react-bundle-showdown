# react-bundle-showdown
Browserify vs JSPM vs Rollup vs Webpack

+

Babel vs Bublé vs TypeScript

+

Inferno vs Preact vs React

## Results

| Bundler   | Transpiler| Library       | Bundle Size       |
| --------- | --------- | ------------- | ----------------- |
| browserify| babel     | inferno       |                   |
| browserify| babel     | preact        |                   |
| browserify| babel     | react         |                   |
| browserify| buble     | inferno       | N/A<sup>1</sup>   |
| browserify| buble     | preact        |                   |
| browserify| buble     | react         |                   |
| browserify| typescript| inferno       |                   |
| browserify| typescript| preact        |                   |
| browserify| typescript| react         |                   |
| jspm      | babel     | inferno       |                   |
| jspm      | babel     | preact        |                   |
| jspm      | babel     | react         |                   |
| jspm      | buble     | inferno       | N/A<sup>2</sup>   |
| jspm      | buble     | preact        | N/A<sup>2</sup>   |
| jspm      | buble     | react         | N/A<sup>2</sup>   |
| jspm      | typescript| inferno       |                   |
| jspm      | typescript| preact        |                   |
| jspm      | typescript| react         |                   |
| rollup    | babel     | inferno       |                   |
| rollup    | babel     | preact        |                   |
| rollup    | babel     | react         |                   |
| rollup    | buble     | inferno       |                   |
| rollup    | buble     | preact        |                   |
| rollup    | buble     | react         |                   |
| rollup    | typescript| inferno       |                   |
| rollup    | typescript| preact        |                   |
| rollup    | typescript| react         |                   |
| webpack   | babel     | inferno       |                   |
| webpack   | babel     | preact        |                   |
| webpack   | babel     | react         |                   |
| webpack   | buble     | inferno       |                   |
| webpack   | buble     | preact        |                   |
| webpack   | buble     | react         |                   |
| webpack   | typescript| inferno       |                   |
| webpack   | typescript| preact        |                   |
| webpack   | typescript| react         |                   |

N/A<sup>1</sup> - Bublé doesn't support Inferno's JSX.

- https://github.com/infernojs/babel-plugin-inferno/issues/36
- https://github.com/infernojs/inferno/issues/410#issuecomment-250031438


N/A<sup>2</sup> - JSPM doesn't support Bublé.

- https://github.com/jspm/jspm-cli/issues/1721

