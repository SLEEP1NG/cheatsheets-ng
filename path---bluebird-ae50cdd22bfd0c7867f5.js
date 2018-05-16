webpackJsonp([0xc6d5fdfff10e],{726:function(e,t){e.exports={data:{markdownRemark:{htmlAst:{type:"element",tagName:"div",properties:{},children:[{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Also see"}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Also see the "},{type:"element",tagName:"a",properties:{href:"promise.html"},children:[{type:"text",value:"promise cheatsheet"}]},{type:"text",value:" and "},{type:"element",tagName:"a",properties:{href:"https://github.com/petkaantonov/bluebird/blob/master/API.md"},children:[{type:"text",value:"Bluebird.js API"}]},{type:"text",value:" (github.com)."}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Example"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"promise\n  .then(okFn, errFn)\n  .spread(okFn, errFn)        // *\n  .catch(errFn)\n  .catch(TypeError, errFn)    // *\n  .finally(fn)                // *\n  .map(function (e) { ··· })  // *\n  .each(function (e) { ··· }) // *\n"}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Those marked with "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"*"}]},{type:"text",value:" are non-standard Promise API that only work with Bluebird promises."}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Multiple return values"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:".then(function () {\n  return [ 'abc', 'def' ]\n})\n.spread(function (abc, def) {\n  ···\n})\n"}]}]},{type:"comment",value:' {data-line="4"} '},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Use "},{type:"element",tagName:"a",properties:{href:"http://bluebirdjs.com/docs/api/promise.spread.html"},children:[{type:"text",value:"Promise.spread"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Multiple promises"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"Promise.join(\n  getPictures(),\n  getMessages(),\n  getTweets(),\n  function (pics, msgs, tweets) {\n    return ···\n  }\n)\n"}]}]},{type:"comment",value:' {data-line="1"} '},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Use "},{type:"element",tagName:"a",properties:{href:"http://bluebirdjs.com/docs/api/promise.join.html"},children:[{type:"text",value:"Promise.join"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Multiple promises (array)"}]},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"a",properties:{href:"http://bluebirdjs.com/docs/api/promise.all.html"},children:[{type:"text",value:"Promise.all"}]},{type:"text",value:"([p]) - expect all to pass"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"a",properties:{href:"http://bluebirdjs.com/docs/api/promise.some.html"},children:[{type:"text",value:"Promise.some"}]},{type:"text",value:"([p], count) - expect "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"count"}]},{type:"text",value:" to pass"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"a",properties:{href:"http://bluebirdjs.com/docs/api/promise.any.html"},children:[{type:"text",value:"Promise.any"}]},{type:"text",value:"([p]) - same as "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"some([p], 1)"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"a",properties:{href:"http://bluebirdjs.com/docs/api/promise.race.html"},children:[{type:"text",value:"Promise.race"}]},{type:"text",value:"([p], count) - use "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:".any"}]},{type:"text",value:" instead"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"a",properties:{href:"http://bluebirdjs.com/docs/api/promise.map.html"},children:[{type:"text",value:"Promise.map"}]},{type:"text",value:"([p], fn, options) - supports concurrency"}]},{type:"text",value:"\n"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"Promise.all([ promise1, promise2 ])\n  .then(results => {\n    results[0]\n    results[1]\n  })\n\n// succeeds if one succeeds first\nPromise.any(promises)\n  .then(results => {\n  })\n"}]}]},{type:"comment",value:' {data-line="1,8"} '},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"Promise.map(urls, url => fetch(url))\n  .then(···)\n"}]}]},{type:"comment",value:' {data-line="1"} '},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Use "},{type:"element",tagName:"a",properties:{href:"http://bluebirdjs.com/docs/api/promise.map.html"},children:[{type:"text",value:"Promise.map"}]},{type:"text",value:' to "promisify" a list of values.'}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Object"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"Promise.props({\n  photos: get('photos'),\n  posts: get('posts')\n})\n.then(res => {\n  res.photos\n  res.posts\n})\n"}]}]},{type:"comment",value:' {data-line="1"} '},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Use "},{type:"element",tagName:"a",properties:{href:"http://bluebirdjs.com/docs/api/promise.props.html"},children:[{type:"text",value:"Promise.props"}]},{type:"text",value:"."}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Chain of promises"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:'function getPhotos() {\n  return Promise.try(() => {\n    if (err) throw new Error("boo")\n    return result\n  })\n}\n\ngetPhotos().then(···)\n'}]}]},{type:"comment",value:' {data-line="2"} '},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Use "},{type:"element",tagName:"a",properties:{href:"http://bluebirdjs.com/docs/api/promise.try.html"},children:[{type:"text",value:"Promise.try"}]},{type:"text",value:"."}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Node-style functions"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"var readFile = Promise.promisify(fs.readFile)\nvar fs = Promise.promisifyAll(require('fs'))\n"}]}]},{type:"comment",value:' {data-line="2"} '},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"See "},{type:"element",tagName:"a",properties:{href:"http://bluebirdjs.com/docs/api/promisification.html"},children:[{type:"text",value:"Promisification"}]},{type:"text",value:"."}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Promise-returning methods"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:'User.login = Promise.method((email, password) => {\n  if (!valid)\n    throw new Error("Email not valid")\n\n  return /* promise */\n})\n'}]}]},{type:"comment",value:' {data-line="1"} '},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"See "},{type:"element",tagName:"a",properties:{href:"http://bluebirdjs.com/docs/api/promise.method.html"},children:[{type:"text",value:"Promise.method"}]},{type:"text",value:"."}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Generators"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"User.login = Promise.coroutine(function* (email, password) {\n  let user = yield User.find({email: email}).fetch()\n  return user\n})\n"}]}]},{type:"comment",value:' {data-line="1"} '},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"See "},{type:"element",tagName:"a",properties:{href:"http://bluebirdjs.com/docs/api/promise.coroutine.html"},children:[{type:"text",value:"Promise.coroutine"}]},{type:"text",value:"."}]},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Reference"}]},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"a",properties:{href:"http://bluebirdjs.com/docs/api-reference.html"},children:[{type:"text",value:"http://bluebirdjs.com/docs/api-reference.html"}]}]}]},frontmatter:{title:"bluebird.js",category:"JavaScript libraries",intro:null}},relatedPages:{edges:[{node:{id:"SitePage /chai",context:{nodePath:"/chai",category:"JavaScript libraries",title:"Chai.js"}}},{node:{id:"SitePage /flow",context:{nodePath:"/flow",category:"JavaScript libraries",title:"Flow"}}},{node:{id:"SitePage /jest",context:{nodePath:"/jest",category:"JavaScript libraries",title:"Jest"}}},{node:{id:"SitePage /lodash",context:{nodePath:"/lodash",category:"JavaScript libraries",title:"Lodash"}}},{node:{id:"SitePage /pug",context:{nodePath:"/pug",category:"JavaScript libraries",title:"Pug"}}},{node:{id:"SitePage /yarn",context:{nodePath:"/yarn",category:"JavaScript libraries",title:"Yarn"}}}]},topPages:{edges:[{node:{id:"SitePage /elixir",context:{nodePath:"/elixir",category:"Elixir",title:"Elixir"}}},{node:{id:"SitePage /es6",context:{nodePath:"/es6",category:"JavaScript",title:"ES2015+"}}},{node:{id:"SitePage /react",context:{nodePath:"/react",category:"React",title:"React.js"}}},{node:{id:"SitePage /vim",context:{nodePath:"/vim",category:"Vim",title:"Vim"}}},{node:{id:"SitePage /vimscript",context:{nodePath:"/vimscript",category:"Vim",title:"Vim scripting"}}},{node:{id:"SitePage /capybara",context:{nodePath:"/capybara",category:"Ruby libraries",title:"Capybara"}}}]},allPages:{totalCount:363}},pathContext:{node_id:"/home/rsc/Dev/@devhints/cheatsheets-ng/sheets/bluebird.md absPath of file >>> MarkdownRemark",nodePath:"/bluebird",nodeType:"sheet",title:"bluebird.js",category:"JavaScript libraries",weight:-1,updated:"2017-09-04T00:00:00.000Z"}}}});
//# sourceMappingURL=path---bluebird-ae50cdd22bfd0c7867f5.js.map