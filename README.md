[![npm (scoped)](https://img.shields.io/npm/v/@xstd/crc1.svg)](https://www.npmjs.com/package/@xstd/crc1)
![npm](https://img.shields.io/npm/dm/@xstd/crc1.svg)
![NPM](https://img.shields.io/npm/l/@xstd/crc1.svg)
![npm type definitions](https://img.shields.io/npm/types/@xstd/crc1.svg)

<picture>
  <source height="64" media="(prefers-color-scheme: dark)" srcset="https://github.com/xstd-js/website/blob/main/assets/logo/png/logo-large-dark.png?raw=true">
  <source height="64" media="(prefers-color-scheme: light)" srcset="https://github.com/xstd-js/website/blob/main/assets/logo/png/logo-large-light.png?raw=true">
  <img height="64" alt="Shows a black logo in light color mode and a white one in dark color mode." src="https://github.com/xstd-js/website/blob/main/assets/logo/png/logo-large-light.png?raw=true">
</picture>

## @xstd/crc1

A simple [crc1](https://en.wikipedia.org/wiki/Cyclic_redundancy_check#Polynomial_representations) function.

## 📦 Installation

```shell
yarn add @xstd/crc1
# or
npm install @xstd/crc1 --save
```

## 📜 Documentation

Computes the `crc1` of a list of `u8`:

```ts
function crc1(values: ArrayLike<number>): number;
```

### Example

```ts
import { crc1 } from '@xstd/crc1';

const crc: number /* u8 */ = crc1([1, 2]);
console.log(crc); // 3
```
