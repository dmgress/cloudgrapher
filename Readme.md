# Cloud Grapher

[![Build Status](https://travis-ci.org/dmgress/cloudgrapher.svg?branch=master)](https://travis-ci.org/dmgress/cloudgrapher)
[![devDependency Status](https://david-dm.org/dmgress/cloudgrapher/dev-status.svg)](https://david-dm.org/dmgress/cloudgrapher#info=devDependencies)

[![codecov.io](https://codecov.io/github/dmgress/cloudgrapher/coverage.svg?branch=master)](https://codecov.io/github/dmgress/cloudgrapher?branch=master)
~
[![Code Climate](https://codeclimate.com/github/dmgress/cloudgrapher/badges/gpa.svg)](https://codeclimate.com/github/dmgress/cloudgrapher)
[![Test Coverage](https://codeclimate.com/github/dmgress/cloudgrapher/badges/coverage.svg)](https://codeclimate.com/github/dmgress/cloudgrapher/coverage)
[![Issue Count](https://codeclimate.com/github/dmgress/cloudgrapher/badges/issue_count.svg)](https://codeclimate.com/github/dmgress/cloudgrapher)
~
[![Codacy Badge](https://api.codacy.com/project/badge/grade/eb248b88c6fc40ae9378082d68e79500)](https://www.codacy.com/app/dmgressmann/cloudgrapher)


Cloud Grapher is a simple one page visualization tool for CloudFormation scripts.

Writing CloudFormation scripts can be a painstaking job and understanding
somebody else's script burns brain cells. Cloud grapher should reduce some of
the pain. Visualizing scripts is better for presentations as well.

Current features:
* basic editing using [CodeMirror](https://codemirror.net/)
* opening a script by dropping it on the editor or using the menu
* saving a script
* showing a graph generated with [cytoscape.js](http://js.cytoscape.org/)
* saving the graph
* loading a template from a remote URL through jsonp.afeld.me

Available at http://dmgress.github.io/cloudgrapher/

## Development

The default action is to do `clean build`. This re-generates all html, javascript,
 images and styles. It is mandatory to use the `build` command before most tasks
 because without it some resources might not exist as expected.

### Running tests

After `build` you can run `test` to verify the code. Use `test-watch` to verify
 code on each save.

 *Note: a build failure will crash the watching of files and you'll need to
  restart the `test-watch` command.*

### Hacking with livereload

Application code can be served locally with a *watch* by running `gulp serve`.
 Any changes will be picked up and any browser will live reload, unless a build
 failure occurs.

### Adding new icons

...

### Releasing a new version

There are two steps to releasing a new version:
1. run a `clean build` to assure all generate resources are in the correct place
1. run a `patch`|`feature`|`release``

Without a `clean build` the release will be botched, not all files might be
 present.

There are three gulp commands available to bump the version number and tag
 the repository with it:

```
gulp patch     # makes v0.1.0 → v0.1.1
gulp feature   # makes v0.1.1 → v0.2.0
gulp release   # makes v0.2.1 → v1.0.0
```

Patches fix bugs, features introduce one or more new features, a release are
 usually backwards-incompatible changes affecting either front or back-end.

Please read http://semver.org/ for extra guidelines when to use which option.

### Deploying a new version

The currently generated files in the `dist`folder are deployed to GitHub pages
 with the `gulp deploy` command.

_**Note:** Running a deploy without a full build will result in a broken deployment_