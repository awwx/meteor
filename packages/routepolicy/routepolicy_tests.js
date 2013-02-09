Tinytest.add("routepolicy", function (test) {
  policy = new Meteor.__RoutePolicy();

  policy.declare('/sockjs/', 'network');
  policy.declare('/posts/', 'app');
  policy.declare('/about', 'app');

  test.equal(policy.classify('/'), null);
  test.equal(policy.classify('/foo'), null);
  test.equal(policy.classify('/sockjs'), null);

  test.equal(policy.classify('/sockjs/'), 'network');
  test.equal(policy.classify('/sockjs/foo'), 'network');

  test.equal(policy.classify('/posts/'), 'app');
  test.equal(policy.classify('/posts/1234'), 'app');

  test.equal(policy.urlPrefixesFor('network'), ['/sockjs/']);
  test.equal(policy.urlPrefixesFor('app'), ['/about', '/posts/']);
});
