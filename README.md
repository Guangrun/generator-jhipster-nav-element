# generator-jhipster-nav-element
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage Status][coveralls-image]][coveralls-url]

# Introduction

This is a [JHipster](http://jhipster.github.io/) module, that is meant to be used in a JHipster application.

This generator scaffolds a new page and creates a corresponding navigation menu item in the your JHipster application.

The following (client-side) artifacts are generated:

##### 1. AngularJS application (assuming your page is called 'about-us'):
 * about-us.controller.js
 * about-us.directive.js
 * about-us.html
 * about-us.service.js
 * about-us.state.js
 * about-us.json (_i18n resource_)
 * about-us.controller.spec.js
 * about-us.directive.spec.js
 * about-us.service.spec.js
 * about-us.state.spec.js
##### 2. Angular application (assuming your page is called 'about-us'):
 * about-us.component.html
 * about-us.component.ts
 * about-us.module.ts
 * about-us.route.ts
 * about-us.[s]css
 * index.ts
 * about-us.json (_i18n resource_)
 * about-us.component.spec.ts

# Prerequisites

As this is a [JHipster](http://jhipster.github.io/) module, we expect you have JHipster and its related tools already installed:

- [Installing JHipster](https://jhipster.github.io/installation.html)

# Installation

To install this module:

```bash
npm install -g generator-jhipster-nav-element
```

To update this module:
```bash
npm update -g generator-jhipster-nav-element
```


# Usage

To run the module on a JHipster generated application:

```bash
yo jhipster-nav-element
```


# License

Apache-2.0 © [Vivek More]


[npm-image]: https://img.shields.io/npm/v/generator-jhipster-nav-element.svg
[npm-url]: https://npmjs.org/package/generator-jhipster-nav-element
[travis-image]: https://travis-ci.org/vivekmore/generator-jhipster-nav-element.svg?branch=master
[travis-url]: https://travis-ci.org/vivekmore/generator-jhipster-nav-element
[daviddm-image]: https://david-dm.org/vivekmore/generator-jhipster-nav-element.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/vivekmore/generator-jhipster-nav-element
[coveralls-image]: https://coveralls.io/repos/github/vivekmore/generator-jhipster-nav-element/badge.svg
[coveralls-url]: https://coveralls.io/github/vivekmore/generator-jhipster-nav-element
