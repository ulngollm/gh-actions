const {src, dest} = require('gulp');
const pug = require('gulp-pug');

exports.compile = function () {
  return src("*.pug")
    .pipe(
      pug({
        pretty: true,
      })
    )
    .pipe(dest("docs/"));
};
