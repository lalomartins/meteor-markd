# meteor-marked

> A Meteor package that reads .md (Markdown) files and dynamically converts them into meteor/handlebars templates.

## Install

``` bash
meteor add markd
```

## Usage

Once installed you can add .md files to your Meteor application and they will be converted to templates.

The standard default template that is generated when you create a Meteor app can be used as an example.

Move the template code to a new file, delete the `<template>` tags and name it hello.md (the filename is used to generate the template name).

``` code
<!-- filename hello.md -->

  ## Hello World!
  {{greeting}}
  <input type="button" value="Click" />
```

## Markdown syntax support

Markd uses the great Markdown parser and compiler [marked by Christopher Jeffrey](https://github.com/chjj/marked) and so supports the full set of Markdown syntax as well as the Github feature set defined by [GFM](http://github.github.com/github-flavored-markdown/).
