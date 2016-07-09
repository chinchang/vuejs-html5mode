POC to make HTML5 mode (SPA without hashbang) work on github pages without any server-side configuration.

This uses a trick I read on [Coderwall](https://coderwall.com/p/kfomwa/angularjs-html5mode-on-github-pages) which makes the `404.html` same as `index.html` and hence on every invalid page request, server responds with contents of `index.html` - as it should after server-side configuration for a SPA.

## [DEMO]()