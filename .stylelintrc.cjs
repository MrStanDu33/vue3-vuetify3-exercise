module.exports = {
  ignoreFiles: ['**/*.js', '**/*.md'],
  overrides: [
    {
      files: ['**/*.(scss|css|html|vue)'],
      customSyntax: 'postcss-scss',
    },
    {
      files: ['**/*.(html|vue)'],
      customSyntax: 'postcss-html',
    },
  ],
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-recommended-vue',
  ],
};
