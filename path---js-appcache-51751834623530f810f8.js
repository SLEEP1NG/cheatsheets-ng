webpackJsonp([0xae7c8afb9d00],{860:function(e,t){e.exports={data:{markdownRemark:{htmlAst:{type:"element",tagName:"div",properties:{},children:[{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Reference"}]},{type:"comment",value:" {.-one-column} "},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"applicationCache checking"}]},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"if (window.applicationCache) {\n  // \"Naturally\" reload when an update is available\n  var reload = false\n\n  window.applicationCache.addEventListener('updateready', () => {\n    if (window.applicationCache.status === window.applicationCache.UPDATEREADY) {\n      window.applicationCache.swapCache()\n      reload = true\n    }\n  }, false)\n\n  setInterval(() => {\n    try {\n      // There's nothing to update for first-time load, browser freaks out :/\n      window.applicationCache.update()\n    } catch (e) { }\n  }, 1000 * 60 * 60) // Every hour\n}\n"}]}]},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"This is a deprecated HTML feature. See: "},{type:"element",tagName:"a",properties:{href:"https://developer.mozilla.org/en-US/docs/HTML/Using_the_application_cache"},children:[{type:"text",value:"Using the application cache"}]},{type:"text",value:" "},{type:"element",tagName:"em",properties:{},children:[{type:"text",value:"(developer.mozilla.org)"}]}]}]},frontmatter:{title:"applicationCache",category:"JavaScript",intro:null}},relatedPages:{edges:[{node:{id:"SitePage /es6",context:{nodePath:"/es6",category:"JavaScript",title:"ES2015+"}}},{node:{id:"SitePage /js-date",context:{nodePath:"/js-date",category:"JavaScript",title:"JavaScript Date"}}},{node:{id:"SitePage /js-fetch",context:{nodePath:"/js-fetch",category:"JavaScript",title:"fetch()"}}},{node:{id:"SitePage /js-speech",context:{nodePath:"/js-speech",category:"JavaScript",title:"JavaScript speech synthesis"}}},{node:{id:"SitePage /jsdoc",context:{nodePath:"/jsdoc",category:"JavaScript",title:"Jsdoc"}}},{node:{id:"SitePage /npm",context:{nodePath:"/npm",category:"JavaScript",title:"npm"}}}]},topPages:{edges:[{node:{id:"SitePage /elixir",context:{nodePath:"/elixir",category:"Elixir",title:"Elixir"}}},{node:{id:"SitePage /es6",context:{nodePath:"/es6",category:"JavaScript",title:"ES2015+"}}},{node:{id:"SitePage /react",context:{nodePath:"/react",category:"React",title:"React.js"}}},{node:{id:"SitePage /vim",context:{nodePath:"/vim",category:"Vim",title:"Vim"}}},{node:{id:"SitePage /vimscript",context:{nodePath:"/vimscript",category:"Vim",title:"Vim scripting"}}},{node:{id:"SitePage /capybara",context:{nodePath:"/capybara",category:"Ruby libraries",title:"Capybara"}}}]},allPages:{totalCount:364}},pathContext:{node_id:"/home/rsc/Dev/@devhints/cheatsheets-ng/sheets/js-appcache.md absPath of file >>> MarkdownRemark",nodePath:"/js-appcache",nodeType:"sheet",title:"applicationCache",category:"JavaScript",weight:0,updated:null}}}});
//# sourceMappingURL=path---js-appcache-51751834623530f810f8.js.map