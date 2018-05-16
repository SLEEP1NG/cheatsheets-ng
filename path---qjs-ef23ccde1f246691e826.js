webpackJsonp([69261354573452],{950:function(e,t){e.exports={data:{markdownRemark:{htmlAst:{type:"root",children:[{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Creating promises (Q.promise)"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:'Q.promise (ok, fail) =>\n  asyncFunction ->\n    if error\n      fail new Error("Failure")\n    else\n      ok(data)\n'}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"For arrays"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:'promises = [saveDisk(), saveCloud()]\n\n# When all succeeds, or *at least one* error\nQ.all(promises).done ->\n  alert "Saved"\n\n# Same, but get the values\nQ.all(promises).spread (a, b) ->\n  alert "Result A:" + a\n  alert "Result B:" + b\n\n# When all either succeeds or errors\nQ.allSettled(promises).done -> ...\n'}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Creating promises from Node"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"# Works like .call() or .apply()\n\nQ.nfcall(FS.readFile, 'foo.txt', 'utf-8')\n.then -> ...\n\nQ.nfapply(FS.readFile, ['foo.txt', 'utf-8'])\n.then -> ...\n\nQ.npost(FS, 'readFile', ['foo.txt, 'utf-8'])\n.then -> ...\n\nQ.npost(FS, 'readFile', 'foo.txt, 'utf-8')\n.then -> ...\n\nreadFile = Q.denodeify(FS.readFile)\nreadFile('foo.txt').then -> ...\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Promises to Node async"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"createUser = (next) ->\n  promiseMaker()\n  .nodeify(next)\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Promise sugars"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"# Shortcut for .then(ok, fail, progress)\npromise\n.then (data) ->\n.catch (err) ->\n.progress (percent) ->\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Try"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"  Q.try ->\npromise()"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:'  .catch (e) ->\nconsole.error "Oh well", e'}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Reference"}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"a",properties:{href:"https://github.com/kriskowal/q/wiki/API-Reference"},children:[{type:"text",value:"https://github.com/kriskowal/q/wiki/API-Reference"}]}]},{type:"text",value:"\n"}]}],data:{quirksMode:!1}},frontmatter:{title:"Q.js",category:"JavaScript libraries",intro:null}},relatedPages:{edges:[{node:{id:"SitePage /chai",context:{nodePath:"/chai",category:"JavaScript libraries",title:"Chai.js"}}},{node:{id:"SitePage /flow",context:{nodePath:"/flow",category:"JavaScript libraries",title:"Flow"}}},{node:{id:"SitePage /jest",context:{nodePath:"/jest",category:"JavaScript libraries",title:"Jest"}}},{node:{id:"SitePage /lodash",context:{nodePath:"/lodash",category:"JavaScript libraries",title:"Lodash"}}},{node:{id:"SitePage /pug",context:{nodePath:"/pug",category:"JavaScript libraries",title:"Pug"}}},{node:{id:"SitePage /yarn",context:{nodePath:"/yarn",category:"JavaScript libraries",title:"Yarn"}}}]},topPages:{edges:[{node:{id:"SitePage /elixir",context:{nodePath:"/elixir",category:"Elixir",title:"Elixir"}}},{node:{id:"SitePage /es6",context:{nodePath:"/es6",category:"JavaScript",title:"ES2015+"}}},{node:{id:"SitePage /react",context:{nodePath:"/react",category:"React",title:"React.js"}}},{node:{id:"SitePage /vim",context:{nodePath:"/vim",category:"Vim",title:"Vim"}}},{node:{id:"SitePage /vimscript",context:{nodePath:"/vimscript",category:"Vim",title:"Vim scripting"}}},{node:{id:"SitePage /capybara",context:{nodePath:"/capybara",category:"Ruby libraries",title:"Capybara"}}}]},allPages:{totalCount:363}},pathContext:{node_id:"/home/rsc/Dev/@devhints/cheatsheets-ng/sheets/qjs.md absPath of file >>> MarkdownRemark",nodePath:"/qjs",nodeType:"sheet",title:"Q.js",category:"JavaScript libraries",weight:0,updated:null}}}});
//# sourceMappingURL=path---qjs-ef23ccde1f246691e826.js.map