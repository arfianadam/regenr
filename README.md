# Regenr
React Generator

## Summary
Regenr is a command-line interface that helps generating ReactJs components. The built in modular pattern uses webpack's `import` and `export` so make sure your project have the right module bundling configuration. Here are the ones I personally suggest using:
- `babel-loader`
- `sass-loader`, or `css-loader` if you create a component with `--css` option

## Features
- Easy to use
- Fully checked and compatible with `eslint`
- Thus, suitable for today's javascript best practices

## Requirements
- `nodejs`
- `webpack` and the right configuration for the modular pattern

## Installation
- Clone this repo
- Inside the cloned repo, run `npm install -g`
- Now the command `regenr` is available in your system!

## Usage
`regenr <path>/<componentName> [options]` 

## Example:
`regenr src/Components/Header` will provides:

#### Header.js
```javascript
import React, { Component } from 'react';
import styles from './Header.scss';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={styles.Header}>
        {/* Your code here */}
      </div>
    );
  }
}
```

#### Header.scss
```sass
.Header {
    /* Your stylesheet here */
}
```

#### package.json
```json
{
    "name": "Header",
    "version": "0.0.0",
    "private": true,
    "main": "./Header.js"
}
```

## Options
`-c [css preprocessor]` or `--css [css preprocessor]`

Example:
`regenr src/Components/Header -c less`

Will provide .less integration

## Screenshot
![Screenshot](/ss1.png?raw=true "Screenshot")

## License
MIT