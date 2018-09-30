# [Nord palette][nord] shortcut

<a href="https://www.npmjs.com/package/nord"><img src="https://img.shields.io/npm/v/nord.svg?style=flat-square"/></a>

I love the color scheme and use it in various situations. Unfortunately
it usually involves opening in the browser a visual + the
css/sass sources to get the actual hex code.

This package integrates this workflow in the terminal.

`npm install -g palette-cli && palette --help`


### Usage

```bash
palette ls nord
```

<p align="center"> 
  <img src="./screenshot.png" alt="Output" height="500" width=500"">
</p>

```bash
# copy hex code to clipboard
palette cp nord8

# read more online about the color palette
open $(palette doc nord)
```

### TODO

- [ ] [Write it in Typescript](https://github.com/Microsoft/TypeScript-Node-Starter)
- [x] Copy hex code to clipboard


---

<p align="center">Copyright &copy; 2018-present Xavier Bruhiere</p>

<p align="center"><a href="https://github.com/xav-b/palette/blob/develop/LICENSE"><img src="https://img.shields.io/badge/License-MIT-5E81AC.svg?style=flat-square"/></a> <a href="https://creativecommons.org/licenses/by-sa/4.0"><img src="https://img.shields.io/badge/License-CC_BY--SA_4.0-5E81AC.svg?style=flat-square"/></a></p>


[nord]: https://arcticicestudio.github.io/nord/
