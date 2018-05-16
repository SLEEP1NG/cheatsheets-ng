webpackJsonp([0xed4eaf696602],{846:function(e,t){e.exports={data:{markdownRemark:{htmlAst:{type:"element",tagName:"div",properties:{},children:[{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Parameters"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-bash"]},children:[{type:"text",value:'$ http POST http://example.com/posts/3 \\\n    Origin:example.com \\  # :   HTTP headers\n    name="John Doe" \\     # =   string\n    q=="search" \\         # ==  URL parameters (?q=search)\n    age:=29 \\             # :=  for non-strings\n    list:=\'[1,3,4]\' \\     # :=  json\n    file@file.bin \\       # @   attach file\n    token=@token.txt \\    # =@  read from file (text)\n    user:=@user.json      # :=@ read from file (json)\n'}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Forms"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-bash"]},children:[{type:"text",value:'$ http --form POST example.com \\\n    name="John Smith" \\\n    cv=@document.txt\n'}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Options"}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Print options:"}]},{type:"comment",value:" {.-setup} "},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-bash"]},children:[{type:"text",value:"-v, --verbose            # same as --print=HhBb --all\n-h, --headers            # same as --print=h\n-b, --body               # same as --print=b\n    --all                # print intermediate requests\n    --print=HhBb         # H: request headers\n                         # B: request body\n                         # h: response headers\n                         # b: response body\n    --pretty=none        # all | colors | format\n"}]}]},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"Authentication"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-bash"]},children:[{type:"text",value:"    --session NAME\n-a, --auth USER:PASS\n    --auth-type basic\n    --auth-type digest\n"}]}]},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"Session"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-bash"]},children:[{type:"text",value:"    --session NAME       # store auth and cookies\n    --session-read-only NAME\n"}]}]},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"Downloading"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-bash"]},children:[{type:"text",value:"-d, --download           # like wget\n-c, --continue\n-o, --output FILE\n"}]}]},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"Others"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-bash"]},children:[{type:"text",value:"-F, --follow             # follow redirects\n    --max-redirects N    # maximum for --follow\n    --timeout SECONDS\n    --verify no          # skip SSL verification\n    --proxy http:http://foo.bar:3128\n"}]}]},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"References"}]},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"a",properties:{href:"https://github.com/jakubroztocil/httpie"},children:[{type:"text",value:"https://github.com/jakubroztocil/httpie"}]}]},{type:"text",value:"\n"}]}]},frontmatter:{title:"httpie",category:"CLI",intro:"[HTTPie](https://httpie.org/) is a command-line HTTP client.\n"}},relatedPages:{edges:[{node:{id:"SitePage /cron",context:{nodePath:"/cron",category:"CLI",title:"Cron"}}},{node:{id:"SitePage /adb",context:{nodePath:"/adb",category:"CLI",title:"adb (Android Debug Bridge)"}}},{node:{id:"SitePage /composer",context:{nodePath:"/composer",category:"CLI",title:"composer"}}},{node:{id:"SitePage /fish-shell",context:{nodePath:"/fish-shell",category:"CLI",title:"Fish shell"}}},{node:{id:"SitePage /rsync",context:{nodePath:"/rsync",category:"CLI",title:"Rsync"}}},{node:{id:"SitePage /watchexec",context:{nodePath:"/watchexec",category:"CLI",title:"Watchexec"}}}]},topPages:{edges:[{node:{id:"SitePage /elixir",context:{nodePath:"/elixir",category:"Elixir",title:"Elixir"}}},{node:{id:"SitePage /es6",context:{nodePath:"/es6",category:"JavaScript",title:"ES2015+"}}},{node:{id:"SitePage /react",context:{nodePath:"/react",category:"React",title:"React.js"}}},{node:{id:"SitePage /vim",context:{nodePath:"/vim",category:"Vim",title:"Vim"}}},{node:{id:"SitePage /vimscript",context:{nodePath:"/vimscript",category:"Vim",title:"Vim scripting"}}},{node:{id:"SitePage /capybara",context:{nodePath:"/capybara",category:"Ruby libraries",title:"Capybara"}}}]},allPages:{totalCount:363}},pathContext:{node_id:"/home/rsc/Dev/@devhints/cheatsheets-ng/sheets/httpie.md absPath of file >>> MarkdownRemark",nodePath:"/httpie",nodeType:"sheet",title:"httpie",category:"CLI",weight:-3,updated:"2017-09-04T00:00:00.000Z"}}}});
//# sourceMappingURL=path---httpie-28885eddbd48b3518776.js.map