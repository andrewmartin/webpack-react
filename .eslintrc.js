module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb'],
  env: {
    browser: true,
    node: true,
  },
  settings: {
    'import/resolver': 'webpack',
  },
};
