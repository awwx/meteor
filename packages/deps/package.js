// XXX rename package?

Package.describe({
  summary: "Deprecated package, please use tracker instead.",
  version: '1.0.1'
});

Package.on_use(function (api) {
  api.use('tracker');
  api.export('Deps');
  api.add_files('tracker.js');
});
