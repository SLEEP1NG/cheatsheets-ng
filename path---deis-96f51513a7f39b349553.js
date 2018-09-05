webpackJsonp([0xb7a60336aa89],{807:function(e,t){e.exports={data:{markdownRemark:{htmlAst:{type:"root",children:[{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Deploy"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"deis create app-name\ngit push deis master\ndeis open\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Deploy dockerfile"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-sh"]},children:[{type:"text",value:"$ deis create app-name\n$ deis pull redis:latest\n  Creating build...  done, v2\n# default process type is `cmd`\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Config"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"deis config:list\ndeis config:set FOO=bar BAZ=foo\ndeis config:unset FOO\ndeis config:pull  # writes to .env\ndeis config:push  # reads from .env\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Managing instances"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"deis logs\ndeis run rake db:migrate\ndeis ps\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Custom domains"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"deis domains:list\ndeis domains:add www.myapp.com\ndeis domains:remove www.myapp.com\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Limits"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-sh"]},children:[{type:"text",value:"deis limits:set web=1G\ndeis limits:set web=1024 --cpu\n# (`web` is a process type)\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Sharing"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"deis perms:create otheruser\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"SSL"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"deis certs:add server.crt server.key\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"See: "},{type:"element",tagName:"a",properties:{href:"http://docs.deis.io/en/latest/using_deis/app-ssl/"},children:[{type:"text",value:"SSL"}]}]}],data:{quirksMode:!1}},frontmatter:{title:"Deis",category:"Devops",intro:null}},relatedPages:{edges:[{node:{id:"SitePage /docker-compose",context:{nodePath:"/docker-compose",category:"Devops",title:"docker-compose"}}},{node:{id:"SitePage /awscli",context:{nodePath:"/awscli",category:"Devops",title:"AWS CLI"}}},{node:{id:"SitePage /chef",context:{nodePath:"/chef",category:"Devops",title:"Chef"}}},{node:{id:"SitePage /docker",context:{nodePath:"/docker",category:"Devops",title:"Docker CLI"}}},{node:{id:"SitePage /dockerfile",context:{nodePath:"/dockerfile",category:"Devops",title:"Dockerfile"}}},{node:{id:"SitePage /ec2",context:{nodePath:"/ec2",category:"Devops",title:"EC2 API tools"}}}]},topPages:{edges:[{node:{id:"SitePage /elixir",context:{nodePath:"/elixir",category:"Elixir",title:"Elixir"}}},{node:{id:"SitePage /es6",context:{nodePath:"/es6",category:"JavaScript",title:"ES2015+"}}},{node:{id:"SitePage /react",context:{nodePath:"/react",category:"React",title:"React.js"}}},{node:{id:"SitePage /vim",context:{nodePath:"/vim",category:"Vim",title:"Vim"}}},{node:{id:"SitePage /vimscript",context:{nodePath:"/vimscript",category:"Vim",title:"Vim scripting"}}},{node:{id:"SitePage /capybara",context:{nodePath:"/capybara",category:"Ruby libraries",title:"Capybara"}}}]},allPages:{totalCount:366}},pathContext:{node_id:"/home/rsc/Dev/@devhints/cheatsheets-ng/sheets/deis.md absPath of file >>> MarkdownRemark",nodePath:"/deis",nodeType:"sheet",title:"Deis",category:"Devops",weight:0,updated:null}}}});
//# sourceMappingURL=path---deis-96f51513a7f39b349553.js.map