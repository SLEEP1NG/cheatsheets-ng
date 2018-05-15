webpackJsonp([0xe0bf3bb3bf97],{943:function(e,t){e.exports={data:{markdownRemark:{htmlAst:{type:"root",children:[{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Based on the "},{type:"element",tagName:"a",properties:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise"},children:[{type:"text",value:"Promise API reference"}]},{type:"text",value:" (mozilla.org).\n{:.brief-intro.center}"}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Creating promises"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"new Promise(function (ok, err) {\n  doStuff(function () {\n    if (success) { ok(); }\n    else { err(); }\n  });\n})\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Consuming promises"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"promise\n  .then(okFn, errFn)\n  .catch(errFn)\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Multiple promises"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"var promises = [\n  promise1(), promise2(), ...\n]\n\n// succeeds when all succeed\nPromise.all(promises)\n  .then(function (results) {\n  });\n\n// succeeds when one finishes first\nPromise.race(promises)\n  .then(function (result) {\n  });\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Converting other promises"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:'return Promise.resolve("result");\nreturn Promise.resolve(promise);\nreturn Promise.resolve(thenable);\n\nreturn Promise.reject("reason");\n\nPromise.resolve($.get(\'http://google.com\'))\n.then(...)\n'}]}]}],data:{quirksMode:!1}},frontmatter:{title:"Promises",category:"JavaScript",intro:null}},relatedPages:{edges:[{node:{id:"SitePage /es6",context:{nodePath:"/es6",category:"JavaScript",title:"ES2015+"}}},{node:{id:"SitePage /js-date",context:{nodePath:"/js-date",category:"JavaScript",title:"JavaScript Date"}}},{node:{id:"SitePage /js-fetch",context:{nodePath:"/js-fetch",category:"JavaScript",title:"fetch()"}}},{node:{id:"SitePage /js-speech",context:{nodePath:"/js-speech",category:"JavaScript",title:"JavaScript speech synthesis"}}},{node:{id:"SitePage /jsdoc",context:{nodePath:"/jsdoc",category:"JavaScript",title:"Jsdoc"}}},{node:{id:"SitePage /npm",context:{nodePath:"/npm",category:"JavaScript",title:"npm"}}}]},topPages:{edges:[{node:{id:"SitePage /elixir",context:{nodePath:"/elixir",category:"Elixir",title:"Elixir"}}},{node:{id:"SitePage /es6",context:{nodePath:"/es6",category:"JavaScript",title:"ES2015+"}}},{node:{id:"SitePage /react",context:{nodePath:"/react",category:"React",title:"React.js"}}},{node:{id:"SitePage /vim",context:{nodePath:"/vim",category:"Vim",title:"Vim"}}},{node:{id:"SitePage /vimscript",context:{nodePath:"/vimscript",category:"Vim",title:"Vim scripting"}}},{node:{id:"SitePage /capybara",context:{nodePath:"/capybara",category:"Ruby libraries",title:"Capybara"}}}]},allPages:{totalCount:364}},pathContext:{node_id:"/home/rsc/Dev/@devhints/cheatsheets-ng/sheets/promise.md absPath of file >>> MarkdownRemark",nodePath:"/promise",nodeType:"sheet",title:"Promises",category:"JavaScript",weight:0,updated:null}}}});
//# sourceMappingURL=path---promise-07d553d42c2ab61bc22a.js.map