webpackJsonp([0xa27ba76926f0],{915:function(e,t){e.exports={data:{markdownRemark:{htmlAst:{type:"root",children:[{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Streams"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"process.stdout.write('...');\nprocess.stderr.write('...');\n\nfunction stdin(fn) {\n  var data = '';\n\n  process.stdin.setEncoding('utf8');\n  process.stdin.on('readable', function() {\n    var chunk = process.stdin.read();\n    if (chunk !== null) data += chunk;\n  });\n\n  process.stdin.on('end', function() {\n    fn(null, data);\n  });\n}\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"stuff"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"process.argv; //=> ['node', 'file.js', 'one', 'two']\nprocess.env; //=> {TERM: 'screen-256color', SHELL: '/bin/bash', ...}\n\nprocess.exit();\nprocess.exit(1);\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Directories"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"process.cwd(); //=> \"/tmp\"\nprocess.chdir('dir');\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"References"}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"a",properties:{href:"http://nodejs.org/api/process.html"},children:[{type:"text",value:"http://nodejs.org/api/process.html"}]}]},{type:"text",value:"\n"}]}],data:{quirksMode:!1}},frontmatter:{title:"process",category:"Node.js",intro:null}},relatedPages:{edges:[{node:{id:"SitePage /package.json",context:{nodePath:"/package.json",category:"Node.js",title:"package.json"}}},{node:{id:"SitePage /nodejs-stream",context:{nodePath:"/nodejs-stream",category:"Node.js",title:"Node.js streams"}}},{node:{id:"SitePage /nodejs-assert",context:{nodePath:"/nodejs-assert",category:"Node.js",title:"assert"}}},{node:{id:"SitePage /nodejs-fs",context:{nodePath:"/nodejs-fs",category:"Node.js",title:"fs"}}},{node:{id:"SitePage /nodejs-path",context:{nodePath:"/nodejs-path",category:"Node.js",title:"path"}}},{node:{id:"SitePage /nodejs",context:{nodePath:"/nodejs",category:"Node.js",title:"Node.js API"}}}]},topPages:{edges:[{node:{id:"SitePage /elixir",context:{nodePath:"/elixir",category:"Elixir",title:"Elixir"}}},{node:{id:"SitePage /es6",context:{nodePath:"/es6",category:"JavaScript",title:"ES2015+"}}},{node:{id:"SitePage /react",context:{nodePath:"/react",category:"React",title:"React.js"}}},{node:{id:"SitePage /vim",context:{nodePath:"/vim",category:"Vim",title:"Vim"}}},{node:{id:"SitePage /vimscript",context:{nodePath:"/vimscript",category:"Vim",title:"Vim scripting"}}},{node:{id:"SitePage /capybara",context:{nodePath:"/capybara",category:"Ruby libraries",title:"Capybara"}}}]},allPages:{totalCount:363}},pathContext:{node_id:"/home/rsc/Dev/@devhints/cheatsheets-ng/sheets/nodejs-process.md absPath of file >>> MarkdownRemark",nodePath:"/nodejs-process",nodeType:"sheet",title:"process",category:"Node.js",weight:0,updated:null}}}});
//# sourceMappingURL=path---nodejs-process-41cf7b868bef47b02400.js.map