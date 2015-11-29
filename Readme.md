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
