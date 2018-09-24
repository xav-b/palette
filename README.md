# [Nord palette][nord] shortcut

I love the color scheme and uses it in various situations. Unfortunately
it usually involves opening in the browser the color screenshort + the
css/sass sources to get the actual hex code.

This package integrates this workflow in your terminal.

`npm install -g palette-cli && palette --help`


**Features**

- Pretty print theme in (somewhat) modern terminals
- copy to clipboard


### Usage

```bash
palette ls nord
```

<p align="center"> 
  <img src="./screenshot.png"  alt="Output" height="42" width="42">
</p>

```bash
# copy hex code to clipboard
palette cp nord8

# read more online about the color palette
open $(palette doc nord)
```

### TODO

- [ ] Write it in Typescript
- [x] Copy hex code to clipboard


[nord]: https://arcticicestudio.github.io/nord/
