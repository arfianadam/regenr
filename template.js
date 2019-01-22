const template = (() => {
  const options = {
    css: "scss",
    cssModules: false
  };

  const getIndex = (componentName) => `import ${componentName} from './${componentName}';

export default ${componentName};
`;

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
    getIndex
  };
})();

module.exports = template;
