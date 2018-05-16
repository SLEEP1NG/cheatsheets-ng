webpackJsonp([0xe4b7d9d6f679],{731:function(e,t){e.exports={data:{markdownRemark:{htmlAst:{type:"root",children:[{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"browserify input.js\n  -o output.js\n  -t coffeeify\n  -t [ coffeeify --extension coffee ]\n\n  -u react (--exclude: omit a file)\n  -x react (--external: reference in another bundle)\n  -i react (--ignore: stub a file)\n  -s Myapp (--standalone: generate a UMD bundle)\n  --debug\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Programmatic usage"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"browserify = require('browserify')\nbrowserify()\n  .add('main.js')\n  .bundle()\n  .transform(coffeeify)\n  .transform({extensions: '.coffee'}, coffeeify)\n  .pipe(process.stdout)\n\nbrowserify({})\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Tools"}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"watchify (recompiles on demand)"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"beefy (http server)"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"debowerify"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"es6ify (es6 to es5)"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Transforms"}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"coffeeify"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"ractify"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"reactify"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"brfs"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"cssify"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"a",properties:{href:"https://github.com/substack/node-browserify/wiki/list-of-transforms"},children:[{type:"text",value:"https://github.com/substack/node-browserify/wiki/list-of-transforms"}]}]},{type:"text",value:"\n"}]}],data:{quirksMode:!1}},frontmatter:{title:"Browserify",category:"JavaScript libraries",intro:null}},relatedPages:{edges:[{node:{id:"SitePage /chai",context:{nodePath:"/chai",category:"JavaScript libraries",title:"Chai.js"}}},{node:{id:"SitePage /flow",context:{nodePath:"/flow",category:"JavaScript libraries",title:"Flow"}}},{node:{id:"SitePage /jest",context:{nodePath:"/jest",category:"JavaScript libraries",title:"Jest"}}},{node:{id:"SitePage /lodash",context:{nodePath:"/lodash",category:"JavaScript libraries",title:"Lodash"}}},{node:{id:"SitePage /pug",context:{nodePath:"/pug",category:"JavaScript libraries",title:"Pug"}}},{node:{id:"SitePage /yarn",context:{nodePath:"/yarn",category:"JavaScript libraries",title:"Yarn"}}}]},topPages:{edges:[{node:{id:"SitePage /elixir",context:{nodePath:"/elixir",category:"Elixir",title:"Elixir"}}},{node:{id:"SitePage /es6",context:{nodePath:"/es6",category:"JavaScript",title:"ES2015+"}}},{node:{id:"SitePage /react",context:{nodePath:"/react",category:"React",title:"React.js"}}},{node:{id:"SitePage /vim",context:{nodePath:"/vim",category:"Vim",title:"Vim"}}},{node:{id:"SitePage /vimscript",context:{nodePath:"/vimscript",category:"Vim",title:"Vim scripting"}}},{node:{id:"SitePage /capybara",context:{nodePath:"/capybara",category:"Ruby libraries",title:"Capybara"}}}]},allPages:{totalCount:363}},pathContext:{node_id:"/home/rsc/Dev/@devhints/cheatsheets-ng/sheets/browserify.md absPath of file >>> MarkdownRemark",nodePath:"/browserify",nodeType:"sheet",title:"Browserify",category:"JavaScript libraries",weight:0,updated:null}}}});
//# sourceMappingURL=path---browserify-9b9ee836d7db290a5246.js.map