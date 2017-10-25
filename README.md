
<h1 align="center">proofread-core</h1>
<div align="center">
  <strong>English prose and spellchecker build on nodehun &amp; write-good</strong>
</div>
<br>
<div align="center">
  <a href="https://npmjs.org/package/proofread-core">
    <img src="https://img.shields.io/npm/v/proofread-core.svg?style=flat-square" alt="npm package version" />
  </a>
  <a href="https://npmjs.org/package/proofread-core">
  <img src="https://img.shields.io/npm/dm/proofread-core.svg?style=flat-square" alt="npm downloads" />
  </a>
  <a href="https://github.com/feross/standard">
    <img src="https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square" alt="standard JS linter" />
  </a>
  <a href="https://github.com/prettier/prettier">
    <img src="https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=flat-square" alt="prettier code formatting" />
  </a>
  <a href="https://travis-ci.org/tiaanduplessis/proofread-core">
    <img src="https://img.shields.io/travis/tiaanduplessis/proofread-core.svg?style=flat-square" alt="travis ci build status" />
  </a>
  <a href="https://github.com/tiaanduplessis/proofread-core/blob/master/LICENSE">
    <img src="https://img.shields.io/npm/l/proofread-core.svg?style=flat-square" alt="project license" />
  </a>
  <a href="http://makeapullrequest.com">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" alt="make a pull request" />
  </a>
</div>
<br>
<div align="center">
  <a href="https://github.com/tiaanduplessis/proofread-core/watchers">
    <img src="https://img.shields.io/github/watchers/tiaanduplessis/proofread-core.svg?style=social" alt="Github Watch Badge" />
  </a>
  <a href="https://github.com/tiaanduplessis/proofread-core/stargazers">
    <img src="https://img.shields.io/github/stars/tiaanduplessis/proofread-core.svg?style=social" alt="Github Star Badge" />
  </a>
  <a href="https://twitter.com/intent/tweet?text=Check%20out%20proofread-core!%20https://github.com/tiaanduplessis/proofread-core%20%F0%9F%91%8D">
    <img src="https://img.shields.io/twitter/url/https/github.com/tiaanduplessis/proofread-core.svg?style=social" alt="Tweet" />
  </a>
</div>
<br>
<div align="center">
  Built with ❤︎ by <a href="https://github.com/tiaanduplessis">tiaanduplessis</a> and <a href="https://github.com/tiaanduplessis/proofread-core/contributors">contributors</a>
</div>

<h2>Table of Contents</h2>
<details>
  <summary>Table of Contents</summary>
  <li><a href="#install">Install</a></li>
  <li><a href="#usage">Usage</a></li>
  <li><a href="#contribute">Contribute</a></li>
  <li><a href="#license">License</a></li>
</details>

## Install

[![Greenkeeper badge](https://badges.greenkeeper.io/tiaanduplessis/proofread-core.svg)](https://greenkeeper.io/)

```sh
$ npm install proofread-core
# OR
$ yarn add proofread-core
```

## Usage

```js
const proofRead = require('proofread-core')

proofRead(`
    So the cat was stolen.
    Cuz for reasons.
`)
  .then(console.log)
  .catch(console.error)

//   { suggestions:
//    [ { index: 0, offset: 2, reason: '"So" adds no meaning' },
//      { index: 11,
//        offset: 10,
//        reason: '"was stolen" may be passive voice' } ],
//   typos: [ { word: 'Cuz', suggestions: [Array], positions: [Array] } ] }
```

Optionally specify the dictionary (see [dictionaries](dictionaries) directory for available english dictionaries) to use and any of the available [`write-good`](https://github.com/btford/write-good#checks) options.

```js
proofRead(`
    So the cat was stolen.
    Cuz for reasons.
`, {
  dictionary: 'us',
  passive: false
})
  .then(console.log)
  .catch(console.error)

```

## Contributing

Contributions are welcome!

1. Fork it.
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

Or open up [a issue](https://github.com/tiaanduplessis/proofread-core/issues).

## License

Licensed under the MIT License.
