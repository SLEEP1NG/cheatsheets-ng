webpackJsonp([0xb12fb5ff0483],{820:function(e,t){e.exports={data:{markdownRemark:{htmlAst:{type:"root",children:[{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Revision ranges"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-bash"]},children:[{type:"text",value:"git log master             # branch\ngit log origin/master      # branch, remote\ngit log v1.0.0             # tag\n\ngit log master develop\n\ngit log v2.0..master       # reachable from *master* but not *v2.0*\ngit log v2.0...master      # reachable from *master* and *v2.0*, but not both\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"See "},{type:"element",tagName:"a",properties:{href:"./git-revisions"},children:[{type:"text",value:"gitrevisions"}]},{type:"text",value:"."}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Basic filters"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-bash"]},children:[{type:"text",value:"-n, --max-count=2\n    --skip=2\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-bash"]},children:[{type:"text",value:'    --since="1 week ago"\n    --until="yesterday"\n'}]}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-bash"]},children:[{type:"text",value:'    --author="Rico"\n    --committer="Rico"\n'}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Search"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-bash"]},children:[{type:"text",value:'    --grep="Merge pull request"   # in commit messages\n    -S"console.log"               # in code\n    -G"foo.*"                     # in code (regex)\n'}]}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-bash"]},children:[{type:"text",value:"    --invert-grep\n    --all-match                   # AND in multi --grep\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Limiting"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-bash"]},children:[{type:"text",value:"    --merges\n    --no-merges\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-bash"]},children:[{type:"text",value:"    --first-parent          # no stuff from merged branches\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-bash"]},children:[{type:"text",value:'    --branches="feature/*"\n    --tags="v*"\n    --remotes="origin"\n'}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Simplification"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-bash"]},children:[{type:"text",value:"git log -- app/file.rb          # only file\n    --simplify-by-decoration    # tags and branches\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Ordering"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-bash"]},children:[{type:"text",value:'    --date-order\n    --author-date-order\n    --topo-order              # "smart" ordering\n    --reverse\n'}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Formatting"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-bash"]},children:[{type:"text",value:"    --abbrev-commit\n    --oneline\n    --graph\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Custom formats"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-bash"]},children:[{type:"text",value:'    --pretty="format:%H"\n'}]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"See: "},{type:"element",tagName:"a",properties:{href:"./git-log-format"},children:[{type:"text",value:"Git log format cheatsheet"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Also see"}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"a",properties:{href:"./git-log-format"},children:[{type:"text",value:"Git log format cheatsheet"}]}]},{type:"text",value:"\n"}]}],data:{quirksMode:!1}},frontmatter:{title:"git log",category:"Git",intro:null}},relatedPages:{edges:[{node:{id:"SitePage /tig",context:{nodePath:"/tig",category:"Git",title:"Tig"}}},{node:{id:"SitePage /git-log-format",context:{nodePath:"/git-log-format",category:"Git",title:"Git log format string"}}},{node:{id:"SitePage /git-branch",context:{nodePath:"/git-branch",category:"Git",title:"Git branches"}}},{node:{id:"SitePage /git-extras",context:{nodePath:"/git-extras",category:"Git",title:"Git extras"}}},{node:{id:"SitePage /git-revisions",context:{nodePath:"/git-revisions",category:"Git",title:"Git revisions"}}},{node:{id:"SitePage /git-tricks",context:{nodePath:"/git-tricks",category:"Git",title:"Git tricks"}}}]},topPages:{edges:[{node:{id:"SitePage /elixir",context:{nodePath:"/elixir",category:"Elixir",title:"Elixir"}}},{node:{id:"SitePage /es6",context:{nodePath:"/es6",category:"JavaScript",title:"ES2015+"}}},{node:{id:"SitePage /react",context:{nodePath:"/react",category:"React",title:"React.js"}}},{node:{id:"SitePage /vim",context:{nodePath:"/vim",category:"Vim",title:"Vim"}}},{node:{id:"SitePage /vimscript",context:{nodePath:"/vimscript",category:"Vim",title:"Vim scripting"}}},{node:{id:"SitePage /capybara",context:{nodePath:"/capybara",category:"Ruby libraries",title:"Capybara"}}}]},allPages:{totalCount:363}},pathContext:{node_id:"/home/rsc/Dev/@devhints/cheatsheets-ng/sheets/git-log.md absPath of file >>> MarkdownRemark",nodePath:"/git-log",nodeType:"sheet",title:"git log",category:"Git",weight:0,updated:null}}}});
//# sourceMappingURL=path---git-log-182c17896dde9ec6668f.js.map