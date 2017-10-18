module.exports = function(config) {
  config.set({
      frameworks: ["mocha", "karma-typescript"],
      files: [
          { pattern: "src/**/*.ts" }, // *.tsx for React Jsx
      ],
      preprocessors: {
          "**/*.ts": ["karma-typescript"], // *.tsx for React Jsx
      },
      reporters: ["progress", "karma-typescript"],
      browsers: ["Chrome"],
      plugins:[
        require('karma-mocha'),
        require('karma-typescript'),
        require('karma-chrome-launcher')
      ]
  });
};
