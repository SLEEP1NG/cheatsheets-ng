webpackJsonp([0xf321feb5cdc3],{1018:function(e,t){e.exports={data:{markdownRemark:{htmlAst:{type:"root",children:[{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Commands"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"$ tmux\n  -u        # UTF8 mode\n  -S ~/.tmux.socket\n\n$ tmux attach\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Help"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"C-b ?\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Scrolling"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"C-b [       # Enter scroll mode then press up and down\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Copy/paste"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"C-b [       # 1. Enter scroll mode first.\nSpace       # 2. Start selecting and move around.\nEnter       # 3. Press enter to copy.\nC-b ]       # Paste\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Panes"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"C-b v       # vert\nC-b n       # horiz\nC-b hkjl    # navigation\nC-b HJKL    # resize\nC-b o       # next window\nC-b x       # close pane\n\nC-b { or }  # move windows around\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Windows"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"C-b c       # New window\nC-b 1       # Go to window 1\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Detach/attach"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"C-b d       # Detach\nC-b ( )     # Switch through sessions\n$ tmux attach\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Niceties"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"C-b t    # Time\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Status formats"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"setw -g window-status-format `#[fg=8,bg=default]#I`\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"See "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"message-command-style"}]},{type:"text",value:" in the man page."}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Attribute/colors"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"| "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"#[fg=1]"}]},{type:"text",value:" | standard color |\n| "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"#[fg=yellow]"}]},{type:"text",value:" | yellow |\n| "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"#[bold]"}]},{type:"text",value:" | bold |\n| "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"#[fg=colour240]"}]},{type:"text",value:" | 256 color |\n| "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"#[fg=default]"}]},{type:"text",value:" | default |\n| "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"#[fg=1,bg=2]"}]},{type:"text",value:" | combinations |\n| "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"#[default]"}]},{type:"text",value:" | reset |"}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Colors"}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"black"}]},{type:"text",value:" "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"red"}]},{type:"text",value:" "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"green"}]},{type:"text",value:" "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"yellow"}]},{type:"text",value:" "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"blue"}]},{type:"text",value:" "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"magenta"}]},{type:"text",value:" "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"cyan"}]},{type:"text",value:" "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"white"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"brightred"}]},{type:"text",value:" (and so on)"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"colour0"}]},{type:"text",value:" ... "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"colour255"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"#333"}]},{type:"text",value:" (rgb hex)"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Attributes"}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"bold"}]},{type:"text",value:" "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"underscore"}]},{type:"text",value:" "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"blink"}]},{type:"text",value:" "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"noreverse"}]},{type:"text",value:" "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"hidden"}]},{type:"text",value:" "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"dim"}]},{type:"text",value:" "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"italics"}]}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Variables"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"| "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"#(date)"}]},{type:"text",value:" | shell command |\n| "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"#I"}]},{type:"text",value:" | window index |\n| "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"#S"}]},{type:"text",value:" | session name |\n| "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"#W"}]},{type:"text",value:" | window name |\n| "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"#F"}]},{type:"text",value:" | window flags |\n| "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"#H"}]},{type:"text",value:" | Hostname |\n| "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"#h"}]},{type:"text",value:" | Hostname, short |\n| "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"#D"}]},{type:"text",value:" | pane id |\n| "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"#P"}]},{type:"text",value:" | pane index |\n| "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"#T"}]},{type:"text",value:" | pane title |"}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Options"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"set -g status-justify [left|centre|right]\nset -g status-left '...'\n\nsetw -g window-status-style\nsetw -g window-status-activity-style\nsetw -g window-status-bell-style\nsetw -g window-status-content-style\nsetw -g window-status-current-style\nsetw -g window-status-last-style\n\nsetw -g window-status-format\nsetw -g window-status-current-format\n\nsetw -g window-status-separator\n"}]}]}],data:{quirksMode:!1}},frontmatter:{title:"tmux",category:null,intro:null}},relatedPages:{edges:[{node:{id:"SitePage /datetime",context:{nodePath:"/datetime",category:"",title:"Date & time formats"}}},{node:{id:"SitePage /strftime",context:{nodePath:"/strftime",category:"",title:"strftime format"}}},{node:{id:"SitePage /go",context:{nodePath:"/go",category:"",title:"Go"}}},{node:{id:"SitePage /homebrew",context:{nodePath:"/homebrew",category:"",title:"Homebrew"}}},{node:{id:"SitePage /semver",context:{nodePath:"/semver",category:"",title:"Semver"}}},{node:{id:"SitePage /bootstrap",context:{nodePath:"/bootstrap",category:"",title:"Bootstrap"}}}]},topPages:{edges:[{node:{id:"SitePage /elixir",context:{nodePath:"/elixir",category:"Elixir",title:"Elixir"}}},{node:{id:"SitePage /es6",context:{nodePath:"/es6",category:"JavaScript",title:"ES2015+"}}},{node:{id:"SitePage /react",context:{nodePath:"/react",category:"React",title:"React.js"}}},{node:{id:"SitePage /vim",context:{nodePath:"/vim",category:"Vim",title:"Vim"}}},{node:{id:"SitePage /vimscript",context:{nodePath:"/vimscript",category:"Vim",title:"Vim scripting"}}},{node:{id:"SitePage /capybara",context:{nodePath:"/capybara",category:"Ruby libraries",title:"Capybara"}}}]},allPages:{totalCount:363}},pathContext:{node_id:"/home/rsc/Dev/@devhints/cheatsheets-ng/sheets/tmux.md absPath of file >>> MarkdownRemark",nodePath:"/tmux",nodeType:"sheet",title:"tmux",category:"",weight:0,updated:null}}}});
//# sourceMappingURL=path---tmux-9a8320842151cf7dd83d.js.map