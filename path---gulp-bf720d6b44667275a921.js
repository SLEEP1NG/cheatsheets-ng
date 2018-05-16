webpackJsonp([0xca9b1e5fd6a1],{832:function(e,t){e.exports={data:{markdownRemark:{htmlAst:{type:"root",children:[{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"gulp-ruby-sass"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"gulp-autoprefixer"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"gulp-minify-css"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"gulp-jshint"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"gulp-concat"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"gulp-uglify"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"gulp-imagemin"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"gulp-livereload (requires tiny-lr)"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"gulp-clean"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"gulp-cache"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"gulp-notify"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"gulp-header (headers in files)"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"gulp-mocha"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"gulp-stylus"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"gulp-compass"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"gulp-nodemon"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"gulp-size (displays size)"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Example"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"// gulpfile.js\n// Load plugins\nvar gulp = require('gulp'),\n    sass = require('gulp-ruby-sass'),\n    autoprefixer = require('gulp-autoprefixer'),\n    minifycss = require('gulp-minify-css'),\n    jshint = require('gulp-jshint'),\n    uglify = require('gulp-uglify'),\n    imagemin = require('gulp-imagemin'),\n    rename = require('gulp-rename'),\n    clean = require('gulp-clean'),\n    concat = require('gulp-concat'),\n    notify = require('gulp-notify'),\n    cache = require('gulp-cache'),\n    livereload = require('gulp-livereload'),\n    lr = require('tiny-lr'),\n    server = lr();\n\n// Styles\ngulp.task('styles', function() {\n  return gulp.src('src/styles/main.scss')\n    .pipe(sass({ style: 'expanded', }))\n    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))\n    .pipe(gulp.dest('dist/styles'))\n    .pipe(rename({ suffix: '.min' }))\n    .pipe(minifycss())\n    .pipe(livereload(server))\n    .pipe(gulp.dest('dist/styles'))\n    .pipe(notify({ message: 'Styles task complete' }));\n});\n\n// Scripts\ngulp.task('scripts', function() {\n  return gulp.src('src/scripts/**/*.js')\n    .pipe(jshint('.jshintrc'))\n    .pipe(jshint.reporter('default'))\n    .pipe(concat('main.js'))\n    .pipe(gulp.dest('dist/scripts'))\n    .pipe(rename({ suffix: '.min' }))\n    .pipe(uglify())\n    .pipe(livereload(server))\n    .pipe(gulp.dest('dist/scripts'))\n    .pipe(notify({ message: 'Scripts task complete' }));\n});\n\n// Images\ngulp.task('images', function() {\n  return gulp.src('src/images/**/*')\n    .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))\n    .pipe(livereload(server))\n    .pipe(gulp.dest('dist/images'))\n    .pipe(notify({ message: 'Images task complete' }));\n});\n\n// Clean\ngulp.task('clean', function() {\n  return gulp.src(['dist/styles', 'dist/scripts', 'dist/images'], {read: false})\n    .pipe(clean());\n});\n\n// Default task\ngulp.task('default', ['clean'], function() {\n    gulp.start('styles', 'scripts', 'images');\n});\n\n// Watch\ngulp.task('watch', function() {\n\n  // Listen on port 35729\n  server.listen(35729, function (err) {\n    if (err) {\n      return console.log(err)\n    };\n\n    // Watch .scss files\n    gulp.watch('src/styles/**/*.scss', ['styles']);\n\n    // Watch .js files\n    gulp.watch('src/scripts/**/*.js', ['scripts']);\n\n    // Watch image files\n    gulp.watch('src/images/**/*', ['images']);\n\n  });\n\n});\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"References"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"a",properties:{href:"https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md#getting-started"},children:[{type:"text",value:"https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md#getting-started"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Livereload"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"var lr = require('tiny-lr')();\n\nfunction notify (lr, root) {\n  return function (event) {\n    var fname = require('path').relative(root, event.path);\n    lr.changed({ body: { files: [ fname ] }});\n  };\n}\n\ngulp.task('livereload', function () {\n  lr.listen(35729)\n  gulp.watch('public/**/*', notify(lr, __dirname+'/public'));\n});\n\n// Express\napp.use(require('connect-livereload')())\n<!-- livereload --><script>document.write('<script src=\"'+(location.protocol||'http:')+'//'+(location.hostname||'localhost')+':35729/livereload.js?snipver=1\"><\\/scr'+'ipt>')</script>\n"}]}]}],data:{quirksMode:!1}},frontmatter:{title:"Gulp",category:"JavaScript libraries",intro:null}},relatedPages:{edges:[{node:{id:"SitePage /chai",context:{nodePath:"/chai",category:"JavaScript libraries",title:"Chai.js"}}},{node:{id:"SitePage /flow",context:{nodePath:"/flow",category:"JavaScript libraries",title:"Flow"}}},{node:{id:"SitePage /jest",context:{nodePath:"/jest",category:"JavaScript libraries",title:"Jest"}}},{node:{id:"SitePage /lodash",context:{nodePath:"/lodash",category:"JavaScript libraries",title:"Lodash"}}},{node:{id:"SitePage /pug",context:{nodePath:"/pug",category:"JavaScript libraries",title:"Pug"}}},{node:{id:"SitePage /yarn",context:{nodePath:"/yarn",category:"JavaScript libraries",title:"Yarn"}}}]},topPages:{edges:[{node:{id:"SitePage /elixir",context:{nodePath:"/elixir",category:"Elixir",title:"Elixir"}}},{node:{id:"SitePage /es6",context:{nodePath:"/es6",category:"JavaScript",title:"ES2015+"}}},{node:{id:"SitePage /react",context:{nodePath:"/react",category:"React",title:"React.js"}}},{node:{id:"SitePage /vim",context:{nodePath:"/vim",category:"Vim",title:"Vim"}}},{node:{id:"SitePage /vimscript",context:{nodePath:"/vimscript",category:"Vim",title:"Vim scripting"}}},{node:{id:"SitePage /capybara",context:{nodePath:"/capybara",category:"Ruby libraries",title:"Capybara"}}}]},allPages:{totalCount:363}},pathContext:{node_id:"/home/rsc/Dev/@devhints/cheatsheets-ng/sheets/gulp.md absPath of file >>> MarkdownRemark",nodePath:"/gulp",nodeType:"sheet",title:"Gulp",category:"JavaScript libraries",weight:0,updated:null}}}});
//# sourceMappingURL=path---gulp-bf720d6b44667275a921.js.map