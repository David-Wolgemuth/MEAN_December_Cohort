
var git = require("simple-git")(".");

git.log([{ "--diff-filter": "A" }, "./Angular/Controlling_Users/AbbeyCharles" ], function (err, log) {

    if (err) { console.log(err); }

    console.log(log);

});
