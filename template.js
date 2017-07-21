var template = (() => {
  var options = {
    css: "scss",
    privateRep: true,
    cssModules: false
  };

  var getJson = (componentName, privateRep) => {
    privateRep = privateRep || options.privateRep;
    return `{
  "name": "${componentName}",
  "version": "0.0.0",
  "private": ${privateRep},
  "main": "./${componentName}.js"
}`;
  };

  var getReact = (componentName, style, cssModules) => {
    cssModules = cssModules || options.cssModules;
    return `import React, { Component } from 'react';
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
  };

  var getStyle = (componentName,style) => {
    style = style || "scss";

    if (style === "sass") {
      return `.${componentName}
  /* Your stylesheet here */`;
    } else {
      return `.${componentName} {
  /* Your stylesheet here */
}`;
    }
  };

  return {
    getStyle: getStyle,
    getReact: getReact,
    getJson: getJson
  };
})();

module.exports = template;