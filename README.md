# react-bundle-showdown
Browserify vs JSPM vs Rollup vs Webpack

+

Babel vs Bublé vs TypeScript

+

Inferno vs Preact vs React vs React-lite

## Results

| Bundler   | Transpiler| Library       | Bundle Size       |
| --------- | --------- | ------------- | ----------------- |
| browserify| babel     | inferno       |                   |
| browserify| babel     | preact        |                   |
| browserify| babel     | react         |                   |
| browserify| babel     | react-lite    |                   |
| browserify| buble     | inferno       | N/A<sup>1</sup>   |
| browserify| buble     | preact        |                   |
| browserify| buble     | react         |                   |
| browserify| buble     | react-lite    |                   |
| browserify| typescript| inferno       |                   |
| browserify| typescript| preact        |                   |
| browserify| typescript| react         |                   |
| browserify| typescript| react-lite    |                   |
| jspm      | babel     | inferno       |                   |
| jspm      | babel     | preact        |                   |
| jspm      | babel     | react         |                   |
| jspm      | babel     | react-lite    |                   |
| jspm      | buble     | inferno       | N/A<sup>2</sup>   |
| jspm      | buble     | preact        | N/A<sup>2</sup>   |
| jspm      | buble     | react         | N/A<sup>2</sup>   |
| jspm      | buble     | react-lite    | N/A<sup>2</sup>   |
| jspm      | typescript| inferno       |                   |
| jspm      | typescript| preact        |                   |
| jspm      | typescript| react         |                   |
| jspm      | typescript| react-lite    |                   |
| rollup    | babel     | inferno       |                   |
| rollup    | babel     | preact        |                   |
| rollup    | babel     | react         |                   |
| rollup    | babel     | react-lite    |                   |
| rollup    | buble     | inferno       |                   |
| rollup    | buble     | preact        |                   |
| rollup    | buble     | react         |                   |
| rollup    | buble     | react-lite    |                   |
| rollup    | typescript| inferno       |                   |
| rollup    | typescript| preact        |                   |
| rollup    | typescript| react         |                   |
| rollup    | typescript| react-lite    |                   |
| webpack   | babel     | inferno       |                   |
| webpack   | babel     | preact        |                   |
| webpack   | babel     | react         |                   |
| webpack   | babel     | react-lite    |                   |
| webpack   | buble     | inferno       |                   |
| webpack   | buble     | preact        |                   |
| webpack   | buble     | react         |                   |
| webpack   | buble     | react-lite    |                   |
| webpack   | typescript| inferno       |                   |
| webpack   | typescript| preact        |                   |
| webpack   | typescript| react         |                   |
| webpack   | typescript| react-lite    |                   |

N/A<sup>1</sup> - Bublé doesn't support Inferno's JSX.

- https://github.com/infernojs/babel-plugin-inferno/issues/36
- https://github.com/infernojs/inferno/issues/410#issuecomment-250031438


N/A<sup>2</sup> - JSPM doesn't support Bublé.

- https://github.com/jspm/jspm-cli/issues/1721

