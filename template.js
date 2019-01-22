const template = (() => {
  const options = {
    css: "scss",
    privateRep: true,
    cssModules: false
  };

  const getJson = (componentName, privateRep = options.privateRep) => `{
  "name": "${componentName}",
  "version": "0.0.0",
  "private": ${privateRep},
  "main": "./${componentName}.js"
}`;

  const getReact = (componentName, style, cssModules = options.cssModules) => `import React, { Component } from 'react';
${cssModules ? "import styles from './" + componentName + "." + style + "';" : ""}

export default class ${componentName} extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div ${cssModules ? "className={" + "styles." + componentName + "}" : "" }>
        {/* Your code here */}
      </div>
    );
  }
}
`;

  const getStyle = (componentName, style = "scss") => {
    if (style === "sass") {
      return `.${componentName}
  /* Your stylesheet here */`;
    }
    return `.${componentName} {
  /* Your stylesheet here */
}`;
  };

  return {
    getStyle,
    getReact,
    getJson
  };
})();

module.exports = template;
