webpackJsonp([0xdc5b01b434fb],{824:function(e,t){e.exports={data:{markdownRemark:{htmlAst:{type:"root",children:[{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Pageview"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"// Analytics.js\nga('create', 'UA-XXXX-Y', 'auto');\nga('send', 'pageview');\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Track events"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"// ga.js\n// [..., category, action, label, value (int), noninteraction (bool)]\n_gaq.push(['_trackEvent', 'Videos', 'Play', 'Birthday video', true])\n_gaq.push(['_trackEvent', 'Projects', 'Donate', 'Project name'])\n_gaq.push(['_trackEvent', 'Accounts', 'Login'])\n\n// Analytics.js\n//       ,        ,  category,  action,  label,         value (int)\nga('send', 'event', 'button',   'click', 'nav buttons', 4);\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Variables"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"// [..., index, name, value, scope (optional)]\n_gaq.push(['_setCustomVar', 1, 'Logged in', 'Yes', 2]);\n\n// Scope = 1 (visitor), 2 (session), 3 (page, default)\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"a",properties:{href:"https://developers.google.com/analytics/devguides/collection/gajs/gaTrackingCustomVariables"},children:[{type:"text",value:"https://developers.google.com/analytics/devguides/collection/gajs/gaTrackingCustomVariables"}]},{type:"text",value:"\n"},{type:"element",tagName:"a",properties:{href:"https://developers.google.com/analytics/devguides/collection/gajs/eventTrackerGuide"},children:[{type:"text",value:"https://developers.google.com/analytics/devguides/collection/gajs/eventTrackerGuide"}]}]}],data:{quirksMode:!1}},frontmatter:{title:"Google Analytics",category:null,intro:null}},relatedPages:{edges:[{node:{id:"SitePage /datetime",context:{nodePath:"/datetime",category:"",title:"Date & time formats"}}},{node:{id:"SitePage /strftime",context:{nodePath:"/strftime",category:"",title:"strftime format"}}},{node:{id:"SitePage /go",context:{nodePath:"/go",category:"",title:"Go"}}},{node:{id:"SitePage /homebrew",context:{nodePath:"/homebrew",category:"",title:"Homebrew"}}},{node:{id:"SitePage /semver",context:{nodePath:"/semver",category:"",title:"Semver"}}},{node:{id:"SitePage /bootstrap",context:{nodePath:"/bootstrap",category:"",title:"Bootstrap"}}}]},topPages:{edges:[{node:{id:"SitePage /elixir",context:{nodePath:"/elixir",category:"Elixir",title:"Elixir"}}},{node:{id:"SitePage /es6",context:{nodePath:"/es6",category:"JavaScript",title:"ES2015+"}}},{node:{id:"SitePage /react",context:{nodePath:"/react",category:"React",title:"React.js"}}},{node:{id:"SitePage /vim",context:{nodePath:"/vim",category:"Vim",title:"Vim"}}},{node:{id:"SitePage /vimscript",context:{nodePath:"/vimscript",category:"Vim",title:"Vim scripting"}}},{node:{id:"SitePage /capybara",context:{nodePath:"/capybara",category:"Ruby libraries",title:"Capybara"}}}]},allPages:{totalCount:364}},pathContext:{node_id:"/home/rsc/Dev/@devhints/cheatsheets-ng/sheets/google_analytics.md absPath of file >>> MarkdownRemark",nodePath:"/google_analytics",nodeType:"sheet",title:"Google Analytics",category:"",weight:0,updated:null}}}});
//# sourceMappingURL=path---google-analytics-fb84f289de0d18e0cf9d.js.map