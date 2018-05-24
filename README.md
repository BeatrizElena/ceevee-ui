# ceevee-ui

[![Build Status](https://travis-ci.org/randallmorey/ceevee-ui.svg)](https://travis-ci.org/randallmorey/ceevee-ui)
[![Maintainability](https://api.codeclimate.com/v1/badges/bac14e062306f6fd6659/maintainability)](https://codeclimate.com/github/randallmorey/ceevee-ui/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/bac14e062306f6fd6659/test_coverage)](https://codeclimate.com/github/randallmorey/ceevee-ui/test_coverage)

This README outlines the details of collaborating on this Ember application.
A short introduction of this app could easily go here.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone <repository-url>` this repository
* `cd ceevee-ui`
* `npm install`

## Running / Development

* `npm start`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more
details.  To generate a model and associated unit tests, run this command,
where `model-name` is replace with the name of the model:

* `ember g model model-name`

### Running Tests

* `npm test`
* `ember test --server`

### Linting

* `npm run lint:js`
* `npm run lint:js -- --fix`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

## Contributing

Contributions consistent with the style and quality of existing code are
welcomed.  Be sure to follow the guidelines below.

Check the issues page of this repository for available work.

### Committing

This project follows [a successful git branching model][nvie-git-branching] and
uses [commitizen][commitizen] and
[cz-conventional-changelog][cz-conventional-changelog].  Commitizen helps to
ensure that commit messages remain well-formatted and consistent across
different contributors.

Before committing for the first time, install commitizen:

```
npm install -g commitizen
```

[Watch a helpful video about commitizen][commitizen-video], but follow the
directions here for actual usage within this project.

To start work on a new change, pull the latest `develop` and create
a new _topic branch_ (e.g. `feature-resume-model`, `chore-test-update`,
`bugfix-bad-bug`).  Work should be committed to
[topic branches][nvie-git-branching] only, never directly to mainline branches.
To begin a commit, stage changes as usual:

```
git add .
```

To commit, run the following command (instead of `git commit`) and follow the
directions:

```
npm run commit
```

When committing in this manner, _tests are executed automatically and all tests
must pass before the commit can be finalized_.  If tests fail, please address
the issue(s) and try the commit procedure again.

We recommend making incremental commits at logical stopping points whenever
possible, rather than large monolithic commits at the end of a feature.

### Pull Requests

When a topic branch is ready to merge, submit a pull request from the topic
branch into `develop` via GitHub.  Pull requests are automatically tested in CI
and may only be merged after all checks pass successfully.  At that time,
a core team member may merge the PR into `develop`.

### Issue References

Commit messages and pull requests should
[short link to GitHub issues][issue-autolinking] when referencing information in
the issue; though not every commit or PR related to an issue needs to
reference it.  Commits and PRs that fix or resolve an issue should
[close the issue in the message][issue-closing].


[nvie-git-branching]: http://nvie.com/posts/a-successful-git-branching-model/
[commitizen]: https://www.npmjs.com/package/commitizen
[cz-conventional-changelog]: https://www.npmjs.com/package/cz-conventional-changelog
[commitizen-video]: https://egghead.io/lessons/javascript-how-to-write-a-javascript-library-committing-a-new-feature-with-commitizen
[issue-autolinking]: https://help.github.com/articles/autolinked-references-and-urls/
[issue-closing]: https://help.github.com/articles/closing-issues-using-keywords/
