var path = require('path');
var fs = require('fs');

module.exports = function ls(dir, _pending, _result) {
  _pending = _pending ? _pending++ : 1;
  _result = _result || [];

  if (!path.isAbsolute(dir)) {
    dir = path.join(process.cwd(), dir);
  }

  // if error, throw it
  var stat = fs.lstatSync(dir);

  if (stat.isDirectory()) {
    var files = fs.readdirSync(dir);
    files.forEach(function (part) {
      ls(path.join(dir, part), _pending, _result);
    });
    if (--_pending === 0) {
      return _result;
    }
  } else {
    _result.push(dir);
    if (--_pending === 0) {
      return _result;
    }
  }
};