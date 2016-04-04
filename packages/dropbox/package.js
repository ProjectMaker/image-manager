Package.describe({
  name: 'tomperso:dropbox',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.use(['underscore','http'], 'server');
  api.use(['iron:router'], ['client','server']);
  api.use(['minimongo', 'mongo-livedata', 'templating'], 'client');

  api.addFiles([
    'dropbox.js'
  ],'server');

  api.addFiles([
    'lib/config.js',
    'lib/router.js',
    'lib/collections/accounts.js'
  ], ['client','server']);

  api.addFiles([
    'client/collections/dropboxConnect.js',
    'client/templates/connect.html',
    'client/templates/connect.js',
    'client/templates/account.html',
    'client/templates/account.js'
  ], 'client');

  api.export('DropBox','server');

});


Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('tomperso:dropbox');
  api.addFiles('dropbox-tests.js');
});
