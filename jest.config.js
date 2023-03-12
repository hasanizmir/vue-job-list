module.exports = {
  preset: "@vue/cli-plugin-unit-jest",
  transform: {
    [`^(axios).+\\.js$`]: "babel-jest",
  },
  transformIgnorePatterns: [`node_modules/(?!(axios))`],
};
