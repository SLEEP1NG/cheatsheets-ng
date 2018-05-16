webpackJsonp([94670121968592],{1025:function(e,t){e.exports={data:{markdownRemark:{htmlAst:{type:"root",children:[{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Usage"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:'// Use it like so:\n_.str.trim("hey");\n_s.trim("hey");\n\n// Unless you do:\n_.mixin(_.string.exports());\n\n// So you can:\n_.trim("hey");\n_("hey").trim();\n'}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Trimming"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:'_.truncate("Hello world", 4) // => "Hell..."\n_.prune("Hello world", 5)    // => "Hello..."\n\n_.trim(" foo ")              // => "foo"\n_.trim("-foo-", \'-\')         // => "foo"\n_.ltrim\n_.rtrim\n'}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Numbers"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:'_.numberFormat(1000, 2)  // => "1,000.00"\n'}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Caps"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:'_.capitalize("foo bar")       // => "Foo Bar"\n_.humanize("hey-there foo")   // => "Hey there foo"\n_.titleize(\'My name is hi\')   // => "My Name Is Hi"\n\n_.dasherize(\'MozTransform\')   // => "-moz-transform"\n_.underscored(\'MozTransform\') // => "moz_transform"\n_.classify(\'-moz-transform\')  // => "MozTransform"\n_.camelize(\'moz_transform\')   // => "MozTransform"\n\n_.slugify("hey there")        // => "hey-there"\n\n_.swapCase("hELLO")           // => "Hello"\n'}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Checks"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"_.startsWith('image.gif', 'image') // => true\n_.endsWith('image.gif', '.gif')    // => true\n_.isBlank(\" \")                     // => true (also for \"\\n\", \"\")\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"HTML"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:'_.escapeHTML("<div>")\n_.unescapeHTML("&lt;div&gt;")\n_.stripTags("<div>hi</div>")\n'}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Quote"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:'_.quote("hi", \'"\') // => \'"hi"\'\n_.unquote(\'"hi"\')  // => "hi"\n'}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Splits"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:'_.lines("hi\\nthere")     // => ["hi","there"]\n_.words("hi  there you") // => ["hi","there","you"]\n'}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Sprintf"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:'_.sprintf("%.1f", 1.17)\n'}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Pad"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:'_.pad("1", 8)               // => "       1"\n_.pad("1", 8, "0")          // => "00000001"\n_.pad("1", 8, " ", "right") // => "1       "\n_.pad("1", 8, " ", "both")  // => "    1   "\n\n_.lpad(..)  // same as _.pad(.., \'left\')\n_.rpad(..)  // same as _.pad(.., \'right\')\n_.lrpad(..) // same as _.pad(.., \'both\')\n'}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"References"}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"a",properties:{href:"https://github.com/epeli/underscore.string"},children:[{type:"text",value:"https://github.com/epeli/underscore.string"}]}]},{type:"text",value:"\n"}]}],data:{quirksMode:!1}},frontmatter:{title:"Underscore-string",category:"JavaScript libraries",intro:null}},relatedPages:{edges:[{node:{id:"SitePage /chai",context:{nodePath:"/chai",category:"JavaScript libraries",title:"Chai.js"}}},{node:{id:"SitePage /flow",context:{nodePath:"/flow",category:"JavaScript libraries",title:"Flow"}}},{node:{id:"SitePage /jest",context:{nodePath:"/jest",category:"JavaScript libraries",title:"Jest"}}},{node:{id:"SitePage /lodash",context:{nodePath:"/lodash",category:"JavaScript libraries",title:"Lodash"}}},{node:{id:"SitePage /pug",context:{nodePath:"/pug",category:"JavaScript libraries",title:"Pug"}}},{node:{id:"SitePage /yarn",context:{nodePath:"/yarn",category:"JavaScript libraries",title:"Yarn"}}}]},topPages:{edges:[{node:{id:"SitePage /elixir",context:{nodePath:"/elixir",category:"Elixir",title:"Elixir"}}},{node:{id:"SitePage /es6",context:{nodePath:"/es6",category:"JavaScript",title:"ES2015+"}}},{node:{id:"SitePage /react",context:{nodePath:"/react",category:"React",title:"React.js"}}},{node:{id:"SitePage /vim",context:{nodePath:"/vim",category:"Vim",title:"Vim"}}},{node:{id:"SitePage /vimscript",context:{nodePath:"/vimscript",category:"Vim",title:"Vim scripting"}}},{node:{id:"SitePage /capybara",context:{nodePath:"/capybara",category:"Ruby libraries",title:"Capybara"}}}]},allPages:{totalCount:363}},pathContext:{node_id:"/home/rsc/Dev/@devhints/cheatsheets-ng/sheets/underscore-string.md absPath of file >>> MarkdownRemark",nodePath:"/underscore-string",nodeType:"sheet",title:"Underscore-string",category:"JavaScript libraries",weight:0,updated:null}}}});
//# sourceMappingURL=path---underscore-string-68f023b73a55d42c1b15.js.map