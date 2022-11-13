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

## Usage

The `twx()` supports all the conditions as the `clsx` package, see [here](https://github.com/lukeed/clsx#usage).

_Basic usage_

````js
import twx from 'twx-rn';
// or
import { twx } from 'twx-rn';

<div style={twx("text-white mt-1", true && "bg-black")}>Hello Tailwind!</div>
````
  
## Recommended Usage

> This example is in Typescript

### How?

Define type for your react native components

```js
// types.ts

import { ViewProps } from "react-native";

export type ComponentProps<T> = {
  style?: ViewProps["style"];
  children?: React.ReactNode;
  className?: string;
} & T;

export interface Component<T = {}> extends React.FC<ComponentProps<T>> {}
```

Create a HOC

````js
// with-class-name.tsx

import { Component, ComponentProps } from "@appTypes/.";
import twx from "twx-rn";

const withClassName =
  <T,>(C: Component<T>) =>
  (props: ComponentProps<T>) => {
    const { style, className } = props;
    return <C {...props} style={[style, twx(className)]} />;
  };

export default withClassName;
````

Create your component

```js
// HR.tsx

import { Component } from "@appTypes/.";
import { View } from "react-native";
import twx from "twx-rn";
import withClassName from "@hoc/with-class-name";

type Props = {
  // your extra props
}

const HR: Component<Props> = ({ style }) => {
  return <View style={[twx("h-[1px] w-full bg-black"), style]} />;
};

export default withClassName<Props>(HR);
```

Use your component

```js
// App.tsx

<HR className="bg-white" />
// or
<HR style={twx("bg-white")} />
```

### Why?

- Better code readability
- Easier migration from React code
- IDE class name recommendations start working

## Contribution

See a place where you can improve? See a grammatical mistake? Or want to add a entirely new feature?  

All is welcomed, feel free to raise a Pull Request or create and Issue :)
