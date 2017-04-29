# Regenr
React Generator

## Summary
Regenr is a command-line interface that helps Generating ReactJs Components.

## Installation
`npm install -g regenr`

## Usage
`regenr <path>/<componentName> [options]` 

Example:
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
.Header{
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