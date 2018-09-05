webpackJsonp([57475021372104],{912:function(e,t){e.exports={data:{markdownRemark:{htmlAst:{type:"root",children:[{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Functions"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"/**\n * This is a function.\n *\n * @param {string} n - A string param\n * @return {string} A good string\n *\n * @example\n *\n *     foo('hello')\n */\n\nfunction foo(n) { return n }\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"See: "},{type:"element",tagName:"a",properties:{href:"http://usejsdoc.org/index.html"},children:[{type:"text",value:"http://usejsdoc.org/index.html"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Types"}]},{type:"text",value:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"},{type:"element",tagName:"table",properties:{},children:[{type:"element",tagName:"thead",properties:{},children:[{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"th",properties:{},children:[{type:"text",value:"Type"}]},{type:"element",tagName:"th",properties:{},children:[{type:"text",value:"Description"}]}]}]},{type:"element",tagName:"tbody",properties:{},children:[{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"@param {string=} n"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"Optional"}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"@param {string} [n]"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"Optional"}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"@param {(string|number)} n"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"Multiple types"}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"@param {*} n"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"Any type"}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"@param {...string} n"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"Repeatable arguments"}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:'@param {string} [n="hi"]'}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"Optional with default"}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"@param {string[]} n"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"Array of strings"}]}]}]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"See: "},{type:"element",tagName:"a",properties:{href:"http://usejsdoc.org/tags-type.html"},children:[{type:"text",value:"http://usejsdoc.org/tags-type.html"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Variables"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"/**\n * @type {number}\n */\nvar FOO = 1\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"/**\n * @const {number}\n */\nconst FOO = 1\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Typedef"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"/**\n * A song\n * @typedef {Object} Song\n * @property {string} title - The title\n * @property {string} artist - The artist\n * @property {number} year - The year\n */\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"/**\n * Plays a song\n * @param {Song} song - The {@link Song} to be played\n */\n\nfunction play (song) {\n}\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"See: "},{type:"element",tagName:"a",properties:{href:"http://usejsdoc.org/tags-typedef.html"},children:[{type:"text",value:"http://usejsdoc.org/tags-typedef.html"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Other keywords"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"/**\n * @throws {FooException}\n * @private\n * @deprecated\n * @see\n *\n * @function\n * @class\n */\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Renaming"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"/*\n * @alias Foo.bar\n * @name Foo.bar\n */\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Prefer "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"alias"}]},{type:"text",value:" over "},{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"name"}]},{type:"text",value:". See: "},{type:"element",tagName:"a",properties:{href:"http://usejsdoc.org/tags-alias.html"},children:[{type:"text",value:"http://usejsdoc.org/tags-alias.html"}]}]}],data:{quirksMode:!1}},frontmatter:{title:"Jsdoc",category:"JavaScript",intro:null}},relatedPages:{edges:[{node:{id:"SitePage /es6",context:{nodePath:"/es6",category:"JavaScript",title:"ES2015+"}}},{node:{id:"SitePage /js-date",context:{nodePath:"/js-date",category:"JavaScript",title:"JavaScript Date"}}},{node:{id:"SitePage /js-fetch",context:{nodePath:"/js-fetch",category:"JavaScript",title:"fetch()"}}},{node:{id:"SitePage /js-speech",context:{nodePath:"/js-speech",category:"JavaScript",title:"JavaScript speech synthesis"}}},{node:{id:"SitePage /npm",context:{nodePath:"/npm",category:"JavaScript",title:"npm"}}},{node:{id:"SitePage /web-workers",context:{nodePath:"/web-workers",category:"JavaScript",title:"Web workers"}}}]},topPages:{edges:[{node:{id:"SitePage /elixir",context:{nodePath:"/elixir",category:"Elixir",title:"Elixir"}}},{node:{id:"SitePage /es6",context:{nodePath:"/es6",category:"JavaScript",title:"ES2015+"}}},{node:{id:"SitePage /react",context:{nodePath:"/react",category:"React",title:"React.js"}}},{node:{id:"SitePage /vim",context:{nodePath:"/vim",category:"Vim",title:"Vim"}}},{node:{id:"SitePage /vimscript",context:{nodePath:"/vimscript",category:"Vim",title:"Vim scripting"}}},{node:{id:"SitePage /capybara",context:{nodePath:"/capybara",category:"Ruby libraries",title:"Capybara"}}}]},allPages:{totalCount:366}},pathContext:{node_id:"/home/rsc/Dev/@devhints/cheatsheets-ng/sheets/jsdoc.md absPath of file >>> MarkdownRemark",nodePath:"/jsdoc",nodeType:"sheet",title:"Jsdoc",category:"JavaScript",weight:-1,updated:"2017-10-29T00:00:00.000Z"}}}});
//# sourceMappingURL=path---jsdoc-ab5ad1528d32623aeb5e.js.map