Package.describe({
  name: 'lalomartins:markd',
  summary: 'Creates js templates of your markdown files.',
  version: '0.1.0',
  git: 'https://github.com/lalomartins/meteor-markd.git'
});

// Original author: Darren Pearce (https://github.com/limeyd)
// https://github.com/limeyd/meteor-markd.git
// adapted for Meteor 1.0 by Lalo Martins

Package._transitional_registerBuildPlugin({
  name: "compileMarkdownFiles",
  use: ['spacebars-compiler'],
  sources: [
    'plugin/compile-md.js'
  ],
  npmDependencies: {"marked": "0.2.9"}
});
