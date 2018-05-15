webpackJsonp([68175644441696],{1047:function(e,t){e.exports={data:{markdownRemark:{htmlAst:{type:"root",children:[{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Parsing"}]},{type:"text",value:"\n"},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"As local time"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"const date = new Date(2012, 11, 20, 3, 0, 0)\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"As UTC time"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"const date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0))\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"From ISO strings"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"const date = new Date('2018-04-20T12:00:00Z')\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:'Note that JavaScript doesn\'t "store" timezones in a date object. All these date objects, when expressed via '},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:".toString()"}]},{type:"text",value:" or similar, will show the local timezone of the browser, regardless if you parsed UTC dates."}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Formatting dates"}]},{type:"text",value:"\n"},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"Default formatting"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"console.log(new Intl.DateTimeFormat().format(date))\n// → '12/19/2012' (assuming America/Los_Angeles)\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"Custom locale"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"console.log(new Intl.DateTimeFormat('en-GB').format(date))\n// → '19/12/2012' (date-first)\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"Custom timezone"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"console.log(new Intl.DateTimeFormat('en-AU', {\n  timeZone: 'Australia/Sydney'\n}).format(date))\n// → '19/12/2012'\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Custom formats"}]},{type:"text",value:"\n"},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"Time"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"console.log(new Intl.DateTimeFormat('default', {\n  hour: 'numeric',\n  minute: 'numeric',\n  second: 'numeric'\n}).format(date))\n// → '2:00:00 pm'\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"Date"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"console.log(new Intl.DateTimeFormat('en-US', {\n  year: 'numeric',\n  month: 'numeric',\n  day: 'numeric'\n}).format(date))\n// → '12/19/2012'\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"To specify options without a locale, use "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"'default'"}]},{type:"text",value:" as a locale."}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"All options"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"{\n  weekday: 'narrow' | 'short' | 'long',\n  era: 'narrow' | 'short' | 'long',\n  year: 'numeric' | '2-digit',\n  month: 'numeric' | '2-digit' | 'narrow' | 'short' | 'long',\n  day: 'numeric' | '2-digit',\n  hour: 'numeric' | '2-digit',\n  minute: 'numeric' | '2-digit',\n  second: 'numeric' | '2-digit',\n  timeZoneName: 'short' | 'long',\n\n  // Time zone to express it in\n  timeZone: 'Asia/Shanghai',\n  // Force 12-hour or 24-hour\n  hour12: true | false,\n\n  // Rarely-used options\n  hourCycle: 'h11' | 'h12' | 'h23' | 'h24',\n  formatMatcher: 'basic' | 'best fit'\n}\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"References"}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"a",properties:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat"},children:[{type:"text",value:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat"}]}]},{type:"text",value:"\n"}]}],data:{quirksMode:!1}},frontmatter:{title:"Intl.DateTimeFormat",category:"Hidden",intro:"`Intl.DateTimeFormat` is used to format date strings in JavaScript.\n"}},relatedPages:{edges:[{node:{id:"SitePage /absinthe",context:{nodePath:"/absinthe",category:"Hidden",title:"Absinthe"}}},{node:{id:"SitePage /brew",context:{nodePath:"/brew",category:"Hidden",title:"Homebrew"}}},{node:{id:"SitePage /commander-js",context:{nodePath:"/commander-js",category:"Hidden",title:"Commander.js"}}},{node:{id:"SitePage /css-animation",context:{nodePath:"/css-animation",category:"Hidden",title:"CSS animations"}}},{node:{id:"SitePage /css-background",context:{nodePath:"/css-background",category:"Hidden",title:"CSS background"}}},{node:{id:"SitePage /css-font",context:{nodePath:"/css-font",category:"Hidden",title:"CSS font"}}}]},topPages:{edges:[{node:{id:"SitePage /elixir",context:{nodePath:"/elixir",category:"Elixir",title:"Elixir"}}},{node:{id:"SitePage /es6",context:{nodePath:"/es6",category:"JavaScript",title:"ES2015+"}}},{node:{id:"SitePage /react",context:{nodePath:"/react",category:"React",title:"React.js"}}},{node:{id:"SitePage /vim",context:{nodePath:"/vim",category:"Vim",title:"Vim"}}},{node:{id:"SitePage /vimscript",context:{nodePath:"/vimscript",category:"Vim",title:"Vim scripting"}}},{node:{id:"SitePage /capybara",context:{nodePath:"/capybara",category:"Ruby libraries",title:"Capybara"}}}]},allPages:{totalCount:364}},pathContext:{node_id:"/home/rsc/Dev/@devhints/cheatsheets-ng/sheets/wip/intl-datetime.md absPath of file >>> MarkdownRemark",nodePath:"/wip/intl-datetime",nodeType:"sheet",title:"Intl.DateTimeFormat",category:"Hidden",weight:0,updated:null}}}});
//# sourceMappingURL=path---wip-intl-datetime-28e551eb8f22f6a862b1.js.map