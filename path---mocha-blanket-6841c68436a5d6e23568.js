webpackJsonp([81519160159175],{901:function(e,t){e.exports={data:{markdownRemark:{htmlAst:{type:"element",tagName:"div",properties:{},children:[{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Quickstart guide"}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Install blanket:"}]},{type:"comment",value:" {.-setup} "},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-bash"]},children:[{type:"text",value:"npm i --save-dev blanket\n"}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"In your test helpers, use Blanket before "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"require"}]},{type:"text",value:"ing:"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"if (process.env.COVERAGE) {\n  require('blanket')({\n    pattern: require('path').resolve('./index.js')\n  });\n}\nthing = require('../index');\n"}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Add to "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"package.json"}]},{type:"text",value:":"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-json"]},children:[{type:"text",value:'"scripts": {\n  "coverage": "env COVERAGE=1 mocha -R html-cov > coverage.html && open coverage.html"\n}\n'}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Be sure to ignore it:"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-bash"]},children:[{type:"text",value:'echo "coverage.html" >> .gitignore\n'}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Then run:"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-bash"]},children:[{type:"text",value:"npm run coverage\n"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Travis + coveralls.io support"}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Visit "},{type:"element",tagName:"a",properties:{href:"http://coveralls.io"},children:[{type:"text",value:"coveralls.io"}]},{type:"text",value:" then activate your repo. Then install the appropriate packages:"}]},{type:"comment",value:" {.-setup} "},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-bash"]},children:[{type:"text",value:"npm i --save-dev mocha-lcov-reporter coveralls\n"}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Add this to "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:".travis.yml"}]},{type:"text",value:":"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-yml"]},children:[{type:"text",value:"after_success:\n  - ./node_modules/.bin/mocha -R mocha-lcov-reporter | ./node_modules/coveralls/bin/coveralls.js\n"}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Commit, push, wait for Travis to finish."}]}]},frontmatter:{title:"Mocha blanket",category:"JavaScript libraries",intro:"Use [blanket](https://npmjs.com/package/blanket) for easy coverage reporting for Mocha JavaScript tests.\n"}},relatedPages:{edges:[{node:{id:"SitePage /chai",context:{nodePath:"/chai",category:"JavaScript libraries",title:"Chai.js"}}},{node:{id:"SitePage /flow",context:{nodePath:"/flow",category:"JavaScript libraries",title:"Flow"}}},{node:{id:"SitePage /jest",context:{nodePath:"/jest",category:"JavaScript libraries",title:"Jest"}}},{node:{id:"SitePage /lodash",context:{nodePath:"/lodash",category:"JavaScript libraries",title:"Lodash"}}},{node:{id:"SitePage /pug",context:{nodePath:"/pug",category:"JavaScript libraries",title:"Pug"}}},{node:{id:"SitePage /yarn",context:{nodePath:"/yarn",category:"JavaScript libraries",title:"Yarn"}}}]},topPages:{edges:[{node:{id:"SitePage /elixir",context:{nodePath:"/elixir",category:"Elixir",title:"Elixir"}}},{node:{id:"SitePage /es6",context:{nodePath:"/es6",category:"JavaScript",title:"ES2015+"}}},{node:{id:"SitePage /react",context:{nodePath:"/react",category:"React",title:"React.js"}}},{node:{id:"SitePage /vim",context:{nodePath:"/vim",category:"Vim",title:"Vim"}}},{node:{id:"SitePage /vimscript",context:{nodePath:"/vimscript",category:"Vim",title:"Vim scripting"}}},{node:{id:"SitePage /capybara",context:{nodePath:"/capybara",category:"Ruby libraries",title:"Capybara"}}}]},allPages:{totalCount:363}},pathContext:{node_id:"/home/rsc/Dev/@devhints/cheatsheets-ng/sheets/mocha-blanket.md absPath of file >>> MarkdownRemark",nodePath:"/mocha-blanket",nodeType:"sheet",title:"Mocha blanket",category:"JavaScript libraries",weight:0,updated:null}}}});
//# sourceMappingURL=path---mocha-blanket-6841c68436a5d6e23568.js.map