# react-bundle-showdown
Browserify vs JSPM vs Rollup vs Webpack vs Webpack2

+

Babel vs Bublé vs TypeScript

+

Inferno vs Preact vs React vs React-lite

## Results

| Bundler   | Transpiler| Library       | Bundle Size       |
| --------- | --------- | ------------- | ----------------- |
| browserify| babel     | inferno       |                   |
| browserify| babel     | inferno-compat|                   |
| browserify| babel     | preact        |                   |
| browserify| babel     | preact-compat |                   |
| browserify| babel     | react         |                   |
| browserify| babel     | react-lite    |                   |
| browserify| buble     | inferno       |                   |
| browserify| buble     | inferno-compat|                   |
| browserify| buble     | preact        |                   |
| browserify| buble     | preact-compat |                   |
| browserify| buble     | react         |                   |
| browserify| buble     | react-lite    |                   |
| browserify| typescript| inferno       |                   |
| browserify| typescript| inferno-compat|                   |
| browserify| typescript| preact        |                   |
| browserify| typescript| preact-compat |                   |
| browserify| typescript| react         |                   |
| browserify| typescript| react-lite    |                   |
| jspm      | babel     | inferno       |                   |
| jspm      | babel     | inferno-compat|                   |
| jspm      | babel     | preact        |                   |
| jspm      | babel     | preact-compat |                   |
| jspm      | babel     | react         |                   |
| jspm      | babel     | react-lite    |                   |
| jspm      | buble     | inferno       | N/A<sup>1</sup>   |
| jspm      | buble     | inferno-compat| N/A<sup>1</sup>   |
| jspm      | buble     | preact        | N/A<sup>1</sup>   |
| jspm      | buble     | preact-compat | N/A<sup>1</sup>   |
| jspm      | buble     | react         | N/A<sup>1</sup>   |
| jspm      | buble     | react-lite    | N/A<sup>1</sup>   |
| jspm      | typescript| inferno       |                   |
| jspm      | typescript| inferno-compat|                   |
| jspm      | typescript| preact        |                   |
| jspm      | typescript| preact-compat |                   |
| jspm      | typescript| react         |                   |
| jspm      | typescript| react-lite    |                   |
| rollup    | babel     | inferno       |                   |
| rollup    | babel     | inferno-compat|                   |
| rollup    | babel     | preact        |                   |
| rollup    | babel     | preact-compat |                   |
| rollup    | babel     | react         |                   |
| rollup    | babel     | react-lite    |                   |
| rollup    | buble     | inferno       |                   |
| rollup    | buble     | inferno-compat|                   |
| rollup    | buble     | preact        |                   |
| rollup    | buble     | preact-compat |                   |
| rollup    | buble     | react         |                   |
| rollup    | buble     | react-lite    |                   |
| rollup    | typescript| inferno       |                   |
| rollup    | typescript| inferno-compat|                   |
| rollup    | typescript| preact        |                   |
| rollup    | typescript| preact-compat |                   |
| rollup    | typescript| react         |                   |
| rollup    | typescript| react-lite    |                   |
| webpack   | babel     | inferno       |                   |
| webpack   | babel     | inferno-compat|                   |
| webpack   | babel     | preact        |                   |
| webpack   | babel     | preact-compat |                   |
| webpack   | babel     | react         |                   |
| webpack   | babel     | react-lite    |                   |
| webpack   | buble     | inferno       |                   |
| webpack   | buble     | inferno-compat|                   |
| webpack   | buble     | preact        |                   |
| webpack   | buble     | preact-compat |                   |
| webpack   | buble     | react         |                   |
| webpack   | buble     | react-lite    |                   |
| webpack   | typescript| inferno       |                   |
| webpack   | typescript| inferno-compat|                   |
| webpack   | typescript| preact        |                   |
| webpack   | typescript| preact-compat |                   |
| webpack   | typescript| react         |                   |
| webpack   | typescript| react-lite    |                   |
| webpack2  | babel     | inferno       |                   |
| webpack2  | babel     | inferno-compat|                   |
| webpack2  | babel     | preact        |                   |
| webpack2  | babel     | preact-compat |                   |
| webpack2  | babel     | react         |                   |
| webpack2  | babel     | react-lite    |                   |
| webpack2  | buble     | inferno       |                   |
| webpack2  | buble     | inferno-compat|                   |
| webpack2  | buble     | preact        |                   |
| webpack2  | buble     | preact-compat |                   |
| webpack2  | buble     | react         |                   |
| webpack2  | buble     | react-lite    |                   |
| webpack2  | typescript| inferno       |                   |
| webpack2  | typescript| inferno-compat|                   |
| webpack2  | typescript| preact        |                   |
| webpack2  | typescript| preact-compat |                   |
| webpack2  | typescript| react         |                   |
| webpack2  | typescript| react-lite    |                   |

N/A<sup>1</sup> - [JSPM doesn't support Bublé](https://github.com/jspm/jspm-cli/issues/1721).
