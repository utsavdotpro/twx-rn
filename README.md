# Twx

A tiny utility for constructing styles object using [tailwind-rn](https://www.npmjs.com/package/tailwind-rn) for your ReactNative projects. It uses the infamous [clsx](https://github.com/lukeed/clsx) package behind the hood for generating className strings conditionally.

## Install

````bash
yarn add twx-rn
# or
npm install twx-rn
````

## Getting Started

The `twx` generates the styles object using the [tailwind-rn](https://www.npmjs.com/package/tailwind-rn) library, so you need to have it installed and configured.

````bash
yarn add tailwind-rn
# or
npm install tailwind-rn
````

````bash
npx setup-tailwind-rn # Generate the config file
````

See full [documentation](https://www.npmjs.com/package/tailwind-rn).

Usage

The `twx()` supports all the conditions as the `clsx` package, see [here](https://github.com/lukeed/clsx#usage).

_Basic usage_

````js
import twx from 'twx-rn';
// or
import { twx } from 'twx-rn';

<div style={tw("text-white mt-1")}>Hello Tailwind!</div>
````
  

## Contribution

See a place where you can improve? See a grammatical mistake? Or want to add a entirely new feature?  

All is welcomed, feel free to raise a Pull Request or create and Issue :)
