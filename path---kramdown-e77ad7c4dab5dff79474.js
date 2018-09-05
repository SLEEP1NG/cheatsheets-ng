webpackJsonp([62359593221297],{916:function(e,t){e.exports={data:{markdownRemark:{htmlAst:{type:"root",children:[{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Configuration"}]},{type:"text",value:"\n"},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"Options"}]},{type:"text",value:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"},{type:"element",tagName:"table",properties:{},children:[{type:"element",tagName:"thead",properties:{},children:[{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"th",properties:{},children:[{type:"text",value:"Option"}]},{type:"element",tagName:"th",properties:{},children:[{type:"text",value:"Description"}]}]}]},{type:"element",tagName:"tbody",properties:{},children:[{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"parse_block_html"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"process kramdown syntax inside blocks"}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"parse_span_html"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"process kramdown syntax inside inlines"}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"html_to_native"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"convert html elements to native elements"}]}]},{type:"element",tagName:"tr",properties:{},children:[{type:"element",tagName:"td",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"hard_wrap"}]}]},{type:"element",tagName:"td",properties:{},children:[{type:"text",value:"Only for \n"},{type:"element",tagName:"a",properties:{href:"http://kramdown.gettalong.org/parser/gfm.html"},children:[{type:"text",value:"GFM parser"}]}]}]}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"Example"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:'{::options parse_block_html="true" /}\n'}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"For jekyll (gh-pages)"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-yaml"]},children:[{type:"text",value:"# _config.yml\nmarkdown: kramdown\nkramdown:\n  input: GFM\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Footnotes (Kramdown)"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"This is some text.[^1]. Other text.[^footnote].\n\n[^1]: Some *crazy* footnote definition.\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Abbreviations (Kramdown)"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"This is some text not written in HTML but in another language!\n\n*[another language]: It's called Markdown\n*[HTML]: HyperTextMarkupLanguage\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Classes and IDs (Kramdown)"}]},{type:"text",value:"\n"},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"Paragraphs & IDs"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"A simple paragraph with an ID attribute.\n{:#para-one}\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"Attributes"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:'> A blockquote with a title\n{:title="The blockquote title"}\n'}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"List item"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:'* {:.cls} This item has the class "cls"\n'}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"Code fences"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"```\nSome code here\n```\n{:.ruby}\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"Indented code"}]},{type:"text",value:"\n"},{type:"element",tagName:"pre",properties:{},children:[{type:"element",tagName:"code",properties:{},children:[{type:"text",value:"{:.ruby}\n    Some code here\n"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"References"}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"a",properties:{href:"http://kramdown.gettalong.org/syntax.html"},children:[{type:"text",value:"http://kramdown.gettalong.org/syntax.html"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"a",properties:{href:"http://kramdown.gettalong.org/parser/kramdown.html"},children:[{type:"text",value:"http://kramdown.gettalong.org/parser/kramdown.html"}]}]},{type:"text",value:"\n"}]}],data:{quirksMode:!1}},frontmatter:{title:"Kramdown",category:"Markup",intro:null}},relatedPages:{edges:[{node:{id:"SitePage /markdown",context:{nodePath:"/markdown",category:"Markup",title:"Markdown"}}},{node:{id:"SitePage /textile",context:{nodePath:"/textile",category:"Markup",title:"Textile"}}},{node:{id:"SitePage /rdoc",context:{nodePath:"/rdoc",category:"Markup",title:"Rdoc"}}},{node:{id:"SitePage /rst",context:{nodePath:"/rst",category:"Markup",title:"ReStructuredText"}}},{node:{id:"SitePage /tomdoc",context:{nodePath:"/tomdoc",category:"Markup",title:"Tomdoc"}}},{node:{id:"SitePage /yaml",context:{nodePath:"/yaml",category:"Markup",title:"Yaml"}}}]},topPages:{edges:[{node:{id:"SitePage /elixir",context:{nodePath:"/elixir",category:"Elixir",title:"Elixir"}}},{node:{id:"SitePage /es6",context:{nodePath:"/es6",category:"JavaScript",title:"ES2015+"}}},{node:{id:"SitePage /react",context:{nodePath:"/react",category:"React",title:"React.js"}}},{node:{id:"SitePage /vim",context:{nodePath:"/vim",category:"Vim",title:"Vim"}}},{node:{id:"SitePage /vimscript",context:{nodePath:"/vimscript",category:"Vim",title:"Vim scripting"}}},{node:{id:"SitePage /capybara",context:{nodePath:"/capybara",category:"Ruby libraries",title:"Capybara"}}}]},allPages:{totalCount:366}},pathContext:{node_id:"/home/rsc/Dev/@devhints/cheatsheets-ng/sheets/kramdown.md absPath of file >>> MarkdownRemark",nodePath:"/kramdown",nodeType:"sheet",title:"Kramdown",category:"Markup",weight:0,updated:null}}}});
//# sourceMappingURL=path---kramdown-e77ad7c4dab5dff79474.js.map