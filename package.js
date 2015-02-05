Package.describe({
  name: 'rogrog:iron-router-helpers',
  version: '0.3.3',
  summary: 'An iron-router helpers for quickly adding classnames to your active navigation elements.',
  git: 'https://github.com/marekrogala/iron-router-helpers-for-Meteor',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.3.1');
  api.use('templating', 'client');
  api.use('iron:router@1.0.7', 'client');
  api.addFiles('iron-router-helpers.js', 'client');
});
