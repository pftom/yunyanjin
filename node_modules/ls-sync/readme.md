## ls-sync

Lists the absolute path of all files in `dir` synchronously.

### Install

    npm i ls-sync --save

### Usage

```
var ls = require('ls-sync');

console.log(ls('.'));
console.log(ls('..'));
console.log(ls('/Users/nswbmw'));
```

### License

MIT